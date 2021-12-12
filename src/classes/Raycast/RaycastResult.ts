import { Block, Entity } from "mojang-minecraft";
import { Vector3 } from "../Vector3.js";
import RaycastProperties from "./RaycastProperties.js";

export default class RaycastResult {
  private entities: Entity[] = [];
  private block: Block;

  private origin: Vector3;
  private direction: Vector3;

  private pos: Vector3;
  private properties: RaycastProperties;

  hitBlock() {
    return this.block ? true : false;
  }

  hitEntity() {
    return this.entities.length > 0 ? true : false;
  }

  getEntities() {
    return this.entities;
  }

  getFirstEntity() {
    return this.entities[0];
  }

  getBlock() {
    return this.block;
  }

  getOrigin() {
    return this.origin;
  }

  getDirection() {
    return this.direction;
  }

  getCollisionPosition() {
    return this.pos;
  }

  getProperties() {
    return this.properties;
  }

  getDistanceFromEntity(entity: Entity) {
    return Vector3.fromLocation(entity.location).sub(this.origin)
      .magnitude;
  }

  constructor(
    origin: Vector3,
    direction: Vector3,
    properties: RaycastProperties,
    entities: Entity[],
    pos?: Vector3,
    block?: Block
  ) {
    this.origin = origin;
    this.direction = direction;
    this.properties = properties;
    this.entities = entities;
    this.pos = pos;
    this.block = block;
  }
}
