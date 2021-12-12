import { Vector3 } from "gametest-maths";
import { Entity, world } from "mojang-minecraft";
import { RaycastProperties } from "./RaycastProperties.js";
import { RaycastResult } from "./RaycastResult.js";

export class Raycast {
  private static entityCast(
    origin: Vector3,
    direction: Vector3,
    opts: RaycastProperties,
    entityFilter?: (entity: Entity) => boolean
  ) {
    return world
      .getDimension("overworld")
      .getEntitiesFromRay(
        origin.add(direction.div(2)).toLocation(),
        direction.toLocation(),
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
    opts: RaycastProperties
  ) {
    let block = world
      .getDimension("overworld")
      .getBlockFromRay(
        origin.add(direction.div(2)).toLocation(),
        direction.toLocation(),
        opts.getOptions().block
      );

    let planes = new Vector3(block.location);
    if (planes.x < origin.x) planes.x++;
    if (planes.y < origin.y) planes.y++;
    if (planes.z < origin.z) planes.z++;

    const intersectTime = Math.max(
      (planes.x - origin.x) / direction.x,
      (planes.y - origin.y) / direction.y,
      (planes.z - origin.z) / direction.z,
    )
    const collisionPoint = origin.add(direction.mul(intersectTime));

    return { collisionPoint, block };
  }

  static cast(
    origin: Vector3,
    direction: Vector3,
    properties: RaycastProperties,
    entityFilter?: (entity: Entity) => boolean
  ) {
    let entResult: Entity[] = [];
    try {
      entResult = this.entityCast(origin, direction, properties, entityFilter);
    } catch { }
    if (entResult.length <= 0 || !properties.stopAfterEntities()) {
      try {
        var { collisionPoint, block } = this.blockCast(
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
      block
    );
  }
}
