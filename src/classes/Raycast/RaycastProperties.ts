import { BlockRaycastOptions, EntityRaycastOptions } from "mojang-minecraft";
import { RaycastPropertiesBuilder } from "./RaycastPropertiesBuilder.js";

export class RaycastProperties {
  static builder() {
    return new RaycastPropertiesBuilder();
  }

  private bOpts: BlockRaycastOptions;
  private eOpts: EntityRaycastOptions;
  private _stopAfterEntities: boolean;

  collideWithLiquids() {
    return this.bOpts.includeLiquidBlocks;
  }

  collideWithPassables() {
    return this.bOpts.includePassableBlocks;
  }

  stopAfterEntities() {
    return this._stopAfterEntities;
  }

  getMaxDistance() {
    return this.eOpts.maxDistance;
  }

  getOptions() {
    return {
      entity: Object.assign(new EntityRaycastOptions(), this.eOpts),
      block: Object.assign(new BlockRaycastOptions(), this.bOpts),
    };
  }

  constructor(
    bOpts: BlockRaycastOptions,
    eOpts: EntityRaycastOptions,
    stopAfterEntities: boolean
  ) {
    this.bOpts = bOpts;
    this.eOpts = eOpts;
    this._stopAfterEntities = stopAfterEntities;
  }
}
