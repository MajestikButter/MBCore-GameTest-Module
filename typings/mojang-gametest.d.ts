declare module "mojang-gametest" {
  import * as mojangminecraft from "mojang-minecraft";
  export class FenceConnectivity {
    /**
    Represents whether this fence block is connected to another fence to the east (x + 1).
    */
    readonly "east": boolean;
    /**
    Represents whether this fence block is connected to another fence to the north (z - 1).
    */
    readonly "north": boolean;
    /**
    Represents whether this fence block is connected to another fence to the south (z + 1).
    */
    readonly "south": boolean;
    /**
    Represents whether this fence block is connected to another fence to the west (x - 1).
    */
    readonly "west": boolean;
  }
  export enum FluidType {
    /**
    Represents water as a type of fluida.
    */
    "water" = 0,
    /**
    Represents lava as a type of fluid.
    */
    "lava" = 1,
    /**
    Represents powder snow as a type of fluid.
    */
    "powderSnow" = 2,
    /**
    Represents a potion as a type of fluid.
    */
    "potion" = 3,
  }
  export class GameTestSequence {
    thenExecute(callback: () => void): GameTestSequence;
    thenExecuteAfter(delayTicks: number, callback: () => void): GameTestSequence;
    thenExecuteFor(tickCount: number, callback: () => void): GameTestSequence;
    thenFail(errorMessage: string): void;
    thenIdle(delayTicks: number): GameTestSequence;
    thenSucceed(): void;
    thenWait(callback: () => void): GameTestSequence;
    thenWaitAfter(delayTicks: number, callback: () => void): GameTestSequence;
  }
  export class RegistrationBuilder {
    batch(batchName: ('night'|'day')): RegistrationBuilder;
    maxAttempts(attemptCount: number): RegistrationBuilder;
    maxTicks(tickCount: number): RegistrationBuilder;
    padding(paddingBlocks: number): RegistrationBuilder;
    required(isRequired: boolean): RegistrationBuilder;
    requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder;
    rotateTest(rotate: boolean): RegistrationBuilder;
    setupTicks(tickCount: number): RegistrationBuilder;
    structureName(structureName: string): RegistrationBuilder;
    tag(tag: string): RegistrationBuilder;
  }
  export class SimulatedPlayer {
    /**
    Rotation of the body in degrees. Range is between -180 and 180 degrees.
    */
    readonly "bodyRotation": number;
    /**
    Dimension that the simulated player is currently within.
    */
    readonly "dimension": mojangminecraft.Dimension;
    /**
    Location of the center of the head component of the player.
    */
    readonly "headLocation": mojangminecraft.Location;
    /**
    Rotation of the head across pitch and yaw angles.
    */
    readonly "headRotation": mojangminecraft.PitchYawRotation;
    /**
    Identifier for the player.
    */
    readonly "id": string;
    /**
    True if the player is currently using a sneaking movement.
    */
    "isSneaking": boolean;
    /**
    Current location of the player.
    */
    readonly "location": mojangminecraft.Location;
    /**
    Name of the player.
    */
    readonly "name": string;
    /**
    Optional name tag of the player.
    */
    "nameTag": string;
    /**
    Manages the selected slot in the player's hotbar.
    */
    "selectedSlot": number;
    /**
    Retrieves or sets an entity that is used as the target of AI-related behaviors, like attacking.
    */
    "target": mojangminecraft.Entity;
    /**
    Current speed of the player across X, Y, and Z dimensions.
    */
    readonly "velocity": mojangminecraft.Vector;
    /**
    Vector of the current view of the player.
    */
    readonly "viewVector": mojangminecraft.Vector;
    addEffect(effectType: mojangminecraft.EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;
    addTag(tag: string): boolean;
    attack(): boolean;
    attackEntity(entity: mojangminecraft.Entity): boolean;
    breakBlock(blockLocation: mojangminecraft.BlockLocation, direction?: number): boolean;
    getBlockFromViewVector(options?: mojangminecraft.BlockRaycastOptions): mojangminecraft.Block;
    getComponent(componentId: string): mojangminecraft.IEntityComponent;
    getComponents(): mojangminecraft.IEntityComponent[];
    getEffect(effectType: mojangminecraft.EffectType): mojangminecraft.Effect;
    getEntitiesFromViewVector(options?: mojangminecraft.EntityRaycastOptions): mojangminecraft.Entity[];
    getItemCooldown(itemCategory: string): number;
    getTags(): string[];
    giveItem(itemStack: mojangminecraft.ItemStack, selectSlot?: boolean): boolean;
    hasComponent(componentId: string): boolean;
    hasTag(tag: string): boolean;
    interact(): boolean;
    interactWithBlock(blockLocation: mojangminecraft.BlockLocation, direction?: number): boolean;
    interactWithEntity(entity: mojangminecraft.Entity): boolean;
    jump(): boolean;
    kill(): void;
    lookAtBlock(blockLocation: mojangminecraft.BlockLocation): void;
    lookAtEntity(entity: mojangminecraft.Entity): void;
    lookAtLocation(location: mojangminecraft.Location): void;
    move(westEast: number, northSouth: number, speed?: number): void;
    moveRelative(leftRight: number, backwardForward: number, speed?: number): void;
    moveToBlock(blockLocation: mojangminecraft.BlockLocation, speed?: number): void;
    moveToLocation(location: mojangminecraft.Location, speed?: number): void;
    navigateToBlock(blockLocation: mojangminecraft.BlockLocation, speed?: number): mojangminecraft.NavigationResult;
    navigateToEntity(entity: mojangminecraft.Entity, speed?: number): mojangminecraft.NavigationResult;
    navigateToLocation(location: mojangminecraft.Location, speed?: number): mojangminecraft.NavigationResult;
    navigateToLocations(locations: mojangminecraft.Location[], speed?: number): void;
    playSound(soundID: string, soundOptions?: mojangminecraft.SoundOptions): void;
    removeTag(tag: string): boolean;
    rotateBody(angleInDegrees: number): void;
    runCommand(commandString: string): any;
    setBodyRotation(angleInDegrees: number): void;
    setGameMode(gameMode: mojangminecraft.GameMode): void;
    setItem(itemStack: mojangminecraft.ItemStack, slot: number, selectSlot?: boolean): boolean;
    setVelocity(velocity: mojangminecraft.Vector): void;
    startItemCooldown(itemCategory: string, tickDuration: number): void;
    stopBreakingBlock(): void;
    stopInteracting(): void;
    stopMoving(): void;
    stopUsingItem(): void;
    teleport(location: mojangminecraft.Location, dimension: mojangminecraft.Dimension, xRotation: number, yRotation: number): void;
    teleportFacing(location: mojangminecraft.Location, dimension: mojangminecraft.Dimension, facingLocation: mojangminecraft.Location): void;
    triggerEvent(eventName: string): void;
    useItem(itemStack: mojangminecraft.ItemStack): boolean;
    useItemInSlot(slot: number): boolean;
    useItemInSlotOnBlock(slot: number, blockLocation: mojangminecraft.BlockLocation, direction?: number, faceLocationX?: number, faceLocationY?: number): boolean;
    useItemOnBlock(itemStack: mojangminecraft.ItemStack, blockLocation: mojangminecraft.BlockLocation, direction?: number, faceLocationX?: number, faceLocationY?: number): boolean;
  }
  export class Tags {
    /**
    Indicates that the tagged test should be a part of all suites.
    */
    static readonly "suiteAll" = "suite:all";
    /**
    Indicates that the tagged test should be a part of an internal (debug) test suite.
    */
    static readonly "suiteDebug" = "suite:debug";
    /**
    Indicates that the tagged test should be a part of the default test suite.
    */
    static readonly "suiteDefault" = "suite:default";
    /**
    Indicates that the tagged test should be a part of a suite of disabled tests.
    */
    static readonly "suiteDisabled" = "suite:disabled";
  }
  export class Test {
    assert(condition: boolean, message: string): void;
    assertBlockPresent(blockType: mojangminecraft.BlockType, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean): void;
    assertBlockState(blockLocation: mojangminecraft.BlockLocation, callback: (arg: mojangminecraft.Block) => boolean): void;
    assertCanReachLocation(mob: mojangminecraft.Entity, blockLocation: mojangminecraft.BlockLocation, canReach?: boolean): void;
    assertContainerContains(itemStack: mojangminecraft.ItemStack, blockLocation: mojangminecraft.BlockLocation): void;
    assertContainerEmpty(blockLocation: mojangminecraft.BlockLocation): void;
    assertEntityHasArmor(entityTypeIdentifier: string, armorSlot: number, armorName: string, armorData: number, blockLocation: mojangminecraft.BlockLocation, hasArmor?: boolean): void;
    assertEntityHasComponent(entityTypeIdentifier: string, componentIdentifier: string, blockLocation: mojangminecraft.BlockLocation, hasComponent?: boolean): void;
    assertEntityInstancePresent(entity: mojangminecraft.Entity, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean): void;
    assertEntityPresent(entityTypeIdentifier: string, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean): void;
    assertEntityPresentInArea(entityTypeIdentifier: string, isPresent?: boolean): void;
    assertEntityState(blockLocation: mojangminecraft.BlockLocation, entityTypeIdentifier: string, callback: (arg: mojangminecraft.Entity) => boolean): void;
    assertEntityTouching(entityTypeIdentifier: string, location: mojangminecraft.Location, isTouching?: boolean): void;
    assertIsWaterlogged(blockLocation: mojangminecraft.BlockLocation, isWaterlogged?: boolean): void;
    assertItemEntityCountIs(itemType: mojangminecraft.ItemType, blockLocation: mojangminecraft.BlockLocation, searchDistance: number, count: number): void;
    assertItemEntityPresent(itemType: mojangminecraft.ItemType, blockLocation: mojangminecraft.BlockLocation, searchDistance: number, isPresent?: boolean): void;
    assertRedstonePower(blockLocation: mojangminecraft.BlockLocation, power: number): void;
    fail(errorMessage: string): void;
    failIf(callback: () => void): void;
    getBlock(blockLocation: mojangminecraft.BlockLocation): mojangminecraft.Block;
    getDimension(): mojangminecraft.Dimension;
    getFenceConnectivity(blockLocation: mojangminecraft.BlockLocation): FenceConnectivity;
    getSculkSpreader(blockLocation: mojangminecraft.BlockLocation): mojangminecraft.SculkSpreader;
    getTestDirection(): mojangminecraft.Direction;
    idle(tickDelay: number): Promise<void>;
    killAllEntities(): void;
    pressButton(blockLocation: mojangminecraft.BlockLocation): void;
    print(text: string): void;
    pullLever(blockLocation: mojangminecraft.BlockLocation): void;
    pulseRedstone(blockLocation: mojangminecraft.BlockLocation, duration: number): void;
    relativeBlockLocation(worldBlockLocation: mojangminecraft.BlockLocation): mojangminecraft.BlockLocation;
    relativeLocation(worldLocation: mojangminecraft.Location): mojangminecraft.Location;
    removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void;
    rotateDirection(direction: mojangminecraft.Direction): mojangminecraft.Direction;
    runAfterDelay(delayTicks: number, callback: () => void): void;
    runAtTickTime(tick: number, callback: () => void): void;
    setBlockPermutation(blockData: mojangminecraft.BlockPermutation, blockLocation: mojangminecraft.BlockLocation): void;
    setBlockType(blockType: mojangminecraft.BlockType, blockLocation: mojangminecraft.BlockLocation): void;
    setFluidContainer(location: mojangminecraft.BlockLocation, type: number): void;
    setTntFuse(entity: mojangminecraft.Entity, fuseLength: number): void;
    spawn(entityTypeIdentifier: string, blockLocation: mojangminecraft.BlockLocation): mojangminecraft.Entity;
    spawnAtLocation(entityTypeIdentifier: string, location: mojangminecraft.Location): mojangminecraft.Entity;
    spawnItem(itemStack: mojangminecraft.ItemStack, location: mojangminecraft.Location): mojangminecraft.Entity;
    spawnSimulatedPlayer(blockLocation: mojangminecraft.BlockLocation, name?: string, gameMode?: mojangminecraft.GameMode): SimulatedPlayer;
    spawnWithoutBehaviors(entityTypeIdentifier: string, blockLocation: mojangminecraft.BlockLocation): mojangminecraft.Entity;
    spawnWithoutBehaviorsAtLocation(entityTypeIdentifier: string, location: mojangminecraft.Location): mojangminecraft.Entity;
    spreadFromFaceTowardDirection(blockLocation: mojangminecraft.BlockLocation, fromFace: mojangminecraft.Direction, direction: mojangminecraft.Direction): void;
    startSequence(): GameTestSequence;
    succeed(): void;
    succeedIf(callback: () => void): void;
    succeedOnTick(tick: number): void;
    succeedOnTickWhen(tick: number, callback: () => void): void;
    succeedWhen(callback: () => void): void;
    succeedWhenBlockPresent(blockType: mojangminecraft.BlockType, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean): void;
    succeedWhenEntityHasComponent(entityTypeIdentifier: string, componentIdentifier: string, blockLocation: mojangminecraft.BlockLocation, hasComponent: boolean): void;
    succeedWhenEntityPresent(entityTypeIdentifier: string, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean): void;
    triggerInternalBlockEvent(blockLocation: mojangminecraft.BlockLocation, event: string, eventParameters?: number[]): void;
    until(callback: () => void): Promise<void>;
    walkTo(mob: mojangminecraft.Entity, blockLocation: mojangminecraft.BlockLocation, speedModifier?: number): void;
    walkToLocation(mob: mojangminecraft.Entity, location: mojangminecraft.Location, speedModifier?: number): void;
    worldBlockLocation(relativeBlockLocation: mojangminecraft.BlockLocation): mojangminecraft.BlockLocation;
    worldLocation(relativeLocation: mojangminecraft.Location): mojangminecraft.Location;
  }

}