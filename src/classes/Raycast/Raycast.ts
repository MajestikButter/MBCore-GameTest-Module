import { Entity, world } from "mojang-minecraft";
import { Vector3 } from "../Vector3.js";
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
    let blockPos = Vector3.fromBlockLocation(block.location);
    let offBlockPos = blockPos.add(new Vector3(0.5, 0.5, 0.5));
    let collisionPoint: Vector3;
    for (let i = 1; i <= 100; i += 0.1) {
      let curr = direction.mul(i).add(origin);
      if (
        curr.isWithinVolume(
          offBlockPos.floor().sub(new Vector3(0.1, 0.1, 0.1)),
          offBlockPos.ceil().add(new Vector3(0.1, 0.1, 0.1))
        )
      ) {
        collisionPoint = curr.sub(direction.div(10));
        break;
      }
    }
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
    } catch {}
    if (entResult.length <= 0 || !properties.stopAfterEntities()) {
      try {
        var { collisionPoint, block } = this.blockCast(
          origin,
          direction,
          properties
        );
      } catch {}
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
