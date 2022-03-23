import { Vector3 } from "gametest-maths";
import { Entity, Vector, world } from "mojang-minecraft";
import { RaycastProperties } from "./RaycastProperties.js";
import { RaycastResult } from "./RaycastResult.js";

export class Raycast {
  private static entityCast(
    origin: Vector3,
    direction: Vector3,
    opts: RaycastProperties,
    dimension = world.getDimension('overworld'),
    entityFilter?: (entity: Entity) => boolean
  ) {
    return dimension
      .getEntitiesFromRay(
        origin.add(direction.div(2, new Vector3()), new Vector3()).toLocation(),
        new Vector(direction.x, direction.y, direction.z),
        opts.getOptions().entity
      )
      .filter((e) => {
        if (entityFilter) return entityFilter(e);
        else return true;
      });
  }

  private static blockCast(
    origin: Vector3,
    direction: Vector3,
    opts: RaycastProperties,
    dimension = world.getDimension('overworld'),
  ) {
    let block = dimension
      .getBlockFromRay(
        origin.add(direction.div(2, new Vector3()), new Vector3()).toLocation(),
        new Vector(direction.x, direction.y, direction.z),
        opts.getOptions().block
      );

    const pos = new Vector3(block.location);
    let planes = pos.clone();
    if (planes.x < origin.x) planes.x++;
    if (planes.y < origin.y) planes.y++;
    if (planes.z < origin.z) planes.z++;

    const intersectTime = Math.max(
      Math.abs(direction.x) > 0.25 ? (planes.x - origin.x) / direction.x : -Infinity,
      Math.abs(direction.y) > 0.25 ? (planes.y - origin.y) / direction.y : -Infinity,
      Math.abs(direction.z) > 0.25 ? (planes.z - origin.z) / direction.z : -Infinity,
    )
    const collisionPoint = origin.add(direction.mul(intersectTime, new Vector3()), new Vector3());

    const relPoint = pos.sub(collisionPoint);
    const blockFace = relPoint.y === 0 ? 0 : relPoint.y === -1 ? 1 : relPoint.z === 0 ? 2 : relPoint.z === -1 ? 3 : relPoint.x === 0 ? 4 : relPoint.x === -1 ? 5 : 6;

    return { collisionPoint, block, blockFace };
  }

  static cast(
    origin: Vector3,
    direction: Vector3,
    properties: RaycastProperties,
    dimension = world.getDimension('overworld'),
    entityFilter?: (entity: Entity) => boolean
  ) {
    let entResult: Entity[] = [];
    try {
      entResult = this.entityCast(origin, direction, properties, dimension, entityFilter);
    } catch { }
    if (entResult.length <= 0 || !properties.stopAfterEntities()) {
      try {
        var { collisionPoint, block, blockFace } = this.blockCast(
          origin,
          direction,
          properties
        );
      } catch { }
    }
    return new RaycastResult(
      origin,
      direction,
      properties,
      entResult,
      collisionPoint,
      block,
      blockFace,
    );
  }
}
