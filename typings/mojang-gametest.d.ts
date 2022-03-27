declare module "mojang-gametest" {
  import * as mojangminecraft from "mojang-minecraft";
  /**
  Returns information about whether this fence is connected to other fences in several directions.
  */
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
  /**
  Executes a set of steps defined via chained .thenXyz methods, sequentially. This facilitates a 'script' of GameTest setup methods and assertions over time.
  */
  export class GameTestSequence {
    /**
    Runs the given callback as a step within a GameTest sequence. Exceptions thrown within the callback will end sequence execution.
    #### **Parameters**
    - **callback**: () => *void*
    
    Callback function to execute.
    
    #### **Returns** GameTestSequence
    - Returns a GameTestSequence object where additional .thenXyz method steps can be added.
    
    */
    thenExecute(callback: () => void): GameTestSequence;
    /**
    After a delay, runs the given callback as a step within a GameTest sequence. Exceptions thrown within the callback will end sequence execution.
    #### **Parameters**
    - **delayTicks**: *number*
    
    Number of ticks to wait before executing the callback.
    - **callback**: () => *void*
    
    Callback function to execute.
    
    #### **Returns** GameTestSequence
    - Returns a GameTestSequence object where additional .thenXyz method steps can be added.
    
    */
    thenExecuteAfter(delayTicks: number, callback: () => void): GameTestSequence;
    /**
    Runs the given callback every tick for the given number of ticks.
    #### **Parameters**
    - **tickCount**: *number*
    - **callback**: () => *void*
    
    Callback function to execute.
    
    #### **Returns** GameTestSequence
    - Returns a GameTestSequence object where additional .thenXyz method steps can be added.
    
    */
    thenExecuteFor(tickCount: number, callback: () => void): GameTestSequence;
    /**
    Causes the test to fail if this step in the GameTest sequence is reached.
    #### **Parameters**
    - **errorMessage**: *string*
    
    Error message summarizing the failure condition.
    
    */
    thenFail(errorMessage: string): void;
    /**
    Idles the GameTest sequence for the specified delayTicks.
    #### **Parameters**
    - **delayTicks**: *number*
    
    Number of ticks to delay for this step in the GameTest sequence.
    
    #### **Returns** GameTestSequence
    - Returns a GameTestSequence object where additional .thenXyz method steps can be added.
    
    */
    thenIdle(delayTicks: number): GameTestSequence;
    /**
    Marks the GameTest a success if this step is reached in the GameTest sequence.
    */
    thenSucceed(): void;
    /**
    Executes the given callback every tick until it succeeds. Exceptions thrown within the callback will end sequence execution.
    #### **Parameters**
    - **callback**: () => *void*
    
    Testing callback function to execute. Typically, this function will have .assertXyz functions within it.
    
    #### **Returns** GameTestSequence
    - Returns a GameTestSequence object where additional .thenXyz method steps can be added.
    
    */
    thenWait(callback: () => void): GameTestSequence;
    /**
    After a delay from the previous step, executes the given callback every tick until it succeeds. Exceptions thrown within the callback will end sequence execution.
    #### **Parameters**
    - **delayTicks**: *number*
    
    Tick (after the previous step in the GameTest sequence) to run the callback at.
    - **callback**: () => *void*
    
    Testing callback function to execute. Typically, this function will have .assertXyz functions within it.
    
    #### **Returns** GameTestSequence
    - Returns a GameTestSequence object where additional .thenXyz method steps can be added.
    
    */
    thenWaitAfter(delayTicks: number, callback: () => void): GameTestSequence;
  }
  /**
  A utility class to set GameTest parameters for a test. Methods can be chained together to set multiple properties.
  */
  export class RegistrationBuilder {
    /**
    Sets the batch for the test to run in.
    #### **Parameters**
    - **batchName**: `'night'`, `'day'`
    
    Name of the batch for the test.
    
    #### **Returns** RegistrationBuilder
    - RegistrationBuilder object where additional configuration methods can be called.
    
    */
    batch(batchName: ('night'|'day')): RegistrationBuilder;
    /**
    Sets the maximum number of times a test will try to rerun if it fails.
    #### **Parameters**
    - **attemptCount**: *number*
    
    #### **Returns** RegistrationBuilder
    - RegistrationBuilder object where additional configuration methods can be called.
    
    */
    maxAttempts(attemptCount: number): RegistrationBuilder;
    /**
    Sets the maximum number of ticks a test will run for before timing out and failing.
    #### **Parameters**
    - **tickCount**: *number*
    
    #### **Returns** RegistrationBuilder
    - RegistrationBuilder object where additional configuration methods can be called.
    
    */
    maxTicks(tickCount: number): RegistrationBuilder;
    /**
    Size around the GameTest, in blocks, that should be reserved for the test when running multiple tests together.
    #### **Parameters**
    - **paddingBlocks**: *number*
    
    Size, in blocks, around the GameTest where additional GameTests should not be created.
    
    #### **Returns** RegistrationBuilder
    - RegistrationBuilder object where additional configuration methods can be called.
    
    */
    padding(paddingBlocks: number): RegistrationBuilder;
    /**
    Whether this test is required to pass as part of its broader set of tests.
    #### **Parameters**
    - **isRequired**: *boolean*
    
    If set to true, the test must pass in order for the entire run of tests to pass.
    
    #### **Returns** RegistrationBuilder
    - RegistrationBuilder object where additional configuration methods can be called.
    
    */
    required(isRequired: boolean): RegistrationBuilder;
    /**
    Sets the number of successful test runs to be considered successful.
    #### **Parameters**
    - **attemptCount**: *number*
    
    #### **Returns** RegistrationBuilder
    - RegistrationBuilder object where additional configuration methods can be called.
    
    */
    requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder;
    /**
    If true, runs the test in all four rotations when run via /gametest runset.
    #### **Parameters**
    - **rotate**: *boolean*
    
    */
    rotateTest(rotate: boolean): RegistrationBuilder;
    /**
    Sets the number of ticks for a test to wait before executing when the structure is spawned.
    #### **Parameters**
    - **tickCount**: *number*
    
    #### **Returns** RegistrationBuilder
    - RegistrationBuilder object where additional configuration methods can be called.
    
    */
    setupTicks(tickCount: number): RegistrationBuilder;
    /**
    Sets the name of the structure for a test to use. "xyz:bar" will load `/structures/xyz/bar.mcstructure` from the behavior pack stack.
    #### **Parameters**
    - **structureName**: *string*
    
    #### **Returns** RegistrationBuilder
    - RegistrationBuilder object where additional configuration methods can be called.
    
    */
    structureName(structureName: string): RegistrationBuilder;
    /**
    Adds a tag to a test. You can run all tests with a given tag with `/gametest runset <tag>`.
    #### **Parameters**
    - **tag**: *string*
    
    #### **Returns** RegistrationBuilder
    - RegistrationBuilder object where additional configuration methods can be called.
    
    */
    tag(tag: string): RegistrationBuilder;
  }
  /**
  A simulated player can be used within GameTests to represent how a player moves throughout the world and to support testing of how entities and the environment will react to a player. This type derives much of its structure and methods from the [*mojang-minecraft.Player*](../mojang-minecraft/Player.md) type.
  */
  export class SimulatedPlayer extends mojangminecraft.Player {
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
    /**
    Adds an effect, like poison, to the entity.
    #### **Parameters**
    - **effectType**: *mojang-minecraft.EffectType*
    
    Type of effect to add to the entity.
    - **duration**: *number*
    
    Amount of time, in seconds, for the effect to apply.
    - **amplifier**?: *number* = `0`
    
    Optional amplification of the effect to apply.
    - **showParticles**?: *boolean* = `true`
    
    */
    addEffect(effectType: mojangminecraft.EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;
    /**
    Adds a specified tag to a simulated player.
    #### **Parameters**
    - **tag**: *string*
    
    Content of the tag to add.
    
    */
    addTag(tag: string): boolean;
    /**
    Causes the simulated player to make an attack 'swipe'. Returns true if the attack was performed - for example, the player was not on cooldown and had a valid target. Target selection is performed by raycasting from the player's head.
    */
    attack(): boolean;
    /**
    Causes the simulated player to attack the provided target. Returns true if the attack was performed - for example, the player was not on cooldown and had a valid target. The attack can be performed at any distance and does not require line of sight to the target entity.
    #### **Parameters**
    - **entity**: *mojang-minecraft.Entity*
    
    */
    attackEntity(entity: mojangminecraft.Entity): boolean;
    /**
    Destroys the block at blockLocation, respecting the rules of the server player's game mode. The block will be hit until broken, an item is used or stopBreakingBlock is called. Returns true if the block at blockLocation is solid.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the block to interact with.
    - **direction**?: *number* = `1`
    
    Direction to place the specified item within.
    
    */
    breakBlock(blockLocation: mojangminecraft.BlockLocation, direction?: number): boolean;
    /**
    Gets the first block that intersects with the vector of the view of this entity.
    #### **Parameters**
    - **options**?: *mojang-minecraft.BlockRaycastOptions* = `null`
    
    Additional options for processing this raycast query.
    
    */
    getBlockFromViewVector(options?: mojangminecraft.BlockRaycastOptions): mojangminecraft.Block;
    /**
    Gets a component (that represents additional capabilities) for an entity.
    #### **Parameters**
    - **componentId**: *string*
    
    The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed. If the component is not present on the entity, undefined is returned.
    
    */
    getComponent(componentId: string): mojangminecraft.IEntityComponent;
    /**
    Returns all components that are both present on this entity and supported by the API.
    */
    getComponents(): mojangminecraft.IEntityComponent[];
    /**
    Returns the effect for the specified EffectType on the entity, or undefined if the effect is not present.
    #### **Parameters**
    - **effectType**: *mojang-minecraft.EffectType*
    
    #### **Returns** mojang-minecraft.Effect
    - Effect object for the specified effect, or undefined if the effect is not present.
    
    */
    getEffect(effectType: mojangminecraft.EffectType): mojangminecraft.Effect;
    /**
    Gets the first entity that intersects with the vector of the view of this entity.
    #### **Parameters**
    - **options**?: *mojang-minecraft.EntityRaycastOptions* = `null`
    
    Additional options for processing this raycast query.
    
    */
    getEntitiesFromViewVector(options?: mojangminecraft.EntityRaycastOptions): mojangminecraft.Entity[];
    /**
    Gets the current item cooldown time for a particular cooldown category.
    #### **Parameters**
    - **itemCategory**: *string*
    
    Specifies the cooldown category to retrieve the current cooldown for.
    
    */
    getItemCooldown(itemCategory: string): number;
    /**
    Returns all tags associated with this simulated player.
    */
    getTags(): string[];
    /**
    Gives the simulated player a particular item stack.
    #### **Parameters**
    - **itemStack**: *mojang-minecraft.ItemStack*
    
    Item to give.
    - **selectSlot**?: *boolean* = `false`
    
    Whether to set the selected slot once given.
    
    */
    giveItem(itemStack: mojangminecraft.ItemStack, selectSlot?: boolean): boolean;
    /**
    Returns true if the specified component is present on this entity.
    #### **Parameters**
    - **componentId**: *string*
    
    The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed.
    
    */
    hasComponent(componentId: string): boolean;
    /**
    Tests whether a simulated player has a particular tag.
    #### **Parameters**
    - **tag**: *string*
    
    Identifier of the tag to test for.
    
    */
    hasTag(tag: string): boolean;
    /**
    Performs a raycast from the player’s head and interacts with the first intersected block or entity. Returns true if the interaction was successful. Maximum range is 6 blocks.
    */
    interact(): boolean;
    /**
    Causes the simulated player to interact with a block. The block at the specified block location must be solid. Returns true if the interaction was performed.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the block to interact with.
    - **direction**?: *number* = `1`
    
    Direction to place the specified item within.
    
    */
    interactWithBlock(blockLocation: mojangminecraft.BlockLocation, direction?: number): boolean;
    /**
    Causes the simulated player to interact with a mob. Returns true if the interaction was performed.
    #### **Parameters**
    - **entity**: *mojang-minecraft.Entity*
    
    Entity to interact with.
    
    */
    interactWithEntity(entity: mojangminecraft.Entity): boolean;
    /**
    Causes the simulated player to jump.
    */
    jump(): boolean;
    /**
    Kills this entity. The entity will drop loot as normal.
    */
    kill(): void;
    /**
    Rotates the simulated player's head/body to look at the given block location.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    */
    lookAtBlock(blockLocation: mojangminecraft.BlockLocation): void;
    /**
    Rotates the simulated player's head/body to look at the given entity.
    #### **Parameters**
    - **entity**: *mojang-minecraft.Entity*
    
    */
    lookAtEntity(entity: mojangminecraft.Entity): void;
    /**
    Rotates the simulated player's head/body to look at the given location.
    #### **Parameters**
    - **location**: *mojang-minecraft.Location*
    
    */
    lookAtLocation(location: mojangminecraft.Location): void;
    /**
    Orders the simulated player to walk in the given direction relative to the GameTest.
    #### **Parameters**
    - **westEast**: *number*
    - **northSouth**: *number*
    - **speed**?: *number* = `1`
    
    */
    move(westEast: number, northSouth: number, speed?: number): void;
    /**
    Orders the simulated player to walk in the given direction relative to the player's current rotation.
    #### **Parameters**
    - **leftRight**: *number*
    - **backwardForward**: *number*
    - **speed**?: *number* = `1`
    
    */
    moveRelative(leftRight: number, backwardForward: number, speed?: number): void;
    /**
    Orders the simulated player to move to the given block location in a straight line. If a move or navigation is already playing, this will override the last move/navigation.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    - **speed**?: *number* = `1`
    
    */
    moveToBlock(blockLocation: mojangminecraft.BlockLocation, speed?: number): void;
    /**
    Orders the simulated player to move to the given location in a straight line. If a move or navigation is already playing, this will override the last move/navigation.
    #### **Parameters**
    - **location**: *mojang-minecraft.Location*
    - **speed**?: *number* = `1`
    
    */
    moveToLocation(location: mojangminecraft.Location, speed?: number): void;
    /**
    Orders the simulated player to move to a specific block location using navigation. If a move or navigation is already playing, this will override the last move/walk. Note that if the simulated player gets stuck, that simulated player will stop. The player must be touching the ground in order to start navigation.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    - **speed**?: *number* = `1`
    
    */
    navigateToBlock(blockLocation: mojangminecraft.BlockLocation, speed?: number): mojangminecraft.NavigationResult;
    /**
    Will use navigation to follow the selected entity to within a one block radius. If a move or navigation is already playing, this will override the last move/navigation.
    #### **Parameters**
    - **entity**: *mojang-minecraft.Entity*
    - **speed**?: *number* = `1`
    
    */
    navigateToEntity(entity: mojangminecraft.Entity, speed?: number): mojangminecraft.NavigationResult;
    /**
    Orders the simulated player to move to a specific location using navigation. If a move or navigation is already playing, this will override the last move/walk. Note that if the simulated player gets stuck, that simulated player will stop. The player must be touching the ground in order to start navigation.
    #### **Parameters**
    - **location**: *mojang-minecraft.Location*
    - **speed**?: *number* = `1`
    
    */
    navigateToLocation(location: mojangminecraft.Location, speed?: number): mojangminecraft.NavigationResult;
    /**
    Use navigation to follow the route provided via the locations parameter. If a move or navigation is already playing, this will override the last move/navigation.
    #### **Parameters**
    - **locations**: *mojang-minecraft.Location*[]
    
    A list of locations to use for routing.
    - **speed**?: *number* = `1`
    
    Net speed to use for doing the navigation.
    
    */
    navigateToLocations(locations: mojangminecraft.Location[], speed?: number): void;
    /**
    This method is inherited from Player, but is inoperative in the case of a SimulatedPlayer.
    #### **Parameters**
    - **soundID**: *string*
    
    Identifier of the sound to play.
    - **soundOptions**?: *mojang-minecraft.SoundOptions* = `null`
    
    Additional optional options for the sound.
    
    */
    playSound(soundID: string, soundOptions?: mojangminecraft.SoundOptions): void;
    /**
    Removes a specified tag from a simulated player.
    #### **Parameters**
    - **tag**: *string*
    
    Content of the tag to remove.
    
    */
    removeTag(tag: string): boolean;
    /**
    Causes the simulated player to turn by the provided angle, relative to the player's current rotation.
    #### **Parameters**
    - **angleInDegrees**: *number*
    
    */
    rotateBody(angleInDegrees: number): void;
    /**
    Runs a particular command from the context of this simulated player.
    #### **Parameters**
    - **commandString**: *string*
    
    Command to run. Note that command strings should not start with slash.
    
    */
    runCommand(commandString: string): any;
    /**
    Causes the simulated player to turn to face the provided angle, relative to the GameTest.
    #### **Parameters**
    - **angleInDegrees**: *number*
    
    */
    setBodyRotation(angleInDegrees: number): void;
    /**
    Sets the game mode that the simulated player is operating under.
    #### **Parameters**
    - **gameMode**: *mojang-minecraft.GameMode*
    
    Game mode to set.
    
    */
    setGameMode(gameMode: mojangminecraft.GameMode): void;
    /**
    Sets a particular item for the simulated player.
    #### **Parameters**
    - **itemStack**: *mojang-minecraft.ItemStack*
    
    Item to set.
    - **slot**: *number*
    
    Slot to place the given item in.
    - **selectSlot**?: *boolean* = `false`
    
    Whether to set the selected slot once set.
    
    */
    setItem(itemStack: mojangminecraft.ItemStack, slot: number, selectSlot?: boolean): boolean;
    /**
    Sets a velocity for the entity to move with.
    #### **Parameters**
    - **velocity**: *mojang-minecraft.Vector*
    
    X/Y/Z components of the velocity.
    
    */
    setVelocity(velocity: mojangminecraft.Vector): void;
    /**
    Sets the item cooldown time for a particular cooldown category.
    #### **Parameters**
    - **itemCategory**: *string*
    
    Specifies the cooldown category to retrieve the current cooldown for.
    - **tickDuration**: *number*
    
    Duration in ticks of the item cooldown.
    
    */
    startItemCooldown(itemCategory: string, tickDuration: number): void;
    /**
    Stops destroying the block that is currently being hit.
    */
    stopBreakingBlock(): void;
    /**
    Stops interacting with entities or blocks.
    */
    stopInteracting(): void;
    /**
    Stops moving/walking/following if the simulated player is moving.
    */
    stopMoving(): void;
    /**
    Stops using the currently active item.
    */
    stopUsingItem(): void;
    /**
    Teleports the selected player to a new location
    #### **Parameters**
    - **location**: *mojang-minecraft.Location*
    
    New location for the player.
    - **dimension**: *mojang-minecraft.Dimension*
    
    Dimension to move the selected player to.
    - **xRotation**: *number*
    
    X rotation of the player after teleportation.
    - **yRotation**: *number*
    
    Y rotation of the player after teleportation.
    
    */
    teleport(location: mojangminecraft.Location, dimension: mojangminecraft.Dimension, xRotation: number, yRotation: number): void;
    /**
    Teleports the selected player to a new location, and will have the player facing a specified location.
    #### **Parameters**
    - **location**: *mojang-minecraft.Location*
    
    New location for the player.
    - **dimension**: *mojang-minecraft.Dimension*
    
    Dimension to move the selected player to.
    - **facingLocation**: *mojang-minecraft.Location*
    
    Location that this player will be facing.
    
    */
    teleportFacing(location: mojangminecraft.Location, dimension: mojangminecraft.Dimension, facingLocation: mojangminecraft.Location): void;
    /**
    Triggers an entity type event. For every entity, a number of events are defined in an entities' definition for key entity behaviors; for example, creepers have a minecraft:start_exploding type event.
    #### **Parameters**
    - **eventName**: *string*
    
    Name of the entity type event to trigger. If a namespace is not specified, minecraft: is assumed.
    
    */
    triggerEvent(eventName: string): void;
    /**
    Causes the simulated player to use an item. Does not consume the item. Returns false if the item is on cooldown.
    #### **Parameters**
    - **itemStack**: *mojang-minecraft.ItemStack*
    
    Item to use.
    
    */
    useItem(itemStack: mojangminecraft.ItemStack): boolean;
    /**
    Causes the simulated player to hold and use an item in their inventory.
    #### **Parameters**
    - **slot**: *number*
    
    Index of the inventory slot.
    
    */
    useItemInSlot(slot: number): boolean;
    /**
    Causes the simulated player to use an item in their inventory on a block. The block at the specified block location must be solid. Returns true if the item was used.
    #### **Parameters**
    - **slot**: *number*
    
    Index of the slot to use.
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location to use the item upon.
    - **direction**?: *number* = `1`
    
    Direction to place the specified item within.
    - **faceLocationX**?: *number* = `0.5`
    
    Block-face-relative X position where to place the item.
    - **faceLocationY**?: *number* = `0.5`
    
    Block-face-relative Y position where to place the item.
    
    */
    useItemInSlotOnBlock(slot: number, blockLocation: mojangminecraft.BlockLocation, direction?: number, faceLocationX?: number, faceLocationY?: number): boolean;
    /**
    Causes the simulated player to use an item on a block. The block at the specified block location must be solid. Returns true if the item was used.
    #### **Parameters**
    - **itemStack**: *mojang-minecraft.ItemStack*
    
    Item to use.
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location to use the item upon.
    - **direction**?: *number* = `1`
    
    Direction to place the specified item within.
    - **faceLocationX**?: *number* = `0.5`
    
    Block-face-relative X position where to place the item.
    - **faceLocationY**?: *number* = `0.5`
    
    Block-face-relative Y position where to place the item.
    
    */
    useItemOnBlock(itemStack: mojangminecraft.ItemStack, blockLocation: mojangminecraft.BlockLocation, direction?: number, faceLocationX?: number, faceLocationY?: number): boolean;
  }
  /**
  These well-known tags can be used to classify different tests into suites to run.
  */
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
  /**
  Main class for GameTest functions, with helpers and data for manipulating the respective test. Note that all methods of this class expect BlockLocations and Locations relative to the GameTest structure block.
  */
  export class Test {
    /**
    Tests that the condition specified in _condition_ is true. If not, an error with the specified _message_ is thrown.
    #### **Parameters**
    - **condition**: *boolean*
    
    Expression of the condition to evaluate.
    - **message**: *string*
    
    Message that is passed if the _condition_ does not evaluate to true.
    
    */
    assert(condition: boolean, message: string): void;
    /**
    Tests that a block of the specified type is present at the specified location. If it is not, an exception is thrown.
    #### **Parameters**
    - **blockType**: *mojang-minecraft.BlockType*
    
    Expected block type.
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the block to test at.
    - **isPresent**?: *boolean* = `true`
    
    If true, this function tests whether a block of the specified type is at the location. If false, tests that a block of the specified type is not present.
    
    */
    assertBlockPresent(blockType: mojangminecraft.BlockType, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean): void;
    /**
    Tests that a block has a particular state value at the specified location. If it does not have that state value, an exception is thrown.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the block to test at.
    - **callback**: (arg: *mojang-minecraft.Block* => *boolean*
    
    Callback function that contains additional tests based on the block at the specified location.
    
    */
    assertBlockState(blockLocation: mojangminecraft.BlockLocation, callback: (arg: mojangminecraft.Block) => boolean): void;
    /**
    Tests that an entity can reach a particular location. Depending on the value of canReach, throws an exception if the condition is not met.
    #### **Parameters**
    - **mob**: *mojang-minecraft.Entity*
    
    Entity that you wish to test the location against.
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Structure-relative location to test whether the specified mob can reach.
    - **canReach**?: *boolean* = `true`
    
    If true, tests whether the mob can reach the location. If false, tests whether the mob is not able to reach the location.
    
    */
    assertCanReachLocation(mob: mojangminecraft.Entity, blockLocation: mojangminecraft.BlockLocation, canReach?: boolean): void;
    /**
    Tests that a container (e.g., a chest) at the specified location contains a specified of item stack. If not, an error is thrown.
    #### **Parameters**
    - **itemStack**: *mojang-minecraft.ItemStack*
    
    Represents the type of item to check for. The specified container must contain at least 1 item matching the item type defined in _itemStack_.
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the block with a container (for example, a chest) to test the contents of.
    
    */
    assertContainerContains(itemStack: mojangminecraft.ItemStack, blockLocation: mojangminecraft.BlockLocation): void;
    /**
    Tests that a container (e.g., a chest) at the specified location is empty. If not, an error is thrown.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the block with a container (for example, a chest) to test is empty of contents.
    
    */
    assertContainerEmpty(blockLocation: mojangminecraft.BlockLocation): void;
    /**
    Tests that an entity has a specific piece of armor equipped. If not, an error is thrown.
    #### **Parameters**
    - **entityTypeIdentifier**: *string*
    
    Identifier of the entity to match (e.g., 'minecraft:skeleton').
    - **armorSlot**: *number*
    
    Container slot index to test.
    - **armorName**: *string*
    
    Name of the armor to look for.
    - **armorData**: *number*
    
    Data value integer to look for.
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the entity with armor to test for.
    - **hasArmor**?: *boolean* = `true`
    
    Whether or not the entity is expected to have the specified armor equipped.
    
    */
    assertEntityHasArmor(entityTypeIdentifier: string, armorSlot: number, armorName: string, armorData: number, blockLocation: mojangminecraft.BlockLocation, hasArmor?: boolean): void;
    /**
    Tests that an entity has a particular component. If not, an exception is thrown.
    #### **Parameters**
    - **entityTypeIdentifier**: *string*
    
    Identifier of the specified entity (e.g., 'minecraft:skeleton'). If the namespace is not specified, 'minecraft:' is assumed.
    - **componentIdentifier**: *string*
    
    Identifier of the component to check for. If the namespace is not specified, 'minecraft:' is assumed.
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the block with a container (for example, a chest.)
    - **hasComponent**?: *boolean* = `true`
    
    Determines whether to test that the component exists, or does not.
    
    */
    assertEntityHasComponent(entityTypeIdentifier: string, componentIdentifier: string, blockLocation: mojangminecraft.BlockLocation, hasComponent?: boolean): void;
    /**
    Depending on the value for isPresent, tests that a particular entity is present or not present at the specified location. Depending on the value of isPresent, if the entity is found or not found, an error is thrown.
    #### **Parameters**
    - **entity**: *mojang-minecraft.Entity*
    
    Specific entity to test for.
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the entity to test for.
    - **isPresent**?: *boolean* = `true`
    
    Whether to test that an entity is present or not present at the specified location.
    
    */
    assertEntityInstancePresent(entity: mojangminecraft.Entity, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean): void;
    /**
    Depending on the value of isPresent, tests for the presence or non-presence of entity of a specified type at a particular location. If the condition is not met, an exception is thrown.
    #### **Parameters**
    - **entityTypeIdentifier**: *string*
    
    Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed.
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the entity to test for.
    - **isPresent**?: *boolean* = `true`
    
    If true, this function tests whether an entity of the specified type is present. If false, tests that an entity of the specified type is not present.
    
    */
    assertEntityPresent(entityTypeIdentifier: string, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean): void;
    /**
    Tests that an entity of a specified type is present within the GameTest area. If not, an exception is thrown.
    #### **Parameters**
    - **entityTypeIdentifier**: *string*
    
    Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed.
    - **isPresent**?: *boolean* = `true`
    
    If true, this function tests whether an entity of the specified type is present in the GameTest area. If false, tests that an entity of the specified type is not present.
    
    */
    assertEntityPresentInArea(entityTypeIdentifier: string, isPresent?: boolean): void;
    /**
    Tests that an entity (e.g., a skeleton) at the specified location has a particular piece of data. If not, an error is thrown.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the entity to look for.
    - **entityTypeIdentifier**: *string*
    
    Identifier of the entity (e.g., 'minecraft:skeleton') to look for. Note if no namespace is specified, 'minecraft:' is assumed.
    - **callback**: (arg: *mojang-minecraft.Entity* => *boolean*
    
    Callback function where facets of the selected entity can be tested for. If this callback function returns false or no entity with the specified identifier is found, an exception is thrown.
    
    */
    assertEntityState(blockLocation: mojangminecraft.BlockLocation, entityTypeIdentifier: string, callback: (arg: mojangminecraft.Entity) => boolean): void;
    /**
    Depending on the value of isTouching, tests that an entity of a specified type is touching or connected to another entity. If the condition is not met, an exception is thrown.
    #### **Parameters**
    - **entityTypeIdentifier**: *string*
    
    Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed.
    - **location**: *mojang-minecraft.Location*
    
    Location of the entity to test for.
    - **isTouching**?: *boolean* = `true`
    
    If true, this function tests whether the entity is touching the specified location. If false, tests that an entity is not testing the specified location.
    
    */
    assertEntityTouching(entityTypeIdentifier: string, location: mojangminecraft.Location, isTouching?: boolean): void;
    /**
    Depending on the value of isWaterlogged, tests that a block at a location contains water. If the condition is not met, an error is thrown. Pure water blocks are not considered to be waterlogged.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the block to test for.
    - **isWaterlogged**?: *boolean* = `true`
    
    Whether to test that the block at _position_ is expected to be waterlogged.
    
    */
    assertIsWaterlogged(blockLocation: mojangminecraft.BlockLocation, isWaterlogged?: boolean): void;
    /**
    Tests that items of a particular type and count are present within an area. If not, an error is thrown.
    #### **Parameters**
    - **itemType**: *mojang-minecraft.ItemType*
    
    Type of item to look for.
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location to search around for the specified set of items.
    - **searchDistance**: *number*
    
    Range, in blocks, to aggregate a count of items around. If 0, will only search the particular block at _position_.
    - **count**: *number*
    
    Number of items, at minimum, to look and test for.
    
    */
    assertItemEntityCountIs(itemType: mojangminecraft.ItemType, blockLocation: mojangminecraft.BlockLocation, searchDistance: number, count: number): void;
    /**
    Depending on the value of isPresent, tests whether a particular item entity is present or not at a particular location. If the condition is not met, an exception is thrown.
    #### **Parameters**
    - **itemType**: *mojang-minecraft.ItemType*
    
    Type of item to test for.
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the item entity to test for.
    - **searchDistance**: *number*
    
    Radius in blocks to look for the item entity.
    - **isPresent**?: *boolean* = `true`
    
    If true, this function tests whether an item entity of the specified type is present. If false, tests that an item entity of the specified type is not present.
    
    */
    assertItemEntityPresent(itemType: mojangminecraft.ItemType, blockLocation: mojangminecraft.BlockLocation, searchDistance: number, isPresent?: boolean): void;
    /**
    Tests that Redstone power at a particular location matches a particular value. If not, an exception is thrown.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location to test.
    - **power**: *number*
    
    Expected power level.
    
    */
    assertRedstonePower(blockLocation: mojangminecraft.BlockLocation, power: number): void;
    /**
    Marks the current test as a failure case.
    #### **Parameters**
    - **errorMessage**: *string*
    
    Error message summarizing the failure condition.
    
    */
    fail(errorMessage: string): void;
    /**
    Runs the given callback. If the callback does not throw an exception, the test is marked as a failure.
    #### **Parameters**
    - **callback**: () => *void*
    
    Callback function that runs. If the function runs successfully, the test is marked as a failure. Typically, this function will have .assertXyz method calls within it.
    
    */
    failIf(callback: () => void): void;
    /**
    Gets a block at the specified block location.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the block to retrieve.
    
    */
    getBlock(blockLocation: mojangminecraft.BlockLocation): mojangminecraft.Block;
    /**
    Gets the dimension of this test.
    */
    getDimension(): mojangminecraft.Dimension;
    /**
    If the block at the specified block location is a fence, this returns a helper object with details on how a fence is connected.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the block to retrieve.
    
    */
    getFenceConnectivity(blockLocation: mojangminecraft.BlockLocation): FenceConnectivity;
    /**
    Retrieves a sculk spreader object that can be used to control and manage how sculk grows from a block.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the block to retrieve a sculk spreader from.
    
    */
    getSculkSpreader(blockLocation: mojangminecraft.BlockLocation): mojangminecraft.SculkSpreader;
    /**
    Returns the direction of the current test - see the *mojang-minecraft*.
    */
    getTestDirection(): mojangminecraft.Direction;
    /**
    This asynchronous function will wait for the specified time in ticks before continuing execution.
    #### **Parameters**
    - **tickDelay**: *number*
    
    Amount of time to wait, in ticks.
    
    */
    idle(tickDelay: number): Promise<void>;
    /**
    Kills all entities within the GameTest structure.
    */
    killAllEntities(): void;
    /**
    Presses a button at a block location.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location to push the button at.
    
    */
    pressButton(blockLocation: mojangminecraft.BlockLocation): void;
    /**
    Displays the specified message to all players.
    #### **Parameters**
    - **text**: *string*
    
    Message to display.
    
    */
    print(text: string): void;
    /**
    Pulls a lever at a block location.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location to pull the lever at.
    
    */
    pullLever(blockLocation: mojangminecraft.BlockLocation): void;
    /**
    Sends a Redstone pulse at a particular location by creating a temporary Redstone block.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location to pulse Redstone at.
    - **duration**: *number*
    
    Number of ticks to pulse Redstone.
    
    */
    pulseRedstone(blockLocation: mojangminecraft.BlockLocation, duration: number): void;
    /**
    From a BlockLocation, returns a new BlockLocation with coordinates relative to the current GameTest structure block. For example, the relative coordinates for the block above the structure block are (0, 1, 0). Rotation of the GameTest structure is also taken into account.
    #### **Parameters**
    - **worldBlockLocation**: *mojang-minecraft.BlockLocation*
    
    Absolute location in the world to convert to a relative location.
    
    #### **Returns** mojang-minecraft.BlockLocation
    - A location relative to the GameTest command block.
    
    */
    relativeBlockLocation(worldBlockLocation: mojangminecraft.BlockLocation): mojangminecraft.BlockLocation;
    /**
    From a location, returns a new location with coordinates relative to the current GameTest structure block. For example, the relative coordinates for the block above the structure block are (0, 1, 0). Rotation of the GameTest structure is also taken into account.
    #### **Parameters**
    - **worldLocation**: *mojang-minecraft.Location*
    
    Absolute location in the world to convert to a relative location.
    
    #### **Returns** mojang-minecraft.Location
    - A location relative to the GameTest command block.
    
    */
    relativeLocation(worldLocation: mojangminecraft.Location): mojangminecraft.Location;
    /**
    Removes a simulated player from the world.
    #### **Parameters**
    - **simulatedPlayer**: *SimulatedPlayer*
    
    Simulated player to remove.
    
    */
    removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void;
    /**
    Returns a relative direction given the current rotation of the current test. Passing in Direction.south will return the test direction; Passing in Direction.north will return the opposite of the test direction, and so on.
    #### **Parameters**
    - **direction**: *mojang-minecraft.Direction*
    
    Direction to translate into a direction relative to the GameTest facing. Passing in Direction.south will return the test direction; Passing in Direction.north will return the opposite of the test direction, and so on.
    
    */
    rotateDirection(direction: mojangminecraft.Direction): mojangminecraft.Direction;
    /**
    Runs a specific callback after a specified delay of ticks
    #### **Parameters**
    - **delayTicks**: *number*
    
    Number of ticks to delay before running the specified callback.
    - **callback**: () => *void*
    
    Callback function to execute.
    
    */
    runAfterDelay(delayTicks: number, callback: () => void): void;
    /**
    Runs the given callback after a delay of _tick_ ticks from the start of the GameTest.
    #### **Parameters**
    - **tick**: *number*
    
    Tick (after the start of the GameTest) to run the callback at.
    - **callback**: () => *void*
    
    Callback function to execute.
    
    */
    runAtTickTime(tick: number, callback: () => void): void;
    /**
    Sets a block to a particular configuration (a BlockPermutation) at the specified block location.
    #### **Parameters**
    - **blockData**: *mojang-minecraft.BlockPermutation*
    
    Permutation that contains the configuration data for a block.
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the block to set.
    
    */
    setBlockPermutation(blockData: mojangminecraft.BlockPermutation, blockLocation: mojangminecraft.BlockLocation): void;
    /**
    Sets a block to a particular type at the specified block location.
    #### **Parameters**
    - **blockType**: *mojang-minecraft.BlockType*
    
    Type of block to set.
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the block to set.
    
    */
    setBlockType(blockType: mojangminecraft.BlockType, blockLocation: mojangminecraft.BlockLocation): void;
    /**
    For blocks that are fluid containers - like a cauldron - changes the type of fluid within that container.
    #### **Parameters**
    - **location**: *mojang-minecraft.BlockLocation*
    
    Location of the fluid container block.
    - **type**: *number*
    
    Type of fluid to set. See *mojang-gametest*.FluidType for a list of values.
    
    */
    setFluidContainer(location: mojangminecraft.BlockLocation, type: number): void;
    /**
    Sets the fuse of an explodable entity.
    #### **Parameters**
    - **entity**: *mojang-minecraft.Entity*
    
    Entity that is explodable.
    - **fuseLength**: *number*
    
    Length of time, in ticks, before the entity explodes.
    
    */
    setTntFuse(entity: mojangminecraft.Entity, fuseLength: number): void;
    /**
    Spawns an entity at a location.
    #### **Parameters**
    - **entityTypeIdentifier**: *string*
    
    Type of entity to create. If no namespace is provided, 'minecraft:' is assumed. Note that an optional initial spawn event can be specified between less than/greater than signs (e.g., namespace:entityType<spawnEvent>).
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    #### **Returns** mojang-minecraft.Entity
    - The spawned entity. If the entity cannot be spawned, returns undefined.
    
    */
    spawn(entityTypeIdentifier: string, blockLocation: mojangminecraft.BlockLocation): mojangminecraft.Entity;
    /**
    Spawns an entity at a location.
    #### **Parameters**
    - **entityTypeIdentifier**: *string*
    
    Type of entity to create. If no namespace is provided, 'minecraft:' is assumed. Note that an optional initial spawn event can be specified between less than/greater than signs (e.g., namespace:entityType<spawnEvent>).
    - **location**: *mojang-minecraft.Location*
    
    #### **Returns** mojang-minecraft.Entity
    - The spawned entity. If the entity cannot be spawned, returns undefined.
    
    */
    spawnAtLocation(entityTypeIdentifier: string, location: mojangminecraft.Location): mojangminecraft.Entity;
    /**
    Spawns an item entity at a specified location.
    #### **Parameters**
    - **itemStack**: *mojang-minecraft.ItemStack*
    
    ItemStack that describes the item entity to create.
    - **location**: *mojang-minecraft.Location*
    
    Location to create the item entity at.
    
    */
    spawnItem(itemStack: mojangminecraft.ItemStack, location: mojangminecraft.Location): mojangminecraft.Entity;
    /**
    Creates a new simulated player within the world.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location where to spawn the simulated player.
    - **name**?: *string* = `"Simulated Player"`
    
    Name to give the new simulated player.
    - **gameMode**?: *mojang-minecraft.GameMode* = `0`
    
    */
    spawnSimulatedPlayer(blockLocation: mojangminecraft.BlockLocation, name?: string, gameMode?: mojangminecraft.GameMode): SimulatedPlayer;
    /**
    Spawns an entity at a location without any AI behaviors. This method is frequently used in conjunction with methods like .walkTo to create predictable mob actions.
    #### **Parameters**
    - **entityTypeIdentifier**: *string*
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location where the entity should be spawned.
    
    */
    spawnWithoutBehaviors(entityTypeIdentifier: string, blockLocation: mojangminecraft.BlockLocation): mojangminecraft.Entity;
    /**
    Spawns an entity at a location without any AI behaviors. This method is frequently used in conjunction with methods like .walkTo to create predictable mob actions.
    #### **Parameters**
    - **entityTypeIdentifier**: *string*
    - **location**: *mojang-minecraft.Location*
    
    Location where the entity should be spawned.
    
    */
    spawnWithoutBehaviorsAtLocation(entityTypeIdentifier: string, location: mojangminecraft.Location): mojangminecraft.Entity;
    /**
    Tests that a particular item entity is present at a particular location. If not, an exception is thrown.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    BlockLocation containing a multiface block.
    - **fromFace**: *mojang-minecraft.Direction*
    
    Face to spread from. This face must already be set.
    - **direction**: *mojang-minecraft.Direction*
    
    Direction to spread. Use the Minecraft.Direction enum to specify a direction.
    
    */
    spreadFromFaceTowardDirection(blockLocation: mojangminecraft.BlockLocation, fromFace: mojangminecraft.Direction, direction: mojangminecraft.Direction): void;
    /**
    Creates a new GameTestSequence - A set of steps that play out sequentially within a GameTest.
    */
    startSequence(): GameTestSequence;
    /**
    Marks the current test as a success case.
    */
    succeed(): void;
    /**
    Runs the given callback. If the callback does not throw an exception, the test is marked as a success.
    #### **Parameters**
    - **callback**: () => *void*
    
    Callback function that runs. If the function runs successfully, the test is marked as a success. Typically, this function will have .assertXyz method calls within it.
    
    */
    succeedIf(callback: () => void): void;
    /**
    Marks the test as a success at the specified tick.
    #### **Parameters**
    - **tick**: *number*
    
    Tick after the start of the GameTest to mark the test as successful.
    
    */
    succeedOnTick(tick: number): void;
    /**
    Runs the given callback at _tick_ ticks after the start of the test. If the callback does not throw an exception, the test is marked as a failure.
    #### **Parameters**
    - **tick**: *number*
    
    Tick after the start of the GameTest to run the testing callback at.
    - **callback**: () => *void*
    
    Callback function that runs. If the function runs successfully, the test is marked as a success.
    
    */
    succeedOnTickWhen(tick: number, callback: () => void): void;
    /**
    Runs the given callback every tick. When the callback successfully executes, the test is marked as a success. Specifically, the test will succeed when the callback does not throw an exception.
    #### **Parameters**
    - **callback**: () => *void*
    
    Testing callback function that runs. If the function runs successfully, the test is marked as a success.
    
    */
    succeedWhen(callback: () => void): void;
    /**
    Depending on the condition of isPresent, tests for the presence of a block of a particular type on every tick. When the specified block of a type is found or not found (depending on isPresent), the test is marked as a success.
    #### **Parameters**
    - **blockType**: *mojang-minecraft.BlockType*
    
    Type of block to test for.
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the block to test at.
    - **isPresent**?: *boolean* = `true`
    
    If true, this function tests whether a block of the specified type is present. If false, tests that a block of the specified type is not present.
    
    */
    succeedWhenBlockPresent(blockType: mojangminecraft.BlockType, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean): void;
    /**
    Tests for the presence of a component on every tick. Depending on the value of hasComponent, when the specified component is found, the test is marked as a success.
    #### **Parameters**
    - **entityTypeIdentifier**: *string*
    
    Type of entity to look for. If no namespace is specified, 'minecraft:' is assumed.
    - **componentIdentifier**: *string*
    
    Type of component to test for the presence of. If no namespace is specified, 'minecraft:' is assumed.
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Block location of the entity to test.
    - **hasComponent**: *boolean*
    
    If true, this function tests for the presence of a component. If false, this function tests for the lack of a component.
    
    */
    succeedWhenEntityHasComponent(entityTypeIdentifier: string, componentIdentifier: string, blockLocation: mojangminecraft.BlockLocation, hasComponent: boolean): void;
    /**
    Depending on the value of isPresent, tests for the presence of an entity on every tick. When an entity of the specified type is found or not found (depending on isPresent), the test is marked as a success.
    #### **Parameters**
    - **entityTypeIdentifier**: *string*
    
    Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed.
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location of the entity to test for.
    - **isPresent**?: *boolean* = `true`
    
    If true, this function tests whether an entity of the specified type is present. If false, tests that an entity of the specified type is not present.
    
    */
    succeedWhenEntityPresent(entityTypeIdentifier: string, blockLocation: mojangminecraft.BlockLocation, isPresent?: boolean): void;
    /**
    Triggers a block event from a fixed list of available block events.
    #### **Parameters**
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    - **event**: *string*
    
    Event to trigger. Valid values include minecraft:drip, minecraft:grow_stalagtite, minecraft:grow_stalagmite, minecraft:grow_up, minecraft:grow_down and minecraft:grow_sideways.
    - **eventParameters**?: *number*[] = `[]`
    
    */
    triggerInternalBlockEvent(blockLocation: mojangminecraft.BlockLocation, event: string, eventParameters?: number[]): void;
    /**
    This asynchronous function will wait until the code in the specified callback successfully completes. until can be used in conjunction with .assert functions to evaluate that a condition is true.
    #### **Parameters**
    - **callback**: () => *void*
    
    Function with code to evaluate.
    
    */
    until(callback: () => void): Promise<void>;
    /**
    Forces a mob to walk to a particular location. Usually used in conjunction with methods like .spawnWithoutBehaviors to have more predictable mob behaviors. Mobs will stop navigation as soon as they intersect the target location.
    #### **Parameters**
    - **mob**: *mojang-minecraft.Entity*
    
    Mob entity to give orders to.
    - **blockLocation**: *mojang-minecraft.BlockLocation*
    
    Location where the entity should be walk to.
    - **speedModifier**?: *number* = `1`
    
    Adjustable modifier to the mob's walking speed.
    
    */
    walkTo(mob: mojangminecraft.Entity, blockLocation: mojangminecraft.BlockLocation, speedModifier?: number): void;
    /**
    Forces a mob to walk to a particular location. Usually used in conjunction with methods like .spawnWithoutBehaviors to have more predictable mob behaviors. Mobs will stop navigation as soon as they intersect the target location.
    #### **Parameters**
    - **mob**: *mojang-minecraft.Entity*
    
    Mob entity to give orders to.
    - **location**: *mojang-minecraft.Location*
    
    Location where the entity should be walk to.
    - **speedModifier**?: *number* = `1`
    
    Adjustable modifier to the mob's walking speed.
    
    */
    walkToLocation(mob: mojangminecraft.Entity, location: mojangminecraft.Location, speedModifier?: number): void;
    /**
    From a BlockLocation with coordinates relative to the GameTest structure block, returns a new BlockLocation with coordinates relative to world. Rotation of the GameTest structure is also taken into account.
    #### **Parameters**
    - **relativeBlockLocation**: *mojang-minecraft.BlockLocation*
    
    Location relative to the GameTest command block.
    
    #### **Returns** mojang-minecraft.BlockLocation
    - An absolute location relative to the GameTest command block.
    
    */
    worldBlockLocation(relativeBlockLocation: mojangminecraft.BlockLocation): mojangminecraft.BlockLocation;
    /**
    From a location with coordinates relative to the GameTest structure block, returns a new location with coordinates relative to world. Rotation of the GameTest structure is also taken into account.
    #### **Parameters**
    - **relativeLocation**: *mojang-minecraft.Location*
    
    Location relative to the GameTest command block.
    
    #### **Returns** mojang-minecraft.Location
    - An absolute location relative to the GameTest command block.
    
    */
    worldLocation(relativeLocation: mojangminecraft.Location): mojangminecraft.Location;
  }
    /**
    Registers a new GameTest function. This GameTest will become available in Minecraft via /gametest run [testClassName]:[testName].
    #### **Parameters**
    - **testClassName**: *string*
    
    Name of the class of tests this test should be a part of.
    - **testName**: *string*
    
    Name of this specific test.
    - **testFunction**: (arg: *Test* => *void*
    
    Implementation of the test function.
    
    #### **Returns** RegistrationBuilder
    - Returns a *mojang-gametest.RegistrationBuilder* object where additional options for this test can be specified via builder methods.
    
    */
    export function register(testClassName: string, testName: string, testFunction: (arg: Test) => void): RegistrationBuilder;
    /**
    Registers a new GameTest function that is designed for asynchronous execution. This GameTest will become available in Minecraft via /gametest run [testClassName]:[testName].
    #### **Parameters**
    - **testClassName**: *string*
    
    Name of the class of tests this test should be a part of.
    - **testName**: *string*
    
    Name of this specific test.
    - **testFunction**: (arg: *Test* => Promise&lt;*void*&gt;
    
    Implementation of the test function.
    
    #### **Returns** RegistrationBuilder
    - Returns a *mojang-gametest.RegistrationBuilder* object where additional options for this test can be specified via builder methods.
    
    */
    export function registerAsync(testClassName: string, testName: string, testFunction: (arg: Test) => Promise<void>): RegistrationBuilder;
}