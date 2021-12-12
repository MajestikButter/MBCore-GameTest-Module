import { RaycastProperties } from "./RaycastProperties.js";

export class RaycastPropertiesBuilder {
  private liquidCollision = false;
  private passableCollision = false;
  private _maxDistance = 10;
  private _stopAfterEntities = true;

  collideWithLiquids(collide: boolean) {
    this.liquidCollision = collide;
    return this;
  }

  collideWithPassables(collide: boolean) {
    this.passableCollision = collide;
    return this;
  }

  maxDistance(distance: number) {
    this._maxDistance = distance;
    return this;
  }

  stopAfterEntities(stop: boolean) {
    this._stopAfterEntities = stop;
    return this;
  }

  build() {
    let bOpts = {
      includeLiquidBlocks: this.liquidCollision,
      includePassableBlocks: this.passableCollision,
      maxDistance: this._maxDistance,
    };

    let eOpts = {
      maxDistance: this._maxDistance,
    };

    return new RaycastProperties(bOpts, eOpts, this._stopAfterEntities);
  }
}
