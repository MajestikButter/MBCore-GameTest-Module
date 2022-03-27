declare module "mojang-minecraft" {
  export class BeforeChatEvent {
    /**
    If set to true in a beforeChat event handler, this message is not broadcast out.
    */
    "cancel": boolean;
    /**
    Message that is being broadcast. In a beforeChat event handler, _message_ can be updated with edits before the message is displayed to players.
    */
    "message": string;
    /**
    Player that sent the chat message.
    */
    "sender": Player;
    /**
    If true, this message is directly targeted to one or more players (i.e., is not broadcast.)
    */
    "sendToTargets": boolean;
    /**
    List of players that will receive this message.
    */
    "targets": Player[];
  }
  export class BeforeChatEventSignal {
    subscribe(callback: (arg: BeforeChatEvent) => void): (arg: BeforeChatEvent) => void;
    unsubscribe(callback: (arg: BeforeChatEvent) => void): void;
  }
  export class BeforeDataDrivenEntityTriggerEvent {
    /**
    If set to true, this entity event is not triggered.
    */
    "cancel": boolean;
    /**
    Entity that the event triggered on.
    */
    readonly "entity": Entity;
    /**
    Name of the data driven event being triggered.
    */
    readonly "id": string;
    /**
    An updateable list of modifications to component state that are the effect of this triggered event.
    */
    "modifiers": DefinitionModifier[];
  }
  export class BeforeDataDrivenEntityTriggerEventSignal {
    subscribe(callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void, options?: EntityDataDrivenTriggerEventOptions): (arg: BeforeDataDrivenEntityTriggerEvent) => void;
    unsubscribe(callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void): void;
  }
  export class BeforeExplosionEvent {
    /**
    If set to true, cancels the explosion event.
    */
    "cancel": boolean;
    /**
    Dimension where the explosion has occurred.
    */
    readonly "dimension": Dimension;
    /**
    A collection of blocks impacted by this explosion event. Note that this property can be updated to change the set of blocks impacted.
    */
    "impactedBlocks": BlockLocation[];
    /**
    Optional source of the explosion.
    */
    readonly "source": Entity;
  }
  export class BeforeExplosionEventSignal {
    subscribe(callback: (arg: BeforeExplosionEvent) => void): (arg: BeforeExplosionEvent) => void;
    unsubscribe(callback: (arg: BeforeExplosionEvent) => void): void;
  }
  export class BeforeItemDefinitionEventSignal {
    subscribe(callback: (arg: BeforeItemDefinitionTriggeredEvent) => void): (arg: BeforeItemDefinitionTriggeredEvent) => void;
    unsubscribe(callback: (arg: BeforeItemDefinitionTriggeredEvent) => void): void;
  }
  export class BeforeItemDefinitionTriggeredEvent {
    /**
    If set to true, will cancel the application of this item definition change.
    */
    "cancel": boolean;
    /**
    Name of the data-driven item event that is triggering this change.
    */
    readonly "eventName": string;
    /**
    The impacted item stack that is being used.
    */
    "item": ItemStack;
    /**
    Returns the source entity that triggered this item event.
    */
    readonly "source": Entity;
  }
  export class BeforeItemUseEvent {
    /**
    If set to true, this will cancel the item use behavior.
    */
    "cancel": boolean;
    /**
    The impacted item stack that is being used.
    */
    "item": ItemStack;
    /**
    Returns the source entity that triggered this item event.
    */
    readonly "source": Entity;
  }
  export class BeforeItemUseEventSignal {
    subscribe(callback: (arg: BeforeItemUseEvent) => void): (arg: BeforeItemUseEvent) => void;
    unsubscribe(callback: (arg: BeforeItemUseEvent) => void): void;
  }
  export class BeforeItemUseOnEvent {
    /**
    The face of the block that an item is being used on.
    */
    readonly "blockFace": Direction;
    /**
    Location of the block being impacted.
    */
    readonly "blockLocation": BlockLocation;
    /**
    If set to true, this will cancel the item use behavior.
    */
    "cancel": boolean;
    /**
    X coordinate of the item-use impact location on the face of the target block.
    */
    readonly "faceLocationX": number;
    /**
    Y coordinate of the item-use impact location on the face of the target block.
    */
    readonly "faceLocationY": number;
    /**
    The impacted item stack that is being used on a block.
    */
    "item": ItemStack;
    /**
    Returns the source entity that triggered this item event.
    */
    readonly "source": Entity;
  }
  export class BeforeItemUseOnEventSignal {
    subscribe(callback: (arg: BeforeItemUseOnEvent) => void): (arg: BeforeItemUseOnEvent) => void;
    unsubscribe(callback: (arg: BeforeItemUseOnEvent) => void): void;
  }
  export class BeforePistonActivateEvent {
    /**
    Block impacted by this event.
    */
    readonly "block": Block;
    /**
    If this is set to true within an event handler, the piston activation is canceled.
    */
    "cancel": boolean;
    /**
    Dimension that contains the block that is the subject of this event.
    */
    readonly "dimension": Dimension;
    /**
    True if the piston is the process of expanding.
    */
    readonly "isExpanding": boolean;
    /**
    Contains additional properties and details of the piston.
    */
    readonly "piston": BlockPistonComponent;
  }
  export class BeforePistonActivateEventSignal {
    subscribe(callback: (arg: BeforePistonActivateEvent) => void): (arg: BeforePistonActivateEvent) => void;
    unsubscribe(callback: (arg: BeforePistonActivateEvent) => void): void;
  }
  export class Block {
    /**
    Returns the dimension that the block is within.
    */
    readonly "dimension": Dimension;
    /**
    Identifier of the type of block for this block.
    */
    readonly "id": string;
    /**
    Whether this particular block is empty (air).
    */
    readonly "isEmpty": boolean;
    /**
    Returns or sets whether this block has a liquid on it.
    */
    "isWaterlogged": boolean;
    /**
    Coordinates of the specified block.
    */
    readonly "location": BlockLocation;
    /**
    Additional block configuration data that describes the block.
    */
    readonly "permutation": BlockPermutation;
    /**
    Gets the type of block.
    */
    readonly "type": BlockType;
    /**
    X coordinate of the block.
    */
    readonly "x": number;
    /**
    Y coordinate of the block.
    */
    readonly "y": number;
    /**
    Z coordinate of the block.
    */
    readonly "z": number;
    getComponent(componentName: string): any;
    getTags(): string[];
    hasTag(tag: string): boolean;
    setPermutation(permutation: BlockPermutation): void;
    setType(blockType: BlockType): void;
  }
  export class BlockAreaSize {
    /**
    X size (west to east) component of this block area.
    */
    "x": number;
    /**
    Y size (down to up) of this block area size.
    */
    "y": number;
    /**
    Z size (south to north) of this block area size.
    */
    "z": number;
    constructor(x: number, y: number, z: number);
    equals(other: BlockAreaSize): boolean;
  }
  export class BlockBreakEvent {
    /**
    Block broken in this event. Note that because this event fires right after a block is broken, the block you will receive will likely be of type 'minecraft:air'. See the .brokenBlockPermutation property for information on this block before it was broken.
    */
    readonly "block": Block;
    /**
    Returns permutation information about this block before it was broken.
    */
    readonly "brokenBlockPermutation": BlockPermutation;
    /**
    Dimension that contains the block that has been broken in this event.
    */
    readonly "dimension": Dimension;
    /**
    Player that broke the block for this event.
    */
    readonly "player": Player;
  }
  export class BlockBreakEventSignal {
    subscribe(callback: (arg: BlockBreakEvent) => void): (arg: BlockBreakEvent) => void;
    unsubscribe(callback: (arg: BlockBreakEvent) => void): void;
  }
  export class BlockComponent {
  }
  export class BlockEvent {
    /**
    Block impacted by this event.
    */
    readonly "block": Block;
    /**
    Dimension that contains the block that is the subject of this event.
    */
    readonly "dimension": Dimension;
  }
  export class BlockExplodeEvent {
    /**
    Block impacted by this explosion event.
    */
    readonly "block": Block;
    /**
    Dimension that contains the block that is the subject of this explosion event.
    */
    readonly "dimension": Dimension;
    /**
    Optional source of the explosion.
    */
    readonly "source": Entity;
  }
  export class BlockExplodeEventSignal {
    subscribe(callback: (arg: BlockExplodeEvent) => void): (arg: BlockExplodeEvent) => void;
    unsubscribe(callback: (arg: BlockExplodeEvent) => void): void;
  }
  export class BlockInventoryComponent {
    /**
    The container which holds an [*mojang-minecraft.ItemStack*](../mojang-minecraft/ItemStack.md).
    */
    readonly "container": BlockInventoryComponentContainer;
    /**
    Coordinates of the specified block.
    */
    readonly "location": BlockLocation;
  }
  export class BlockInventoryComponentContainer {
    /**
    Contains a count of the slots in the container that are empty.
    */
    readonly "emptySlotsCount": number;
    /**
    Returns the size capacity of the inventory container on this block.
    */
    readonly "size": number;
    addItem(itemStack: ItemStack): void;
    getItem(slot: number): ItemStack;
    setItem(slot: number, itemStack: ItemStack): void;
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
  }
  export class BlockLavaContainerComponent {
    /**
    Relative level of lava within this block. Valid values are between FluidContainer.minFillLevel (0) and FluidContainer.maxFillLevel (6).
    */
    "fillLevel": number;
    /**
    Source location of the block.
    */
    readonly "location": BlockLocation;
  }
  export class BlockLocation {
    /**
    The X coordinate.
    */
    "x": number;
    /**
    The integer-based Y position.
    */
    "y": number;
    /**
    The integer-based Z position.
    */
    "z": number;
    constructor(x: number, y: number, z: number);
    above(): BlockLocation;
    blocksBetween(other: BlockLocation): BlockLocation[];
    equals(other: BlockLocation): boolean;
    offset(x: number, y: number, z: number): BlockLocation;
  }
  export class BlockPermutation {
    /**
    The [*mojang-minecraft.BlockType*](../mojang-minecraft/BlockType.md) that the permutation has.
    */
    readonly "type": BlockType;
    clone(): BlockPermutation;
    getAllProperties(): IBlockProperty[];
    getProperty(propertyName: string): IBlockProperty;
    getTags(): string[];
    hasTag(tag: string): boolean;
  }
  export class BlockPistonComponent {
    /**
    A set of locations for blocks that are impacted by the activation of this piston.
    */
    readonly "attachedBlocks": BlockLocation[];
    /**
    Whether the piston is fully expanded.
    */
    readonly "isExpanded": boolean;
    /**
    Whether the piston is in the process of expanding.
    */
    readonly "isExpanding": boolean;
    /**
    Whether the piston is in the process of expanding or retracting.
    */
    readonly "isMoving": boolean;
    /**
    Whether the piston is fully retracted.
    */
    readonly "isRetracted": boolean;
    /**
    Whether the piston is in the process of retracting.
    */
    readonly "isRetracting": boolean;
    /**
    Source location of the block.
    */
    readonly "location": BlockLocation;
  }
  export class BlockPlaceEvent {
    /**
    Block placed in this event.
    */
    readonly "block": Block;
    /**
    Dimension that contains the block that has been placed in this event.
    */
    readonly "dimension": Dimension;
    /**
    Player that placed the block for this event.
    */
    readonly "player": Player;
  }
  export class BlockPlaceEventSignal {
    subscribe(callback: (arg: BlockPlaceEvent) => void): (arg: BlockPlaceEvent) => void;
    unsubscribe(callback: (arg: BlockPlaceEvent) => void): void;
  }
  export class BlockPotionContainerComponent {
    /**
    Relative level of potion liquid within this block. Valid values are between FluidContainer.minFillLevel (0) and FluidContainer.maxFillLevel (6).
    */
    "fillLevel": number;
    /**
    Source location of the block.
    */
    readonly "location": BlockLocation;
    setPotionType(item: ItemStack): void;
  }
  export class BlockProperties {
    /**
    Type: *string*
    */
    static readonly "active" = "active";
    /**
    Integer property that represents the age of the block. Valid values are between 0 and 15 inclusive.
    */
    static readonly "age" = "age";
    /**
    Boolean property that determines if saplings should grow.
    */
    static readonly "ageBit" = "age_bit";
    /**
    Boolean property that determines if an explosion propagates underwater.
    */
    static readonly "allowUnderwaterBit" = "allow_underwater_bit";
    /**
    Boolean property that determines if a tripwire is attached to another tripwire.
    */
    static readonly "attachedBit" = "attached_bit";
    /**
    String property that represents the type of attachment used by a bell or grindstone block. Valid values are 'standing', 'hanging', 'side' and 'multiple'.
    */
    static readonly "attachment" = "attachment";
    /**
    String property that determines the thickness of a bamboo stalk. Valid values are 'thin' and 'thick'.
    */
    static readonly "bambooLeafSize" = "bamboo_leaf_size";
    /**
    String property that determines the size of bamboo leaves. Valid values are 'no_leaves', 'small_leaves', and 'large_leaves'.
    */
    static readonly "bambooStalkThickness" = "bamboo_stalk_thickness";
    /**
    Type: *string*
    */
    static readonly "bigDripleafHead" = "big_dripleaf_head";
    /**
    String property that represents the tilt state of big dripleaf block. Valid values are 'none', 'unstable', 'partial_tilt' and 'full_tilt'.
    */
    static readonly "bigDripleafTilt" = "big_dripleaf_tilt";
    /**
    Integer property that tracks how many bites of cake have been taken. Valid values are between 0 and 6 inclusive.
    */
    static readonly "biteCounter" = "bite_counter";
    /**
    Type: *string*
    */
    static readonly "blockLightLevel" = "block_light_level";
    /**
    Type: *string*
    */
    static readonly "bloom" = "bloom";
    /**
    Boolean property that determines if a bottle is shown in the first slot of the brewing stand.
    */
    static readonly "brewingStandSlotABit" = "brewing_stand_slot_a_bit";
    /**
    Boolean property that determines if a bottle is shown in the second slot of the brewing stand.
    */
    static readonly "brewingStandSlotBBit" = "brewing_stand_slot_b_bit";
    /**
    Boolean property that determines if a bottle is shown in the third slot of the brewing stand.
    */
    static readonly "brewingStandSlotCBit" = "brewing_stand_slot_c_bit";
    /**
    Boolean property that determines if a button is in a pressed state or not.
    */
    static readonly "buttonPressedBit" = "button_pressed_bit";
    /**
    Integer property that describes how many extra candles are in the same block space. Valid values are between 0 and 3 inclusive.
    */
    static readonly "candles" = "candles";
    /**
    String property that represents the type of liquid in a cauldron. Valid values are 'water', 'powder_snow', and 'lava'.
    */
    static readonly "cauldronLiquid" = "cauldron_liquid";
    /**
    String property that represents the type of work benches that are within Minecraft Education experiences. Valid values are 'compound_creator', 'material_reducer', 'element_constructor' and 'lab_table'.
    */
    static readonly "chemistryTableType" = "chemistry_table_type";
    /**
    String property determines the pattern of quartz and purpur blocks. Valid values are 'default', 'chiseled', 'lines', 'smooth'.
    */
    static readonly "chiselType" = "chisel_type";
    /**
    Integer property that describes how many sea pickles are in a cluster. Valid values are between 0 and 3 inclusive.
    */
    static readonly "clusterCount" = "cluster_count";
    /**
    String property that represents the color of a block, like wool. Valid values are 'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'silver', 'cyan', 'purple', 'blue', 'brown', 'green', 'red' and 'black'.
    */
    static readonly "color" = "color";
    /**
    Boolean property that determines if a torch has a particular color.
    */
    static readonly "colorBit" = "color_bit";
    /**
    Type: *string*
    */
    static readonly "composterFillLevel" = "composter_fill_level";
    /**
    Boolean property that determines if a command block is conditional or not.
    */
    static readonly "conditionalBit" = "conditional_bit";
    /**
    String property that represents the color of a coral block. Valid values are 'blue', 'pink', 'purple', 'red', 'yellow', 'blue dead', 'pink dead', 'red dead', and 'yellow dead'.
    */
    static readonly "coralColor" = "coral_color";
    /**
    Integer property that describes the rotation of coral fans. Valid values are between 0 and 3 inclusive.
    */
    static readonly "coralDirection" = "coral_direction";
    /**
    Type: *string*
    */
    static readonly "coralFanDirection" = "coral_fan_direction";
    /**
    Boolean property that represents the type of hanging for coral fan.
    */
    static readonly "coralHangTypeBit" = "coral_hang_type_bit";
    /**
    Boolean property that describes if a top snow block is covering another block.
    */
    static readonly "coveredBit" = "covered_bit";
    /**
    String property that determines the cracked state of turtle eggs. Valid values are 'no_cracks', 'cracked', and 'max_cracked'.
    */
    static readonly "crackedState" = "cracked_state";
    /**
    String property that determines the damage state of an anvil. Valid values are 'undamaged', 'slightly_damaged', 'very_damaged', and 'broken'
    */
    static readonly "damage" = "damage";
    /**
    Boolean property that determines if coral, coral fans, or sea pickles are dead.
    */
    static readonly "deadBit" = "dead_bit";
    /**
    Type: *string*
    */
    static readonly "deprecated" = "deprecated";
    /**
    Integer property determines the north, south, east, or west direction of a block. Valid values include are south = 0, west = 1, north = 2, east = 3.
    */
    static readonly "direction" = "direction";
    /**
    String property that determines the dirt type of a block. Valid values are 'normal' and 'coarse'.
    */
    static readonly "dirtType" = "dirt_type";
    /**
    Boolean property that determines if a tripwire is disarmed or not.
    */
    static readonly "disarmedBit" = "disarmed_bit";
    /**
    Boolean property that determines if a door's hinge is mirrored or not.
    */
    static readonly "doorHingeBit" = "door_hinge_bit";
    /**
    String property that represents the type of a double plant block. Valid values are 'sunflower', 'syringa', 'grass', 'fern', 'rose', and 'paeonia'.
    */
    static readonly "doublePlantType" = "double_plant_type";
    /**
    Boolean property that describes if bubble columns drag entities down or push them up.
    */
    static readonly "dragDown" = "drag_down";
    /**
    String property that represents the type of a pointed dripstone block. Valid values are 'tip', 'frustum', 'base', 'middle' and 'merge'.
    */
    static readonly "dripstoneThickness" = "dripstone_thickness";
    /**
    Boolean property that determines if an end portal block has an Eye of Ender in it.
    */
    static readonly "endPortalEyeBit" = "end_portal_eye_bit";
    /**
    Boolean property that determines if a TNT block should start its explode sequence.
    */
    static readonly "explodeBit" = "explode_bit";
    /**
    Type: *string*
    */
    static readonly "extinguished" = "extinguished";
    /**
    Integer property that determines the facing direction of some types of blocks. Valid values include down = 0, up = 1, north = 2, south = 3, west = 4, east = 5.
    */
    static readonly "facingDirection" = "facing_direction";
    /**
    Integer property that determines the fill level of a cauldron block. Valid values are between 0 and 6 inclusive.
    */
    static readonly "fillLevel" = "fill_level";
    /**
    String property that represents the type of flow. Valid values are 'poppy', 'orchid', 'allium', 'houstonia', 'tulip_red', 'tulip_orange', 'tulip_white', 'tulip_pink', 'oxeye', 'cornflower' and 'lily_of_the_valley'.
    */
    static readonly "flowerType" = "flower_type";
    /**
    Integer property that represents the rotation of signs and standing banners. Valid values are between 0 and 15 inclusive.
    */
    static readonly "groundSignDirection" = "ground_sign_direction";
    /**
    Type: *string*
    */
    static readonly "growingPlantAge" = "growing_plant_age";
    /**
    Integer property that determines the growth level of crops. Valid values are between 0 and 7 inclusive.
    */
    static readonly "growth" = "growth";
    /**
    Boolean property that represents if a lantern block is hanging or not.
    */
    static readonly "hanging" = "hanging";
    /**
    Boolean property that determines if a block is the pillow side of a bed.
    */
    static readonly "headPieceBit" = "head_piece_bit";
    /**
    Integer property that determines the height of a top snow block. Valid values are between 0 and 7 inclusive.
    */
    static readonly "height" = "height";
    /**
    Type: *string*
    */
    static readonly "honeyLevel" = "honey_level";
    /**
    Integer property that determines which huge mushroom block should be displayed. Valid values are between 0 and 15 inclusive.
    */
    static readonly "hugeMushroomBits" = "huge_mushroom_bits";
    /**
    Boolean property that determines if a block should burn infinitely.
    */
    static readonly "infiniburnBit" = "infiniburn_bit";
    /**
    Boolean property that determines if a fence block is connected to a wall block.
    */
    static readonly "inWallBit" = "in_wall_bit";
    /**
    Boolean property that describes if an item frame block has a map in it.
    */
    static readonly "itemFrameMapBit" = "item_frame_map_bit";
    /**
    Type: *string*
    */
    static readonly "itemFramePhotoBit" = "item_frame_photo_bit";
    /**
    Type: *string*
    */
    static readonly "kelpAge" = "kelp_age";
    /**
    Type: *string*
    */
    static readonly "leverDirection" = "lever_direction";
    /**
    Integer property that represents the level of liquid blocks. Valid values are between 0 and 15 inclusive.
    */
    static readonly "liquidDepth" = "liquid_depth";
    /**
    Boolean property that determines if a block is lit or not.
    */
    static readonly "lit" = "lit";
    /**
    Integer property that represents the moisture level of crop. Valid values are between 0 and 7 inclusive.
    */
    static readonly "moisturizedAmount" = "moisturized_amount";
    /**
    String property that represents the stone type of an Infested Stone block. Valid values are 'stone', 'cobblestone', 'stone_brick', 'mossy_stone_brick', 'cracked_stone_brick' and 'chiseled_stone_brick'.
    */
    static readonly "monsterEggStoneType" = "monster_egg_stone_type";
    /**
    Type: *string*
    */
    static readonly "multiFaceDirectionBits" = "multi_face_direction_bits";
    /**
    String property that represents the leaf type of some block types. Valid values are 'acacia' and 'dark_oak'.
    */
    static readonly "newLeafType" = "new_leaf_type";
    /**
    String property that represents the wood type of certain types of blocks. Valid values are 'acacia' and 'dark_oak'.
    */
    static readonly "newLogType" = "new_log_type";
    /**
    Boolean property that determines if a skull block should drop loot.
    */
    static readonly "noDropBit" = "no_drop_bit";
    /**
    Boolean property that determines if a bed block is occupied.
    */
    static readonly "occupiedBit" = "occupied_bit";
    /**
    String property that represents the leaf type of some block types. Valid values are 'oak', 'spruce', 'birch', and 'jungle'.
    */
    static readonly "oldLeafType" = "old_leaf_type";
    /**
    String property that determines the wood type of certain types of blocks. Valid values are 'oak', 'spruce', 'birch' and 'jungle'.
    */
    static readonly "oldLogType" = "old_log_type";
    /**
    Boolean property that determines if a door, gate, or trapdoor is open.
    */
    static readonly "openBit" = "open_bit";
    /**
    Boolean property that determines if a comparator's output is lit.
    */
    static readonly "outputLitBit" = "output_lit_bit";
    /**
    Boolean property that determines if a comparator is set to subtract output.
    */
    static readonly "outputSubtractBit" = "output_subtract_bit";
    /**
    Boolean property that determines if a leaf block is persistent.
    */
    static readonly "persistentBit" = "persistent_bit";
    /**
    Type: *string*
    */
    static readonly "pillarAxis" = "pillar_axis";
    /**
    String property that determines the orientation of portal blocks. Valid values include 'unknown', 'x', and 'z'.
    */
    static readonly "portalAxis" = "portal_axis";
    /**
    Boolean property that is true when an observer or tripwire sends a redstone signal.
    */
    static readonly "poweredBit" = "powered_bit";
    /**
    Type: *string*
    */
    static readonly "prismarineBlockType" = "prismarine_block_type";
    /**
    Boolean property that returns true if a rail has a redstone signal.
    */
    static readonly "railDataBit" = "rail_data_bit";
    /**
    Integer property determines the orientation of a placed rail block. Valid values are between 0 and 8 inclusive.
    */
    static readonly "railDirection" = "rail_direction";
    /**
    Integer property that determines the signal strength of a redstone signal. Valid values are between 0 and 15 inclusive.
    */
    static readonly "redstoneSignal" = "redstone_signal";
    /**
    Integer property that represents the amount of delay of a repeater. Valid values are between 0 and 3 inclusive.
    */
    static readonly "repeaterDelay" = "repeater_delay";
    /**
    Type: *string*
    */
    static readonly "respawnAnchorCharge" = "respawn_anchor_charge";
    /**
    Type: *string*
    */
    static readonly "rotation" = "rotation";
    /**
    String property that represents the pattern of a sandstone block. Valid values are 'default', 'heiroglyphs', 'cut', and 'smooth'.
    */
    static readonly "sandStoneType" = "sand_stone_type";
    /**
    String property that represents the sand type of a block. Valid values are 'normal' and 'red'.
    */
    static readonly "sandType" = "sand_type";
    /**
    String property that determines the type of the sapling block. Valid values are 'evergreen', 'birch', 'jungle', 'acacia', and 'roofed_oak'.
    */
    static readonly "saplingType" = "sapling_type";
    /**
    String property that determines the type of a sea grass block. Valid values are 'default', 'double_top' and 'double_bot'.
    */
    static readonly "seaGrassType" = "sea_grass_type";
    /**
    String property that represents the type of a sponge block. Valid values are 'dry' and 'wet'.
    */
    static readonly "spongeType" = "sponge_type";
    /**
    Integer property that determines the stability of a scaffolding block. Valid values are between 0 and 5 inclusive.
    */
    static readonly "stability" = "stability";
    /**
    Boolean property that describes if a scaffolding block has been checked for stability.
    */
    static readonly "stabilityCheck" = "stability_check";
    /**
    String property that determines the type of a stone brick block. Valid values are 'default', 'mossy', 'cracked', 'chiseled' and 'smooth'.
    */
    static readonly "stoneBrickType" = "stone_brick_type";
    /**
    String property that represents the type of certain types of stone slab blocks. Valid values are 'smooth_stone', 'sandstone', 'wood', 'cobblestone', 'brick', 'stone_brick', 'quartz' and 'nether_brick'.
    */
    static readonly "stoneSlabType" = "stone_slab_type";
    /**
    String property that represents the type of certain types of stone slab blocks. Valid values are 'red_sandstone', 'purpur', 'prismarine_rough', 'prismarine_dark', 'prismarine_brick', 'mossy_cobblestone', 'smooth_sandstone' and 'red_nether_brick'.
    */
    static readonly "stoneSlabType2" = "stone_slab_type_2";
    /**
    String property that represents the type of certain types of stone slab blocks. Valid values are 'end_stone_brick', 'smooth_red_sandstone', 'polished_andesite', 'andesite', 'diorite', 'polished_diorite', 'granite', and 'polished_granite'.
    */
    static readonly "stoneSlabType3" = "stone_slab_type_3";
    /**
    String property that represents the type of certain types of stone slab blocks. Valid values are 'mossy_stone_brick', 'smooth_quartz', 'stone', 'cut_sandstone', and 'cut_red_sandstone'.
    */
    static readonly "stoneSlabType4" = "stone_slab_type_4";
    /**
    String property that determines the type of a stone block. Valid values are 'stone', 'granite', 'granite_smooth', 'diorite', 'diorite_smooth', 'andesite', and 'andesite_smooth'.
    */
    static readonly "stoneType" = "stone_type";
    /**
    Boolean property that represents if a wood log has been stripped of bark.
    */
    static readonly "strippedBit" = "stripped_bit";
    /**
    String property that represents the state of a structure block. Valid values are 'data', 'save', 'load', 'corner', 'invalid' and 'export'.
    */
    static readonly "structureBlockType" = "structure_block_type";
    /**
    String property that determines which void mode to draw for structure blocks. Valid values are 'void' and 'air'.
    */
    static readonly "structureVoidType" = "structure_void_type";
    /**
    Boolean property that indicates if a tripwire block is suspended.
    */
    static readonly "suspendedBit" = "suspended_bit";
    /**
    String property that represents the type of a tall grass block. Valid values are 'default', 'tall', 'fern', and 'snow'.
    */
    static readonly "tallGrassType" = "tall_grass_type";
    /**
    Boolean property that determines if a hopper block is active or not.
    */
    static readonly "toggleBit" = "toggle_bit";
    /**
    Boolean property that determines if a slab is the top half of the block or not
    */
    static readonly "topSlotBit" = "top_slot_bit";
    /**
    String property that determines the direction of a torch in relation to the block it is attached to. Valid values are 'unknown', 'west', 'east', 'north', 'south', 'top'.
    */
    static readonly "torchFacingDirection" = "torch_facing_direction";
    /**
    Boolean property that determines if a dispenser is triggered.
    */
    static readonly "triggeredBit" = "triggered_bit";
    /**
    String property that represents the amount of turtle eggs in an egg block. Valid values are 'one_egg', 'two_egg', 'three_egg' and 'four_egg'.
    */
    static readonly "turtleEggCount" = "turtle_egg_count";
    /**
    Type: *string*
    */
    static readonly "twistingVinesAge" = "twisting_vines_age";
    /**
    Boolean property that determines if a leaf block or flower block should be updated.
    */
    static readonly "updateBit" = "update_bit";
    /**
    Boolean property that determines if a block is the upper half of an object like a door or a tall plant.
    */
    static readonly "upperBlockBit" = "upper_block_bit";
    /**
    Boolean property that determines if a stair block or trapdoor block is upside-down.
    */
    static readonly "upsideDownBit" = "upside_down_bit";
    /**
    Integer property that represents the facing direction for vines. Valid values are between 0 and 15 inclusive.
    */
    static readonly "vineDirectionBits" = "vine_direction_bits";
    /**
    String property that represents the type of stone used in a wall block. Valid values are 'cobblestone', 'mossy_cobblestone', 'granite', 'diorite', 'andesite', 'sandstone', 'brick', 'stone_brick', 'mossy_stone_brick', 'nether_brick', 'end_brick', 'prismarine', 'red_sandstone' and 'red_nether_brick'.
    */
    static readonly "wallBlockType" = "wall_block_type";
    /**
    String property that determines what kind of connection a wall has to the east. Valid values are 'none', 'short' and 'tall'.
    */
    static readonly "wallConnectionTypeEast" = "wall_connection_type_east";
    /**
    String property that determines what kind of connection a wall has to the north. Valid values are 'none', 'short' and 'tall'.
    */
    static readonly "wallConnectionTypeNorth" = "wall_connection_type_north";
    /**
    String property that determines what kind of connection a wall has to the south. Valid values are 'none', 'short' and 'tall'.
    */
    static readonly "wallConnectionTypeSouth" = "wall_connection_type_south";
    /**
    String property that determines what kind of connection a wall has to the west. Valid values are 'none', 'short' and 'tall'.
    */
    static readonly "wallConnectionTypeWest" = "wall_connection_type_west";
    /**
    Boolean property that determines if a wall should contain a post.
    */
    static readonly "wallPostBit" = "wall_post_bit";
    /**
    Type: *string*
    */
    static readonly "weepingVinesAge" = "weeping_vines_age";
    /**
    Integer property that represents the rotation of stairs. Valid values are between 0 and 3 inclusive.
    */
    static readonly "weirdoDirection" = "weirdo_direction";
    /**
    String property that determines the wood type of a block. Valid values are 'oak', 'spruce', 'birch', 'jungle', 'acacia', and 'dark_oak'.
    */
    static readonly "woodType" = "wood_type";
  }
  export class BlockRaycastOptions {
    /**
    If true, liquid blocks will be considered as blocks that 'stop' the raycast.
    */
    "includeLiquidBlocks": boolean;
    /**
    If true, passable blocks like vines and flowers will be considered as blocks that 'stop' the raycast.
    */
    "includePassableBlocks": boolean;
    /**
    Maximum distance, in blocks, to process the raycast.
    */
    "maxDistance": number;
    constructor();
  }
  export class BlockRecordPlayerComponent {
    clearRecord(): void;
    isPlaying(): boolean;
    setRecord(recordItemType: ItemType): void;
  }
  export class BlockSnowContainerComponent {
    /**
    Relative level of snow within this block. Valid values are between FluidContainer.minFillLevel (0) and FluidContainer.maxFillLevel (6).
    */
    "fillLevel": number;
    /**
    Source location of the block.
    */
    readonly "location": BlockLocation;
  }
  export class BlockType {
    /**
    Represents whether this type of block can be waterlogged.
    */
    readonly "canBeWaterlogged": boolean;
    /**
    Block type name - for example, `minecraft:acacia_stairs`.
    */
    readonly "id": string;
    createDefaultBlockPermutation(): BlockPermutation;
  }
  export class BlockWaterContainerComponent {
    /**
    Represents a color facet of the water.
    */
    "customColor": Color;
    /**
    Relative level of water within this block. Valid values are between FluidContainer.minFillLevel (0) and FluidContainer.maxFillLevel (6).
    */
    "fillLevel": number;
    /**
    Source location of the block.
    */
    readonly "location": BlockLocation;
    addDye(itemType: ItemType): void;
  }
  export class BoolBlockProperty {
    /**
    The name of this property.
    */
    readonly "name": string;
    /**
    A list of valid values for this property.
    */
    readonly "validValues": boolean[];
    /**
    The current value of this property.
    */
    "value": boolean;
  }
  export class ChatEvent {
    /**
    Message that is being broadcast. In a beforeChat event handler, _message_ can be updated with edits before the message is displayed to players.
    */
    "message": string;
    /**
    Player that sent the chat message.
    */
    "sender": Player;
    /**
    If true, this message is directly targeted to one or more players (i.e., is not broadcast.)
    */
    "sendToTargets": boolean;
    /**
    List of players that will receive this message.
    */
    "targets": Player[];
  }
  export class ChatEventSignal {
    subscribe(callback: (arg: ChatEvent) => void): (arg: ChatEvent) => void;
    unsubscribe(callback: (arg: ChatEvent) => void): void;
  }
  export class Color {
    /**
    Determines a color's alpha (opacity) component. Valid values are between 0 (transparent) and 1.0 (opaque).
    */
    "alpha": number;
    /**
    Determines a color's blue component. Valid values are between 0 and 1.0.
    */
    "blue": number;
    /**
    Determines a color's green component. Valid values are between 0 and 1.0.
    */
    "green": number;
    /**
    Determines a color's red component. Valid values are between 0 and 1.0.
    */
    "red": number;
    constructor(red: number, green: number, blue: number, alpha: number);
  }
  export class Container {
    /**
    Contains a count of the slots in the container that are empty.
    */
    readonly "emptySlotsCount": number;
    /**
    Represents the size of the container. For example, a standard single-block chest has a size of 27, for the 27 slots in their inventory.
    */
    readonly "size": number;
    addItem(itemStack: ItemStack): void;
    getItem(slot: number): ItemStack;
    setItem(slot: number, itemStack: ItemStack): void;
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
  }
  export class DataDrivenEntityTriggerEvent {
    /**
    Entity that the event triggered on.
    */
    readonly "entity": Entity;
    /**
    Name of the data driven event being triggered.
    */
    readonly "id": string;
    /**
    A list of modifications to component state that are the effect of this triggered event.
    */
    readonly "modifiers": DefinitionModifier[];
  }
  export class DataDrivenEntityTriggerEventSignal {
    subscribe(callback: (arg: DataDrivenEntityTriggerEvent) => void, options?: EntityDataDrivenTriggerEventOptions): (arg: DataDrivenEntityTriggerEvent) => void;
    unsubscribe(callback: (arg: DataDrivenEntityTriggerEvent) => void): void;
  }
  export class DefinitionModifier {
    /**
    A list of components that will be added via this definition modification.
    */
    readonly "componentGroupsToAdd": string[];
    /**
    A list of components that will be removed via this definition modification.
    */
    readonly "componentGroupsToRemove": string[];
    /**
    A list of entity definition events that will be fired via this update.
    */
    "triggers": Trigger[];
    constructor();
  }
  export class Dimension {
    /**
    Identifier of the dimension.
    */
    readonly "id": string;
    createExplosion(location: Location, radius: number, explosionOptions: ExplosionOptions): void;
    getBlock(location: BlockLocation): Block;
    getBlockFromRay(location: Location, direction: Vector, options?: BlockRaycastOptions): Block;
    getEntities(getEntities?: EntityQueryOptions): EntityIterator;
    getEntitiesAtBlockLocation(location: BlockLocation): Entity[];
    getEntitiesFromRay(location: Location, direction: Vector, options?: EntityRaycastOptions): Entity[];
    getPlayers(getPlayers?: EntityQueryOptions): PlayerIterator;
    isEmpty(location: BlockLocation): boolean;
    runCommand(commandString: string): any;
    spawnEntity(identifier: string, location: BlockLocation | Location): Entity;
    spawnItem(item: ItemStack, location: BlockLocation | Location): Entity;
    spawnParticle(effectName: string, location: Location, molangVariables: MolangVariableMap): void;
  }
  export enum Direction {
    /**
    Represents an object located or facing in the down (z - 1) direction.
    */
    "down" = 0,
    /**
    Represents an object located or facing in the up (z + 1) direction.
    */
    "up" = 1,
    /**
    Represents an object located or facing in the north (z - 1) direction.
    */
    "north" = 2,
    /**
    Represents an object located or facing in the south (z + 1) direction.
    */
    "south" = 3,
    /**
    Represents an object located or facing in the west (x - 1) direction.
    */
    "west" = 4,
    /**
    Represents an object located or facing in the east (x + 1) direction.
    */
    "east" = 5,
  }
  export class Effect {
    /**
    Gets an amplifier that may have been applied to this effect. Sample values range typically from 0 to 4. Example: The effect 'Jump Boost II' will have an amplifier value of 1.
    */
    readonly "amplifier": number;
    /**
    Gets the player-friendly name of this effect.
    */
    readonly "displayName": string;
    /**
    Gets the entire specified duration, in ticks, of this effect.
    */
    readonly "duration": number;
  }
  export class EffectAddEvent {
    /**
    Additional properties and details of the effect.
    */
    "effect": Effect;
    /**
    Additional variant number for the effect.
    */
    "effectState": number;
    /**
    Entity that the effect is being added to.
    */
    "entity": Entity;
  }
  export class EffectAddEventSignal {
    subscribe(callback: (arg: EffectAddEvent) => void, options?: EntityEventOptions): (arg: EffectAddEvent) => void;
    unsubscribe(callback: (arg: EffectAddEvent) => void): void;
  }
  export class EffectType {
    getName(): string;
  }
  export class Enchantment {
    /**
    The level of this enchantment instance.
    */
    "level": number;
    /**
    The enchantment type of this instance.
    */
    readonly "type": EnchantmentType;
    constructor(enchantmentType: EnchantmentType, level?: number);
  }
  export class EnchantmentList {
    /**
    The item slot/type that this collection is applied to.
    */
    readonly "slot": number;
    constructor(enchantmentSlot: number);
    [Symbol.iterator](): Iterator<Enchantment>;
    addEnchantment(enchantment: Enchantment): boolean;
    canAddEnchantment(enchantment: Enchantment): boolean;
    getEnchantment(enchantmentType: EnchantmentType): Enchantment;
    hasEnchantment(enchantmentType: EnchantmentType): number;
    next(): IteratorResult<Enchantment>;
    removeEnchantment(enchantmentType: EnchantmentType): void;
  }
  export class EnchantmentSlot {
    /**
    Type: *number*
    */
    static readonly "all" = 1;
    /**
    Type: *number*
    */
    static readonly "armorFeet" = 4;
    /**
    Type: *number*
    */
    static readonly "armorHead" = 1;
    /**
    Type: *number*
    */
    static readonly "armorLegs" = 8;
    /**
    Type: *number*
    */
    static readonly "armorTorso" = 2;
    /**
    Type: *number*
    */
    static readonly "axe" = 512;
    /**
    Type: *number*
    */
    static readonly "bow" = 32;
    /**
    Type: *number*
    */
    static readonly "carrotStick" = 8192;
    /**
    Type: *number*
    */
    static readonly "cosmeticHead" = 262144;
    /**
    Type: *number*
    */
    static readonly "crossbow" = 65536;
    /**
    Type: *number*
    */
    static readonly "elytra" = 16384;
    /**
    Type: *number*
    */
    static readonly "fishingRod" = 4096;
    /**
    Type: *number*
    */
    static readonly "flintsteel" = 256;
    /**
    Type: *number*
    */
    static readonly "gArmor" = 15;
    /**
    Type: *number*
    */
    static readonly "gDigging" = 3648;
    /**
    Type: *number*
    */
    static readonly "gTool" = 131520;
    /**
    Type: *number*
    */
    static readonly "hoe" = 64;
    /**
    Type: *number*
    */
    static readonly "none" = 0;
    /**
    Type: *number*
    */
    static readonly "pickaxe" = 1024;
    /**
    Type: *number*
    */
    static readonly "shears" = 128;
    /**
    Type: *number*
    */
    static readonly "shield" = 131072;
    /**
    Type: *number*
    */
    static readonly "shovel" = 2048;
    /**
    Type: *number*
    */
    static readonly "spear" = 32768;
    /**
    Type: *number*
    */
    static readonly "sword" = 16;
  }
  export class EnchantmentType {
    /**
    The name of the enchantment type.
    */
    readonly "id": string;
    /**
    The maximum level this type of enchantment can have.
    */
    readonly "maxLevel": number;
  }
  export class Entity {
    /**
    Rotation of the body component of the entity.
    */
    readonly "bodyRotation": number;
    /**
    Dimension that the entity is currently within.
    */
    readonly "dimension": Dimension;
    /**
    Location of the center of the head component of the entity.
    */
    readonly "headLocation": Location;
    /**
    Unique identifier of the entity.
    */
    readonly "id": string;
    /**
    Whether the entity is sneaking - that is, moving more slowly and more quietly.
    */
    "isSneaking": boolean;
    /**
    Current location of the entity.
    */
    readonly "location": Location;
    /**
    Given name of the entity.
    */
    "nameTag": string;
    /**
    Retrieves or sets an entity that is used as the target of AI-related behaviors, like attacking.
    */
    "target": Entity;
    /**
    Velocity of the entity.
    */
    readonly "velocity": Vector;
    /**
    Vector of the current view of the entity.
    */
    readonly "viewVector": Vector;
    addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;
    addTag(tag: string): boolean;
    getBlockFromViewVector(options?: BlockRaycastOptions): Block;
    getComponent(componentId: string): IEntityComponent;
    getComponents(): IEntityComponent[];
    getEffect(effectType: EffectType): Effect;
    getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[];
    getTags(): string[];
    hasComponent(componentId: string): boolean;
    hasTag(tag: string): boolean;
    kill(): void;
    removeTag(tag: string): boolean;
    runCommand(commandString: string): any;
    setVelocity(velocity: Vector): void;
    teleport(location: Location, dimension: Dimension, xRotation: number, yRotation: number): void;
    teleportFacing(location: Location, dimension: Dimension, facingLocation: Location): void;
    triggerEvent(eventName: string): void;
  }
  export class EntityAddRiderComponent {
    /**
    The type of entity that is added as a rider for this entity when spawned under certain conditions.
    */
    readonly "entityType": string;
    /**
    Identifier of this component. Should always be minecraft:addrider.
    */
    readonly "id": string;
    /**
    Optional spawn event to trigger on the rider when that rider is spawned for this entity.
    */
    readonly "spawnEvent": string;
  }
  export class EntityAgeableComponent {
    /**
    List of items that the entity drops when it grows up.
    */
    readonly "dropItems": string[];
    /**
    Amount of time before the entity grows up, -1 for always a baby.
    */
    readonly "duration": number;
    /**
    List of items that can be fed to the entity. Includes 'item' for the item name and 'growth' to define how much time it grows up by.
    */
    readonly "feedItems": EntityDefinitionFeedItem[];
    /**
    Event to run when this entity grows up.
    */
    readonly "growUp": Trigger;
    /**
    Identifier of this component. Should always be minecraft:ageable.
    */
    readonly "id": string;
  }
  export class EntityBreathableComponent {
    /**
    List of blocks this entity can breathe in, in addition to the separate properties for classes of blocks.
    */
    readonly "breatheBlocks": BlockPermutation[];
    /**
    If true, this entity can breathe in air.
    */
    readonly "breathesAir": boolean;
    /**
    If true, this entity can breathe in lava.
    */
    readonly "breathesLava": boolean;
    /**
    If true, this entity can breathe in solid blocks.
    */
    readonly "breathesSolids": boolean;
    /**
    If true, this entity can breathe in water.
    */
    readonly "breathesWater": boolean;
    /**
    If true, this entity will have visible bubbles while in water.
    */
    readonly "generatesBubbles": boolean;
    /**
    Identifier of this component. Should always be minecraft:breathable.
    */
    readonly "id": string;
    /**
    Time in seconds to recover breath to maximum.
    */
    readonly "inhaleTime": number;
    /**
    List of blocks this entity can't breathe in.
    */
    readonly "nonBreatheBlocks": BlockPermutation[];
    /**
    Time in seconds between suffocation damage.
    */
    readonly "suffocateTime": number;
    /**
    Time in seconds the entity can hold its breath.
    */
    readonly "totalSupply": number;
    setAirSupply(value: number): void;
  }
  export class EntityCanClimbComponent {
    /**
    Identifier of this component. Should always be minecraft:can_climb.
    */
    readonly "id": string;
  }
  export class EntityCanFlyComponent {
    /**
    Identifier of this component. Should always be minecraft:can_fly.
    */
    readonly "id": string;
  }
  export class EntityCanPowerJumpComponent {
    /**
    Identifier of this component. Should always be minecraft:can_power_jump.
    */
    readonly "id": string;
  }
  export class EntityColorComponent {
    /**
    Identifier of this component. Should always be minecraft:color.
    */
    readonly "id": string;
    /**
    The palette color value of the entity.
    */
    "value": number;
  }
  export class EntityCreateEvent {
    /**
    New entity that was created.
    */
    "entity": Entity;
  }
  export class EntityCreateEventSignal {
    subscribe(callback: (arg: EntityCreateEvent) => void): (arg: EntityCreateEvent) => void;
    unsubscribe(callback: (arg: EntityCreateEvent) => void): void;
  }
  export class EntityDataDrivenTriggerEventOptions {
    /**
    If this value is set, this event will only fire for entities that match the entities within this collection.
    */
    "entities": Entity[];
    /**
    If this value is set, this event will only fire if the impacted entities' type matches this parameter.
    */
    "entityTypes": string[];
    /**
    If this value is set, this event will only fire if the impacted triggered event matches one of the events listed in this parameter.
    */
    "eventTypes": string[];
    constructor();
  }
  export class EntityDefinitionFeedItem {
    /**
    The amount by which an entity's age will increase when fed this item. Values usually range between 0 and 1.
    */
    readonly "growth": number;
    /**
    Identifier of type of item that can be fed. If a namespace is not specified, 'minecraft:' is assumed. Example values include 'wheat' or 'golden_apple'.
    */
    readonly "item": string;
  }
  export class EntityEventOptions {
    /**
    If this value is set, this event will only fire for entities that match the entities within this collection.
    */
    "entities": Entity[];
    /**
    If this value is set, this event will only fire if the impacted entities' type matches this parameter.
    */
    "entityTypes": string[];
    constructor();
  }
  export class EntityFireImmuneComponent {
    /**
    Identifier of this component. Should always be minecraft:fire_immune.
    */
    readonly "id": string;
  }
  export class EntityFloatsInLiquidComponent {
    /**
    Identifier of this component. Should always be minecraft:floats_in_liquid.
    */
    readonly "id": string;
  }
  export class EntityFlyingSpeedComponent {
    /**
    Identifier of this component. Should always be minecraft:flying_speed.
    */
    readonly "id": string;
    /**
    Speed while flying value of the entity.
    */
    "value": number;
  }
  export class EntityFrictionModifierComponent {
    /**
    Identifier of this component. Should always be minecraft:friction_modifier.
    */
    readonly "id": string;
    /**
    The higher the number, the more the friction affects this entity. A value of 1.0 means regular friction, while 2.0 means twice as much.
    */
    "value": number;
  }
  export class EntityGroundOffsetComponent {
    /**
    Identifier of this component. Should always be minecraft:ground_offset.
    */
    readonly "id": string;
    /**
    The value of the entity's offset from the terrain, in blocks.
    */
    "value": number;
  }
  export class EntityHealableComponent {
    /**
    A set of filters for when these Healable items would apply.
    */
    readonly "filters": FilterGroup;
    /**
    Determines if an item can be used regardless of the entity being at full health.
    */
    readonly "forceUse": boolean;
    /**
    Identifier of this component. Should always be minecraft:healable.
    */
    readonly "id": string;
    /**
    A set of items that can specifically heal this entity.
    */
    readonly "items": FeedItem[];
  }
  export class EntityHealthComponent {
    /**
    Read-only. Returns the current value of health for the entity.
    */
    readonly "current": number;
    /**
    Identifier of this component. Should always be minecraft:health.
    */
    readonly "id": string;
    /**
    Value for health as defined through entity components.
    */
    readonly "value": number;
    resetToDefaultValue(): void;
    resetToMaxValue(): void;
    resetToMinValue(): void;
    setCurrent(value: number): void;
  }
  export class EntityHitEvent {
    /**
    Entity that made a hit/melee attack.
    */
    readonly "entity": Entity;
    /**
    Block that was hit by the attack, or undefined if the hit attack did not hit a block. If both hitEntity and hitBlock are undefined, then the entity basically swiped into the air.
    */
    readonly "hitBlock": Block;
    /**
    Entity that was hit by the attack, or undefined if the hit attack did not hit an entity. If both hitEntity and hitBlock are undefined, then the entity basically swiped into the air.
    */
    readonly "hitEntity": Entity;
  }
  export class EntityHitEventSignal {
    subscribe(callback: (arg: EntityHitEvent) => void, options?: EntityEventOptions): (arg: EntityHitEvent) => void;
    unsubscribe(callback: (arg: EntityHitEvent) => void): void;
  }
  export class EntityHurtEvent {
    /**
    A summary of the reason that damage was caused.
    */
    readonly "cause": string;
    /**
    Describes the amount of damage caused.
    */
    readonly "damage": number;
    /**
    Optional entity that caused the damaging attack, or undefined if the hurt reason was not because of another entity.
    */
    readonly "damagingEntity": Entity;
    /**
    Entity that was hurt.
    */
    readonly "hurtEntity": Entity;
    /**
    Optional entity for a projectile that potentially hurt an entity.
    */
    readonly "projectile": Entity;
  }
  export class EntityHurtEventSignal {
    subscribe(callback: (arg: EntityHurtEvent) => void, options?: EntityEventOptions): (arg: EntityHurtEvent) => void;
    unsubscribe(callback: (arg: EntityHurtEvent) => void): void;
  }
  export class EntityInventoryComponent {
    /**
    Number of slots that this entity can gain per extra strength.
    */
    readonly "additionalSlotsPerStrength": number;
    /**
    If true, the contents of this inventory can be removed by a hopper.
    */
    readonly "canBeSiphonedFrom": boolean;
    /**
    Defines the interactions with this entity for healing it.
    */
    readonly "container": InventoryComponentContainer;
    /**
    Type of container this entity has.
    */
    readonly "containerType": string;
    /**
    Identifier of this component. Should always be minecraft:healable.
    */
    readonly "id": string;
    /**
    Number of slots the container has.
    */
    readonly "inventorySize": number;
    /**
    If true, the entity will not drop it's inventory on death.
    */
    readonly "private": boolean;
    /**
    If true, the entity's inventory can only be accessed by its owner or itself.
    */
    readonly "restrictToOwner": boolean;
  }
  export class EntityIsBabyComponent {
    /**
    Identifier of this component. Should always be minecraft:is_baby.
    */
    readonly "id": string;
  }
  export class EntityIsChargedComponent {
    /**
    Identifier of this component. Should always be minecraft:is_charged.
    */
    readonly "id": string;
  }
  export class EntityIsChestedComponent {
    /**
    Identifier of this component. Should always be minecraft:is_chested.
    */
    readonly "id": string;
  }
  export class EntityIsDyableComponent {
    /**
    Identifier of this component. Should always be minecraft:is_dyeable.
    */
    readonly "id": string;
  }
  export class EntityIsHiddenWhenInvisibleComponent {
    /**
    Identifier of this component. Should always be minecraft:is_hidden_when_invisible.
    */
    readonly "id": string;
  }
  export class EntityIsIgnitedComponent {
    /**
    Identifier of this component. Should always be minecraft:is_ignited.
    */
    readonly "id": string;
  }
  export class EntityIsIllagerCaptainComponent {
    /**
    Identifier of this component. Should always be minecraft:is_illager_captain.
    */
    readonly "id": string;
  }
  export class EntityIsSaddledComponent {
    /**
    Identifier of this component. Should always be minecraft:is_saddled.
    */
    readonly "id": string;
  }
  export class EntityIsShakingComponent {
    /**
    Identifier of this component. Should always be minecraft:is_shaking.
    */
    readonly "id": string;
  }
  export class EntityIsShearedComponent {
    /**
    Identifier of this component. Should always be minecraft:is_sheared.
    */
    readonly "id": string;
  }
  export class EntityIsStackableComponent {
    /**
    Identifier of this component. Should always be minecraft:is_stackable.
    */
    readonly "id": string;
  }
  export class EntityIsStunnedComponent {
    /**
    Identifier of this component. Should always be minecraft:is_stunned.
    */
    readonly "id": string;
  }
  export class EntityIsTamedComponent {
    /**
    Identifier of this component. Should always be minecraft:is_tamed.
    */
    readonly "id": string;
  }
  export class EntityItemComponent {
    /**
    Item stack represented by this entity in the world.
    */
    readonly "itemStack": ItemStack;
  }
  export class EntityIterator {
    [Symbol.iterator](): Iterator<Entity>;
    next(): IteratorResult<Entity>;
  }
  export class EntityLavaMovementComponent {
    /**
    Read-only. Returns the current value of movement speed on lava for the entity.
    */
    readonly "current": number;
    /**
    Identifier of this component. Should always be minecraft:lava_movement.
    */
    readonly "id": string;
    /**
    Value for movement speed on lava as defined through entity components.
    */
    readonly "value": number;
    resetToDefaultValue(): void;
    resetToMaxValue(): void;
    resetToMinValue(): void;
    setCurrent(value: number): void;
  }
  export class EntityLeashableComponent {
    /**
    Identifier of this component. Should always be minecraft:leashable.
    */
    readonly "id": string;
    /**
    Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it.
    */
    readonly "softDistance": number;
    leash(leashHolder: Entity): void;
    unleash(): void;
  }
  export class EntityMarkVariantComponent {
    /**
    Identifier of this component. Should always be minecraft:mark_variant.
    */
    readonly "id": string;
    /**
    The identifier of the variant. By convention, 0 is the identifier of the base entity.
    */
    "value": number;
  }
  export class EntityMountTamingComponent {
    /**
    Identifier of this component. Should always be minecraft:mount_taming.
    */
    readonly "id": string;
    setTamed(showParticles: boolean): void;
  }
  export class EntityMovementAmphibiousComponent {
    /**
    Identifier of this component. Should always be minecraft:movement.amphibious.
    */
    readonly "id": string;
    /**
    The maximum number in degrees the mob can turn per tick.
    */
    readonly "maxTurn": number;
  }
  export class EntityMovementBasicComponent {
    /**
    Identifier of this component. Should always be minecraft:movement.basic.
    */
    readonly "id": string;
    /**
    The maximum number in degrees the mob can turn per tick.
    */
    readonly "maxTurn": number;
  }
  export class EntityMovementComponent {
    /**
    Read-only. Returns the current value of default movement speed for the entity.
    */
    readonly "current": number;
    /**
    Identifier of this component. Should always be minecraft:movement.
    */
    readonly "id": string;
    /**
    Value for default movement speed as defined through entity components.
    */
    readonly "value": number;
    resetToDefaultValue(): void;
    resetToMaxValue(): void;
    resetToMinValue(): void;
    setCurrent(value: number): void;
  }
  export class EntityMovementFlyComponent {
    /**
    Identifier of this component. Should always be minecraft:movement.fly.
    */
    readonly "id": string;
    /**
    The maximum number in degrees the mob can turn per tick.
    */
    readonly "maxTurn": number;
  }
  export class EntityMovementGenericComponent {
    /**
    Identifier of this component. Should always be minecraft:movement.generic.
    */
    readonly "id": string;
    /**
    The maximum number in degrees the mob can turn per tick.
    */
    readonly "maxTurn": number;
  }
  export class EntityMovementGlideComponent {
    /**
    Identifier of this component. Should always be minecraft:movement.glide.
    */
    readonly "id": string;
    /**
    The maximum number in degrees the mob can turn per tick.
    */
    readonly "maxTurn": number;
    /**
    Speed in effect when the entity is turning.
    */
    readonly "speedWhenTurning": number;
    /**
    Start speed during a glide.
    */
    readonly "startSpeed": number;
  }
  export class EntityMovementHoverComponent {
    /**
    Identifier of this component. Should always be minecraft:movement.hover.
    */
    readonly "id": string;
    /**
    The maximum number in degrees the mob can turn per tick.
    */
    readonly "maxTurn": number;
  }
  export class EntityMovementJumpComponent {
    /**
    Identifier of this component. Should always be minecraft:movement.jump.
    */
    readonly "id": string;
    /**
    The maximum number in degrees the mob can turn per tick.
    */
    readonly "maxTurn": number;
  }
  export class EntityMovementSkipComponent {
    /**
    Identifier of this component. Should always be minecraft:movement.skip.
    */
    readonly "id": string;
    /**
    The maximum number in degrees the mob can turn per tick.
    */
    readonly "maxTurn": number;
  }
  export class EntityMovementSwayComponent {
    /**
    Identifier of this component. Should always be minecraft:movement.sway.
    */
    readonly "id": string;
    /**
    The maximum number in degrees the mob can turn per tick.
    */
    readonly "maxTurn": number;
    /**
    Amplitude of the sway motion.
    */
    readonly "swayAmplitude": number;
    /**
    Amount of sway frequency.
    */
    readonly "swayFrequency": number;
  }
  export class EntityNavigationClimbComponent {
    /**
    Tells the pathfinder to avoid blocks that cause damage when finding a path.
    */
    readonly "avoidDamageBlocks": boolean;
    /**
    Tells the pathfinder to avoid portals (like nether portals) when finding a path.
    */
    readonly "avoidPortals": boolean;
    /**
    Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
    */
    readonly "avoidSun": boolean;
    /**
    Tells the pathfinder to avoid water when creating a path.
    */
    readonly "avoidWater": boolean;
    /**
    Tells the pathfinder whether or not it can jump out of water (like a dolphin).
    */
    readonly "canBreach": boolean;
    /**
    Tells the pathfinder that it can path through a closed door and break it.
    */
    readonly "canBreakDoors": boolean;
    /**
    Tells the pathfinder whether or not it can float.
    */
    readonly "canFloat": boolean;
    /**
    Tells the pathfinder whether or not it can jump up blocks.
    */
    readonly "canJump": boolean;
    /**
    Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
    */
    readonly "canOpenDoors": boolean;
    /**
    Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
    */
    readonly "canOpenIronDoors": boolean;
    /**
    Whether a path can be created through a door.
    */
    readonly "canPassDoors": boolean;
    /**
    Tells the pathfinder that it can start pathing when in the air.
    */
    readonly "canPathFromAir": boolean;
    /**
    Tells the pathfinder whether or not it can travel on the surface of the lava.
    */
    readonly "canPathOverLava": boolean;
    /**
    Tells the pathfinder whether or not it can travel on the surface of the water.
    */
    readonly "canPathOverWater": boolean;
    /**
    Tells the pathfinder whether or not it will be pulled down by gravity while in water.
    */
    readonly "canSink": boolean;
    /**
    Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
    */
    readonly "canSwim": boolean;
    /**
    Tells the pathfinder whether or not it can walk on the ground outside water.
    */
    readonly "canWalk": boolean;
    /**
    Tells the pathfinder whether or not it can travel in lava like walking on ground.
    */
    readonly "canWalkInLava": boolean;
    /**
    Identifier of this component. Should always be minecraft:navigation.climb.
    */
    readonly "id": string;
    /**
    Tells the pathfinder whether or not it can walk on the ground or go underwater.
    */
    readonly "isAmphibious": boolean;
  }
  export class EntityNavigationFloatComponent {
    /**
    Tells the pathfinder to avoid blocks that cause damage when finding a path.
    */
    readonly "avoidDamageBlocks": boolean;
    /**
    Tells the pathfinder to avoid portals (like nether portals) when finding a path.
    */
    readonly "avoidPortals": boolean;
    /**
    Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
    */
    readonly "avoidSun": boolean;
    /**
    Tells the pathfinder to avoid water when creating a path.
    */
    readonly "avoidWater": boolean;
    /**
    Tells the pathfinder whether or not it can jump out of water (like a dolphin).
    */
    readonly "canBreach": boolean;
    /**
    Tells the pathfinder that it can path through a closed door and break it.
    */
    readonly "canBreakDoors": boolean;
    /**
    Tells the pathfinder whether or not it can float.
    */
    readonly "canFloat": boolean;
    /**
    Tells the pathfinder whether or not it can jump up blocks.
    */
    readonly "canJump": boolean;
    /**
    Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
    */
    readonly "canOpenDoors": boolean;
    /**
    Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
    */
    readonly "canOpenIronDoors": boolean;
    /**
    Whether a path can be created through a door.
    */
    readonly "canPassDoors": boolean;
    /**
    Tells the pathfinder that it can start pathing when in the air.
    */
    readonly "canPathFromAir": boolean;
    /**
    Tells the pathfinder whether or not it can travel on the surface of the lava.
    */
    readonly "canPathOverLava": boolean;
    /**
    Tells the pathfinder whether or not it can travel on the surface of the water.
    */
    readonly "canPathOverWater": boolean;
    /**
    Tells the pathfinder whether or not it will be pulled down by gravity while in water.
    */
    readonly "canSink": boolean;
    /**
    Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
    */
    readonly "canSwim": boolean;
    /**
    Tells the pathfinder whether or not it can walk on the ground outside water.
    */
    readonly "canWalk": boolean;
    /**
    Tells the pathfinder whether or not it can travel in lava like walking on ground.
    */
    readonly "canWalkInLava": boolean;
    /**
    Identifier of this component. Should always be minecraft:navigation.float.
    */
    readonly "id": string;
    /**
    Tells the pathfinder whether or not it can walk on the ground or go underwater.
    */
    readonly "isAmphibious": boolean;
  }
  export class EntityNavigationFlyComponent {
    /**
    Tells the pathfinder to avoid blocks that cause damage when finding a path.
    */
    readonly "avoidDamageBlocks": boolean;
    /**
    Tells the pathfinder to avoid portals (like nether portals) when finding a path.
    */
    readonly "avoidPortals": boolean;
    /**
    Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
    */
    readonly "avoidSun": boolean;
    /**
    Tells the pathfinder to avoid water when creating a path.
    */
    readonly "avoidWater": boolean;
    /**
    Tells the pathfinder whether or not it can jump out of water (like a dolphin).
    */
    readonly "canBreach": boolean;
    /**
    Tells the pathfinder that it can path through a closed door and break it.
    */
    readonly "canBreakDoors": boolean;
    /**
    Tells the pathfinder whether or not it can float.
    */
    readonly "canFloat": boolean;
    /**
    Tells the pathfinder whether or not it can jump up blocks.
    */
    readonly "canJump": boolean;
    /**
    Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
    */
    readonly "canOpenDoors": boolean;
    /**
    Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
    */
    readonly "canOpenIronDoors": boolean;
    /**
    Whether a path can be created through a door.
    */
    readonly "canPassDoors": boolean;
    /**
    Tells the pathfinder that it can start pathing when in the air.
    */
    readonly "canPathFromAir": boolean;
    /**
    Tells the pathfinder whether or not it can travel on the surface of the lava.
    */
    readonly "canPathOverLava": boolean;
    /**
    Tells the pathfinder whether or not it can travel on the surface of the water.
    */
    readonly "canPathOverWater": boolean;
    /**
    Tells the pathfinder whether or not it will be pulled down by gravity while in water.
    */
    readonly "canSink": boolean;
    /**
    Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
    */
    readonly "canSwim": boolean;
    /**
    Tells the pathfinder whether or not it can walk on the ground outside water.
    */
    readonly "canWalk": boolean;
    /**
    Tells the pathfinder whether or not it can travel in lava like walking on ground.
    */
    readonly "canWalkInLava": boolean;
    /**
    Identifier of this component. Should always be minecraft:navigation.fly.
    */
    readonly "id": string;
    /**
    Tells the pathfinder whether or not it can walk on the ground or go underwater.
    */
    readonly "isAmphibious": boolean;
  }
  export class EntityNavigationGenericComponent {
    /**
    Tells the pathfinder to avoid blocks that cause damage when finding a path.
    */
    readonly "avoidDamageBlocks": boolean;
    /**
    Tells the pathfinder to avoid portals (like nether portals) when finding a path.
    */
    readonly "avoidPortals": boolean;
    /**
    Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
    */
    readonly "avoidSun": boolean;
    /**
    Tells the pathfinder to avoid water when creating a path.
    */
    readonly "avoidWater": boolean;
    /**
    Tells the pathfinder whether or not it can jump out of water (like a dolphin).
    */
    readonly "canBreach": boolean;
    /**
    Tells the pathfinder that it can path through a closed door and break it.
    */
    readonly "canBreakDoors": boolean;
    /**
    Tells the pathfinder whether or not it can float.
    */
    readonly "canFloat": boolean;
    /**
    Tells the pathfinder whether or not it can jump up blocks.
    */
    readonly "canJump": boolean;
    /**
    Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
    */
    readonly "canOpenDoors": boolean;
    /**
    Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
    */
    readonly "canOpenIronDoors": boolean;
    /**
    Whether a path can be created through a door.
    */
    readonly "canPassDoors": boolean;
    /**
    Tells the pathfinder that it can start pathing when in the air.
    */
    readonly "canPathFromAir": boolean;
    /**
    Tells the pathfinder whether or not it can travel on the surface of the lava.
    */
    readonly "canPathOverLava": boolean;
    /**
    Tells the pathfinder whether or not it can travel on the surface of the water.
    */
    readonly "canPathOverWater": boolean;
    /**
    Tells the pathfinder whether or not it will be pulled down by gravity while in water.
    */
    readonly "canSink": boolean;
    /**
    Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
    */
    readonly "canSwim": boolean;
    /**
    Tells the pathfinder whether or not it can walk on the ground outside water.
    */
    readonly "canWalk": boolean;
    /**
    Tells the pathfinder whether or not it can travel in lava like walking on ground.
    */
    readonly "canWalkInLava": boolean;
    /**
    Identifier of this component. Should always be minecraft:navigation.generic.
    */
    readonly "id": string;
    /**
    Tells the pathfinder whether or not it can walk on the ground or go underwater.
    */
    readonly "isAmphibious": boolean;
  }
  export class EntityNavigationHoverComponent {
    /**
    Tells the pathfinder to avoid blocks that cause damage when finding a path.
    */
    readonly "avoidDamageBlocks": boolean;
    /**
    Tells the pathfinder to avoid portals (like nether portals) when finding a path.
    */
    readonly "avoidPortals": boolean;
    /**
    Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
    */
    readonly "avoidSun": boolean;
    /**
    Tells the pathfinder to avoid water when creating a path.
    */
    readonly "avoidWater": boolean;
    /**
    Tells the pathfinder whether or not it can jump out of water (like a dolphin).
    */
    readonly "canBreach": boolean;
    /**
    Tells the pathfinder that it can path through a closed door and break it.
    */
    readonly "canBreakDoors": boolean;
    /**
    Tells the pathfinder whether or not it can float.
    */
    readonly "canFloat": boolean;
    /**
    Tells the pathfinder whether or not it can jump up blocks.
    */
    readonly "canJump": boolean;
    /**
    Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
    */
    readonly "canOpenDoors": boolean;
    /**
    Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
    */
    readonly "canOpenIronDoors": boolean;
    /**
    Whether a path can be created through a door.
    */
    readonly "canPassDoors": boolean;
    /**
    Tells the pathfinder that it can start pathing when in the air.
    */
    readonly "canPathFromAir": boolean;
    /**
    Tells the pathfinder whether or not it can travel on the surface of the lava.
    */
    readonly "canPathOverLava": boolean;
    /**
    Tells the pathfinder whether or not it can travel on the surface of the water.
    */
    readonly "canPathOverWater": boolean;
    /**
    Tells the pathfinder whether or not it will be pulled down by gravity while in water.
    */
    readonly "canSink": boolean;
    /**
    Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
    */
    readonly "canSwim": boolean;
    /**
    Tells the pathfinder whether or not it can walk on the ground outside water.
    */
    readonly "canWalk": boolean;
    /**
    Tells the pathfinder whether or not it can travel in lava like walking on ground.
    */
    readonly "canWalkInLava": boolean;
    /**
    Identifier of this component. Should always be minecraft:navigation.hover.
    */
    readonly "id": string;
    /**
    Tells the pathfinder whether or not it can walk on the ground or go underwater.
    */
    readonly "isAmphibious": boolean;
  }
  export class EntityNavigationWalkComponent {
    /**
    Tells the pathfinder to avoid blocks that cause damage when finding a path.
    */
    readonly "avoidDamageBlocks": boolean;
    /**
    Tells the pathfinder to avoid portals (like nether portals) when finding a path.
    */
    readonly "avoidPortals": boolean;
    /**
    Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
    */
    readonly "avoidSun": boolean;
    /**
    Tells the pathfinder to avoid water when creating a path.
    */
    readonly "avoidWater": boolean;
    /**
    Tells the pathfinder whether or not it can jump out of water (like a dolphin).
    */
    readonly "canBreach": boolean;
    /**
    Tells the pathfinder that it can path through a closed door and break it.
    */
    readonly "canBreakDoors": boolean;
    /**
    Tells the pathfinder whether or not it can float.
    */
    readonly "canFloat": boolean;
    /**
    Tells the pathfinder whether or not it can jump up blocks.
    */
    readonly "canJump": boolean;
    /**
    Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
    */
    readonly "canOpenDoors": boolean;
    /**
    Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
    */
    readonly "canOpenIronDoors": boolean;
    /**
    Whether a path can be created through a door.
    */
    readonly "canPassDoors": boolean;
    /**
    Tells the pathfinder that it can start pathing when in the air.
    */
    readonly "canPathFromAir": boolean;
    /**
    Tells the pathfinder whether or not it can travel on the surface of the lava.
    */
    readonly "canPathOverLava": boolean;
    /**
    Tells the pathfinder whether or not it can travel on the surface of the water.
    */
    readonly "canPathOverWater": boolean;
    /**
    Tells the pathfinder whether or not it will be pulled down by gravity while in water.
    */
    readonly "canSink": boolean;
    /**
    Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
    */
    readonly "canSwim": boolean;
    /**
    Tells the pathfinder whether or not it can walk on the ground outside water.
    */
    readonly "canWalk": boolean;
    /**
    Tells the pathfinder whether or not it can travel in lava like walking on ground.
    */
    readonly "canWalkInLava": boolean;
    /**
    Identifier of this component. Should always be minecraft:navigation.swim.
    */
    readonly "id": string;
    /**
    Tells the pathfinder whether or not it can walk on the ground or go underwater.
    */
    readonly "isAmphibious": boolean;
  }
  export class EntityPushThroughComponent {
    /**
    Identifier of this component. Should always be minecraft:push_through.
    */
    readonly "id": string;
    /**
    The value of the entity's push-through, in blocks.
    */
    "value": number;
  }
  export class EntityQueryOptions {
    /**
    Limits the number of entities to return, opting for the closest N entities as specified by this property. The location value must also be specified on the query options object.
    */
    "closest": number;
    /**
    Excludes entities that match one or more of the specified families.
    */
    "excludeFamilies": string[];
    /**
    Excludes entities if have a specific gamemode that matches the specified gamemode.
    */
    "excludeGameModes": GameMode[];
    /**
    Excludes entities that have a name that match one of the specified values.
    */
    "excludeNames": string[];
    /**
    Excludes entities with a tag that matches one of the specified values.
    */
    "excludeTags": string[];
    /**
    Excludes entities if they are one of the specified types.
    */
    "excludeTypes": string[];
    /**
    If specified, includes entities that match all of the specified families.
    */
    "families": string[];
    /**
    Limits the number of entities to return, opting for the farthest N entities as specified by this property. The location value must also be specified on the query options object.
    */
    "farthest": number;
    /**
    If specified, includes entities with a gamemode that matches the specified gamemode.
    */
    "gameMode": GameMode;
    /**
    Adds a seed location to the query that is used in conjunction with closest, farthest, limit, volume, and distance properties.
    */
    "location": Location;
    /**
    If specified, includes entities that are less than this distance away from the location specified in the location property.
    */
    "maxDistance": number;
    /**
    If specified, will only include entities that have at most this horizontal rotation.
    */
    "maxHorizontalRotation": number;
    /**
    If defined, only players that have at most this level are returned.
    */
    "maxLevel": number;
    /**
    If specified, only entities that have at most this vertical rotation are returned.
    */
    "maxVerticalRotation": number;
    /**
    If specified, includes entities that are least this distance away from the location specified in the location property.
    */
    "minDistance": number;
    /**
    If specified, will only include entities that have at a minimum this horizontal rotation.
    */
    "minHorizontalRotation": number;
    /**
    If defined, only players that have at least this level are returned.
    */
    "minLevel": number;
    /**
    If specified, will only include entities that have at least this vertical rotation.
    */
    "minVerticalRotation": number;
    /**
    Includes entities with the specified name.
    */
    "name": string;
    /**
    Gets/sets a collection of EntityQueryScoreOptions objects with filters for specific scoreboard objectives.
    */
    "scoreOptions": EntityQueryScoreOptions[];
    /**
    Includes entities that match all of the specified tags.
    */
    "tags": string[];
    /**
    If defined, entities that match this type are included.
    */
    "type": string;
    /**
    In conjunction with location, specified a cuboid volume of entities to include.
    */
    "volume": BlockAreaSize;
    constructor();
  }
  export class EntityQueryScoreOptions {
    /**
    If set to true, entities and players within this score range are excluded from query results.
    */
    "exclude": boolean;
    /**
    If defined, only players that have a score equal to or under maxScore are included.
    */
    "maxScore": number;
    /**
    If defined, only players that have a score equal to or over minScore are included.
    */
    "minScore": number;
    /**
    Identifier of the scoreboard objective to filter on.
    */
    "objective": string;
    constructor();
  }
  export class EntityRaycastOptions {
    /**
    Maximum distance, in blocks, to process the raycast.
    */
    "maxDistance": number;
    constructor();
  }
  export class EntityRideableComponent {
    /**
    Zero-based index of the seat that can used to control this entity.
    */
    readonly "controllingSeat": number;
    /**
    Determines whether interactions are not supported if the entity is crouching.
    */
    readonly "crouchingSkipInteract": boolean;
    /**
    A string-list of entity types that this entity can support as riders.
    */
    readonly "familyTypes": string[];
    /**
    Identifier of this component. Should always be minecraft:rideable.
    */
    readonly "id": string;
    /**
    Set of text that should be displayed when a player is looking to ride on this entity (commonly with touch-screen controls).
    */
    readonly "interactText": string;
    /**
    If true, this entity will pull in entities that are in the correct family_types into any available seat.
    */
    readonly "pullInEntities": boolean;
    /**
    If true, this entity will be picked when looked at by the rider.
    */
    readonly "riderCanInteract": boolean;
    /**
    Number of seats for riders defined for this entity.
    */
    readonly "seatCount": number;
    /**
    The list of positions and number of riders for each position for entities riding this entity.
    */
    readonly "seats": Seat[];
    addRider(rider: Entity): boolean;
    ejectRider(rider: Entity): void;
    ejectRiders(): void;
  }
  export class EntityScaleComponent {
    /**
    Identifier of this component. Should always be minecraft:scale.
    */
    readonly "id": string;
    /**
    The value of the scale. 1.0 means the entity will appear at the scale they are defined in their model. Higher numbers make the entity bigger.
    */
    "value": number;
  }
  export class EntitySkinIdComponent {
    /**
    Identifier of this component. Should always be minecraft:skin_id.
    */
    readonly "id": string;
    /**
    The identifier of the skin. By convention, 0 is the identifier of the base skin.
    */
    "value": number;
  }
  export class EntityStrengthComponent {
    /**
    Identifier of this component. Should always be minecraft:strength.
    */
    readonly "id": string;
    /**
    Maximum strength of this entity, as defined in the entity type definition.
    */
    readonly "max": number;
    /**
    Current strength value of this entity, after any effects or component updates are applied.
    */
    readonly "value": number;
  }
  export class EntityTameableComponent {
    /**
    Identifier of this component. Should always be minecraft:tameable.
    */
    readonly "id": string;
    /**
    The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100%
    */
    readonly "probability": number;
    /**
    Event to run when this entity becomes tamed.
    */
    readonly "tameEvent": Trigger;
    /**
    The list of items that can be used to tame this entity.
    */
    readonly "tameItems": string[];
    tame(): boolean;
  }
  export class EntityType {
    /**
    Type: *string*
    */
    readonly "id": string;
  }
  export class EntityTypeIterator {
    [Symbol.iterator](): Iterator<EntityType>;
    next(): IteratorResult<EntityType>;
  }
  export class EntityTypes {
    get(identifier: string): EntityType;
    getAll(): EntityTypeIterator;
  }
  export class EntityUnderwaterMovementComponent {
    /**
    Read-only. Returns the current value of movement speed underwater for the entity.
    */
    readonly "current": number;
    /**
    Identifier of this component. Should always be minecraft:underwater_movement.
    */
    readonly "id": string;
    /**
    Value for movement speed underwater as defined through entity components.
    */
    readonly "value": number;
    resetToDefaultValue(): void;
    resetToMaxValue(): void;
    resetToMinValue(): void;
    setCurrent(value: number): void;
  }
  export class EntityVariantComponent {
    /**
    Identifier of this component. Should always be minecraft:variant.
    */
    readonly "id": string;
    /**
    The identifier of the variant. By convention, 0 is the identifier of the base entity.
    */
    readonly "value": number;
  }
  export class EntityWantsJockeyComponent {
    /**
    Identifier of this component. Should always be minecraft:wants_jockey.
    */
    readonly "id": string;
  }
  export class Events {
    /**
    This event fires before a chat message is broadcast or delivered. The event can be canceled, and the message can also be updated.
    */
    readonly "beforeChat": BeforeChatEventSignal;
    /**
    This event is fired before the triggering of an entity event that updates the component definition state of an entity. Within this event, you can cancel or shape the impacted components and event triggers.
    */
    readonly "beforeDataDrivenEntityTriggerEvent": BeforeDataDrivenEntityTriggerEventSignal;
    /**
    This event is fired before an explosion occurs.
    */
    readonly "beforeExplosion": BeforeExplosionEventSignal;
    /**
    For custom items, this event is triggered before the set of defined components for the item change in response to a triggered event. Note that this event is only fired for custom data-driven items.
    */
    readonly "beforeItemDefinitionEvent": BeforeItemDefinitionEventSignal;
    /**
    This event fires before an item is used by an entity or player.
    */
    readonly "beforeItemUse": BeforeItemUseEventSignal;
    /**
    This event fires before an item is used on a block by an entity or player.
    */
    readonly "beforeItemUseOn": BeforeItemUseOnEventSignal;
    /**
    Fires before a piston is activated.
    */
    readonly "beforePistonActivate": BeforePistonActivateEventSignal;
    /**
    This event fires for a block that is broken by a player.
    */
    readonly "blockBreak": BlockBreakEventSignal;
    /**
    This event fires for each BlockLocation destroyed by an explosion. It is fired after the blocks have already been destroyed.
    */
    readonly "blockExplode": BlockExplodeEventSignal;
    /**
    This event fires for a block that is placed by a player.
    */
    readonly "blockPlace": BlockPlaceEventSignal;
    /**
    This event is triggered after a chat message has been broadcast or sent to players.
    */
    readonly "chat": ChatEventSignal;
    /**
    This event is fired when an entity event has been triggered that will update the component definition state of an entity.
    */
    readonly "dataDrivenEntityTriggerEvent": DataDrivenEntityTriggerEventSignal;
    /**
    This event fires when an effect, like poisoning, is added to an entity.
    */
    readonly "effectAdd": EffectAddEventSignal;
    /**
    This event fires when a new entity is created.
    */
    readonly "entityCreate": EntityCreateEventSignal;
    /**
    This event fires when an entity hits (makes a melee attack) and potentially impacts another entity or block.
    */
    readonly "entityHit": EntityHitEventSignal;
    /**
    This event fires when an entity is hurt (takes damage).
    */
    readonly "entityHurt": EntityHurtEventSignal;
    /**
    This event is fired after an explosion occurs.
    */
    readonly "explosion": ExplosionEventSignal;
    /**
    For custom items, this event is triggered when the fundamental set of defined components for the item change.  Note that this event is only fired for custom data-driven items.
    */
    readonly "itemDefinitionEvent": ItemDefinitionEventSignal;
    /**
    This event fires when any particular item is used by an entity or player.
    */
    readonly "itemUse": ItemUseEventSignal;
    /**
    This event fires when any particular item is used on a block by an entity or player.
    */
    readonly "itemUseOn": ItemUseOnEventSignal;
    /**
    This event fires when a lever activates or is deactivated.
    */
    readonly "leverActivate": LeverActivateEventSignal;
    /**
    This event fires when a piston expands or retracts.
    */
    readonly "pistonActivate": PistonActivateEventSignal;
    /**
    This event fires when a player joins a world.
    */
    readonly "playerJoin": PlayerJoinEventSignal;
    /**
    This event fires when a player leaves a world.
    */
    readonly "playerLeave": PlayerLeaveEventSignal;
    /**
    This event fires every tick - which is 20 times per second.
    */
    readonly "tick": TickEventSignal;
    /**
    This event will be triggered when the weather changes within Minecraft.
    */
    readonly "weatherChange": WeatherChangeEventSignal;
  }
  export class ExplosionEvent {
    /**
    Dimension where the explosion has occurred.
    */
    readonly "dimension": Dimension;
    /**
    A collection of blocks impacted by this explosion event.
    */
    readonly "impactedBlocks": BlockLocation[];
    /**
    Optional source of the explosion.
    */
    readonly "source": Entity;
  }
  export class ExplosionEventSignal {
    subscribe(callback: (arg: ExplosionEvent) => void): (arg: ExplosionEvent) => void;
    unsubscribe(callback: (arg: ExplosionEvent) => void): void;
  }
  export class ExplosionOptions {
    /**
    Whether parts of the explosion also impact underwater.
    */
    "allowUnderwater": boolean;
    /**
    Whether the explosion will break blocks within the blast radius.
    */
    "breaksBlocks": boolean;
    /**
    If true, the explosion is accompanied by fires within or near the blast radius.
    */
    "causesFire": boolean;
    /**
    Optional source of the explosion.
    */
    "source": Entity;
    constructor();
  }
  export class FeedItem {
    /**
    As part of the Healable component, an optional collection of side effects that can occur from being fed an item.
    */
    readonly "effects": FeedItemEffect[];
    /**
    The amount of health this entity gains when fed this item. This number is an integer starting at 0. Sample values can go as high as 40.
    */
    readonly "healAmount": number;
    /**
    Identifier of type of item that can be fed. If a namespace is not specified, 'minecraft:' is assumed. Example values include 'wheat' or 'golden_apple'.
    */
    readonly "item": string;
  }
  export class FeedItemEffect {
    /**
    Gets an amplifier that may have been applied to this effect. Valid values are integers starting at 0 and up - but usually ranging between 0 and 4.
    */
    readonly "amplifier": number;
    /**
    Chance that this effect is applied as a result of the entity being fed this item. Valid values range between 0 and 1.
    */
    readonly "chance": number;
    /**
    Gets the duration, in ticks, of this effect.
    */
    readonly "duration": number;
    /**
    Gets the identifier of the effect to apply. Example values include 'fire_resistance' or 'regeneration'.
    */
    readonly "name": string;
  }
  export class FilterGroup {
  }
  export class FluidContainer {
    /**
    Constant that represents the maximum fill level of a fluid container.
    */
    static readonly "maxFillLevel" = 6;
    /**
    Constant that represents the minimum fill level of a fluid container.
    */
    static readonly "minFillLevel" = 0;
  }
  export enum GameMode {
    /**
    World is in a survival mode, where players can take damage and entities may not be peaceful. Survival mode is where the player must collect resources, build structures while surviving in their generated world. Activities can, over time, chip away at player health and hunger bar.
    */
    "survival" = 0,
    /**
    World is in a full creative mode. In creative mode, the player has all the resources available in the item selection tabs and the survival selection tab. They can also destroy blocks instantly including those which would normally be indestructible. Command and structure blocks can also be used in creative mode. Items also do not lose durability or disappear.
    */
    "creative" = 1,
    /**
    World is in a more locked-down experience, where blocks may not be manipulated.
    */
    "adventure" = 2,
  }
  export class IBlockProperty {
    /**
    The name of this property.
    */
    readonly "name": string;
  }
  export class IEntityComponent {
    /**
    Identifier of this component.
    */
    readonly "id": string;
  }
  export class IntBlockProperty {
    /**
    The name of this property.
    */
    readonly "name": string;
    /**
    A list of valid values for this particular property.
    */
    readonly "validValues": number[];
    /**
    The current value of this property.
    */
    "value": number;
  }
  export class InventoryComponentContainer {
    /**
    The number of empty slots in the container.
    */
    readonly "emptySlotsCount": number;
    /**
    Represents the size of the container. For example, a standard single-block chest has a size of 27, for the 27 slots in their inventory.
    */
    readonly "size": number;
    addItem(itemStack: ItemStack): void;
    getItem(slot: number): ItemStack;
    setItem(slot: number, itemStack: ItemStack): void;
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
  }
  export class ItemCooldownComponent {
    /**
    Represents the cooldown category that this item is associated with.
    */
    readonly "cooldownCategory": string;
    /**
    Amount of time, in ticks, that remain for this item cooldown.
    */
    readonly "cooldownTicks": number;
    /**
    Identifier of this component. Should always be 'minecraft:cooldown'.
    */
    readonly "id": string;
    startCooldown(player: Player): void;
  }
  export class ItemDefinitionEventSignal {
    subscribe(callback: (arg: ItemDefinitionTriggeredEvent) => void): (arg: ItemDefinitionTriggeredEvent) => void;
    unsubscribe(callback: (arg: ItemDefinitionTriggeredEvent) => void): void;
  }
  export class ItemDefinitionTriggeredEvent {
    /**
    Name of the data-driven item event that is triggering this change.
    */
    readonly "eventName": string;
    /**
    The impacted item stack that is being used.
    */
    "item": ItemStack;
    /**
    Returns the source entity that triggered this item event.
    */
    readonly "source": Entity;
  }
  export class ItemDurabilityComponent {
    /**
    Returns the current damage level of this particular item.
    */
    "damage": number;
    /**
    A range of numbers that describes the chance of the item losing durability.
    */
    readonly "damageRange": NumberRange;
    /**
    Identifier of this component. Should always be 'minecraft:durability'.
    */
    readonly "id": string;
    /**
    Represents the amount of damage that this item can take before breaking.
    */
    readonly "maxDurability": number;
    getDamageChance(unbreaking?: number): number;
  }
  export class ItemEnchantsComponent {
    /**
    Returns a collection of the enchantments applied to this item stack.
    */
    "enchantments": EnchantmentList;
    /**
    Identifier of this component.
    */
    readonly "id": string;
    removeAllEnchantments(): void;
  }
  export class ItemFoodComponent {
    /**
    If true, the player can always eat this item (even when not hungry).
    */
    readonly "canAlwaysEat": boolean;
    /**
    Identifier of this component. Should always be 'minecraft:food'.
    */
    readonly "id": string;
    /**
    Represents how much nutrition this food item will give an entity when eaten.
    */
    readonly "nutrition": number;
    /**
    When an item is eaten, this value is used according to this formula (nutrition * saturation_modifier * 2) to apply a saturation buff.
    */
    readonly "saturationModifier": number;
    /**
    When specified, converts the active item to the one specified by this property.
    */
    readonly "usingConvertsTo": string;
  }
  export class ItemStack {
    /**
    Number of the items in the stack. Valid values range between 0 and 64.
    */
    "amount": number;
    /**
    A data value used to configure alternate states of the item.
    */
    "data": number;
    /**
    Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed. Examples include 'wheat' or 'apple'.
    */
    readonly "id": string;
    /**
    Given name of this stack of items.
    */
    "nameTag": string;
    constructor(itemType: ItemType, amount?: number, data?: number);
    getComponent(componentId: string): any;
    getComponents(): any[];
    getLore(): string[];
    hasComponent(componentId: string): boolean;
    setLore(loreList: string[]): void;
    triggerEvent(eventName: string): void;
  }
  export class ItemType {
    /**
    Returns the identifier of the item type - for example, 'minecraft:apple'.
    */
    readonly "id": string;
  }
  export class ItemUseEvent {
    /**
    The impacted item stack that is being used.
    */
    "item": ItemStack;
    /**
    Returns the source entity that triggered this item event.
    */
    readonly "source": Entity;
  }
  export class ItemUseEventSignal {
    subscribe(callback: (arg: ItemUseEvent) => void): (arg: ItemUseEvent) => void;
    unsubscribe(callback: (arg: ItemUseEvent) => void): void;
  }
  export class ItemUseOnEvent {
    /**
    The face of the block that an item is being used on.
    */
    readonly "blockFace": Direction;
    /**
    Location of the block being impacted.
    */
    readonly "blockLocation": BlockLocation;
    /**
    X coordinate of the item-use impact location on the face of the target block.
    */
    readonly "faceLocationX": number;
    /**
    Y coordinate of the item-use impact location on the face of the target block.
    */
    readonly "faceLocationY": number;
    /**
    The impacted item stack that is being used on a block.
    */
    "item": ItemStack;
    /**
    Returns the source entity that triggered this item event.
    */
    readonly "source": Entity;
  }
  export class ItemUseOnEventSignal {
    subscribe(callback: (arg: ItemUseOnEvent) => void): (arg: ItemUseOnEvent) => void;
    unsubscribe(callback: (arg: ItemUseOnEvent) => void): void;
  }
  export class Items {
    get(itemId: string): ItemType;
  }
  export class LeverActionEvent {
    /**
    Block impacted by this event.
    */
    readonly "block": Block;
    /**
    Dimension that contains the block that is the subject of this event.
    */
    readonly "dimension": Dimension;
    /**
    True if the lever is activated (that is, transmitting power).
    */
    readonly "isPowered": boolean;
  }
  export class LeverActivateEventSignal {
    subscribe(callback: (arg: LeverActionEvent) => void): (arg: LeverActionEvent) => void;
    unsubscribe(callback: (arg: LeverActionEvent) => void): void;
  }
  export class Location {
    /**
    X component of this location.
    */
    "x": number;
    /**
    Y component of this location.
    */
    "y": number;
    /**
    Z component of this location.
    */
    "z": number;
    constructor(x: number, y: number, z: number);
    equals(other: Location): boolean;
    isNear(other: Location, epsilon: number): boolean;
  }
  export class MinecraftBlockTypes {
    /**
    Represents an acacia button within Minecraft.
    */
    static readonly "acaciaButton": BlockType;
    /**
    Represents an acacia door within Minecraft.
    */
    static readonly "acaciaDoor": BlockType;
    /**
    Represents an acacia fence gate within Minecraft.
    */
    static readonly "acaciaFenceGate": BlockType;
    /**
    Represents an acacia pressure plate within Minecraft.
    */
    static readonly "acaciaPressurePlate": BlockType;
    /**
    Represents a set of acacia stairs within Minecraft.
    */
    static readonly "acaciaStairs": BlockType;
    /**
    Represents an acacia standing sign within Minecraft.
    */
    static readonly "acaciaStandingSign": BlockType;
    /**
    Represents an acacia trapdoor within Minecraft.
    */
    static readonly "acaciaTrapdoor": BlockType;
    /**
    Represents an acacia wall sign within Minecraft.
    */
    static readonly "acaciaWallSign": BlockType;
    /**
    Represents an activator rail within Minecraft.
    */
    static readonly "activatorRail": BlockType;
    /**
    Represents an empty space (air) within Minecraft.
    */
    static readonly "air": BlockType;
    /**
    Represents an allow block within Minecraft.
    */
    static readonly "allow": BlockType;
    /**
    Represents an amethyst block within Minecraft.
    */
    static readonly "amethystBlock": BlockType;
    /**
    Represents a cluster of amethyst within Minecraft.
    */
    static readonly "amethystCluster": BlockType;
    /**
    Represents ancient debris within Minecraft.
    */
    static readonly "ancientDebris": BlockType;
    /**
    Represents andesite stairs within Minecraft.
    */
    static readonly "andesiteStairs": BlockType;
    /**
    Represents an anvil within Minecraft.
    */
    static readonly "anvil": BlockType;
    /**
    Represents an azalea flowering plant within Minecraft.
    */
    static readonly "azalea": BlockType;
    /**
    Represents azalea leaves within Minecraft.
    */
    static readonly "azaleaLeaves": BlockType;
    /**
    Represents flowered azalea leaves within Minecraft.
    */
    static readonly "azaleaLeavesFlowered": BlockType;
    /**
    Represents a bamboo tree within Minecraft.
    */
    static readonly "bamboo": BlockType;
    /**
    Represents a bamboo sapling within Minecraft.
    */
    static readonly "bambooSapling": BlockType;
    /**
    Represents a barrel within Minecraft.
    */
    static readonly "barrel": BlockType;
    /**
    Represents an invisible but logical barrier within Minecraft.
    */
    static readonly "barrier": BlockType;
    /**
    Represents a basalt block within Minecraft.
    */
    static readonly "basalt": BlockType;
    /**
    Represents a beacon within Minecraft.
    */
    static readonly "beacon": BlockType;
    /**
    Represents a bed within Minecraft.
    */
    static readonly "bed": BlockType;
    /**
    Represents a bedrock block within Minecraft.
    */
    static readonly "bedrock": BlockType;
    /**
    Represents a beehive within Minecraft.
    */
    static readonly "beehive": BlockType;
    /**
    Represents a bee nest within Minecraft.
    */
    static readonly "beeNest": BlockType;
    /**
    Represents a beetroot vegetable within Minecraft.
    */
    static readonly "beetroot": BlockType;
    /**
    Represents a bell within Minecraft.
    */
    static readonly "bell": BlockType;
    /**
    Represents a big dripleaf plant within Minecraft.
    */
    static readonly "bigDripleaf": BlockType;
    /**
    Represents a birch button within Minecraft.
    */
    static readonly "birchButton": BlockType;
    /**
    Represents a birch door within Minecraft.
    */
    static readonly "birchDoor": BlockType;
    /**
    Represents a birch fence gate within Minecraft.
    */
    static readonly "birchFenceGate": BlockType;
    /**
    Represents a birch pressure plate within Minecraft.
    */
    static readonly "birchPressurePlate": BlockType;
    /**
    Represents a birch stairs block within Minecraft.
    */
    static readonly "birchStairs": BlockType;
    /**
    Represents a birch standing sign within Minecraft.
    */
    static readonly "birchStandingSign": BlockType;
    /**
    Represents a birch trapdoor within Minecraft.
    */
    static readonly "birchTrapdoor": BlockType;
    /**
    Represents a birch wall sign within Minecraft.
    */
    static readonly "birchWallSign": BlockType;
    /**
    Represents a black candle within Minecraft.
    */
    static readonly "blackCandle": BlockType;
    /**
    Represents a black candle cake within Minecraft.
    */
    static readonly "blackCandleCake": BlockType;
    /**
    Represents a black glazed terracotta block within Minecraft.
    */
    static readonly "blackGlazedTerracotta": BlockType;
    /**
    Represents a blackstone block within Minecraft.
    */
    static readonly "blackstone": BlockType;
    /**
    Represents a blackstone double slab within Minecraft.
    */
    static readonly "blackstoneDoubleSlab": BlockType;
    /**
    Represents a blackstone slab within Minecraft.
    */
    static readonly "blackstoneSlab": BlockType;
    /**
    Represents blackstone stairs within Minecraft.
    */
    static readonly "blackstoneStairs": BlockType;
    /**
    Represents a blackstone wall within Minecraft.
    */
    static readonly "blackstoneWall": BlockType;
    /**
    Represents a blast furnace within Minecraft.
    */
    static readonly "blastFurnace": BlockType;
    /**
    Represents a blue candle within Minecraft.
    */
    static readonly "blueCandle": BlockType;
    /**
    Represents a blue candle cake within Minecraft.
    */
    static readonly "blueCandleCake": BlockType;
    /**
    Represents a blue glazed terracotta block within Minecraft.
    */
    static readonly "blueGlazedTerracotta": BlockType;
    /**
    Represents a blue ice block within Minecraft.
    */
    static readonly "blueIce": BlockType;
    /**
    Represents a bone block within Minecraft.
    */
    static readonly "boneBlock": BlockType;
    /**
    Represents an unbreakable border block within Minecraft.
    */
    static readonly "bookshelf": BlockType;
    /**
    Represents a border block within Minecraft.
    */
    static readonly "borderBlock": BlockType;
    /**
    Represents a brewing stand within Minecraft.
    */
    static readonly "brewingStand": BlockType;
    /**
    Represents a block of brick within Minecraft.
    */
    static readonly "brickBlock": BlockType;
    /**
    Represents brick stairs within Minecraft.
    */
    static readonly "brickStairs": BlockType;
    /**
    Represents a brown candle within Minecraft.
    */
    static readonly "brownCandle": BlockType;
    /**
    Represents a brown candle cake within Minecraft.
    */
    static readonly "brownCandleCake": BlockType;
    /**
    Represents a brown glazed terracotta block within Minecraft.
    */
    static readonly "brownGlazedTerracotta": BlockType;
    /**
    Represents a brown mushroom within Minecraft.
    */
    static readonly "brownMushroom": BlockType;
    /**
    Represents a block of brown mushroom within Minecraft.
    */
    static readonly "brownMushroomBlock": BlockType;
    /**
    Represents a column of bubbles within Minecraft.
    */
    static readonly "bubbleColumn": BlockType;
    /**
    Represents a block of budding amethyst within Minecraft.
    */
    static readonly "buddingAmethyst": BlockType;
    /**
    Represents a cactus within Minecraft.
    */
    static readonly "cactus": BlockType;
    /**
    Represents a cake within Minecraft.
    */
    static readonly "cake": BlockType;
    /**
    Represents a calcite block within Minecraft.
    */
    static readonly "calcite": BlockType;
    /**
    Represents a camera within Minecraft Education Edition. It is not available in Minecraft Bedrock Edition.
    */
    static readonly "camera": BlockType;
    /**
    Represents a campfire within Minecraft.
    */
    static readonly "campfire": BlockType;
    /**
    Represents a candle within Minecraft.
    */
    static readonly "candle": BlockType;
    /**
    Represents a cake with candles within Minecraft.
    */
    static readonly "candleCake": BlockType;
    /**
    Represents a carpet within Minecraft.
    */
    static readonly "carpet": BlockType;
    /**
    Represents carrots within Minecraft.
    */
    static readonly "carrots": BlockType;
    /**
    Represents a cartography table block within Minecraft.
    */
    static readonly "cartographyTable": BlockType;
    /**
    Represents a carved pumpkin within Minecraft.
    */
    static readonly "carvedPumpkin": BlockType;
    /**
    Represents a cauldron within Minecraft.
    */
    static readonly "cauldron": BlockType;
    /**
    Represents a set of cave vines within Minecraft.
    */
    static readonly "caveVines": BlockType;
    /**
    Represents the body of a set of cave vines with berries within Minecraft.
    */
    static readonly "caveVinesBodyWithBerries": BlockType;
    /**
    Represents the head of a set of cave vines with berries within Minecraft.
    */
    static readonly "caveVinesHeadWithBerries": BlockType;
    /**
    Represents a metallic chain within Minecraft.
    */
    static readonly "chain": BlockType;
    /**
    Represents a block that gives off heat but not light, within Minecraft Education Edition or Bedrock Edition with Education features.
    */
    static readonly "chainCommandBlock": BlockType;
    /**
    Represents a chemical heat block within Minecraft.
    */
    static readonly "chemicalHeat": BlockType;
    /**
    Represents a chemistry table within Minecraft Education experiences.
    */
    static readonly "chemistryTable": BlockType;
    /**
    Represents a chest within Minecraft.
    */
    static readonly "chest": BlockType;
    /**
    Represents a set of chiseled deepslate within Minecraft.
    */
    static readonly "chiseledDeepslate": BlockType;
    /**
    Represents a block of chiseled nether bricks within Minecraft.
    */
    static readonly "chiseledNetherBricks": BlockType;
    /**
    Represents a block of chiseled polished blackstone within Minecraft.
    */
    static readonly "chiseledPolishedBlackstone": BlockType;
    /**
    Represents a chorus flower within Minecraft.
    */
    static readonly "chorusFlower": BlockType;
    /**
    Represents a chorus plant within Minecraft.
    */
    static readonly "chorusPlant": BlockType;
    /**
    Represents a block of clay within Minecraft.
    */
    static readonly "clay": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "clientRequestPlaceholderBlock": BlockType;
    /**
    Represents a block of solid coal within Minecraft.
    */
    static readonly "coalBlock": BlockType;
    /**
    Represents a block with embedded coal ore within Minecraft.
    */
    static readonly "coalOre": BlockType;
    /**
    Represents a block of cobbled deepslate within Minecraft.
    */
    static readonly "cobbledDeepslate": BlockType;
    /**
    Represents a double slab of cobbled deepslate within Minecraft.
    */
    static readonly "cobbledDeepslateDoubleSlab": BlockType;
    /**
    Represents a slab of deepslate within Minecraft.
    */
    static readonly "cobbledDeepslateSlab": BlockType;
    /**
    Represents cobbled deepslate stairs within Minecraft.
    */
    static readonly "cobbledDeepslateStairs": BlockType;
    /**
    Represents a cobbled deepslate wall within Minecraft.
    */
    static readonly "cobbledDeepslateWall": BlockType;
    /**
    Represents a block of cobblestone within Minecraft.
    */
    static readonly "cobblestone": BlockType;
    /**
    Represents a wall of cobblestone within Minecraft.
    */
    static readonly "cobblestoneWall": BlockType;
    /**
    Represents a set of cocoa beans (typically on a tree) within Minecraft.
    */
    static readonly "cocoa": BlockType;
    /**
    Represents blue/purple torches within Minecraft.
    */
    static readonly "coloredTorchBp": BlockType;
    /**
    Represents red/green torches within Minecraft.
    */
    static readonly "coloredTorchRg": BlockType;
    /**
    Represents a block that can run commands within Minecraft.
    */
    static readonly "commandBlock": BlockType;
    /**
    Represents a composter block within Minecraft.
    */
    static readonly "composter": BlockType;
    /**
    Represents a block of concrete powder within Minecraft.
    */
    static readonly "concrete": BlockType;
    /**
    Represents a block of concrete powder within Minecraft.
    */
    static readonly "concretePowder": BlockType;
    /**
    Represents a conduit block within Minecraft.
    */
    static readonly "conduit": BlockType;
    /**
    Represents a solid block of copper within Minecraft.
    */
    static readonly "copperBlock": BlockType;
    /**
    Represents a block with embedded copper ore within Minecraft.
    */
    static readonly "copperOre": BlockType;
    /**
    Represents coral within Minecraft.
    */
    static readonly "coral": BlockType;
    /**
    Represents a solid block of coral within Minecraft.
    */
    static readonly "coralBlock": BlockType;
    /**
    Represents a fan formation of coral within Minecraft.
    */
    static readonly "coralFan": BlockType;
    /**
    Represents a fan formation of dead coral within Minecraft.
    */
    static readonly "coralFanDead": BlockType;
    /**
    Represents a hanging fan formation of coral within Minecraft.
    */
    static readonly "coralFanHang": BlockType;
    /**
    Represents an alternate hanging fan formation of coral (#2) within Minecraft.
    */
    static readonly "coralFanHang2": BlockType;
    /**
    Represents an alternate hanging fan formation of coral (#3) within Minecraft.
    */
    static readonly "coralFanHang3": BlockType;
    /**
    Represents a block of cracked deepslate bricks within Minecraft.
    */
    static readonly "crackedDeepslateBricks": BlockType;
    /**
    Represents tiles of cracked deepslate within Minecraft.
    */
    static readonly "crackedDeepslateTiles": BlockType;
    /**
    Represents a block of cracked nether bricks within Minecraft.
    */
    static readonly "crackedNetherBricks": BlockType;
    /**
    Represents a block of cracked and polished blackstone bricks within Minecraft.
    */
    static readonly "crackedPolishedBlackstoneBricks": BlockType;
    /**
    Represents a crafting table within Minecraft.
    */
    static readonly "craftingTable": BlockType;
    /**
    Represents a crimson button within Minecraft.
    */
    static readonly "crimsonButton": BlockType;
    /**
    Represents a crimson door within Minecraft.
    */
    static readonly "crimsonDoor": BlockType;
    /**
    Represents a crimson double slab within Minecraft.
    */
    static readonly "crimsonDoubleSlab": BlockType;
    /**
    Represents a crimson fence within Minecraft.
    */
    static readonly "crimsonFence": BlockType;
    /**
    Represents a crimson fence gate within Minecraft.
    */
    static readonly "crimsonFenceGate": BlockType;
    /**
    Represents a crimson fungus within Minecraft.
    */
    static readonly "crimsonFungus": BlockType;
    /**
    Represents crimson hyphae within Minecraft.
    */
    static readonly "crimsonHyphae": BlockType;
    /**
    Represents crimson nylium within Minecraft.
    */
    static readonly "crimsonNylium": BlockType;
    /**
    Represents a set of crimson planks within Minecraft.
    */
    static readonly "crimsonPlanks": BlockType;
    /**
    Represents a crimson pressure plate within Minecraft.
    */
    static readonly "crimsonPressurePlate": BlockType;
    /**
    Represents a set of crimson roots within Minecraft.
    */
    static readonly "crimsonRoots": BlockType;
    /**
    Represents a crimson slab within Minecraft.
    */
    static readonly "crimsonSlab": BlockType;
    /**
    Represents a set of crimson stairs within Minecraft.
    */
    static readonly "crimsonStairs": BlockType;
    /**
    Represents a crimson standing sign within Minecraft.
    */
    static readonly "crimsonStandingSign": BlockType;
    /**
    Represents a crimson stem within Minecraft.
    */
    static readonly "crimsonStem": BlockType;
    /**
    Represents a crimson trapdoor within Minecraft.
    */
    static readonly "crimsonTrapdoor": BlockType;
    /**
    Represents a crimson wall sign within Minecraft.
    */
    static readonly "crimsonWallSign": BlockType;
    /**
    Represents crying obsidian within Minecraft.
    */
    static readonly "cryingObsidian": BlockType;
    /**
    Represents a cut copper block within Minecraft.
    */
    static readonly "cutCopper": BlockType;
    /**
    Represents a cut copper slab within Minecraft.
    */
    static readonly "cutCopperSlab": BlockType;
    /**
    Represents a set of cut copper stairs within Minecraft.
    */
    static readonly "cutCopperStairs": BlockType;
    /**
    Represents a cyan-colored candle within Minecraft.
    */
    static readonly "cyanCandle": BlockType;
    /**
    Represents a cake with a cyan-colored candle within Minecraft.
    */
    static readonly "cyanCandleCake": BlockType;
    /**
    Represents a block of cyan-colored glazed terracotta within Minecraft.
    */
    static readonly "cyanGlazedTerracotta": BlockType;
    /**
    Represents a dark oak button within Minecraft.
    */
    static readonly "darkOakButton": BlockType;
    /**
    Represents a dark oak door within Minecraft.
    */
    static readonly "darkOakDoor": BlockType;
    /**
    Represents a dark oak fence gate within Minecraft.
    */
    static readonly "darkOakFenceGate": BlockType;
    /**
    Represents a dark oak pressure plate within Minecraft.
    */
    static readonly "darkOakPressurePlate": BlockType;
    /**
    Represents a set of dark oak stairs within Minecraft.
    */
    static readonly "darkOakStairs": BlockType;
    /**
    Represents a dark oak standing sign within Minecraft.
    */
    static readonly "darkoakStandingSign": BlockType;
    /**
    Represents a dark oak trapdoor within Minecraft.
    */
    static readonly "darkOakTrapdoor": BlockType;
    /**
    Represents a dark oak wall sign within Minecraft.
    */
    static readonly "darkoakWallSign": BlockType;
    /**
    Represents a set of dark prismarine stairs within Minecraft.
    */
    static readonly "darkPrismarineStairs": BlockType;
    /**
    Represents a daylight detector within Minecraft.
    */
    static readonly "daylightDetector": BlockType;
    /**
    Represents an inverted daylight detector within Minecraft.
    */
    static readonly "daylightDetectorInverted": BlockType;
    /**
    Represents a dead bush within Minecraft.
    */
    static readonly "deadbush": BlockType;
    /**
    Represents a block of deepslate within Minecraft.
    */
    static readonly "deepslate": BlockType;
    /**
    Represents a double slab of deepslate brick within Minecraft.
    */
    static readonly "deepslateBrickDoubleSlab": BlockType;
    /**
    Represents a block of deepslate bricks within Minecraft.
    */
    static readonly "deepslateBricks": BlockType;
    /**
    Represents a slab of deepslate brick within Minecraft.
    */
    static readonly "deepslateBrickSlab": BlockType;
    /**
    Represents a set of deepslate brick stairs within Minecraft.
    */
    static readonly "deepslateBrickStairs": BlockType;
    /**
    Represents a deepslate brick wall within Minecraft.
    */
    static readonly "deepslateBrickWall": BlockType;
    /**
    Represents a block of deepslate with embedded coal ore within Minecraft.
    */
    static readonly "deepslateCoalOre": BlockType;
    /**
    Represents a block of deepslate with embedded copper ore within Minecraft.
    */
    static readonly "deepslateCopperOre": BlockType;
    /**
    Represents a block of deepslate with embedded diamond ore within Minecraft.
    */
    static readonly "deepslateDiamondOre": BlockType;
    /**
    Represents a block of deepslate with embedded emerald ore within Minecraft.
    */
    static readonly "deepslateEmeraldOre": BlockType;
    /**
    Represents a block of deepslate with embedded gold ore within Minecraft.
    */
    static readonly "deepslateGoldOre": BlockType;
    /**
    Represents a block of deepslate with embedded iron ore within Minecraft.
    */
    static readonly "deepslateIronOre": BlockType;
    /**
    Represents a block of deepslate with embedded lapis lazuli ore within Minecraft.
    */
    static readonly "deepslateLapisOre": BlockType;
    /**
    Represents a block of deepslate with embedded redstone ore within Minecraft.
    */
    static readonly "deepslateRedstoneOre": BlockType;
    /**
    Represents a double slab of tiled deepslate within Minecraft.
    */
    static readonly "deepslateTileDoubleSlab": BlockType;
    /**
    Represents a set of deepslate tiles within Minecraft.
    */
    static readonly "deepslateTiles": BlockType;
    /**
    Represents a slab of deepslate tiles within Minecraft.
    */
    static readonly "deepslateTileSlab": BlockType;
    /**
    Represents a set of deepslate tile stairs within Minecraft.
    */
    static readonly "deepslateTileStairs": BlockType;
    /**
    Represents a wall of deepslate tile within Minecraft.
    */
    static readonly "deepslateTileWall": BlockType;
    /**
    Represents a logical but generally invisible Deny logic block within Minecraft.
    */
    static readonly "deny": BlockType;
    /**
    Represents a detector rail within Minecraft.
    */
    static readonly "detectorRail": BlockType;
    /**
    Represents a block of diamond within Minecraft.
    */
    static readonly "diamondBlock": BlockType;
    /**
    Represents a block with embedded diamond ore within Minecraft.
    */
    static readonly "diamondOre": BlockType;
    /**
    Represents a set of diorite stairs within Minecraft.
    */
    static readonly "dioriteStairs": BlockType;
    /**
    Represents a block of dirt within Minecraft.
    */
    static readonly "dirt": BlockType;
    /**
    Represents a block of dirt with roots within Minecraft.
    */
    static readonly "dirtWithRoots": BlockType;
    /**
    Represents a dispenser within Minecraft.
    */
    static readonly "dispenser": BlockType;
    /**
    Represents a slab of double cut copper within Minecraft.
    */
    static readonly "doubleCutCopperSlab": BlockType;
    /**
    Represents a double plant within Minecraft.
    */
    static readonly "doublePlant": BlockType;
    /**
    Represents a double slab of stone within Minecraft.
    */
    static readonly "doubleStoneSlab": BlockType;
    /**
    Represents an alternate double slab of stone (#2) within Minecraft.
    */
    static readonly "doubleStoneSlab2": BlockType;
    /**
    Represents an alternate double slab of stone (#3) within Minecraft.
    */
    static readonly "doubleStoneSlab3": BlockType;
    /**
    Represents an alternate double slab of stone (#4) within Minecraft.
    */
    static readonly "doubleStoneSlab4": BlockType;
    /**
    Represents a double slab of wood within Minecraft.
    */
    static readonly "doubleWoodenSlab": BlockType;
    /**
    Represents a dragon egg within Minecraft.
    */
    static readonly "dragonEgg": BlockType;
    /**
    Represents a block of dried kelp within Minecraft.
    */
    static readonly "driedKelpBlock": BlockType;
    /**
    Represents a block of dripstone within Minecraft.
    */
    static readonly "dripstoneBlock": BlockType;
    /**
    Represents a dropper within Minecraft.
    */
    static readonly "dropper": BlockType;
    /**
    Represents an element in Minecraft Education experiences.
    */
    static readonly "element0": BlockType;
    /**
    Represents the hydrogen element in Minecraft Education experiences.
    */
    static readonly "element1": BlockType;
    /**
    Represents the neon element in Minecraft Education experiences.
    */
    static readonly "element10": BlockType;
    /**
    Represents the fermium element in Minecraft Education experiences.
    */
    static readonly "element100": BlockType;
    /**
    Represents the mendelevium element in Minecraft Education experiences.
    */
    static readonly "element101": BlockType;
    /**
    Represents the nobelium element in Minecraft Education experiences.
    */
    static readonly "element102": BlockType;
    /**
    Represents the lawrencium element in Minecraft Education experiences.
    */
    static readonly "element103": BlockType;
    /**
    Represents the rutherfordium element in Minecraft Education experiences.
    */
    static readonly "element104": BlockType;
    /**
    Represents the dubnium element in Minecraft Education experiences.
    */
    static readonly "element105": BlockType;
    /**
    Represents the seaborgium element in Minecraft Education experiences.
    */
    static readonly "element106": BlockType;
    /**
    Represents the bohrium element in Minecraft Education experiences.
    */
    static readonly "element107": BlockType;
    /**
    Represents the hassium element in Minecraft Education experiences.
    */
    static readonly "element108": BlockType;
    /**
    Represents the meitnerium element in Minecraft Education experiences.
    */
    static readonly "element109": BlockType;
    /**
    Represents the sodium element in Minecraft Education experiences.
    */
    static readonly "element11": BlockType;
    /**
    Represents the darmstadtium element in Minecraft Education experiences.
    */
    static readonly "element110": BlockType;
    /**
    Represents the roentgenium element in Minecraft Education experiences.
    */
    static readonly "element111": BlockType;
    /**
    Represents the copernicium element in Minecraft Education experiences.
    */
    static readonly "element112": BlockType;
    /**
    Represents the nihonium element in Minecraft Education experiences.
    */
    static readonly "element113": BlockType;
    /**
    Represents the flerovium element in Minecraft Education experiences.
    */
    static readonly "element114": BlockType;
    /**
    Represents the moscovium element in Minecraft Education experiences.
    */
    static readonly "element115": BlockType;
    /**
    Represents the livermorium element in Minecraft Education experiences.
    */
    static readonly "element116": BlockType;
    /**
    Represents the tennessine element in Minecraft Education experiences.
    */
    static readonly "element117": BlockType;
    /**
    Represents the oganesson element in Minecraft Education experiences.
    */
    static readonly "element118": BlockType;
    /**
    Represents the magnesium element in Minecraft Education experiences.
    */
    static readonly "element12": BlockType;
    /**
    Represents the aluminum element in Minecraft Education experiences.
    */
    static readonly "element13": BlockType;
    /**
    Represents the silicon element in Minecraft Education experiences.
    */
    static readonly "element14": BlockType;
    /**
    Represents the phosphorus element in Minecraft Education experiences.
    */
    static readonly "element15": BlockType;
    /**
    Represents the sulfur element in Minecraft Education experiences.
    */
    static readonly "element16": BlockType;
    /**
    Represents the chlorine element in Minecraft Education experiences.
    */
    static readonly "element17": BlockType;
    /**
    Represents the argon element in Minecraft Education experiences.
    */
    static readonly "element18": BlockType;
    /**
    Represents the potassium element in Minecraft Education experiences.
    */
    static readonly "element19": BlockType;
    /**
    Represents the helium element in Minecraft Education experiences.
    */
    static readonly "element2": BlockType;
    /**
    Represents the calcium element in Minecraft Education experiences.
    */
    static readonly "element20": BlockType;
    /**
    Represents the scandium element in Minecraft Education experiences.
    */
    static readonly "element21": BlockType;
    /**
    Represents the titanium element in Minecraft Education experiences.
    */
    static readonly "element22": BlockType;
    /**
    Represents the vanadium element in Minecraft Education experiences.
    */
    static readonly "element23": BlockType;
    /**
    Represents the chromium element in Minecraft Education experiences.
    */
    static readonly "element24": BlockType;
    /**
    Represents the manganese element in Minecraft Education experiences.
    */
    static readonly "element25": BlockType;
    /**
    Represents the iron element in Minecraft Education experiences.
    */
    static readonly "element26": BlockType;
    /**
    Represents the cobalt element in Minecraft Education experiences.
    */
    static readonly "element27": BlockType;
    /**
    Represents the nickel element in Minecraft Education experiences.
    */
    static readonly "element28": BlockType;
    /**
    Represents the copper element in Minecraft Education experiences.
    */
    static readonly "element29": BlockType;
    /**
    Represents a lithium element in Minecraft Education experiences.
    */
    static readonly "element3": BlockType;
    /**
    Represents the zinc element in Minecraft Education experiences.
    */
    static readonly "element30": BlockType;
    /**
    Represents the gallium element in Minecraft Education experiences.
    */
    static readonly "element31": BlockType;
    /**
    Represents a germanium element in Minecraft Education experiences.
    */
    static readonly "element32": BlockType;
    /**
    Represents the arsenic element in Minecraft Education experiences.
    */
    static readonly "element33": BlockType;
    /**
    Represents the selenium element in Minecraft Education experiences.
    */
    static readonly "element34": BlockType;
    /**
    Represents the bromine element in Minecraft Education experiences.
    */
    static readonly "element35": BlockType;
    /**
    Represents the krypton element in Minecraft Education experiences.
    */
    static readonly "element36": BlockType;
    /**
    Represents the rubidium element in Minecraft Education experiences.
    */
    static readonly "element37": BlockType;
    /**
    Represents the strontium element in Minecraft Education experiences.
    */
    static readonly "element38": BlockType;
    /**
    Represents the yttrium element in Minecraft Education experiences.
    */
    static readonly "element39": BlockType;
    /**
    Represents a beryllium element in Minecraft Education experiences.
    */
    static readonly "element4": BlockType;
    /**
    Represents the zirconium element in Minecraft Education experiences.
    */
    static readonly "element40": BlockType;
    /**
    Represents the niobium element in Minecraft Education experiences.
    */
    static readonly "element41": BlockType;
    /**
    Represents the molybdenum element in Minecraft Education experiences.
    */
    static readonly "element42": BlockType;
    /**
    Represents the technetium element in Minecraft Education experiences.
    */
    static readonly "element43": BlockType;
    /**
    Represents the ruthenium element in Minecraft Education experiences.
    */
    static readonly "element44": BlockType;
    /**
    Represents the rhodium element in Minecraft Education experiences.
    */
    static readonly "element45": BlockType;
    /**
    Represents the palladium element in Minecraft Education experiences.
    */
    static readonly "element46": BlockType;
    /**
    Represents the silver element in Minecraft Education experiences.
    */
    static readonly "element47": BlockType;
    /**
    Represents the cadmium element in Minecraft Education experiences.
    */
    static readonly "element48": BlockType;
    /**
    Represents the indium element in Minecraft Education experiences.
    */
    static readonly "element49": BlockType;
    /**
    Represents the boron element in Minecraft Education experiences.
    */
    static readonly "element5": BlockType;
    /**
    Represents the tin element in Minecraft Education experiences.
    */
    static readonly "element50": BlockType;
    /**
    Represents the antimony element in Minecraft Education experiences.
    */
    static readonly "element51": BlockType;
    /**
    Represents the tellurium element in Minecraft Education experiences.
    */
    static readonly "element52": BlockType;
    /**
    Represents the iodine element in Minecraft Education experiences.
    */
    static readonly "element53": BlockType;
    /**
    Represents the xenon element in Minecraft Education experiences.
    */
    static readonly "element54": BlockType;
    /**
    Represents the cesium element in Minecraft Education experiences.
    */
    static readonly "element55": BlockType;
    /**
    Represents the barium element in Minecraft Education experiences.
    */
    static readonly "element56": BlockType;
    /**
    Represents the lanthanum element in Minecraft Education experiences.
    */
    static readonly "element57": BlockType;
    /**
    Represents the cerium element in Minecraft Education experiences.
    */
    static readonly "element58": BlockType;
    /**
    Represents the praseodymium element in Minecraft Education experiences.
    */
    static readonly "element59": BlockType;
    /**
    Represents the carbon element in Minecraft Education experiences.
    */
    static readonly "element6": BlockType;
    /**
    Represents the neodymium element in Minecraft Education experiences.
    */
    static readonly "element60": BlockType;
    /**
    Represents the promethium element in Minecraft Education experiences.
    */
    static readonly "element61": BlockType;
    /**
    Represents the samarium element in Minecraft Education experiences.
    */
    static readonly "element62": BlockType;
    /**
    Represents the europium element in Minecraft Education experiences.
    */
    static readonly "element63": BlockType;
    /**
    Represents the gadolinium element in Minecraft Education experiences.
    */
    static readonly "element64": BlockType;
    /**
    Represents a terbium element in Minecraft Education experiences.
    */
    static readonly "element65": BlockType;
    /**
    Represents the dysprosium element in Minecraft Education experiences.
    */
    static readonly "element66": BlockType;
    /**
    Represents the holmium element in Minecraft Education experiences.
    */
    static readonly "element67": BlockType;
    /**
    Represents the erbium element in Minecraft Education experiences.
    */
    static readonly "element68": BlockType;
    /**
    Represents the thulium element in Minecraft Education experiences.
    */
    static readonly "element69": BlockType;
    /**
    Represents the nitrogen element in Minecraft Education experiences.
    */
    static readonly "element7": BlockType;
    /**
    Represents the ytterbium element in Minecraft Education experiences.
    */
    static readonly "element70": BlockType;
    /**
    Represents the lutetium element in Minecraft Education experiences.
    */
    static readonly "element71": BlockType;
    /**
    Represents a hafnium element in Minecraft Education experiences.
    */
    static readonly "element72": BlockType;
    /**
    Represents the tantalum element in Minecraft Education experiences.
    */
    static readonly "element73": BlockType;
    /**
    Represents the tungsten element in Minecraft Education experiences.
    */
    static readonly "element74": BlockType;
    /**
    Represents the rhenium element in Minecraft Education experiences.
    */
    static readonly "element75": BlockType;
    /**
    Represents the osmium element in Minecraft Education experiences.
    */
    static readonly "element76": BlockType;
    /**
    Represents the iridium element in Minecraft Education experiences.
    */
    static readonly "element77": BlockType;
    /**
    Represents the platinum element in Minecraft Education experiences.
    */
    static readonly "element78": BlockType;
    /**
    Represents the gold element in Minecraft Education experiences.
    */
    static readonly "element79": BlockType;
    /**
    Represents the oxygen element in Minecraft Education experiences.
    */
    static readonly "element8": BlockType;
    /**
    Represents the mercury element in Minecraft Education experiences.
    */
    static readonly "element80": BlockType;
    /**
    Represents the thallium element in Minecraft Education experiences.
    */
    static readonly "element81": BlockType;
    /**
    Represents the lead element in Minecraft Education experiences.
    */
    static readonly "element82": BlockType;
    /**
    Represents the bismuth element in Minecraft Education experiences.
    */
    static readonly "element83": BlockType;
    /**
    Represents the polonium element in Minecraft Education experiences.
    */
    static readonly "element84": BlockType;
    /**
    Represents the astatine element in Minecraft Education experiences.
    */
    static readonly "element85": BlockType;
    /**
    Represents the radon element in Minecraft Education experiences.
    */
    static readonly "element86": BlockType;
    /**
    Represents the francium element in Minecraft Education experiences.
    */
    static readonly "element87": BlockType;
    /**
    Represents the radium element in Minecraft Education experiences.
    */
    static readonly "element88": BlockType;
    /**
    Represents the actinium element in Minecraft Education experiences.
    */
    static readonly "element89": BlockType;
    /**
    Represents the fluorine element in Minecraft Education experiences.
    */
    static readonly "element9": BlockType;
    /**
    Represents the thorium element in Minecraft Education experiences.
    */
    static readonly "element90": BlockType;
    /**
    Represents the protactinium element in Minecraft Education experiences.
    */
    static readonly "element91": BlockType;
    /**
    Represents the uranium element in Minecraft Education experiences.
    */
    static readonly "element92": BlockType;
    /**
    Represents the neptunium element in Minecraft Education experiences.
    */
    static readonly "element93": BlockType;
    /**
    Represents the plutonium element in Minecraft Education experiences.
    */
    static readonly "element94": BlockType;
    /**
    Represents the americium element in Minecraft Education experiences.
    */
    static readonly "element95": BlockType;
    /**
    Represents the curium element in Minecraft Education experiences.
    */
    static readonly "element96": BlockType;
    /**
    Represents the berkelium element in Minecraft Education experiences.
    */
    static readonly "element97": BlockType;
    /**
    Represents the californium element in Minecraft Education experiences.
    */
    static readonly "element98": BlockType;
    /**
    Represents the einsteinium element in Minecraft Education experiences.
    */
    static readonly "element99": BlockType;
    /**
    Represents a block of emerald within Minecraft.
    */
    static readonly "emeraldBlock": BlockType;
    /**
    Represents a block with embedded emerald ore within Minecraft.
    */
    static readonly "emeraldOre": BlockType;
    /**
    Represents an enchanting table within Minecraft.
    */
    static readonly "enchantingTable": BlockType;
    /**
    Represents an end bricks block within Minecraft.
    */
    static readonly "endBricks": BlockType;
    /**
    Represents a set of end brick stairs within Minecraft.
    */
    static readonly "endBrickStairs": BlockType;
    /**
    Represents an ender chest within Minecraft.
    */
    static readonly "enderChest": BlockType;
    /**
    Represents an end gateway within Minecraft.
    */
    static readonly "endGateway": BlockType;
    /**
    Represents an end portal block within Minecraft.
    */
    static readonly "endPortal": BlockType;
    /**
    Represents an end portal frame within Minecraft.
    */
    static readonly "endPortalFrame": BlockType;
    /**
    Represents an end rod within Minecraft.
    */
    static readonly "endRod": BlockType;
    /**
    Represents an end stone block within Minecraft.
    */
    static readonly "endStone": BlockType;
    /**
    Represents a block of exposed copper within Minecraft.
    */
    static readonly "exposedCopper": BlockType;
    /**
    Represents a block of exposed cut copper within Minecraft.
    */
    static readonly "exposedCutCopper": BlockType;
    /**
    Represents a slab of exposed cut copper within Minecraft.
    */
    static readonly "exposedCutCopperSlab": BlockType;
    /**
    Represents a set of exposed cut copper stairs within Minecraft.
    */
    static readonly "exposedCutCopperStairs": BlockType;
    /**
    Represents a double slab of exposed cut copper within Minecraft.
    */
    static readonly "exposedDoubleCutCopperSlab": BlockType;
    /**
    Represents a farmland block within Minecraft.
    */
    static readonly "farmland": BlockType;
    /**
    Represents a fence within Minecraft.
    */
    static readonly "fence": BlockType;
    /**
    Represents a fence gate within Minecraft.
    */
    static readonly "fenceGate": BlockType;
    /**
    Represents a fire within Minecraft.
    */
    static readonly "fire": BlockType;
    /**
    Represents a fletching table within Minecraft.
    */
    static readonly "fletchingTable": BlockType;
    /**
    Represents a flowering azalea plant within Minecraft.
    */
    static readonly "floweringAzalea": BlockType;
    /**
    Represents a flower pot within Minecraft.
    */
    static readonly "flowerPot": BlockType;
    /**
    Represents flowing lava within Minecraft.
    */
    static readonly "flowingLava": BlockType;
    /**
    Represents flowing water within Minecraft.
    */
    static readonly "flowingWater": BlockType;
    /**
    Represents a frame within Minecraft.
    */
    static readonly "frame": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "frogSpawn": BlockType;
    /**
    Represents a frosted ice block within Minecraft.
    */
    static readonly "frostedIce": BlockType;
    /**
    Represents a furnace within Minecraft.
    */
    static readonly "furnace": BlockType;
    /**
    Represents a block of gilded blackstone within Minecraft.
    */
    static readonly "gildedBlackstone": BlockType;
    /**
    Represents a glass block within Minecraft.
    */
    static readonly "glass": BlockType;
    /**
    Represents a pane of glass within Minecraft.
    */
    static readonly "glassPane": BlockType;
    /**
    Represents a glowing frame within Minecraft.
    */
    static readonly "glowFrame": BlockType;
    /**
    Represents a glowing obsidian block within Minecraft.
    */
    static readonly "glowingobsidian": BlockType;
    /**
    Represents glow lichen within Minecraft.
    */
    static readonly "glowLichen": BlockType;
    /**
    Represents a block of glowstone within Minecraft.
    */
    static readonly "glowstone": BlockType;
    /**
    Represents a gold block within Minecraft.
    */
    static readonly "goldBlock": BlockType;
    /**
    Represents a golden rail element within Minecraft.
    */
    static readonly "goldenRail": BlockType;
    /**
    Represents a block with embedded gold ore within Minecraft.
    */
    static readonly "goldOre": BlockType;
    /**
    Represents a set of granite stairs within Minecraft.
    */
    static readonly "graniteStairs": BlockType;
    /**
    Represents a block of dirt and grass within Minecraft.
    */
    static readonly "grass": BlockType;
    /**
    Represents a block of dirt and grass with a path within Minecraft.
    */
    static readonly "grassPath": BlockType;
    /**
    Represents a block of gravel within Minecraft.
    */
    static readonly "gravel": BlockType;
    /**
    Represents a gray-colored candle within Minecraft.
    */
    static readonly "grayCandle": BlockType;
    /**
    Represents a cake with gray-colored candle within Minecraft.
    */
    static readonly "grayCandleCake": BlockType;
    /**
    Represents a gray-colored block of glazed terracotta within Minecraft.
    */
    static readonly "grayGlazedTerracotta": BlockType;
    /**
    Represents a green-colored candle within Minecraft.
    */
    static readonly "greenCandle": BlockType;
    /**
    Represents a green-colored candle cake within Minecraft.
    */
    static readonly "greenCandleCake": BlockType;
    /**
    Represents a green block of glazed terracotta within Minecraft.
    */
    static readonly "greenGlazedTerracotta": BlockType;
    /**
    Represents a grindstone within Minecraft.
    */
    static readonly "grindstone": BlockType;
    /**
    Represents a set of hanging roots within Minecraft.
    */
    static readonly "hangingRoots": BlockType;
    /**
    Represents a block of hardened clay within Minecraft.
    */
    static readonly "hardenedClay": BlockType;
    /**
    Represents a block of hard glass within Minecraft.
    */
    static readonly "hardGlass": BlockType;
    /**
    Represents a pane of hard glass within Minecraft.
    */
    static readonly "hardGlassPane": BlockType;
    /**
    Represents a stained hard glass block within Minecraft.
    */
    static readonly "hardStainedGlass": BlockType;
    /**
    Represents a stained pane of hard glass within Minecraft.
    */
    static readonly "hardStainedGlassPane": BlockType;
    /**
    Represents a block of hay within Minecraft.
    */
    static readonly "hayBlock": BlockType;
    /**
    Represents a heavy weighted pressure plate within Minecraft.
    */
    static readonly "heavyWeightedPressurePlate": BlockType;
    /**
    Represents a block of honey within Minecraft.
    */
    static readonly "honeyBlock": BlockType;
    /**
    Represents a honeycomb block within Minecraft.
    */
    static readonly "honeycombBlock": BlockType;
    /**
    Represents a hopper within Minecraft.
    */
    static readonly "hopper": BlockType;
    /**
    Represents a block of ice within Minecraft.
    */
    static readonly "ice": BlockType;
    /**
    Represents an infested block of deepslate within Minecraft.
    */
    static readonly "infestedDeepslate": BlockType;
    /**
    Represents an information update block within Minecraft.
    */
    static readonly "infoUpdate": BlockType;
    /**
    Represents an information update block within Minecraft.
    */
    static readonly "infoUpdate2": BlockType;
    /**
    Represents an invisible boundary bedrock block within Minecraft.
    */
    static readonly "invisibleBedrock": BlockType;
    /**
    Represents iron bars within Minecraft.
    */
    static readonly "ironBars": BlockType;
    /**
    Represents a block of iron within Minecraft.
    */
    static readonly "ironBlock": BlockType;
    /**
    Represents an iron door within Minecraft.
    */
    static readonly "ironDoor": BlockType;
    /**
    Represents a block with embedded iron ore within Minecraft.
    */
    static readonly "ironOre": BlockType;
    /**
    Represents an iron trapdoor within Minecraft.
    */
    static readonly "ironTrapdoor": BlockType;
    /**
    Represents a jigsaw within Minecraft.
    */
    static readonly "jigsaw": BlockType;
    /**
    Represents a jukebox within Minecraft.
    */
    static readonly "jukebox": BlockType;
    /**
    Represents jungle wood button within Minecraft.
    */
    static readonly "jungleButton": BlockType;
    /**
    Represents a jungle wood door within Minecraft.
    */
    static readonly "jungleDoor": BlockType;
    /**
    Represents a jungle wood fence gate within Minecraft.
    */
    static readonly "jungleFenceGate": BlockType;
    /**
    Represents a jungle wood pressure plate within Minecraft.
    */
    static readonly "junglePressurePlate": BlockType;
    /**
    Represents a set of jungle wood stairs within Minecraft.
    */
    static readonly "jungleStairs": BlockType;
    /**
    Represents a jungle wood standing sign within Minecraft.
    */
    static readonly "jungleStandingSign": BlockType;
    /**
    Represents a jungle wood trapdoor within Minecraft.
    */
    static readonly "jungleTrapdoor": BlockType;
    /**
    Represents a jungle wood wall sign within Minecraft.
    */
    static readonly "jungleWallSign": BlockType;
    /**
    Represents a set of kelp within Minecraft.
    */
    static readonly "kelp": BlockType;
    /**
    Represents a ladder within Minecraft.
    */
    static readonly "ladder": BlockType;
    /**
    Represents a lantern within Minecraft.
    */
    static readonly "lantern": BlockType;
    /**
    Represents a block of lapis lazuli within Minecraft.
    */
    static readonly "lapisBlock": BlockType;
    /**
    Represents a block with embedded lapis lazuli within Minecraft.
    */
    static readonly "lapisOre": BlockType;
    /**
    Represents a bud of large amethyst within Minecraft.
    */
    static readonly "largeAmethystBud": BlockType;
    /**
    Represents lava within Minecraft.
    */
    static readonly "lava": BlockType;
    /**
    Represents a cauldron filled with lava within Minecraft.
    */
    static readonly "lavaCauldron": BlockType;
    /**
    Represents a set of leaves within Minecraft.
    */
    static readonly "leaves": BlockType;
    /**
    Represents an updated set of leaves within Minecraft.
    */
    static readonly "leaves2": BlockType;
    /**
    Represents a lectern within Minecraft.
    */
    static readonly "lectern": BlockType;
    /**
    Represents a lever within Minecraft.
    */
    static readonly "lever": BlockType;
    /**
    Represents a block of light within Minecraft.
    */
    static readonly "lightBlock": BlockType;
    /**
    Represents a light blue candle within Minecraft.
    */
    static readonly "lightBlueCandle": BlockType;
    /**
    Represents a light blue candle cake within Minecraft.
    */
    static readonly "lightBlueCandleCake": BlockType;
    /**
    Represents a light blue block of glazed terracotta within Minecraft.
    */
    static readonly "lightBlueGlazedTerracotta": BlockType;
    /**
    Represents a light gray candle within Minecraft.
    */
    static readonly "lightGrayCandle": BlockType;
    /**
    Represents a light gray candle cake within Minecraft.
    */
    static readonly "lightGrayCandleCake": BlockType;
    /**
    Represents a lightning rod within Minecraft.
    */
    static readonly "lightningRod": BlockType;
    /**
    Represents a light weighted pressure plate within Minecraft.
    */
    static readonly "lightWeightedPressurePlate": BlockType;
    /**
    Represents a lime candle within Minecraft.
    */
    static readonly "limeCandle": BlockType;
    /**
    Represents a lime-colored candle cake within Minecraft.
    */
    static readonly "limeCandleCake": BlockType;
    /**
    Represents a lime-colored block of glazed terracotta within Minecraft.
    */
    static readonly "limeGlazedTerracotta": BlockType;
    /**
    Represents a lit blast furnace within Minecraft.
    */
    static readonly "litBlastFurnace": BlockType;
    /**
    Represents lit deepslate redstone ore within Minecraft.
    */
    static readonly "litDeepslateRedstoneOre": BlockType;
    /**
    Represents a lit furnace within Minecraft.
    */
    static readonly "litFurnace": BlockType;
    /**
    Represents a lit pumpkin within Minecraft.
    */
    static readonly "litPumpkin": BlockType;
    /**
    Represents a lit redstone lamp within Minecraft.
    */
    static readonly "litRedstoneLamp": BlockType;
    /**
    Represents lit redstone ore within Minecraft.
    */
    static readonly "litRedstoneOre": BlockType;
    /**
    Represents a lit smoker within Minecraft.
    */
    static readonly "litSmoker": BlockType;
    /**
    Represents a lodestone within Minecraft.
    */
    static readonly "lodestone": BlockType;
    /**
    Represents a log within Minecraft.
    */
    static readonly "log": BlockType;
    /**
    Represents a more updated, customizable log within Minecraft.
    */
    static readonly "log2": BlockType;
    /**
    Represents a loom within Minecraft.
    */
    static readonly "loom": BlockType;
    /**
    Represents a magenta candle within Minecraft.
    */
    static readonly "magentaCandle": BlockType;
    /**
    Represents a magenta candle cake within Minecraft.
    */
    static readonly "magentaCandleCake": BlockType;
    /**
    Represents a block of magenta-colored glazed terracotta within Minecraft.
    */
    static readonly "magentaGlazedTerracotta": BlockType;
    /**
    Represents magma within Minecraft.
    */
    static readonly "magma": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "mangroveLeaves": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "mangrovePropagule": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "mangrovePropaguleHanging": BlockType;
    /**
    Represents a medium-sized bud of amethyst within Minecraft.
    */
    static readonly "mediumAmethystBud": BlockType;
    /**
    Represents a block of melon within Minecraft.
    */
    static readonly "melonBlock": BlockType;
    /**
    Represents a stem of melon within Minecraft.
    */
    static readonly "melonStem": BlockType;
    /**
    Represents a mob spawner within Minecraft.
    */
    static readonly "mobSpawner": BlockType;
    /**
    Represents a monster egg within Minecraft.
    */
    static readonly "monsterEgg": BlockType;
    /**
    Represents a block of moss within Minecraft.
    */
    static readonly "mossBlock": BlockType;
    /**
    Represents a carpet of moss within Minecraft.
    */
    static readonly "mossCarpet": BlockType;
    /**
    Represents a block of cobblestone with moss within Minecraft.
    */
    static readonly "mossyCobblestone": BlockType;
    /**
    Represents a set of mossy cobblestone stairs within Minecraft.
    */
    static readonly "mossyCobblestoneStairs": BlockType;
    /**
    Represents a set of mossy stone brick stairs within Minecraft.
    */
    static readonly "mossyStoneBrickStairs": BlockType;
    /**
    Represents a moving block within Minecraft.
    */
    static readonly "movingBlock": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "mud": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "mudBrickDoubleSlab": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "mudBricks": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "mudBrickSlab": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "mudBrickStairs": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "mudBrickWall": BlockType;
    /**
    Represents a mycelium plant within Minecraft.
    */
    static readonly "mycelium": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "mysteriousFrame": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "mysteriousFrameSlot": BlockType;
    /**
    Represents a nether brick block within Minecraft.
    */
    static readonly "netherBrick": BlockType;
    /**
    Represents a nether brick fence within Minecraft.
    */
    static readonly "netherBrickFence": BlockType;
    /**
    Represents a set of nether brick stairs within Minecraft.
    */
    static readonly "netherBrickStairs": BlockType;
    /**
    Represents a block of nether with embedded gold ore within Minecraft.
    */
    static readonly "netherGoldOre": BlockType;
    /**
    Represents a block of netherite within Minecraft.
    */
    static readonly "netheriteBlock": BlockType;
    /**
    Represents a block of netherrack within Minecraft.
    */
    static readonly "netherrack": BlockType;
    /**
    Represents a nether rock within Minecraft.
    */
    static readonly "netherreactor": BlockType;
    /**
    Represents nether sprouts within Minecraft.
    */
    static readonly "netherSprouts": BlockType;
    /**
    Represents nether wart within Minecraft.
    */
    static readonly "netherWart": BlockType;
    /**
    Represents a block of nether wart within Minecraft.
    */
    static readonly "netherWartBlock": BlockType;
    /**
    Represents a standard set of stone stairs within Minecraft.
    */
    static readonly "normalStoneStairs": BlockType;
    /**
    Represents a note block within Minecraft.
    */
    static readonly "noteblock": BlockType;
    /**
    Represents a set of oak stairs within Minecraft.
    */
    static readonly "oakStairs": BlockType;
    /**
    Represents an observer within Minecraft.
    */
    static readonly "observer": BlockType;
    /**
    Represents an obsidian block within Minecraft.
    */
    static readonly "obsidian": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "ochreFroglight": BlockType;
    /**
    Represents an orange candle within Minecraft.
    */
    static readonly "orangeCandle": BlockType;
    /**
    Represents an orange candle cake within Minecraft.
    */
    static readonly "orangeCandleCake": BlockType;
    /**
    Represents a block of orange-colored glazed terracotta within Minecraft.
    */
    static readonly "orangeGlazedTerracotta": BlockType;
    /**
    Represents a block of oxidized copper within Minecraft.
    */
    static readonly "oxidizedCopper": BlockType;
    /**
    Represents a block of oxidized cut copper within Minecraft.
    */
    static readonly "oxidizedCutCopper": BlockType;
    /**
    Represents a slab of oxidized cut copper within Minecraft.
    */
    static readonly "oxidizedCutCopperSlab": BlockType;
    /**
    Represents a set of oxidized cut copper stairs within Minecraft.
    */
    static readonly "oxidizedCutCopperStairs": BlockType;
    /**
    Represents a double slab of oxidized cut copper within Minecraft.
    */
    static readonly "oxidizedDoubleCutCopperSlab": BlockType;
    /**
    Represents a block of packed ice within Minecraft.
    */
    static readonly "packedIce": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "packedMud": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "pearlescentFroglight": BlockType;
    /**
    Represents a pink candle within Minecraft.
    */
    static readonly "pinkCandle": BlockType;
    /**
    Represents a pink candle cake within Minecraft.
    */
    static readonly "pinkCandleCake": BlockType;
    /**
    Represents a pink-colored block of glazed terracotta within Minecraft.
    */
    static readonly "pinkGlazedTerracotta": BlockType;
    /**
    Represents a piston within Minecraft.
    */
    static readonly "piston": BlockType;
    /**
    Represents a piston arm within Minecraft.
    */
    static readonly "pistonArmCollision": BlockType;
    /**
    Represents a set of planks within Minecraft.
    */
    static readonly "planks": BlockType;
    /**
    Represents podzol within Minecraft.
    */
    static readonly "podzol": BlockType;
    /**
    Represents pointed dripstone within Minecraft.
    */
    static readonly "pointedDripstone": BlockType;
    /**
    Represents a set of polished andesite stairs within Minecraft.
    */
    static readonly "polishedAndesiteStairs": BlockType;
    /**
    Represents a block of polished basalt within Minecraft.
    */
    static readonly "polishedBasalt": BlockType;
    /**
    Represents a block of polished blackstone within Minecraft.
    */
    static readonly "polishedBlackstone": BlockType;
    /**
    Represents a double slab of polished blackstone brick within Minecraft.
    */
    static readonly "polishedBlackstoneBrickDoubleSlab": BlockType;
    /**
    Represents a block of polished blackstone bricks within Minecraft.
    */
    static readonly "polishedBlackstoneBricks": BlockType;
    /**
    Represents a slab of polished blackstone within Minecraft.
    */
    static readonly "polishedBlackstoneBrickSlab": BlockType;
    /**
    Represents a set of polished blackstone brick stairs within Minecraft.
    */
    static readonly "polishedBlackstoneBrickStairs": BlockType;
    /**
    Represents a polished blackstone brick wall within Minecraft.
    */
    static readonly "polishedBlackstoneBrickWall": BlockType;
    /**
    Represents a polished blackstone button within Minecraft.
    */
    static readonly "polishedBlackstoneButton": BlockType;
    /**
    Represents a double slab of polished blackstone within Minecraft.
    */
    static readonly "polishedBlackstoneDoubleSlab": BlockType;
    /**
    Represents a polished blackstone pressure plate within Minecraft.
    */
    static readonly "polishedBlackstonePressurePlate": BlockType;
    /**
    Represents a slab of polished blackstone within Minecraft.
    */
    static readonly "polishedBlackstoneSlab": BlockType;
    /**
    Represents a set of polished blackstone stairs within Minecraft.
    */
    static readonly "polishedBlackstoneStairs": BlockType;
    /**
    Represents a polished blackstone wall within Minecraft.
    */
    static readonly "polishedBlackstoneWall": BlockType;
    /**
    Represents a block of polished deepslate within Minecraft.
    */
    static readonly "polishedDeepslate": BlockType;
    /**
    Represents a double slab of polished deepslate within Minecraft.
    */
    static readonly "polishedDeepslateDoubleSlab": BlockType;
    /**
    Represents a slab of polished deepslate within Minecraft.
    */
    static readonly "polishedDeepslateSlab": BlockType;
    /**
    Represents a set of polished deepslate stairs within Minecraft.
    */
    static readonly "polishedDeepslateStairs": BlockType;
    /**
    Represents a wall of polished deepslate within Minecraft.
    */
    static readonly "polishedDeepslateWall": BlockType;
    /**
    Represents a block of polished diorite within Minecraft.
    */
    static readonly "polishedDioriteStairs": BlockType;
    /**
    Represents a set of polished granite stairs within Minecraft.
    */
    static readonly "polishedGraniteStairs": BlockType;
    /**
    Represents a portal within Minecraft.
    */
    static readonly "portal": BlockType;
    /**
    Represents a set of potatoes within Minecraft.
    */
    static readonly "potatoes": BlockType;
    /**
    Represents a block of powder snow within Minecraft.
    */
    static readonly "powderSnow": BlockType;
    /**
    Represents a powered comparator within Minecraft.
    */
    static readonly "poweredComparator": BlockType;
    /**
    Represents a powered repeater within Minecraft.
    */
    static readonly "poweredRepeater": BlockType;
    /**
    Represents a block of prismarine within Minecraft.
    */
    static readonly "prismarine": BlockType;
    /**
    Represents a set of prismarine brick stairs within Minecraft.
    */
    static readonly "prismarineBricksStairs": BlockType;
    /**
    Represents a set of prismarine stairs within Minecraft.
    */
    static readonly "prismarineStairs": BlockType;
    /**
    Represents a pumpkin within Minecraft.
    */
    static readonly "pumpkin": BlockType;
    /**
    Represents a pumpkin stem within Minecraft.
    */
    static readonly "pumpkinStem": BlockType;
    /**
    Represents a purple candle within Minecraft.
    */
    static readonly "purpleCandle": BlockType;
    /**
    Represents a purple colored candle cake within Minecraft.
    */
    static readonly "purpleCandleCake": BlockType;
    /**
    Represents a purple-colored block of glazed terracotta within Minecraft.
    */
    static readonly "purpleGlazedTerracotta": BlockType;
    /**
    Represents a purpur block within Minecraft.
    */
    static readonly "purpurBlock": BlockType;
    /**
    Represents a set of purpur stairs within Minecraft.
    */
    static readonly "purpurStairs": BlockType;
    /**
    Represents a block of solid quartz within Minecraft.
    */
    static readonly "quartzBlock": BlockType;
    /**
    Represents a block of solid quartz bricks within Minecraft.
    */
    static readonly "quartzBricks": BlockType;
    /**
    Represents a block with embedded quartz ore within Minecraft.
    */
    static readonly "quartzOre": BlockType;
    /**
    Represents a set of quartz stairs within Minecraft.
    */
    static readonly "quartzStairs": BlockType;
    /**
    Represents a set of rails within Minecraft.
    */
    static readonly "rail": BlockType;
    /**
    Represents a block of raw copper within Minecraft.
    */
    static readonly "rawCopperBlock": BlockType;
    /**
    Represents a block of raw gold within Minecraft.
    */
    static readonly "rawGoldBlock": BlockType;
    /**
    Represents a block of raw iron within Minecraft.
    */
    static readonly "rawIronBlock": BlockType;
    /**
    Represents a red candle within Minecraft.
    */
    static readonly "redCandle": BlockType;
    /**
    Represents a red candle cake within Minecraft.
    */
    static readonly "redCandleCake": BlockType;
    /**
    Represents a red flower within Minecraft.
    */
    static readonly "redFlower": BlockType;
    /**
    Represents a red-colored block of glazed terracotta within Minecraft.
    */
    static readonly "redGlazedTerracotta": BlockType;
    /**
    Represents a red mushroom within Minecraft.
    */
    static readonly "redMushroom": BlockType;
    /**
    Represents a block of red mushroom within Minecraft.
    */
    static readonly "redMushroomBlock": BlockType;
    /**
    Represents a block of red nether brick within Minecraft.
    */
    static readonly "redNetherBrick": BlockType;
    /**
    Represents a set of red nether brick stairs within Minecraft.
    */
    static readonly "redNetherBrickStairs": BlockType;
    /**
    Represents a block of red sandstone within Minecraft.
    */
    static readonly "redSandstone": BlockType;
    /**
    Represents a set of red sandstone stairs within Minecraft.
    */
    static readonly "redSandstoneStairs": BlockType;
    /**
    Represents a block of redstone within Minecraft.
    */
    static readonly "redstoneBlock": BlockType;
    /**
    Represents a redstone lamp within Minecraft.
    */
    static readonly "redstoneLamp": BlockType;
    /**
    Represents a block with embedded redstone ore within Minecraft.
    */
    static readonly "redstoneOre": BlockType;
    /**
    Represents a redstone torch within Minecraft.
    */
    static readonly "redstoneTorch": BlockType;
    /**
    Represents a redstone wire within Minecraft.
    */
    static readonly "redstoneWire": BlockType;
    /**
    Represents reeds within Minecraft.
    */
    static readonly "reeds": BlockType;
    /**
    Represents a repeating command block within Minecraft.
    */
    static readonly "repeatingCommandBlock": BlockType;
    /**
    Represents a reserved block within Minecraft.
    */
    static readonly "reserved6": BlockType;
    /**
    Represents a respawn anchor within Minecraft.
    */
    static readonly "respawnAnchor": BlockType;
    /**
    Represents a block of sand within Minecraft.
    */
    static readonly "sand": BlockType;
    /**
    Represents a block of sandstone within Minecraft.
    */
    static readonly "sandstone": BlockType;
    /**
    Represents a set of sandstone stairs within Minecraft.
    */
    static readonly "sandstoneStairs": BlockType;
    /**
    Represents a sapling within Minecraft.
    */
    static readonly "sapling": BlockType;
    /**
    Represents a set of scaffolding within Minecraft.
    */
    static readonly "scaffolding": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "sculk": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "sculkCatalyst": BlockType;
    /**
    Represents a sculk sensor within Minecraft.
    */
    static readonly "sculkSensor": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "sculkShrieker": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "sculkVein": BlockType;
    /**
    Represents seagrass within Minecraft.
    */
    static readonly "seagrass": BlockType;
    /**
    Represents a sealantern within Minecraft.
    */
    static readonly "seaLantern": BlockType;
    /**
    Represents a seapickle within Minecraft.
    */
    static readonly "seaPickle": BlockType;
    /**
    Represents a shroom light within Minecraft.
    */
    static readonly "shroomlight": BlockType;
    /**
    Represents a shulker box within Minecraft.
    */
    static readonly "shulkerBox": BlockType;
    /**
    Represents a silver-colored block of glazed terracotta within Minecraft.
    */
    static readonly "silverGlazedTerracotta": BlockType;
    /**
    Represents a skull within Minecraft.
    */
    static readonly "skull": BlockType;
    /**
    Represents slime within Minecraft.
    */
    static readonly "slime": BlockType;
    /**
    Represents a small bud of amethyst within Minecraft.
    */
    static readonly "smallAmethystBud": BlockType;
    /**
    Represents a small dripleaf block within Minecraft.
    */
    static readonly "smallDripleafBlock": BlockType;
    /**
    Represents a smithing table within Minecraft.
    */
    static readonly "smithingTable": BlockType;
    /**
    Represents a smoker within Minecraft.
    */
    static readonly "smoker": BlockType;
    /**
    Represents a block of smooth basalt within Minecraft.
    */
    static readonly "smoothBasalt": BlockType;
    /**
    Represents a set of smooth quartz stairs within Minecraft.
    */
    static readonly "smoothQuartzStairs": BlockType;
    /**
    Represents a set of smooth red sandstone stairs within Minecraft.
    */
    static readonly "smoothRedSandstoneStairs": BlockType;
    /**
    Represents a set of smooth redstone stairs within Minecraft.
    */
    static readonly "smoothSandstoneStairs": BlockType;
    /**
    Represents a smooth stone block within Minecraft.
    */
    static readonly "smoothStone": BlockType;
    /**
    Represents snow within Minecraft.
    */
    static readonly "snow": BlockType;
    /**
    Represents a layer of snow within Minecraft.
    */
    static readonly "snowLayer": BlockType;
    /**
    Represents a soul campfire within Minecraft.
    */
    static readonly "soulCampfire": BlockType;
    /**
    Represents soul fire within Minecraft.
    */
    static readonly "soulFire": BlockType;
    /**
    Represents a soul lantern within Minecraft.
    */
    static readonly "soulLantern": BlockType;
    /**
    Represents a block of soul sand within Minecraft.
    */
    static readonly "soulSand": BlockType;
    /**
    Represents soul soil within Minecraft.
    */
    static readonly "soulSoil": BlockType;
    /**
    Represents a soul torch within Minecraft.
    */
    static readonly "soulTorch": BlockType;
    /**
    Represents a sponge within Minecraft.
    */
    static readonly "sponge": BlockType;
    /**
    Represents a spore blossom within Minecraft.
    */
    static readonly "sporeBlossom": BlockType;
    /**
    Represents a spruce wood button within Minecraft.
    */
    static readonly "spruceButton": BlockType;
    /**
    Represents a spruce wood door within Minecraft.
    */
    static readonly "spruceDoor": BlockType;
    /**
    Represents a spruce wood fence gate within Minecraft.
    */
    static readonly "spruceFenceGate": BlockType;
    /**
    Represents a spruce wood pressure plate within Minecraft.
    */
    static readonly "sprucePressurePlate": BlockType;
    /**
    Represents a set of spruce wood stairs within Minecraft.
    */
    static readonly "spruceStairs": BlockType;
    /**
    Represents a spruce wood standing sign within Minecraft.
    */
    static readonly "spruceStandingSign": BlockType;
    /**
    Represents a spruce wood trapdoor within Minecraft.
    */
    static readonly "spruceTrapdoor": BlockType;
    /**
    Represents a spruce wood wall sign within Minecraft.
    */
    static readonly "spruceWallSign": BlockType;
    /**
    Represents stained glass within Minecraft.
    */
    static readonly "stainedGlass": BlockType;
    /**
    Represents a pane of stained glass within Minecraft.
    */
    static readonly "stainedGlassPane": BlockType;
    /**
    Represents a block of stained hardened clay within Minecraft.
    */
    static readonly "stainedHardenedClay": BlockType;
    /**
    Represents a standing banner within Minecraft.
    */
    static readonly "standingBanner": BlockType;
    /**
    Represents a standing sign within Minecraft.
    */
    static readonly "standingSign": BlockType;
    /**
    Represents a piston block with a sticky arm within Minecraft.
    */
    static readonly "stickyPiston": BlockType;
    /**
    Represents a sticky piston arm within Minecraft.
    */
    static readonly "stickyPistonArmCollision": BlockType;
    /**
    Represents a block of stone within Minecraft.
    */
    static readonly "stone": BlockType;
    /**
    Represents a block of stone brick within Minecraft.
    */
    static readonly "stonebrick": BlockType;
    /**
    Represents a set of stone brick stairs within Minecraft.
    */
    static readonly "stoneBrickStairs": BlockType;
    /**
    Represents a stone button within Minecraft.
    */
    static readonly "stoneButton": BlockType;
    /**
    Represents a stonecutter within Minecraft.
    */
    static readonly "stonecutter": BlockType;
    /**
    Represents a stonecutter block within Minecraft.
    */
    static readonly "stonecutterBlock": BlockType;
    /**
    Represents a stone pressure plate within Minecraft.
    */
    static readonly "stonePressurePlate": BlockType;
    /**
    Represents a slab of stone within Minecraft.
    */
    static readonly "stoneSlab": BlockType;
    /**
    Represents a variant of a slab of stone (#2) within Minecraft.
    */
    static readonly "stoneSlab2": BlockType;
    /**
    Represents a slab of stone (variant #3) within Minecraft.
    */
    static readonly "stoneSlab3": BlockType;
    /**
    Represents a slab of stone (variant #4) within Minecraft.
    */
    static readonly "stoneSlab4": BlockType;
    /**
    Represents a set of stone stairs within Minecraft.
    */
    static readonly "stoneStairs": BlockType;
    /**
    Represents a stripped acacia log within Minecraft.
    */
    static readonly "strippedAcaciaLog": BlockType;
    /**
    Represents a stripped birch log within Minecraft.
    */
    static readonly "strippedBirchLog": BlockType;
    /**
    Represents stripped crimson hyphae within Minecraft.
    */
    static readonly "strippedCrimsonHyphae": BlockType;
    /**
    Represents a stripped crimson stem within Minecraft.
    */
    static readonly "strippedCrimsonStem": BlockType;
    /**
    Represents a stripped dark oak log within Minecraft.
    */
    static readonly "strippedDarkOakLog": BlockType;
    /**
    Represents a stripped jungle log within Minecraft.
    */
    static readonly "strippedJungleLog": BlockType;
    /**
    Represents a stripped oak log within Minecraft.
    */
    static readonly "strippedOakLog": BlockType;
    /**
    Represents a stripped spruce log within Minecraft.
    */
    static readonly "strippedSpruceLog": BlockType;
    /**
    Represents stripped warped hyphae within Minecraft.
    */
    static readonly "strippedWarpedHyphae": BlockType;
    /**
    Represents stripped warped stem within Minecraft.
    */
    static readonly "strippedWarpedStem": BlockType;
    /**
    Represents a structure block, which provides for the saving and loading of block structures, within Minecraft.
    */
    static readonly "structureBlock": BlockType;
    /**
    Represents a structure void within Minecraft.
    */
    static readonly "structureVoid": BlockType;
    /**
    Represents a sweet berry bush within Minecraft.
    */
    static readonly "sweetBerryBush": BlockType;
    /**
    Represents tall grass within Minecraft.
    */
    static readonly "tallgrass": BlockType;
    /**
    Represents a target within Minecraft.
    */
    static readonly "target": BlockType;
    /**
    Represents tinted glass within Minecraft.
    */
    static readonly "tintedGlass": BlockType;
    /**
    Represents a block of TnT within Minecraft.
    */
    static readonly "tnt": BlockType;
    /**
    Represents a torch within Minecraft.
    */
    static readonly "torch": BlockType;
    /**
    Represents a trapdoor within Minecraft.
    */
    static readonly "trapdoor": BlockType;
    /**
    Represents a trapped chest within Minecraft.
    */
    static readonly "trappedChest": BlockType;
    /**
    Represents a tripwire within Minecraft.
    */
    static readonly "tripWire": BlockType;
    /**
    Represents a tripwire hook within Minecraft.
    */
    static readonly "tripwireHook": BlockType;
    /**
    Represents a block of tuff within Minecraft.
    */
    static readonly "tuff": BlockType;
    /**
    Represents a turtle egg within Minecraft.
    */
    static readonly "turtleEgg": BlockType;
    /**
    Represents a set of twisting vines within Minecraft.
    */
    static readonly "twistingVines": BlockType;
    /**
    Represents an underwater torch within Minecraft.
    */
    static readonly "underwaterTorch": BlockType;
    /**
    Represents an undyed shulker box within Minecraft.
    */
    static readonly "undyedShulkerBox": BlockType;
    /**
    Represents an unknown block within Minecraft.
    */
    static readonly "unknown": BlockType;
    /**
    Represents an unlit redstone torch within Minecraft.
    */
    static readonly "unlitRedstoneTorch": BlockType;
    /**
    Represents an unpowered comparator within Minecraft.
    */
    static readonly "unpoweredComparator": BlockType;
    /**
    Represents an unpowered repeater within Minecraft.
    */
    static readonly "unpoweredRepeater": BlockType;
    /**
    Type: [*BlockType*](BlockType.md)
    */
    static readonly "verdantFroglight": BlockType;
    /**
    Represents a set of vines within Minecraft.
    */
    static readonly "vine": BlockType;
    /**
    Represents a wall banner within Minecraft.
    */
    static readonly "wallBanner": BlockType;
    /**
    Represents a wall sign within Minecraft.
    */
    static readonly "wallSign": BlockType;
    /**
    Represents a warped button within Minecraft.
    */
    static readonly "warpedButton": BlockType;
    /**
    Represents a warped door within Minecraft.
    */
    static readonly "warpedDoor": BlockType;
    /**
    Represents a double slab of warped within Minecraft.
    */
    static readonly "warpedDoubleSlab": BlockType;
    /**
    Represents a warped fence within Minecraft.
    */
    static readonly "warpedFence": BlockType;
    /**
    Represents a warped fence gate within Minecraft.
    */
    static readonly "warpedFenceGate": BlockType;
    /**
    Represents warped fungus within Minecraft.
    */
    static readonly "warpedFungus": BlockType;
    /**
    Represents warped hyphae within Minecraft.
    */
    static readonly "warpedHyphae": BlockType;
    /**
    Represents warped nylium within Minecraft.
    */
    static readonly "warpedNylium": BlockType;
    /**
    Represents warped planks within Minecraft.
    */
    static readonly "warpedPlanks": BlockType;
    /**
    Represents a warped pressure plate within Minecraft.
    */
    static readonly "warpedPressurePlate": BlockType;
    /**
    Represents a set of warped roots within Minecraft.
    */
    static readonly "warpedRoots": BlockType;
    /**
    Represents a slab of warped material within Minecraft.
    */
    static readonly "warpedSlab": BlockType;
    /**
    Represents a set of warped stairs within Minecraft.
    */
    static readonly "warpedStairs": BlockType;
    /**
    Represents a warped standing sign within Minecraft.
    */
    static readonly "warpedStandingSign": BlockType;
    /**
    Represents a warped stem within Minecraft.
    */
    static readonly "warpedStem": BlockType;
    /**
    Represents a warped trapdoor within Minecraft.
    */
    static readonly "warpedTrapdoor": BlockType;
    /**
    Represents a warped wall sign within Minecraft.
    */
    static readonly "warpedWallSign": BlockType;
    /**
    Represents a warped wart block within Minecraft.
    */
    static readonly "warpedWartBlock": BlockType;
    /**
    Represents water within Minecraft.
    */
    static readonly "water": BlockType;
    /**
    Represents a water lily within Minecraft.
    */
    static readonly "waterlily": BlockType;
    /**
    Represents a block of waxed copper within Minecraft.
    */
    static readonly "waxedCopper": BlockType;
    /**
    Represents a block of waxed cut copper within Minecraft.
    */
    static readonly "waxedCutCopper": BlockType;
    /**
    Represents a slab of waxed cut copper within Minecraft.
    */
    static readonly "waxedCutCopperSlab": BlockType;
    /**
    Represents a set of waxed cut copper stairs within Minecraft.
    */
    static readonly "waxedCutCopperStairs": BlockType;
    /**
    Represents a double slab of waxed cut copper within Minecraft.
    */
    static readonly "waxedDoubleCutCopperSlab": BlockType;
    /**
    Represents a block of waxed exposed copper within Minecraft.
    */
    static readonly "waxedExposedCopper": BlockType;
    /**
    Represents a block of waxed exposed cut copper within Minecraft.
    */
    static readonly "waxedExposedCutCopper": BlockType;
    /**
    Represents a slab of waxed exposed cut copper within Minecraft.
    */
    static readonly "waxedExposedCutCopperSlab": BlockType;
    /**
    Represents a set of waxed exposed cut copper stairs within Minecraft.
    */
    static readonly "waxedExposedCutCopperStairs": BlockType;
    /**
    Represents a double slab of waxed exposed cut copper within Minecraft.
    */
    static readonly "waxedExposedDoubleCutCopperSlab": BlockType;
    /**
    Represents a block of waxed oxidized copper within Minecraft.
    */
    static readonly "waxedOxidizedCopper": BlockType;
    /**
    Represents a block of waxed oxidized cut copper within Minecraft.
    */
    static readonly "waxedOxidizedCutCopper": BlockType;
    /**
    Represents a slab of waxed oxidized cut copper within Minecraft.
    */
    static readonly "waxedOxidizedCutCopperSlab": BlockType;
    /**
    Represents a set of waxed oxidized cut copper stairs within Minecraft.
    */
    static readonly "waxedOxidizedCutCopperStairs": BlockType;
    /**
    Represents a double slab of waxed oxidized cut copper within Minecraft.
    */
    static readonly "waxedOxidizedDoubleCutCopperSlab": BlockType;
    /**
    Represents a block of waxed weathered copper within Minecraft.
    */
    static readonly "waxedWeatheredCopper": BlockType;
    /**
    Represents a block of waxed weathered cut copper within Minecraft.
    */
    static readonly "waxedWeatheredCutCopper": BlockType;
    /**
    Represents a slab of waxed weathered cut copper within Minecraft.
    */
    static readonly "waxedWeatheredCutCopperSlab": BlockType;
    /**
    Represents a set of waxed weathered cut copper stairs within Minecraft.
    */
    static readonly "waxedWeatheredCutCopperStairs": BlockType;
    /**
    Represents a double slab of waxed weathered cut copper within Minecraft.
    */
    static readonly "waxedWeatheredDoubleCutCopperSlab": BlockType;
    /**
    Represents a block of weathered copper within Minecraft.
    */
    static readonly "weatheredCopper": BlockType;
    /**
    Represents a block of weathered cut copper within Minecraft.
    */
    static readonly "weatheredCutCopper": BlockType;
    /**
    Represents a slab of weathered cut copper within Minecraft.
    */
    static readonly "weatheredCutCopperSlab": BlockType;
    /**
    Represents a set of weathered cut copper stairs within Minecraft.
    */
    static readonly "weatheredCutCopperStairs": BlockType;
    /**
    Represents a double slab of weathered cut copper within Minecraft.
    */
    static readonly "weatheredDoubleCutCopperSlab": BlockType;
    /**
    Represents a web within Minecraft.
    */
    static readonly "web": BlockType;
    /**
    Represents a set of weeping vines within Minecraft.
    */
    static readonly "weepingVines": BlockType;
    /**
    Represents wheat within Minecraft.
    */
    static readonly "wheat": BlockType;
    /**
    Represents a white candle within Minecraft.
    */
    static readonly "whiteCandle": BlockType;
    /**
    Represents a white candle cake within Minecraft.
    */
    static readonly "whiteCandleCake": BlockType;
    /**
    Represents a block of white glazed terracotta within Minecraft.
    */
    static readonly "whiteGlazedTerracotta": BlockType;
    /**
    Represents a wither rose within Minecraft.
    */
    static readonly "witherRose": BlockType;
    /**
    Represents a block of wood within Minecraft.
    */
    static readonly "wood": BlockType;
    /**
    Represents a wooden button within Minecraft.
    */
    static readonly "woodenButton": BlockType;
    /**
    Represents a wooden door within Minecraft.
    */
    static readonly "woodenDoor": BlockType;
    /**
    Represents a wooden pressure plate within Minecraft.
    */
    static readonly "woodenPressurePlate": BlockType;
    /**
    Represents a wooden slab within Minecraft.
    */
    static readonly "woodenSlab": BlockType;
    /**
    Represents wool within Minecraft.
    */
    static readonly "wool": BlockType;
    /**
    Represents a yellow candle within Minecraft.
    */
    static readonly "yellowCandle": BlockType;
    /**
    Represents a yellow candle cake within Minecraft.
    */
    static readonly "yellowCandleCake": BlockType;
    /**
    Represents a yellow flower within Minecraft.
    */
    static readonly "yellowFlower": BlockType;
    /**
    Represents a yellow block of glazed terracotta within Minecraft.
    */
    static readonly "yellowGlazedTerracotta": BlockType;
    get(typeName: string): BlockType;
    getAllBlockTypes(): BlockType[];
  }
  export class MinecraftDimensionTypes {
    /**
    The Nether is a collection of biomes separate from the Overworld, including Soul Sand Valleys and Crimson forests. Nether fortresses contain exclusive resources. Mobs such as Blaze, Hoglins, Piglins, and Ghasts congregate here.
    */
    static readonly "nether" = "minecraft:nether";
    /**
    The overworld is a collection of biomes, including forests, plains, jungles, mountains, deserts, taiga, and more. This is the default starter dimension for Minecraft. Mobs such as Axolotl, Cows, Creepers, and Zombies congregate here.
    */
    static readonly "overworld" = "minecraft:overworld";
    /**
    The End is separate from the Overworld and the Nether and is generated whenever you create an End portal. Here, a giant center island is surrounded by several smaller areas and islands. You can find Endermen here. End midlands are larger areas that transition you from the center to the outer edges of the End. They contain Shulkers, Endermen, End gateway portals, and End cities. End gateway portals are commonly found at the outermost edge of the void. You usually find End barrens toward the edges of the main areas or land in the End.
    */
    static readonly "theEnd" = "minecraft:the_end";
  }
  export class MinecraftEffectTypes {
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "absorption": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "badOmen": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "blindness": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "conduitPower": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "empty": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "fatalPoison": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "fireResistance": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "haste": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "healthBoost": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "hunger": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "instantDamage": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "instantHealth": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "invisibility": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "jumpBoost": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "levitation": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "miningFatigue": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "nausea": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "nightVision": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "poison": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "regeneration": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "resistance": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "saturation": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "slowFalling": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "slowness": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "speed": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "strength": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "villageHero": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "waterBreathing": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "weakness": EffectType;
    /**
    Type: [*EffectType*](EffectType.md)
    */
    static readonly "wither": EffectType;
  }
  export class MinecraftEnchantmentTypes {
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "aquaAffinity": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "baneOfArthropods": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "binding": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "blastProtection": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "channeling": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "depthStrider": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "efficiency": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "featherFalling": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "fireAspect": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "fireProtection": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "flame": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "fortune": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "frostWalker": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "impaling": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "infinity": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "knockback": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "looting": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "loyalty": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "luckOfTheSea": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "lure": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "mending": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "multishot": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "piercing": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "power": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "projectileProtection": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "protection": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "punch": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "quickCharge": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "respiration": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "riptide": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "sharpness": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "silkTouch": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "smite": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "soulSpeed": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "thorns": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "unbreaking": EnchantmentType;
    /**
    Type: [*EnchantmentType*](EnchantmentType.md)
    */
    static readonly "vanishing": EnchantmentType;
  }
  export class MinecraftEntityTypes {
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "agent": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "areaEffectCloud": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "armorStand": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "arrow": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "axolotl": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "bat": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "bee": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "blaze": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "boat": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "cat": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "caveSpider": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "chestMinecart": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "chicken": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "cod": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "commandBlockMinecart": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "cow": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "creeper": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "dolphin": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "donkey": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "dragonFireball": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "drowned": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "egg": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "elderGuardian": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "enderCrystal": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "enderDragon": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "enderman": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "endermite": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "enderPearl": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "evocationIllager": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "eyeOfEnderSignal": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "fireball": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "fireworksRocket": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "fishingHook": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "fox": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "ghast": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "glowSquid": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "goat": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "guardian": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "hoglin": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "hopperMinecart": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "horse": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "husk": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "ironGolem": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "lightningBolt": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "lingeringPotion": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "llama": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "llamaSpit": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "magmaCube": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "minecart": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "mooshroom": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "mule": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "npc": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "ocelot": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "panda": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "parrot": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "phantom": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "pig": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "piglin": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "piglinBrute": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "pillager": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "player": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "polarBear": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "pufferfish": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "rabbit": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "ravager": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "salmon": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "sheep": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "shulker": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "shulkerBullet": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "silverfish": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "skeleton": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "skeletonHorse": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "slime": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "smallFireball": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "snowball": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "snowGolem": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "spider": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "splashPotion": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "squid": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "stray": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "strider": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "thrownTrident": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "tnt": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "tntMinecart": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "tripodCamera": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "tropicalfish": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "turtle": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "vex": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "villager": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "villagerV2": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "vindicator": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "wanderingTrader": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "witch": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "wither": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "witherSkeleton": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "witherSkull": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "witherSkullDangerous": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "wolf": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "xpBottle": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "xpOrb": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "zoglin": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "zombie": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "zombieHorse": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "zombiePigman": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "zombieVillager": EntityType;
    /**
    Type: [*EntityType*](EntityType.md)
    */
    static readonly "zombieVillagerV2": EntityType;
  }
  export class MinecraftItemTypes {
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "acaciaBoat": ItemType;
    /**
    Represents an item that can place an acacia button within Minecraft.
    */
    static readonly "acaciaButton": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "acaciaChestBoat": ItemType;
    /**
    Represents an item that can place an acacia door within Minecraft.
    */
    static readonly "acaciaDoor": ItemType;
    /**
    Represents an item that can place an acacia fence gate within Minecraft.
    */
    static readonly "acaciaFenceGate": ItemType;
    /**
    Represents an item that can place an acacia pressure plate within Minecraft.
    */
    static readonly "acaciaPressurePlate": ItemType;
    /**
    Represents an item that can place an acacia sign within Minecraft.
    */
    static readonly "acaciaSign": ItemType;
    /**
    Represents an item that can place a set of acacia stairs within Minecraft.
    */
    static readonly "acaciaStairs": ItemType;
    /**
    Represents an item that can place an acacia standing sign within Minecraft.
    */
    static readonly "acaciaStandingSign": ItemType;
    /**
    Represents an item that can place an acacia trapdoor within Minecraft.
    */
    static readonly "acaciaTrapdoor": ItemType;
    /**
    Represents an item that can place an acacia wall sign within Minecraft.
    */
    static readonly "acaciaWallSign": ItemType;
    /**
    Represents an item that can place an activator rail within Minecraft.
    */
    static readonly "activatorRail": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "agentSpawnEgg": ItemType;
    /**
    Represents an item that can place an empty space (air) within Minecraft.
    */
    static readonly "air": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "allaySpawnEgg": ItemType;
    /**
    Represents an item that can place an allow block within Minecraft.
    */
    static readonly "allow": ItemType;
    /**
    Represents an item that can place an amethyst block within Minecraft.
    */
    static readonly "amethystBlock": ItemType;
    /**
    Represents an item that can place a cluster of amethyst within Minecraft.
    */
    static readonly "amethystCluster": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "amethystShard": ItemType;
    /**
    Represents an item that can place ancient debris within Minecraft.
    */
    static readonly "ancientDebris": ItemType;
    /**
    Represents an item that can place andesite stairs within Minecraft.
    */
    static readonly "andesiteStairs": ItemType;
    /**
    Represents an item that can place an anvil within Minecraft.
    */
    static readonly "anvil": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "apple": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "armorStand": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "arrow": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "axolotlBucket": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "axolotlSpawnEgg": ItemType;
    /**
    Represents an item that can place an azalea flowering plant within Minecraft.
    */
    static readonly "azalea": ItemType;
    /**
    Represents an item that can place azalea leaves within Minecraft.
    */
    static readonly "azaleaLeaves": ItemType;
    /**
    Represents flowered azalea leaves within Minecraft.
    */
    static readonly "azaleaLeavesFlowered": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "bakedPotato": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "balloon": ItemType;
    /**
    Represents an item that can place a bamboo tree within Minecraft.
    */
    static readonly "bamboo": ItemType;
    /**
    Represents an item that can place a bamboo sapling within Minecraft.
    */
    static readonly "bambooSapling": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "banner": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "bannerPattern": ItemType;
    /**
    Represents an item that can place a barrel within Minecraft.
    */
    static readonly "barrel": ItemType;
    /**
    Represents an item that can place an invisible but logical barrier within Minecraft.
    */
    static readonly "barrier": ItemType;
    /**
    Represents an item that can place a basalt block within Minecraft.
    */
    static readonly "basalt": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "batSpawnEgg": ItemType;
    /**
    Represents an item that can place a beacon within Minecraft.
    */
    static readonly "beacon": ItemType;
    /**
    Represents an item that can place a bed within Minecraft.
    */
    static readonly "bed": ItemType;
    /**
    Represents an item that can place a bedrock block within Minecraft.
    */
    static readonly "bedrock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "beef": ItemType;
    /**
    Represents an item that can place a beehive within Minecraft.
    */
    static readonly "beehive": ItemType;
    /**
    Represents an item that can place a bee nest within Minecraft.
    */
    static readonly "beeNest": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "beeSpawnEgg": ItemType;
    /**
    Represents an item that can place a beetroot vegetable within Minecraft.
    */
    static readonly "beetroot": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "beetrootSeeds": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "beetrootSoup": ItemType;
    /**
    Represents an item that can place a bell within Minecraft.
    */
    static readonly "bell": ItemType;
    /**
    Represents an item that can place a big dripleaf plant within Minecraft.
    */
    static readonly "bigDripleaf": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "birchBoat": ItemType;
    /**
    Represents an item that can place a birch button within Minecraft.
    */
    static readonly "birchButton": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "birchChestBoat": ItemType;
    /**
    Represents an item that can place a birch door within Minecraft.
    */
    static readonly "birchDoor": ItemType;
    /**
    Represents an item that can place a birch fence gate within Minecraft.
    */
    static readonly "birchFenceGate": ItemType;
    /**
    Represents an item that can place a birch pressure plate within Minecraft.
    */
    static readonly "birchPressurePlate": ItemType;
    /**
    Represents an item that can place a birch sign within Minecraft.
    */
    static readonly "birchSign": ItemType;
    /**
    Represents an item that can place a birch stairs block within Minecraft.
    */
    static readonly "birchStairs": ItemType;
    /**
    Represents an item that can place a birch standing sign within Minecraft.
    */
    static readonly "birchStandingSign": ItemType;
    /**
    Represents an item that can place a birch trapdoor within Minecraft.
    */
    static readonly "birchTrapdoor": ItemType;
    /**
    Represents an item that can place a birch wall sign within Minecraft.
    */
    static readonly "birchWallSign": ItemType;
    /**
    Represents an item that can place a black candle within Minecraft.
    */
    static readonly "blackCandle": ItemType;
    /**
    Represents an item that can place a black candle cake within Minecraft.
    */
    static readonly "blackCandleCake": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "blackDye": ItemType;
    /**
    Represents an item that can place a black glazed terracotta block within Minecraft.
    */
    static readonly "blackGlazedTerracotta": ItemType;
    /**
    Represents an item that can place a blackstone block within Minecraft.
    */
    static readonly "blackstone": ItemType;
    /**
    Represents an item that can place a blackstone double slab within Minecraft.
    */
    static readonly "blackstoneDoubleSlab": ItemType;
    /**
    Represents an item that can place a blackstone slab within Minecraft.
    */
    static readonly "blackstoneSlab": ItemType;
    /**
    Represents blackstone stairs within Minecraft.
    */
    static readonly "blackstoneStairs": ItemType;
    /**
    Represents an item that can place a blackstone wall within Minecraft.
    */
    static readonly "blackstoneWall": ItemType;
    /**
    Represents an item that can place a blast furnace within Minecraft.
    */
    static readonly "blastFurnace": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "blazePowder": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "blazeRod": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "blazeSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "bleach": ItemType;
    /**
    Represents an item that can place a blue candle within Minecraft.
    */
    static readonly "blueCandle": ItemType;
    /**
    Represents an item that can place a blue candle cake within Minecraft.
    */
    static readonly "blueCandleCake": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "blueDye": ItemType;
    /**
    Represents an item that can place a blue glazed terracotta block within Minecraft.
    */
    static readonly "blueGlazedTerracotta": ItemType;
    /**
    Represents an item that can place a blue ice block within Minecraft.
    */
    static readonly "blueIce": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "boat": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "bone": ItemType;
    /**
    Represents an item that can place a bone block within Minecraft.
    */
    static readonly "boneBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "boneMeal": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "book": ItemType;
    /**
    Represents an item that can place an unbreakable border block within Minecraft.
    */
    static readonly "bookshelf": ItemType;
    /**
    Represents an item that can place a border block within Minecraft.
    */
    static readonly "borderBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "bordureIndentedBannerPattern": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "bow": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "bowl": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "bread": ItemType;
    /**
    Represents an item that can place a brewing stand within Minecraft.
    */
    static readonly "brewingStand": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "brick": ItemType;
    /**
    Represents an item that can place a block of brick within Minecraft.
    */
    static readonly "brickBlock": ItemType;
    /**
    Represents brick stairs within Minecraft.
    */
    static readonly "brickStairs": ItemType;
    /**
    Represents an item that can place a brown candle within Minecraft.
    */
    static readonly "brownCandle": ItemType;
    /**
    Represents an item that can place a brown candle cake within Minecraft.
    */
    static readonly "brownCandleCake": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "brownDye": ItemType;
    /**
    Represents an item that can place a brown glazed terracotta block within Minecraft.
    */
    static readonly "brownGlazedTerracotta": ItemType;
    /**
    Represents an item that can place a brown mushroom within Minecraft.
    */
    static readonly "brownMushroom": ItemType;
    /**
    Represents an item that can place a block of brown mushroom within Minecraft.
    */
    static readonly "brownMushroomBlock": ItemType;
    /**
    Represents an item that can place a column of bubbles within Minecraft.
    */
    static readonly "bubbleColumn": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "bucket": ItemType;
    /**
    Represents an item that can place a block of budding amethyst within Minecraft.
    */
    static readonly "buddingAmethyst": ItemType;
    /**
    Represents an item that can place a cactus within Minecraft.
    */
    static readonly "cactus": ItemType;
    /**
    Represents an item that can place a cake within Minecraft.
    */
    static readonly "cake": ItemType;
    /**
    Represents an item that can place a calcite block within Minecraft.
    */
    static readonly "calcite": ItemType;
    /**
    Represents an item that can place a camera within Minecraft Education Edition. It is not available in Minecraft Bedrock Edition.
    */
    static readonly "camera": ItemType;
    /**
    Represents an item that can place a campfire within Minecraft.
    */
    static readonly "campfire": ItemType;
    /**
    Represents an item that can place a candle within Minecraft.
    */
    static readonly "candle": ItemType;
    /**
    Represents an item that can place a cake with candles within Minecraft.
    */
    static readonly "candleCake": ItemType;
    /**
    Represents an item that can place a carpet within Minecraft.
    */
    static readonly "carpet": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "carrot": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "carrotOnAStick": ItemType;
    /**
    Represents carrots within Minecraft.
    */
    static readonly "carrots": ItemType;
    /**
    Represents an item that can place a cartography table block within Minecraft.
    */
    static readonly "cartographyTable": ItemType;
    /**
    Represents an item that can place a carved pumpkin within Minecraft.
    */
    static readonly "carvedPumpkin": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "catSpawnEgg": ItemType;
    /**
    Represents an item that can place a cauldron within Minecraft.
    */
    static readonly "cauldron": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "caveSpiderSpawnEgg": ItemType;
    /**
    Represents an item that can place a set of cave vines within Minecraft.
    */
    static readonly "caveVines": ItemType;
    /**
    Represents the body of a set of cave vines with berries within Minecraft.
    */
    static readonly "caveVinesBodyWithBerries": ItemType;
    /**
    Represents the head of a set of cave vines with berries within Minecraft.
    */
    static readonly "caveVinesHeadWithBerries": ItemType;
    /**
    Represents an item that can place a metallic chain within Minecraft.
    */
    static readonly "chain": ItemType;
    /**
    Represents an item that can place a block that gives off heat but not light, within Minecraft Education Edition or Bedrock Edition with Education features.
    */
    static readonly "chainCommandBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "chainmailBoots": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "chainmailChestplate": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "chainmailHelmet": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "chainmailLeggings": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "charcoal": ItemType;
    /**
    Represents an item that can place a chemical heat block within Minecraft.
    */
    static readonly "chemicalHeat": ItemType;
    /**
    Represents an item that can place a chemistry table within Minecraft Education experiences.
    */
    static readonly "chemistryTable": ItemType;
    /**
    Represents an item that can place a chest within Minecraft.
    */
    static readonly "chest": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "chestBoat": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "chestMinecart": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "chicken": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "chickenSpawnEgg": ItemType;
    /**
    Represents an item that can place a set of chiseled deepslate within Minecraft.
    */
    static readonly "chiseledDeepslate": ItemType;
    /**
    Represents an item that can place a block of chiseled nether bricks within Minecraft.
    */
    static readonly "chiseledNetherBricks": ItemType;
    /**
    Represents an item that can place a block of chiseled polished blackstone within Minecraft.
    */
    static readonly "chiseledPolishedBlackstone": ItemType;
    /**
    Represents an item that can place a chorus flower within Minecraft.
    */
    static readonly "chorusFlower": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "chorusFruit": ItemType;
    /**
    Represents an item that can place a chorus plant within Minecraft.
    */
    static readonly "chorusPlant": ItemType;
    /**
    Represents an item that can place a block of clay within Minecraft.
    */
    static readonly "clay": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "clayBall": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "clientRequestPlaceholderBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "clock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "coal": ItemType;
    /**
    Represents an item that can place a block of solid coal within Minecraft.
    */
    static readonly "coalBlock": ItemType;
    /**
    Represents an item that can place a block with embedded coal ore within Minecraft.
    */
    static readonly "coalOre": ItemType;
    /**
    Represents an item that can place a block of cobbled deepslate within Minecraft.
    */
    static readonly "cobbledDeepslate": ItemType;
    /**
    Represents an item that can place a double slab of cobbled deepslate within Minecraft.
    */
    static readonly "cobbledDeepslateDoubleSlab": ItemType;
    /**
    Represents an item that can place a slab of deepslate within Minecraft.
    */
    static readonly "cobbledDeepslateSlab": ItemType;
    /**
    Represents cobbled deepslate stairs within Minecraft.
    */
    static readonly "cobbledDeepslateStairs": ItemType;
    /**
    Represents an item that can place a cobbled deepslate wall within Minecraft.
    */
    static readonly "cobbledDeepslateWall": ItemType;
    /**
    Represents an item that can place a block of cobblestone within Minecraft.
    */
    static readonly "cobblestone": ItemType;
    /**
    Represents an item that can place a wall of cobblestone within Minecraft.
    */
    static readonly "cobblestoneWall": ItemType;
    /**
    Represents an item that can place a set of cocoa beans (typically on a tree) within Minecraft.
    */
    static readonly "cocoa": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "cocoaBeans": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "cod": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "codBucket": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "codSpawnEgg": ItemType;
    /**
    Represents blue/purple torches within Minecraft.
    */
    static readonly "coloredTorchBp": ItemType;
    /**
    Represents red/green torches within Minecraft.
    */
    static readonly "coloredTorchRg": ItemType;
    /**
    Represents an item that can place a block that can run commands within Minecraft.
    */
    static readonly "commandBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "commandBlockMinecart": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "comparator": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "compass": ItemType;
    /**
    Represents an item that can place a composter block within Minecraft.
    */
    static readonly "composter": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "compound": ItemType;
    /**
    Represents an item that can place a block of concrete powder within Minecraft.
    */
    static readonly "concrete": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "concretePowder": ItemType;
    /**
    Represents an item that can place a conduit block within Minecraft.
    */
    static readonly "conduit": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "cookedBeef": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "cookedChicken": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "cookedCod": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "cookedMutton": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "cookedPorkchop": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "cookedRabbit": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "cookedSalmon": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "cookie": ItemType;
    /**
    Represents an item that can place a solid block of copper within Minecraft.
    */
    static readonly "copperBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "copperIngot": ItemType;
    /**
    Represents an item that can place a block with embedded copper ore within Minecraft.
    */
    static readonly "copperOre": ItemType;
    /**
    Represents coral within Minecraft.
    */
    static readonly "coral": ItemType;
    /**
    Represents an item that can place a solid block of coral within Minecraft.
    */
    static readonly "coralBlock": ItemType;
    /**
    Represents an item that can place a fan formation of coral within Minecraft.
    */
    static readonly "coralFan": ItemType;
    /**
    Represents an item that can place a fan formation of dead coral within Minecraft.
    */
    static readonly "coralFanDead": ItemType;
    /**
    Represents an item that can place a hanging fan formation of coral within Minecraft.
    */
    static readonly "coralFanHang": ItemType;
    /**
    Represents an item that can place an alternate hanging fan formation of coral (#2) within Minecraft.
    */
    static readonly "coralFanHang2": ItemType;
    /**
    Represents an item that can place an alternate hanging fan formation of coral (#3) within Minecraft.
    */
    static readonly "coralFanHang3": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "cowSpawnEgg": ItemType;
    /**
    Represents an item that can place a block of cracked deepslate bricks within Minecraft.
    */
    static readonly "crackedDeepslateBricks": ItemType;
    /**
    Represents tiles of cracked deepslate within Minecraft.
    */
    static readonly "crackedDeepslateTiles": ItemType;
    /**
    Represents an item that can place a block of cracked nether bricks within Minecraft.
    */
    static readonly "crackedNetherBricks": ItemType;
    /**
    Represents an item that can place a block of cracked and polished blackstone bricks within Minecraft.
    */
    static readonly "crackedPolishedBlackstoneBricks": ItemType;
    /**
    Represents an item that can place a crafting table within Minecraft.
    */
    static readonly "craftingTable": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "creeperBannerPattern": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "creeperSpawnEgg": ItemType;
    /**
    Represents an item that can place a crimson button within Minecraft.
    */
    static readonly "crimsonButton": ItemType;
    /**
    Represents an item that can place a crimson door within Minecraft.
    */
    static readonly "crimsonDoor": ItemType;
    /**
    Represents an item that can place a crimson double slab within Minecraft.
    */
    static readonly "crimsonDoubleSlab": ItemType;
    /**
    Represents an item that can place a crimson fence within Minecraft.
    */
    static readonly "crimsonFence": ItemType;
    /**
    Represents an item that can place a crimson fence gate within Minecraft.
    */
    static readonly "crimsonFenceGate": ItemType;
    /**
    Represents an item that can place a crimson fungus within Minecraft.
    */
    static readonly "crimsonFungus": ItemType;
    /**
    Represents crimson hyphae within Minecraft.
    */
    static readonly "crimsonHyphae": ItemType;
    /**
    Represents crimson nylium within Minecraft.
    */
    static readonly "crimsonNylium": ItemType;
    /**
    Represents an item that can place a set of crimson planks within Minecraft.
    */
    static readonly "crimsonPlanks": ItemType;
    /**
    Represents an item that can place a crimson pressure plate within Minecraft.
    */
    static readonly "crimsonPressurePlate": ItemType;
    /**
    Represents an item that can place a set of crimson roots within Minecraft.
    */
    static readonly "crimsonRoots": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "crimsonSign": ItemType;
    /**
    Represents an item that can place a crimson slab within Minecraft.
    */
    static readonly "crimsonSlab": ItemType;
    /**
    Represents an item that can place a set of crimson stairs within Minecraft.
    */
    static readonly "crimsonStairs": ItemType;
    /**
    Represents an item that can place a crimson standing sign within Minecraft.
    */
    static readonly "crimsonStandingSign": ItemType;
    /**
    Represents an item that can place a crimson stem within Minecraft.
    */
    static readonly "crimsonStem": ItemType;
    /**
    Represents an item that can place a crimson trapdoor within Minecraft.
    */
    static readonly "crimsonTrapdoor": ItemType;
    /**
    Represents an item that can place a crimson wall sign within Minecraft.
    */
    static readonly "crimsonWallSign": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "crossbow": ItemType;
    /**
    Represents crying obsidian within Minecraft.
    */
    static readonly "cryingObsidian": ItemType;
    /**
    Represents an item that can place a cut copper block within Minecraft.
    */
    static readonly "cutCopper": ItemType;
    /**
    Represents an item that can place a cut copper slab within Minecraft.
    */
    static readonly "cutCopperSlab": ItemType;
    /**
    Represents an item that can place a set of cut copper stairs within Minecraft.
    */
    static readonly "cutCopperStairs": ItemType;
    /**
    Represents an item that can place a cyan-colored candle within Minecraft.
    */
    static readonly "cyanCandle": ItemType;
    /**
    Represents an item that can place a cake with a cyan-colored candle within Minecraft.
    */
    static readonly "cyanCandleCake": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "cyanDye": ItemType;
    /**
    Represents an item that can place a block of cyan-colored glazed terracotta within Minecraft.
    */
    static readonly "cyanGlazedTerracotta": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "darkOakBoat": ItemType;
    /**
    Represents an item that can place a dark oak button within Minecraft.
    */
    static readonly "darkOakButton": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "darkOakChestBoat": ItemType;
    /**
    Represents an item that can place a dark oak door within Minecraft.
    */
    static readonly "darkOakDoor": ItemType;
    /**
    Represents an item that can place a dark oak fence gate within Minecraft.
    */
    static readonly "darkOakFenceGate": ItemType;
    /**
    Represents an item that can place a dark oak pressure plate within Minecraft.
    */
    static readonly "darkOakPressurePlate": ItemType;
    /**
    Represents an item that can place a dark oak sign within Minecraft.
    */
    static readonly "darkOakSign": ItemType;
    /**
    Represents an item that can place a set of dark oak stairs within Minecraft.
    */
    static readonly "darkOakStairs": ItemType;
    /**
    Represents an item that can place a dark oak standing sign within Minecraft.
    */
    static readonly "darkoakStandingSign": ItemType;
    /**
    Represents an item that can place a dark oak trapdoor within Minecraft.
    */
    static readonly "darkOakTrapdoor": ItemType;
    /**
    Represents an item that can place a dark oak wall sign within Minecraft.
    */
    static readonly "darkoakWallSign": ItemType;
    /**
    Represents an item that can place a set of dark prismarine stairs within Minecraft.
    */
    static readonly "darkPrismarineStairs": ItemType;
    /**
    Represents an item that can place a daylight detector within Minecraft.
    */
    static readonly "daylightDetector": ItemType;
    /**
    Represents an item that can place an inverted daylight detector within Minecraft.
    */
    static readonly "daylightDetectorInverted": ItemType;
    /**
    Represents an item that can place a dead bush within Minecraft.
    */
    static readonly "deadbush": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "debugStick": ItemType;
    /**
    Represents an item that can place a block of deepslate within Minecraft.
    */
    static readonly "deepslate": ItemType;
    /**
    Represents an item that can place a double slab of deepslate brick within Minecraft.
    */
    static readonly "deepslateBrickDoubleSlab": ItemType;
    /**
    Represents an item that can place a block of deepslate bricks within Minecraft.
    */
    static readonly "deepslateBricks": ItemType;
    /**
    Represents an item that can place a slab of deepslate brick within Minecraft.
    */
    static readonly "deepslateBrickSlab": ItemType;
    /**
    Represents an item that can place a set of deepslate brick stairs within Minecraft.
    */
    static readonly "deepslateBrickStairs": ItemType;
    /**
    Represents an item that can place a deepslate brick wall within Minecraft.
    */
    static readonly "deepslateBrickWall": ItemType;
    /**
    Represents an item that can place a block of deepslate with embedded coal ore within Minecraft.
    */
    static readonly "deepslateCoalOre": ItemType;
    /**
    Represents an item that can place a block of deepslate with embedded copper ore within Minecraft.
    */
    static readonly "deepslateCopperOre": ItemType;
    /**
    Represents an item that can place a block of deepslate with embedded diamond ore within Minecraft.
    */
    static readonly "deepslateDiamondOre": ItemType;
    /**
    Represents an item that can place a block of deepslate with embedded emerald ore within Minecraft.
    */
    static readonly "deepslateEmeraldOre": ItemType;
    /**
    Represents an item that can place a block of deepslate with embedded gold ore within Minecraft.
    */
    static readonly "deepslateGoldOre": ItemType;
    /**
    Represents an item that can place a block of deepslate with embedded iron ore within Minecraft.
    */
    static readonly "deepslateIronOre": ItemType;
    /**
    Represents an item that can place a block of deepslate with embedded lapis lazuli ore within Minecraft.
    */
    static readonly "deepslateLapisOre": ItemType;
    /**
    Represents an item that can place a block of deepslate with embedded redstone ore within Minecraft.
    */
    static readonly "deepslateRedstoneOre": ItemType;
    /**
    Represents an item that can place a double slab of tiled deepslate within Minecraft.
    */
    static readonly "deepslateTileDoubleSlab": ItemType;
    /**
    Represents an item that can place a set of deepslate tiles within Minecraft.
    */
    static readonly "deepslateTiles": ItemType;
    /**
    Represents an item that can place a slab of deepslate tiles within Minecraft.
    */
    static readonly "deepslateTileSlab": ItemType;
    /**
    Represents an item that can place a set of deepslate tile stairs within Minecraft.
    */
    static readonly "deepslateTileStairs": ItemType;
    /**
    Represents an item that can place a wall of deepslate tile within Minecraft.
    */
    static readonly "deepslateTileWall": ItemType;
    /**
    Represents an item that can place a logical but generally invisible Deny logic block within Minecraft.
    */
    static readonly "deny": ItemType;
    /**
    Represents an item that can place a detector rail within Minecraft.
    */
    static readonly "detectorRail": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "diamond": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "diamondAxe": ItemType;
    /**
    Represents an item that can place a block of diamond within Minecraft.
    */
    static readonly "diamondBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "diamondBoots": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "diamondChestplate": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "diamondHelmet": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "diamondHoe": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "diamondHorseArmor": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "diamondLeggings": ItemType;
    /**
    Represents an item that can place a block with embedded diamond ore within Minecraft.
    */
    static readonly "diamondOre": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "diamondPickaxe": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "diamondShovel": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "diamondSword": ItemType;
    /**
    Represents an item that can place a set of diorite stairs within Minecraft.
    */
    static readonly "dioriteStairs": ItemType;
    /**
    Represents an item that can place a block of dirt within Minecraft.
    */
    static readonly "dirt": ItemType;
    /**
    Represents an item that can place a block of dirt with roots within Minecraft.
    */
    static readonly "dirtWithRoots": ItemType;
    /**
    Represents an item that can place a dispenser within Minecraft.
    */
    static readonly "dispenser": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "dolphinSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "donkeySpawnEgg": ItemType;
    /**
    Represents an item that can place a slab of double cut copper within Minecraft.
    */
    static readonly "doubleCutCopperSlab": ItemType;
    /**
    Represents an item that can place a double plant within Minecraft.
    */
    static readonly "doublePlant": ItemType;
    /**
    Represents an item that can place a double slab of stone within Minecraft.
    */
    static readonly "doubleStoneSlab": ItemType;
    /**
    Represents an item that can place an alternate double slab of stone (#2) within Minecraft.
    */
    static readonly "doubleStoneSlab2": ItemType;
    /**
    Represents an item that can place an alternate double slab of stone (#3) within Minecraft.
    */
    static readonly "doubleStoneSlab3": ItemType;
    /**
    Represents an item that can place an alternate double slab of stone (#4) within Minecraft.
    */
    static readonly "doubleStoneSlab4": ItemType;
    /**
    Represents an item that can place a double slab of wood within Minecraft.
    */
    static readonly "doubleWoodenSlab": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "dragonBreath": ItemType;
    /**
    Represents an item that can place a dragon egg within Minecraft.
    */
    static readonly "dragonEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "driedKelp": ItemType;
    /**
    Represents an item that can place a block of dried kelp within Minecraft.
    */
    static readonly "driedKelpBlock": ItemType;
    /**
    Represents an item that can place a block of dripstone within Minecraft.
    */
    static readonly "dripstoneBlock": ItemType;
    /**
    Represents an item that can place a dropper within Minecraft.
    */
    static readonly "dropper": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "drownedSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "dye": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "egg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "elderGuardianSpawnEgg": ItemType;
    /**
    Represents an item that can place an element in Minecraft Education experiences.
    */
    static readonly "element0": ItemType;
    /**
    Represents the hydrogen element in Minecraft Education experiences.
    */
    static readonly "element1": ItemType;
    /**
    Represents the neon element in Minecraft Education experiences.
    */
    static readonly "element10": ItemType;
    /**
    Represents the fermium element in Minecraft Education experiences.
    */
    static readonly "element100": ItemType;
    /**
    Represents the mendelevium element in Minecraft Education experiences.
    */
    static readonly "element101": ItemType;
    /**
    Represents the nobelium element in Minecraft Education experiences.
    */
    static readonly "element102": ItemType;
    /**
    Represents the lawrencium element in Minecraft Education experiences.
    */
    static readonly "element103": ItemType;
    /**
    Represents the rutherfordium element in Minecraft Education experiences.
    */
    static readonly "element104": ItemType;
    /**
    Represents the dubnium element in Minecraft Education experiences.
    */
    static readonly "element105": ItemType;
    /**
    Represents the seaborgium element in Minecraft Education experiences.
    */
    static readonly "element106": ItemType;
    /**
    Represents the bohrium element in Minecraft Education experiences.
    */
    static readonly "element107": ItemType;
    /**
    Represents the hassium element in Minecraft Education experiences.
    */
    static readonly "element108": ItemType;
    /**
    Represents the meitnerium element in Minecraft Education experiences.
    */
    static readonly "element109": ItemType;
    /**
    Represents the sodium element in Minecraft Education experiences.
    */
    static readonly "element11": ItemType;
    /**
    Represents the darmstadtium element in Minecraft Education experiences.
    */
    static readonly "element110": ItemType;
    /**
    Represents the roentgenium element in Minecraft Education experiences.
    */
    static readonly "element111": ItemType;
    /**
    Represents the copernicium element in Minecraft Education experiences.
    */
    static readonly "element112": ItemType;
    /**
    Represents the nihonium element in Minecraft Education experiences.
    */
    static readonly "element113": ItemType;
    /**
    Represents the flerovium element in Minecraft Education experiences.
    */
    static readonly "element114": ItemType;
    /**
    Represents the moscovium element in Minecraft Education experiences.
    */
    static readonly "element115": ItemType;
    /**
    Represents the livermorium element in Minecraft Education experiences.
    */
    static readonly "element116": ItemType;
    /**
    Represents the tennessine element in Minecraft Education experiences.
    */
    static readonly "element117": ItemType;
    /**
    Represents the oganesson element in Minecraft Education experiences.
    */
    static readonly "element118": ItemType;
    /**
    Represents the magnesium element in Minecraft Education experiences.
    */
    static readonly "element12": ItemType;
    /**
    Represents the aluminum element in Minecraft Education experiences.
    */
    static readonly "element13": ItemType;
    /**
    Represents the silicon element in Minecraft Education experiences.
    */
    static readonly "element14": ItemType;
    /**
    Represents the phosphorus element in Minecraft Education experiences.
    */
    static readonly "element15": ItemType;
    /**
    Represents the sulfur element in Minecraft Education experiences.
    */
    static readonly "element16": ItemType;
    /**
    Represents the chlorine element in Minecraft Education experiences.
    */
    static readonly "element17": ItemType;
    /**
    Represents the argon element in Minecraft Education experiences.
    */
    static readonly "element18": ItemType;
    /**
    Represents the potassium element in Minecraft Education experiences.
    */
    static readonly "element19": ItemType;
    /**
    Represents the helium element in Minecraft Education experiences.
    */
    static readonly "element2": ItemType;
    /**
    Represents the calcium element in Minecraft Education experiences.
    */
    static readonly "element20": ItemType;
    /**
    Represents the scandium element in Minecraft Education experiences.
    */
    static readonly "element21": ItemType;
    /**
    Represents the titanium element in Minecraft Education experiences.
    */
    static readonly "element22": ItemType;
    /**
    Represents the vanadium element in Minecraft Education experiences.
    */
    static readonly "element23": ItemType;
    /**
    Represents the chromium element in Minecraft Education experiences.
    */
    static readonly "element24": ItemType;
    /**
    Represents the manganese element in Minecraft Education experiences.
    */
    static readonly "element25": ItemType;
    /**
    Represents the iron element in Minecraft Education experiences.
    */
    static readonly "element26": ItemType;
    /**
    Represents the cobalt element in Minecraft Education experiences.
    */
    static readonly "element27": ItemType;
    /**
    Represents the nickel element in Minecraft Education experiences.
    */
    static readonly "element28": ItemType;
    /**
    Represents the copper element in Minecraft Education experiences.
    */
    static readonly "element29": ItemType;
    /**
    Represents an item that can place a lithium element in Minecraft Education experiences.
    */
    static readonly "element3": ItemType;
    /**
    Represents the zinc element in Minecraft Education experiences.
    */
    static readonly "element30": ItemType;
    /**
    Represents the gallium element in Minecraft Education experiences.
    */
    static readonly "element31": ItemType;
    /**
    Represents an item that can place a germanium element in Minecraft Education experiences.
    */
    static readonly "element32": ItemType;
    /**
    Represents the arsenic element in Minecraft Education experiences.
    */
    static readonly "element33": ItemType;
    /**
    Represents the selenium element in Minecraft Education experiences.
    */
    static readonly "element34": ItemType;
    /**
    Represents the bromine element in Minecraft Education experiences.
    */
    static readonly "element35": ItemType;
    /**
    Represents the krypton element in Minecraft Education experiences.
    */
    static readonly "element36": ItemType;
    /**
    Represents the rubidium element in Minecraft Education experiences.
    */
    static readonly "element37": ItemType;
    /**
    Represents the strontium element in Minecraft Education experiences.
    */
    static readonly "element38": ItemType;
    /**
    Represents the yttrium element in Minecraft Education experiences.
    */
    static readonly "element39": ItemType;
    /**
    Represents an item that can place a beryllium element in Minecraft Education experiences.
    */
    static readonly "element4": ItemType;
    /**
    Represents the zirconium element in Minecraft Education experiences.
    */
    static readonly "element40": ItemType;
    /**
    Represents the niobium element in Minecraft Education experiences.
    */
    static readonly "element41": ItemType;
    /**
    Represents the molybdenum element in Minecraft Education experiences.
    */
    static readonly "element42": ItemType;
    /**
    Represents the technetium element in Minecraft Education experiences.
    */
    static readonly "element43": ItemType;
    /**
    Represents the ruthenium element in Minecraft Education experiences.
    */
    static readonly "element44": ItemType;
    /**
    Represents the rhodium element in Minecraft Education experiences.
    */
    static readonly "element45": ItemType;
    /**
    Represents the palladium element in Minecraft Education experiences.
    */
    static readonly "element46": ItemType;
    /**
    Represents the silver element in Minecraft Education experiences.
    */
    static readonly "element47": ItemType;
    /**
    Represents the cadmium element in Minecraft Education experiences.
    */
    static readonly "element48": ItemType;
    /**
    Represents the indium element in Minecraft Education experiences.
    */
    static readonly "element49": ItemType;
    /**
    Represents the boron element in Minecraft Education experiences.
    */
    static readonly "element5": ItemType;
    /**
    Represents the tin element in Minecraft Education experiences.
    */
    static readonly "element50": ItemType;
    /**
    Represents the antimony element in Minecraft Education experiences.
    */
    static readonly "element51": ItemType;
    /**
    Represents the tellurium element in Minecraft Education experiences.
    */
    static readonly "element52": ItemType;
    /**
    Represents the iodine element in Minecraft Education experiences.
    */
    static readonly "element53": ItemType;
    /**
    Represents the xenon element in Minecraft Education experiences.
    */
    static readonly "element54": ItemType;
    /**
    Represents the cesium element in Minecraft Education experiences.
    */
    static readonly "element55": ItemType;
    /**
    Represents the barium element in Minecraft Education experiences.
    */
    static readonly "element56": ItemType;
    /**
    Represents the lanthanum element in Minecraft Education experiences.
    */
    static readonly "element57": ItemType;
    /**
    Represents the cerium element in Minecraft Education experiences.
    */
    static readonly "element58": ItemType;
    /**
    Represents the praseodymium element in Minecraft Education experiences.
    */
    static readonly "element59": ItemType;
    /**
    Represents the carbon element in Minecraft Education experiences.
    */
    static readonly "element6": ItemType;
    /**
    Represents the neodymium element in Minecraft Education experiences.
    */
    static readonly "element60": ItemType;
    /**
    Represents the promethium element in Minecraft Education experiences.
    */
    static readonly "element61": ItemType;
    /**
    Represents the samarium element in Minecraft Education experiences.
    */
    static readonly "element62": ItemType;
    /**
    Represents the europium element in Minecraft Education experiences.
    */
    static readonly "element63": ItemType;
    /**
    Represents the gadolinium element in Minecraft Education experiences.
    */
    static readonly "element64": ItemType;
    /**
    Represents an item that can place a terbium element in Minecraft Education experiences.
    */
    static readonly "element65": ItemType;
    /**
    Represents the dysprosium element in Minecraft Education experiences.
    */
    static readonly "element66": ItemType;
    /**
    Represents the holmium element in Minecraft Education experiences.
    */
    static readonly "element67": ItemType;
    /**
    Represents the erbium element in Minecraft Education experiences.
    */
    static readonly "element68": ItemType;
    /**
    Represents the thulium element in Minecraft Education experiences.
    */
    static readonly "element69": ItemType;
    /**
    Represents the nitrogen element in Minecraft Education experiences.
    */
    static readonly "element7": ItemType;
    /**
    Represents the ytterbium element in Minecraft Education experiences.
    */
    static readonly "element70": ItemType;
    /**
    Represents the lutetium element in Minecraft Education experiences.
    */
    static readonly "element71": ItemType;
    /**
    Represents an item that can place a hafnium element in Minecraft Education experiences.
    */
    static readonly "element72": ItemType;
    /**
    Represents the tantalum element in Minecraft Education experiences.
    */
    static readonly "element73": ItemType;
    /**
    Represents the tungsten element in Minecraft Education experiences.
    */
    static readonly "element74": ItemType;
    /**
    Represents the rhenium element in Minecraft Education experiences.
    */
    static readonly "element75": ItemType;
    /**
    Represents the osmium element in Minecraft Education experiences.
    */
    static readonly "element76": ItemType;
    /**
    Represents the iridium element in Minecraft Education experiences.
    */
    static readonly "element77": ItemType;
    /**
    Represents the platinum element in Minecraft Education experiences.
    */
    static readonly "element78": ItemType;
    /**
    Represents the gold element in Minecraft Education experiences.
    */
    static readonly "element79": ItemType;
    /**
    Represents the oxygen element in Minecraft Education experiences.
    */
    static readonly "element8": ItemType;
    /**
    Represents the mercury element in Minecraft Education experiences.
    */
    static readonly "element80": ItemType;
    /**
    Represents the thallium element in Minecraft Education experiences.
    */
    static readonly "element81": ItemType;
    /**
    Represents the lead element in Minecraft Education experiences.
    */
    static readonly "element82": ItemType;
    /**
    Represents the bismuth element in Minecraft Education experiences.
    */
    static readonly "element83": ItemType;
    /**
    Represents the polonium element in Minecraft Education experiences.
    */
    static readonly "element84": ItemType;
    /**
    Represents the astatine element in Minecraft Education experiences.
    */
    static readonly "element85": ItemType;
    /**
    Represents the radon element in Minecraft Education experiences.
    */
    static readonly "element86": ItemType;
    /**
    Represents the francium element in Minecraft Education experiences.
    */
    static readonly "element87": ItemType;
    /**
    Represents the radium element in Minecraft Education experiences.
    */
    static readonly "element88": ItemType;
    /**
    Represents the actinium element in Minecraft Education experiences.
    */
    static readonly "element89": ItemType;
    /**
    Represents the fluorine element in Minecraft Education experiences.
    */
    static readonly "element9": ItemType;
    /**
    Represents the thorium element in Minecraft Education experiences.
    */
    static readonly "element90": ItemType;
    /**
    Represents the protactinium element in Minecraft Education experiences.
    */
    static readonly "element91": ItemType;
    /**
    Represents the uranium element in Minecraft Education experiences.
    */
    static readonly "element92": ItemType;
    /**
    Represents the neptunium element in Minecraft Education experiences.
    */
    static readonly "element93": ItemType;
    /**
    Represents the plutonium element in Minecraft Education experiences.
    */
    static readonly "element94": ItemType;
    /**
    Represents the americium element in Minecraft Education experiences.
    */
    static readonly "element95": ItemType;
    /**
    Represents the curium element in Minecraft Education experiences.
    */
    static readonly "element96": ItemType;
    /**
    Represents the berkelium element in Minecraft Education experiences.
    */
    static readonly "element97": ItemType;
    /**
    Represents the californium element in Minecraft Education experiences.
    */
    static readonly "element98": ItemType;
    /**
    Represents the einsteinium element in Minecraft Education experiences.
    */
    static readonly "element99": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "elytra": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "emerald": ItemType;
    /**
    Represents an item that can place a block of emerald within Minecraft.
    */
    static readonly "emeraldBlock": ItemType;
    /**
    Represents an item that can place a block with embedded emerald ore within Minecraft.
    */
    static readonly "emeraldOre": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "emptyMap": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "enchantedBook": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "enchantedGoldenApple": ItemType;
    /**
    Represents an item that can place an enchanting table within Minecraft.
    */
    static readonly "enchantingTable": ItemType;
    /**
    Represents an item that can place an end bricks block within Minecraft.
    */
    static readonly "endBricks": ItemType;
    /**
    Represents an item that can place a set of end brick stairs within Minecraft.
    */
    static readonly "endBrickStairs": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "endCrystal": ItemType;
    /**
    Represents an item that can place an ender chest within Minecraft.
    */
    static readonly "enderChest": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "enderEye": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "endermanSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "endermiteSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "enderPearl": ItemType;
    /**
    Represents an item that can place an end gateway within Minecraft.
    */
    static readonly "endGateway": ItemType;
    /**
    Represents an item that can place an end portal block within Minecraft.
    */
    static readonly "endPortal": ItemType;
    /**
    Represents an item that can place an end portal frame within Minecraft.
    */
    static readonly "endPortalFrame": ItemType;
    /**
    Represents an item that can place an end rod within Minecraft.
    */
    static readonly "endRod": ItemType;
    /**
    Represents an item that can place an end stone block within Minecraft.
    */
    static readonly "endStone": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "evokerSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "experienceBottle": ItemType;
    /**
    Represents an item that can place a block of exposed copper within Minecraft.
    */
    static readonly "exposedCopper": ItemType;
    /**
    Represents an item that can place a block of exposed cut copper within Minecraft.
    */
    static readonly "exposedCutCopper": ItemType;
    /**
    Represents an item that can place a slab of exposed cut copper within Minecraft.
    */
    static readonly "exposedCutCopperSlab": ItemType;
    /**
    Represents an item that can place a set of exposed cut copper stairs within Minecraft.
    */
    static readonly "exposedCutCopperStairs": ItemType;
    /**
    Represents an item that can place a double slab of exposed cut copper within Minecraft.
    */
    static readonly "exposedDoubleCutCopperSlab": ItemType;
    /**
    Represents an item that can place a farmland block within Minecraft.
    */
    static readonly "farmland": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "feather": ItemType;
    /**
    Represents an item that can place a fence within Minecraft.
    */
    static readonly "fence": ItemType;
    /**
    Represents an item that can place a fence gate within Minecraft.
    */
    static readonly "fenceGate": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "fermentedSpiderEye": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "fieldMasonedBannerPattern": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "filledMap": ItemType;
    /**
    Represents an item that can place a fire within Minecraft.
    */
    static readonly "fire": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "fireCharge": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "fireflySpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "fireworkRocket": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "fireworkStar": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "fishingRod": ItemType;
    /**
    Represents an item that can place a fletching table within Minecraft.
    */
    static readonly "fletchingTable": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "flint": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "flintAndSteel": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "flowerBannerPattern": ItemType;
    /**
    Represents an item that can place a flowering azalea plant within Minecraft.
    */
    static readonly "floweringAzalea": ItemType;
    /**
    Represents an item that can place a flower pot within Minecraft.
    */
    static readonly "flowerPot": ItemType;
    /**
    Represents flowing lava within Minecraft.
    */
    static readonly "flowingLava": ItemType;
    /**
    Represents flowing water within Minecraft.
    */
    static readonly "flowingWater": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "foxSpawnEgg": ItemType;
    /**
    Represents an item that can place a frame within Minecraft.
    */
    static readonly "frame": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "frogSpawn": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "frogSpawnEgg": ItemType;
    /**
    Represents an item that can place a frosted ice block within Minecraft.
    */
    static readonly "frostedIce": ItemType;
    /**
    Represents an item that can place a furnace within Minecraft.
    */
    static readonly "furnace": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "ghastSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "ghastTear": ItemType;
    /**
    Represents an item that can place a block of gilded blackstone within Minecraft.
    */
    static readonly "gildedBlackstone": ItemType;
    /**
    Represents an item that can place a glass block within Minecraft.
    */
    static readonly "glass": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "glassBottle": ItemType;
    /**
    Represents an item that can place a pane of glass within Minecraft.
    */
    static readonly "glassPane": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "glisteringMelonSlice": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "globeBannerPattern": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "glowBerries": ItemType;
    /**
    Represents an item that can place a glowing frame within Minecraft.
    */
    static readonly "glowFrame": ItemType;
    /**
    Represents an item that can place a glowing obsidian block within Minecraft.
    */
    static readonly "glowingobsidian": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "glowInkSac": ItemType;
    /**
    Represents glow lichen within Minecraft.
    */
    static readonly "glowLichen": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "glowSquidSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "glowStick": ItemType;
    /**
    Represents an item that can place a block of glowstone within Minecraft.
    */
    static readonly "glowstone": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "glowstoneDust": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "goatSpawnEgg": ItemType;
    /**
    Represents an item that can place a gold block within Minecraft.
    */
    static readonly "goldBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "goldenApple": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "goldenAxe": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "goldenBoots": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "goldenCarrot": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "goldenChestplate": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "goldenHelmet": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "goldenHoe": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "goldenHorseArmor": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "goldenLeggings": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "goldenPickaxe": ItemType;
    /**
    Represents an item that can place a golden rail element within Minecraft.
    */
    static readonly "goldenRail": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "goldenShovel": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "goldenSword": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "goldIngot": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "goldNugget": ItemType;
    /**
    Represents an item that can place a block with embedded gold ore within Minecraft.
    */
    static readonly "goldOre": ItemType;
    /**
    Represents an item that can place a set of granite stairs within Minecraft.
    */
    static readonly "graniteStairs": ItemType;
    /**
    Represents an item that can place a block of dirt and grass within Minecraft.
    */
    static readonly "grass": ItemType;
    /**
    Represents an item that can place a block of dirt and grass with a path within Minecraft.
    */
    static readonly "grassPath": ItemType;
    /**
    Represents an item that can place a block of gravel within Minecraft.
    */
    static readonly "gravel": ItemType;
    /**
    Represents an item that can place a gray-colored candle within Minecraft.
    */
    static readonly "grayCandle": ItemType;
    /**
    Represents an item that can place a cake with gray-colored candle within Minecraft.
    */
    static readonly "grayCandleCake": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "grayDye": ItemType;
    /**
    Represents an item that can place a gray-colored block of glazed terracotta within Minecraft.
    */
    static readonly "grayGlazedTerracotta": ItemType;
    /**
    Represents an item that can place a green-colored candle within Minecraft.
    */
    static readonly "greenCandle": ItemType;
    /**
    Represents an item that can place a green-colored candle cake within Minecraft.
    */
    static readonly "greenCandleCake": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "greenDye": ItemType;
    /**
    Represents an item that can place a green block of glazed terracotta within Minecraft.
    */
    static readonly "greenGlazedTerracotta": ItemType;
    /**
    Represents an item that can place a grindstone within Minecraft.
    */
    static readonly "grindstone": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "guardianSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "gunpowder": ItemType;
    /**
    Represents an item that can place a set of hanging roots within Minecraft.
    */
    static readonly "hangingRoots": ItemType;
    /**
    Represents an item that can place a block of hardened clay within Minecraft.
    */
    static readonly "hardenedClay": ItemType;
    /**
    Represents an item that can place a block of hard glass within Minecraft.
    */
    static readonly "hardGlass": ItemType;
    /**
    Represents an item that can place a pane of hard glass within Minecraft.
    */
    static readonly "hardGlassPane": ItemType;
    /**
    Represents an item that can place a stained hard glass block within Minecraft.
    */
    static readonly "hardStainedGlass": ItemType;
    /**
    Represents an item that can place a stained pane of hard glass within Minecraft.
    */
    static readonly "hardStainedGlassPane": ItemType;
    /**
    Represents an item that can place a block of hay within Minecraft.
    */
    static readonly "hayBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "heartOfTheSea": ItemType;
    /**
    Represents an item that can place a heavy weighted pressure plate within Minecraft.
    */
    static readonly "heavyWeightedPressurePlate": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "hoglinSpawnEgg": ItemType;
    /**
    Represents an item that can place a block of honey within Minecraft.
    */
    static readonly "honeyBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "honeyBottle": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "honeycomb": ItemType;
    /**
    Represents an item that can place a honeycomb block within Minecraft.
    */
    static readonly "honeycombBlock": ItemType;
    /**
    Represents an item that can place a hopper within Minecraft.
    */
    static readonly "hopper": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "hopperMinecart": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "horseSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "huskSpawnEgg": ItemType;
    /**
    Represents an item that can place a block of ice within Minecraft.
    */
    static readonly "ice": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "iceBomb": ItemType;
    /**
    Represents an item that can place an infested block of deepslate within Minecraft.
    */
    static readonly "infestedDeepslate": ItemType;
    /**
    Represents an item that can place an information update block within Minecraft.
    */
    static readonly "infoUpdate": ItemType;
    /**
    Represents an item that can place an information update block within Minecraft.
    */
    static readonly "infoUpdate2": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "inkSac": ItemType;
    /**
    Represents an item that can place an invisible boundary bedrock block within Minecraft.
    */
    static readonly "invisibleBedrock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "ironAxe": ItemType;
    /**
    Represents iron bars within Minecraft.
    */
    static readonly "ironBars": ItemType;
    /**
    Represents an item that can place a block of iron within Minecraft.
    */
    static readonly "ironBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "ironBoots": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "ironChestplate": ItemType;
    /**
    Represents an item that can place an iron door within Minecraft.
    */
    static readonly "ironDoor": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "ironHelmet": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "ironHoe": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "ironHorseArmor": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "ironIngot": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "ironLeggings": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "ironNugget": ItemType;
    /**
    Represents an item that can place a block with embedded iron ore within Minecraft.
    */
    static readonly "ironOre": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "ironPickaxe": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "ironShovel": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "ironSword": ItemType;
    /**
    Represents an item that can place an iron trapdoor within Minecraft.
    */
    static readonly "ironTrapdoor": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.acaciaDoor": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.bed": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.beetroot": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.birchDoor": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.brewingStand": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.cake": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.camera": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.campfire": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.cauldron": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.chain": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.crimsonDoor": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.darkOakDoor": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.flowerPot": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.frame": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.glowFrame": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.hopper": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.ironDoor": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.jungleDoor": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.kelp": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.netherSprouts": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.netherWart": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.reeds": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.skull": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.soulCampfire": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.spruceDoor": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.warpedDoor": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.wheat": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "item.woodenDoor": ItemType;
    /**
    Represents an item that can place a jigsaw within Minecraft.
    */
    static readonly "jigsaw": ItemType;
    /**
    Represents an item that can place a jukebox within Minecraft.
    */
    static readonly "jukebox": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "jungleBoat": ItemType;
    /**
    Represents jungle wood button within Minecraft.
    */
    static readonly "jungleButton": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "jungleChestBoat": ItemType;
    /**
    Represents an item that can place a jungle wood door within Minecraft.
    */
    static readonly "jungleDoor": ItemType;
    /**
    Represents an item that can place a jungle wood fence gate within Minecraft.
    */
    static readonly "jungleFenceGate": ItemType;
    /**
    Represents an item that can place a jungle wood pressure plate within Minecraft.
    */
    static readonly "junglePressurePlate": ItemType;
    /**
    Represents an item that can place a jungle sign within Minecraft.
    */
    static readonly "jungleSign": ItemType;
    /**
    Represents an item that can place a set of jungle wood stairs within Minecraft.
    */
    static readonly "jungleStairs": ItemType;
    /**
    Represents an item that can place a jungle wood standing sign within Minecraft.
    */
    static readonly "jungleStandingSign": ItemType;
    /**
    Represents an item that can place a jungle wood trapdoor within Minecraft.
    */
    static readonly "jungleTrapdoor": ItemType;
    /**
    Represents an item that can place a jungle wood wall sign within Minecraft.
    */
    static readonly "jungleWallSign": ItemType;
    /**
    Represents an item that can place a set of kelp within Minecraft.
    */
    static readonly "kelp": ItemType;
    /**
    Represents an item that can place a ladder within Minecraft.
    */
    static readonly "ladder": ItemType;
    /**
    Represents an item that can place a lantern within Minecraft.
    */
    static readonly "lantern": ItemType;
    /**
    Represents an item that can place a block of lapis lazuli within Minecraft.
    */
    static readonly "lapisBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "lapisLazuli": ItemType;
    /**
    Represents an item that can place a block with embedded lapis lazuli within Minecraft.
    */
    static readonly "lapisOre": ItemType;
    /**
    Represents an item that can place a bud of large amethyst within Minecraft.
    */
    static readonly "largeAmethystBud": ItemType;
    /**
    Represents lava within Minecraft.
    */
    static readonly "lava": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "lavaBucket": ItemType;
    /**
    Represents an item that can place a cauldron filled with lava within Minecraft.
    */
    static readonly "lavaCauldron": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "lead": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "leather": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "leatherBoots": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "leatherChestplate": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "leatherHelmet": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "leatherHorseArmor": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "leatherLeggings": ItemType;
    /**
    Represents an item that can place a set of leaves within Minecraft.
    */
    static readonly "leaves": ItemType;
    /**
    Represents an item that can place an updated set of leaves within Minecraft.
    */
    static readonly "leaves2": ItemType;
    /**
    Represents an item that can place a lectern within Minecraft.
    */
    static readonly "lectern": ItemType;
    /**
    Represents an item that can place a lever within Minecraft.
    */
    static readonly "lever": ItemType;
    /**
    Represents an item that can place a block of light within Minecraft.
    */
    static readonly "lightBlock": ItemType;
    /**
    Represents an item that can place a light blue candle within Minecraft.
    */
    static readonly "lightBlueCandle": ItemType;
    /**
    Represents an item that can place a light blue candle cake within Minecraft.
    */
    static readonly "lightBlueCandleCake": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "lightBlueDye": ItemType;
    /**
    Represents an item that can place a light blue block of glazed terracotta within Minecraft.
    */
    static readonly "lightBlueGlazedTerracotta": ItemType;
    /**
    Represents an item that can place a light gray candle within Minecraft.
    */
    static readonly "lightGrayCandle": ItemType;
    /**
    Represents an item that can place a light gray candle cake within Minecraft.
    */
    static readonly "lightGrayCandleCake": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "lightGrayDye": ItemType;
    /**
    Represents an item that can place a lightning rod within Minecraft.
    */
    static readonly "lightningRod": ItemType;
    /**
    Represents an item that can place a light weighted pressure plate within Minecraft.
    */
    static readonly "lightWeightedPressurePlate": ItemType;
    /**
    Represents an item that can place a lime candle within Minecraft.
    */
    static readonly "limeCandle": ItemType;
    /**
    Represents an item that can place a lime-colored candle cake within Minecraft.
    */
    static readonly "limeCandleCake": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "limeDye": ItemType;
    /**
    Represents an item that can place a lime-colored block of glazed terracotta within Minecraft.
    */
    static readonly "limeGlazedTerracotta": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "lingeringPotion": ItemType;
    /**
    Represents an item that can place a lit blast furnace within Minecraft.
    */
    static readonly "litBlastFurnace": ItemType;
    /**
    Represents lit deepslate redstone ore within Minecraft.
    */
    static readonly "litDeepslateRedstoneOre": ItemType;
    /**
    Represents an item that can place a lit furnace within Minecraft.
    */
    static readonly "litFurnace": ItemType;
    /**
    Represents an item that can place a lit pumpkin within Minecraft.
    */
    static readonly "litPumpkin": ItemType;
    /**
    Represents an item that can place a lit redstone lamp within Minecraft.
    */
    static readonly "litRedstoneLamp": ItemType;
    /**
    Represents lit redstone ore within Minecraft.
    */
    static readonly "litRedstoneOre": ItemType;
    /**
    Represents an item that can place a lit smoker within Minecraft.
    */
    static readonly "litSmoker": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "llamaSpawnEgg": ItemType;
    /**
    Represents an item that can place a lodestone within Minecraft.
    */
    static readonly "lodestone": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "lodestoneCompass": ItemType;
    /**
    Represents an item that can place a log within Minecraft.
    */
    static readonly "log": ItemType;
    /**
    Represents an item that can place a more updated, customizable log within Minecraft.
    */
    static readonly "log2": ItemType;
    /**
    Represents an item that can place a loom within Minecraft.
    */
    static readonly "loom": ItemType;
    /**
    Represents an item that can place a magenta candle within Minecraft.
    */
    static readonly "magentaCandle": ItemType;
    /**
    Represents an item that can place a magenta candle cake within Minecraft.
    */
    static readonly "magentaCandleCake": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "magentaDye": ItemType;
    /**
    Represents an item that can place a block of magenta-colored glazed terracotta within Minecraft.
    */
    static readonly "magentaGlazedTerracotta": ItemType;
    /**
    Represents magma within Minecraft.
    */
    static readonly "magma": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "magmaCream": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "magmaCubeSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "mangroveLeaves": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "mangrovePropagule": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "mangrovePropaguleHanging": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "medicine": ItemType;
    /**
    Represents an item that can place a medium-sized bud of amethyst within Minecraft.
    */
    static readonly "mediumAmethystBud": ItemType;
    /**
    Represents an item that can place a block of melon within Minecraft.
    */
    static readonly "melonBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "melonSeeds": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "melonSlice": ItemType;
    /**
    Represents an item that can place a stem of melon within Minecraft.
    */
    static readonly "melonStem": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "milkBucket": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "minecart": ItemType;
    /**
    Represents an item that can place a mob spawner within Minecraft.
    */
    static readonly "mobSpawner": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "mojangBannerPattern": ItemType;
    /**
    Represents an item that can place a monster egg within Minecraft.
    */
    static readonly "monsterEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "mooshroomSpawnEgg": ItemType;
    /**
    Represents an item that can place a block of moss within Minecraft.
    */
    static readonly "mossBlock": ItemType;
    /**
    Represents an item that can place a carpet of moss within Minecraft.
    */
    static readonly "mossCarpet": ItemType;
    /**
    Represents an item that can place a block of cobblestone with moss within Minecraft.
    */
    static readonly "mossyCobblestone": ItemType;
    /**
    Represents an item that can place a set of mossy cobblestone stairs within Minecraft.
    */
    static readonly "mossyCobblestoneStairs": ItemType;
    /**
    Represents an item that can place a set of mossy stone brick stairs within Minecraft.
    */
    static readonly "mossyStoneBrickStairs": ItemType;
    /**
    Represents an item that can place a moving block within Minecraft.
    */
    static readonly "movingBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "mud": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "mudBrickDoubleSlab": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "mudBricks": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "mudBrickSlab": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "mudBrickStairs": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "mudBrickWall": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "muleSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "mushroomStew": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "musicDisc11": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "musicDisc13": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "musicDiscBlocks": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "musicDiscCat": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "musicDiscChirp": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "musicDiscFar": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "musicDiscMall": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "musicDiscMellohi": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "musicDiscOtherside": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "musicDiscPigstep": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "musicDiscStal": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "musicDiscStrad": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "musicDiscWait": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "musicDiscWard": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "mutton": ItemType;
    /**
    Represents an item that can place a mycelium plant within Minecraft.
    */
    static readonly "mycelium": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "mysteriousFrame": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "mysteriousFrameSlot": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "nameTag": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "nautilusShell": ItemType;
    /**
    Represents an item that can place a nether brick block within Minecraft.
    */
    static readonly "netherbrick": ItemType;
    /**
    Represents an item that can place a nether brick block within Minecraft.
    */
    static readonly "netherBrick": ItemType;
    /**
    Represents an item that can place a nether brick fence within Minecraft.
    */
    static readonly "netherBrickFence": ItemType;
    /**
    Represents an item that can place a set of nether brick stairs within Minecraft.
    */
    static readonly "netherBrickStairs": ItemType;
    /**
    Represents an item that can place a block of nether with embedded gold ore within Minecraft.
    */
    static readonly "netherGoldOre": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "netheriteAxe": ItemType;
    /**
    Represents an item that can place a block of netherite within Minecraft.
    */
    static readonly "netheriteBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "netheriteBoots": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "netheriteChestplate": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "netheriteHelmet": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "netheriteHoe": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "netheriteIngot": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "netheriteLeggings": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "netheritePickaxe": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "netheriteScrap": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "netheriteShovel": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "netheriteSword": ItemType;
    /**
    Represents an item that can place a block of netherrack within Minecraft.
    */
    static readonly "netherrack": ItemType;
    /**
    Represents an item that can place a nether rock within Minecraft.
    */
    static readonly "netherreactor": ItemType;
    /**
    Represents nether sprouts within Minecraft.
    */
    static readonly "netherSprouts": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "netherStar": ItemType;
    /**
    Represents nether wart within Minecraft.
    */
    static readonly "netherWart": ItemType;
    /**
    Represents an item that can place a block of nether wart within Minecraft.
    */
    static readonly "netherWartBlock": ItemType;
    /**
    Represents an item that can place a standard set of stone stairs within Minecraft.
    */
    static readonly "normalStoneStairs": ItemType;
    /**
    Represents an item that can place a note block within Minecraft.
    */
    static readonly "noteblock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "npcSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "oakBoat": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "oakChestBoat": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "oakSign": ItemType;
    /**
    Represents an item that can place a set of oak stairs within Minecraft.
    */
    static readonly "oakStairs": ItemType;
    /**
    Represents an item that can place an observer within Minecraft.
    */
    static readonly "observer": ItemType;
    /**
    Represents an item that can place an obsidian block within Minecraft.
    */
    static readonly "obsidian": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "ocelotSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "ochreFroglight": ItemType;
    /**
    Represents an item that can place an orange candle within Minecraft.
    */
    static readonly "orangeCandle": ItemType;
    /**
    Represents an item that can place an orange candle cake within Minecraft.
    */
    static readonly "orangeCandleCake": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "orangeDye": ItemType;
    /**
    Represents an item that can place a block of orange-colored glazed terracotta within Minecraft.
    */
    static readonly "orangeGlazedTerracotta": ItemType;
    /**
    Represents an item that can place a block of oxidized copper within Minecraft.
    */
    static readonly "oxidizedCopper": ItemType;
    /**
    Represents an item that can place a block of oxidized cut copper within Minecraft.
    */
    static readonly "oxidizedCutCopper": ItemType;
    /**
    Represents an item that can place a slab of oxidized cut copper within Minecraft.
    */
    static readonly "oxidizedCutCopperSlab": ItemType;
    /**
    Represents an item that can place a set of oxidized cut copper stairs within Minecraft.
    */
    static readonly "oxidizedCutCopperStairs": ItemType;
    /**
    Represents an item that can place a double slab of oxidized cut copper within Minecraft.
    */
    static readonly "oxidizedDoubleCutCopperSlab": ItemType;
    /**
    Represents an item that can place a block of packed ice within Minecraft.
    */
    static readonly "packedIce": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "packedMud": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "painting": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "pandaSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "paper": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "parrotSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "pearlescentFroglight": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "phantomMembrane": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "phantomSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "piglinBannerPattern": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "piglinBruteSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "piglinSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "pigSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "pillagerSpawnEgg": ItemType;
    /**
    Represents an item that can place a pink candle within Minecraft.
    */
    static readonly "pinkCandle": ItemType;
    /**
    Represents an item that can place a pink candle cake within Minecraft.
    */
    static readonly "pinkCandleCake": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "pinkDye": ItemType;
    /**
    Represents an item that can place a pink-colored block of glazed terracotta within Minecraft.
    */
    static readonly "pinkGlazedTerracotta": ItemType;
    /**
    Represents an item that can place a piston within Minecraft.
    */
    static readonly "piston": ItemType;
    /**
    Represents an item that can place a piston arm within Minecraft.
    */
    static readonly "pistonArmCollision": ItemType;
    /**
    Represents an item that can place a set of planks within Minecraft.
    */
    static readonly "planks": ItemType;
    /**
    Represents podzol within Minecraft.
    */
    static readonly "podzol": ItemType;
    /**
    Represents pointed dripstone within Minecraft.
    */
    static readonly "pointedDripstone": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "poisonousPotato": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "polarBearSpawnEgg": ItemType;
    /**
    Represents an item that can place a set of polished andesite stairs within Minecraft.
    */
    static readonly "polishedAndesiteStairs": ItemType;
    /**
    Represents an item that can place a block of polished basalt within Minecraft.
    */
    static readonly "polishedBasalt": ItemType;
    /**
    Represents an item that can place a block of polished blackstone within Minecraft.
    */
    static readonly "polishedBlackstone": ItemType;
    /**
    Represents an item that can place a double slab of polished blackstone brick within Minecraft.
    */
    static readonly "polishedBlackstoneBrickDoubleSlab": ItemType;
    /**
    Represents an item that can place a block of polished blackstone bricks within Minecraft.
    */
    static readonly "polishedBlackstoneBricks": ItemType;
    /**
    Represents an item that can place a slab of polished blackstone within Minecraft.
    */
    static readonly "polishedBlackstoneBrickSlab": ItemType;
    /**
    Represents an item that can place a set of polished blackstone brick stairs within Minecraft.
    */
    static readonly "polishedBlackstoneBrickStairs": ItemType;
    /**
    Represents an item that can place a polished blackstone brick wall within Minecraft.
    */
    static readonly "polishedBlackstoneBrickWall": ItemType;
    /**
    Represents an item that can place a polished blackstone button within Minecraft.
    */
    static readonly "polishedBlackstoneButton": ItemType;
    /**
    Represents an item that can place a double slab of polished blackstone within Minecraft.
    */
    static readonly "polishedBlackstoneDoubleSlab": ItemType;
    /**
    Represents an item that can place a polished blackstone pressure plate within Minecraft.
    */
    static readonly "polishedBlackstonePressurePlate": ItemType;
    /**
    Represents an item that can place a slab of polished blackstone within Minecraft.
    */
    static readonly "polishedBlackstoneSlab": ItemType;
    /**
    Represents an item that can place a set of polished blackstone stairs within Minecraft.
    */
    static readonly "polishedBlackstoneStairs": ItemType;
    /**
    Represents an item that can place a polished blackstone wall within Minecraft.
    */
    static readonly "polishedBlackstoneWall": ItemType;
    /**
    Represents an item that can place a block of polished deepslate within Minecraft.
    */
    static readonly "polishedDeepslate": ItemType;
    /**
    Represents an item that can place a double slab of polished deepslate within Minecraft.
    */
    static readonly "polishedDeepslateDoubleSlab": ItemType;
    /**
    Represents an item that can place a slab of polished deepslate within Minecraft.
    */
    static readonly "polishedDeepslateSlab": ItemType;
    /**
    Represents an item that can place a set of polished deepslate stairs within Minecraft.
    */
    static readonly "polishedDeepslateStairs": ItemType;
    /**
    Represents an item that can place a wall of polished deepslate within Minecraft.
    */
    static readonly "polishedDeepslateWall": ItemType;
    /**
    Represents an item that can place a block of polished diorite within Minecraft.
    */
    static readonly "polishedDioriteStairs": ItemType;
    /**
    Represents an item that can place a set of polished granite stairs within Minecraft.
    */
    static readonly "polishedGraniteStairs": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "poppedChorusFruit": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "porkchop": ItemType;
    /**
    Represents an item that can place a portal within Minecraft.
    */
    static readonly "portal": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "potato": ItemType;
    /**
    Represents an item that can place a set of potatoes within Minecraft.
    */
    static readonly "potatoes": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "potion": ItemType;
    /**
    Represents an item that can place a block of powder snow within Minecraft.
    */
    static readonly "powderSnow": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "powderSnowBucket": ItemType;
    /**
    Represents an item that can place a powered comparator within Minecraft.
    */
    static readonly "poweredComparator": ItemType;
    /**
    Represents an item that can place a powered repeater within Minecraft.
    */
    static readonly "poweredRepeater": ItemType;
    /**
    Represents an item that can place a block of prismarine within Minecraft.
    */
    static readonly "prismarine": ItemType;
    /**
    Represents an item that can place a set of prismarine brick stairs within Minecraft.
    */
    static readonly "prismarineBricksStairs": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "prismarineCrystals": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "prismarineShard": ItemType;
    /**
    Represents an item that can place a set of prismarine stairs within Minecraft.
    */
    static readonly "prismarineStairs": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "pufferfish": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "pufferfishBucket": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "pufferfishSpawnEgg": ItemType;
    /**
    Represents an item that can place a pumpkin within Minecraft.
    */
    static readonly "pumpkin": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "pumpkinPie": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "pumpkinSeeds": ItemType;
    /**
    Represents an item that can place a pumpkin stem within Minecraft.
    */
    static readonly "pumpkinStem": ItemType;
    /**
    Represents an item that can place a purple candle within Minecraft.
    */
    static readonly "purpleCandle": ItemType;
    /**
    Represents an item that can place a purple colored candle cake within Minecraft.
    */
    static readonly "purpleCandleCake": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "purpleDye": ItemType;
    /**
    Represents an item that can place a purple-colored block of glazed terracotta within Minecraft.
    */
    static readonly "purpleGlazedTerracotta": ItemType;
    /**
    Represents an item that can place a purpur block within Minecraft.
    */
    static readonly "purpurBlock": ItemType;
    /**
    Represents an item that can place a set of purpur stairs within Minecraft.
    */
    static readonly "purpurStairs": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "quartz": ItemType;
    /**
    Represents an item that can place a block of solid quartz within Minecraft.
    */
    static readonly "quartzBlock": ItemType;
    /**
    Represents an item that can place a block of solid quartz bricks within Minecraft.
    */
    static readonly "quartzBricks": ItemType;
    /**
    Represents an item that can place a block with embedded quartz ore within Minecraft.
    */
    static readonly "quartzOre": ItemType;
    /**
    Represents an item that can place a set of quartz stairs within Minecraft.
    */
    static readonly "quartzStairs": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "rabbit": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "rabbitFoot": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "rabbitHide": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "rabbitSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "rabbitStew": ItemType;
    /**
    Represents an item that can place a set of rails within Minecraft.
    */
    static readonly "rail": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "rapidFertilizer": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "ravagerSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "rawCopper": ItemType;
    /**
    Represents an item that can place a block of raw copper within Minecraft.
    */
    static readonly "rawCopperBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "rawGold": ItemType;
    /**
    Represents an item that can place a block of raw gold within Minecraft.
    */
    static readonly "rawGoldBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "rawIron": ItemType;
    /**
    Represents an item that can place a block of raw iron within Minecraft.
    */
    static readonly "rawIronBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "realDoubleStoneSlab": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "realDoubleStoneSlab2": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "realDoubleStoneSlab3": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "realDoubleStoneSlab4": ItemType;
    /**
    Represents an item that can place a red candle within Minecraft.
    */
    static readonly "redCandle": ItemType;
    /**
    Represents an item that can place a red candle cake within Minecraft.
    */
    static readonly "redCandleCake": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "redDye": ItemType;
    /**
    Represents an item that can place a red flower within Minecraft.
    */
    static readonly "redFlower": ItemType;
    /**
    Represents an item that can place a red-colored block of glazed terracotta within Minecraft.
    */
    static readonly "redGlazedTerracotta": ItemType;
    /**
    Represents an item that can place a red mushroom within Minecraft.
    */
    static readonly "redMushroom": ItemType;
    /**
    Represents an item that can place a block of red mushroom within Minecraft.
    */
    static readonly "redMushroomBlock": ItemType;
    /**
    Represents an item that can place a block of red nether brick within Minecraft.
    */
    static readonly "redNetherBrick": ItemType;
    /**
    Represents an item that can place a set of red nether brick stairs within Minecraft.
    */
    static readonly "redNetherBrickStairs": ItemType;
    /**
    Represents an item that can place a block of red sandstone within Minecraft.
    */
    static readonly "redSandstone": ItemType;
    /**
    Represents an item that can place a set of red sandstone stairs within Minecraft.
    */
    static readonly "redSandstoneStairs": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "redstone": ItemType;
    /**
    Represents an item that can place a block of redstone within Minecraft.
    */
    static readonly "redstoneBlock": ItemType;
    /**
    Represents an item that can place a redstone lamp within Minecraft.
    */
    static readonly "redstoneLamp": ItemType;
    /**
    Represents an item that can place a block with embedded redstone ore within Minecraft.
    */
    static readonly "redstoneOre": ItemType;
    /**
    Represents an item that can place a redstone torch within Minecraft.
    */
    static readonly "redstoneTorch": ItemType;
    /**
    Represents an item that can place a redstone wire within Minecraft.
    */
    static readonly "redstoneWire": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "repeater": ItemType;
    /**
    Represents an item that can place a repeating command block within Minecraft.
    */
    static readonly "repeatingCommandBlock": ItemType;
    /**
    Represents an item that can place a reserved block within Minecraft.
    */
    static readonly "reserved6": ItemType;
    /**
    Represents an item that can place a respawn anchor within Minecraft.
    */
    static readonly "respawnAnchor": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "rottenFlesh": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "saddle": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "salmon": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "salmonBucket": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "salmonSpawnEgg": ItemType;
    /**
    Represents an item that can place a block of sand within Minecraft.
    */
    static readonly "sand": ItemType;
    /**
    Represents an item that can place a block of sandstone within Minecraft.
    */
    static readonly "sandstone": ItemType;
    /**
    Represents an item that can place a set of sandstone stairs within Minecraft.
    */
    static readonly "sandstoneStairs": ItemType;
    /**
    Represents an item that can place a sapling within Minecraft.
    */
    static readonly "sapling": ItemType;
    /**
    Represents an item that can place a set of scaffolding within Minecraft.
    */
    static readonly "scaffolding": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "sculk": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "sculkCatalyst": ItemType;
    /**
    Represents an item that can place a sculk sensor within Minecraft.
    */
    static readonly "sculkSensor": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "sculkShrieker": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "sculkVein": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "scute": ItemType;
    /**
    Represents seagrass within Minecraft.
    */
    static readonly "seagrass": ItemType;
    /**
    Represents an item that can place a sealantern within Minecraft.
    */
    static readonly "seaLantern": ItemType;
    /**
    Represents an item that can place a seapickle within Minecraft.
    */
    static readonly "seaPickle": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "shears": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "sheepSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "shield": ItemType;
    /**
    Represents an item that can place a shroom light within Minecraft.
    */
    static readonly "shroomlight": ItemType;
    /**
    Represents an item that can place a shulker box within Minecraft.
    */
    static readonly "shulkerBox": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "shulkerShell": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "shulkerSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "silverfishSpawnEgg": ItemType;
    /**
    Represents an item that can place a silver-colored block of glazed terracotta within Minecraft.
    */
    static readonly "silverGlazedTerracotta": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "skeletonHorseSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "skeletonSpawnEgg": ItemType;
    /**
    Represents an item that can place a skull within Minecraft.
    */
    static readonly "skull": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "skullBannerPattern": ItemType;
    /**
    Represents slime within Minecraft.
    */
    static readonly "slime": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "slimeBall": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "slimeSpawnEgg": ItemType;
    /**
    Represents an item that can place a small bud of amethyst within Minecraft.
    */
    static readonly "smallAmethystBud": ItemType;
    /**
    Represents an item that can place a small dripleaf block within Minecraft.
    */
    static readonly "smallDripleafBlock": ItemType;
    /**
    Represents an item that can place a smithing table within Minecraft.
    */
    static readonly "smithingTable": ItemType;
    /**
    Represents an item that can place a smoker within Minecraft.
    */
    static readonly "smoker": ItemType;
    /**
    Represents an item that can place a block of smooth basalt within Minecraft.
    */
    static readonly "smoothBasalt": ItemType;
    /**
    Represents an item that can place a set of smooth quartz stairs within Minecraft.
    */
    static readonly "smoothQuartzStairs": ItemType;
    /**
    Represents an item that can place a set of smooth red sandstone stairs within Minecraft.
    */
    static readonly "smoothRedSandstoneStairs": ItemType;
    /**
    Represents an item that can place a set of smooth redstone stairs within Minecraft.
    */
    static readonly "smoothSandstoneStairs": ItemType;
    /**
    Represents an item that can place a smooth stone block within Minecraft.
    */
    static readonly "smoothStone": ItemType;
    /**
    Represents snow within Minecraft.
    */
    static readonly "snow": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "snowball": ItemType;
    /**
    Represents an item that can place a layer of snow within Minecraft.
    */
    static readonly "snowLayer": ItemType;
    /**
    Represents an item that can place a soul campfire within Minecraft.
    */
    static readonly "soulCampfire": ItemType;
    /**
    Represents soul fire within Minecraft.
    */
    static readonly "soulFire": ItemType;
    /**
    Represents an item that can place a soul lantern within Minecraft.
    */
    static readonly "soulLantern": ItemType;
    /**
    Represents an item that can place a block of soul sand within Minecraft.
    */
    static readonly "soulSand": ItemType;
    /**
    Represents soul soil within Minecraft.
    */
    static readonly "soulSoil": ItemType;
    /**
    Represents an item that can place a soul torch within Minecraft.
    */
    static readonly "soulTorch": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "sparkler": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "spawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "spiderEye": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "spiderSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "splashPotion": ItemType;
    /**
    Represents an item that can place a sponge within Minecraft.
    */
    static readonly "sponge": ItemType;
    /**
    Represents an item that can place a spore blossom within Minecraft.
    */
    static readonly "sporeBlossom": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "spruceBoat": ItemType;
    /**
    Represents an item that can place a spruce wood button within Minecraft.
    */
    static readonly "spruceButton": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "spruceChestBoat": ItemType;
    /**
    Represents an item that can place a spruce wood door within Minecraft.
    */
    static readonly "spruceDoor": ItemType;
    /**
    Represents an item that can place a spruce wood fence gate within Minecraft.
    */
    static readonly "spruceFenceGate": ItemType;
    /**
    Represents an item that can place a spruce wood pressure plate within Minecraft.
    */
    static readonly "sprucePressurePlate": ItemType;
    /**
    Represents an item that can place a spruce sign within Minecraft.
    */
    static readonly "spruceSign": ItemType;
    /**
    Represents an item that can place a set of spruce wood stairs within Minecraft.
    */
    static readonly "spruceStairs": ItemType;
    /**
    Represents an item that can place a spruce wood standing sign within Minecraft.
    */
    static readonly "spruceStandingSign": ItemType;
    /**
    Represents an item that can place a spruce wood trapdoor within Minecraft.
    */
    static readonly "spruceTrapdoor": ItemType;
    /**
    Represents an item that can place a spruce wood wall sign within Minecraft.
    */
    static readonly "spruceWallSign": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "spyglass": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "squidSpawnEgg": ItemType;
    /**
    Represents stained glass within Minecraft.
    */
    static readonly "stainedGlass": ItemType;
    /**
    Represents an item that can place a pane of stained glass within Minecraft.
    */
    static readonly "stainedGlassPane": ItemType;
    /**
    Represents an item that can place a block of stained hardened clay within Minecraft.
    */
    static readonly "stainedHardenedClay": ItemType;
    /**
    Represents an item that can place a standing banner within Minecraft.
    */
    static readonly "standingBanner": ItemType;
    /**
    Represents an item that can place a standing sign within Minecraft.
    */
    static readonly "standingSign": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "stick": ItemType;
    /**
    Represents an item that can place a piston block with a sticky arm within Minecraft.
    */
    static readonly "stickyPiston": ItemType;
    /**
    Represents an item that can place a sticky piston arm within Minecraft.
    */
    static readonly "stickyPistonArmCollision": ItemType;
    /**
    Represents an item that can place a block of stone within Minecraft.
    */
    static readonly "stone": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "stoneAxe": ItemType;
    /**
    Represents an item that can place a block of stone brick within Minecraft.
    */
    static readonly "stonebrick": ItemType;
    /**
    Represents an item that can place a set of stone brick stairs within Minecraft.
    */
    static readonly "stoneBrickStairs": ItemType;
    /**
    Represents an item that can place a stone button within Minecraft.
    */
    static readonly "stoneButton": ItemType;
    /**
    Represents an item that can place a stonecutter within Minecraft.
    */
    static readonly "stonecutter": ItemType;
    /**
    Represents an item that can place a stonecutter block within Minecraft.
    */
    static readonly "stonecutterBlock": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "stoneHoe": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "stonePickaxe": ItemType;
    /**
    Represents an item that can place a stone pressure plate within Minecraft.
    */
    static readonly "stonePressurePlate": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "stoneShovel": ItemType;
    /**
    Represents an item that can place a set of stone stairs within Minecraft.
    */
    static readonly "stoneStairs": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "stoneSword": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "straySpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "striderSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "string": ItemType;
    /**
    Represents an item that can place a stripped acacia log within Minecraft.
    */
    static readonly "strippedAcaciaLog": ItemType;
    /**
    Represents an item that can place a stripped birch log within Minecraft.
    */
    static readonly "strippedBirchLog": ItemType;
    /**
    Represents stripped crimson hyphae within Minecraft.
    */
    static readonly "strippedCrimsonHyphae": ItemType;
    /**
    Represents an item that can place a stripped crimson stem within Minecraft.
    */
    static readonly "strippedCrimsonStem": ItemType;
    /**
    Represents an item that can place a stripped dark oak log within Minecraft.
    */
    static readonly "strippedDarkOakLog": ItemType;
    /**
    Represents an item that can place a stripped jungle log within Minecraft.
    */
    static readonly "strippedJungleLog": ItemType;
    /**
    Represents an item that can place a stripped oak log within Minecraft.
    */
    static readonly "strippedOakLog": ItemType;
    /**
    Represents an item that can place a stripped spruce log within Minecraft.
    */
    static readonly "strippedSpruceLog": ItemType;
    /**
    Represents stripped warped hyphae within Minecraft.
    */
    static readonly "strippedWarpedHyphae": ItemType;
    /**
    Represents stripped warped stem within Minecraft.
    */
    static readonly "strippedWarpedStem": ItemType;
    /**
    Represents an item that can place a structure block, which provides for the saving and loading of block structures, within Minecraft.
    */
    static readonly "structureBlock": ItemType;
    /**
    Represents an item that can place a structure void within Minecraft.
    */
    static readonly "structureVoid": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "sugar": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "sugarCane": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "suspiciousStew": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "sweetBerries": ItemType;
    /**
    Represents an item that can place a sweet berry bush within Minecraft.
    */
    static readonly "sweetBerryBush": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "tadpoleBucket": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "tadpoleSpawnEgg": ItemType;
    /**
    Represents tall grass within Minecraft.
    */
    static readonly "tallgrass": ItemType;
    /**
    Represents an item that can place a target within Minecraft.
    */
    static readonly "target": ItemType;
    /**
    Represents tinted glass within Minecraft.
    */
    static readonly "tintedGlass": ItemType;
    /**
    Represents an item that can place a block of TnT within Minecraft.
    */
    static readonly "tnt": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "tntMinecart": ItemType;
    /**
    Represents an item that can place a torch within Minecraft.
    */
    static readonly "torch": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "totemOfUndying": ItemType;
    /**
    Represents an item that can place a trapdoor within Minecraft.
    */
    static readonly "trapdoor": ItemType;
    /**
    Represents an item that can place a trapped chest within Minecraft.
    */
    static readonly "trappedChest": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "trident": ItemType;
    /**
    Represents an item that can place a tripwire within Minecraft.
    */
    static readonly "tripWire": ItemType;
    /**
    Represents an item that can place a tripwire hook within Minecraft.
    */
    static readonly "tripwireHook": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "tropicalFish": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "tropicalFishBucket": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "tropicalFishSpawnEgg": ItemType;
    /**
    Represents an item that can place a block of tuff within Minecraft.
    */
    static readonly "tuff": ItemType;
    /**
    Represents an item that can place a turtle egg within Minecraft.
    */
    static readonly "turtleEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "turtleHelmet": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "turtleSpawnEgg": ItemType;
    /**
    Represents an item that can place a set of twisting vines within Minecraft.
    */
    static readonly "twistingVines": ItemType;
    /**
    Represents an item that can place an underwater torch within Minecraft.
    */
    static readonly "underwaterTorch": ItemType;
    /**
    Represents an item that can place an undyed shulker box within Minecraft.
    */
    static readonly "undyedShulkerBox": ItemType;
    /**
    Represents an item that can place an unknown block within Minecraft.
    */
    static readonly "unknown": ItemType;
    /**
    Represents an item that can place an unlit redstone torch within Minecraft.
    */
    static readonly "unlitRedstoneTorch": ItemType;
    /**
    Represents an item that can place an unpowered comparator within Minecraft.
    */
    static readonly "unpoweredComparator": ItemType;
    /**
    Represents an item that can place an unpowered repeater within Minecraft.
    */
    static readonly "unpoweredRepeater": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "verdantFroglight": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "vexSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "villagerSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "vindicatorSpawnEgg": ItemType;
    /**
    Represents an item that can place a set of vines within Minecraft.
    */
    static readonly "vine": ItemType;
    /**
    Represents an item that can place a wall banner within Minecraft.
    */
    static readonly "wallBanner": ItemType;
    /**
    Represents an item that can place a wall sign within Minecraft.
    */
    static readonly "wallSign": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "wanderingTraderSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "wardenSpawnEgg": ItemType;
    /**
    Represents an item that can place a warped button within Minecraft.
    */
    static readonly "warpedButton": ItemType;
    /**
    Represents an item that can place a warped door within Minecraft.
    */
    static readonly "warpedDoor": ItemType;
    /**
    Represents an item that can place a double slab of warped within Minecraft.
    */
    static readonly "warpedDoubleSlab": ItemType;
    /**
    Represents an item that can place a warped fence within Minecraft.
    */
    static readonly "warpedFence": ItemType;
    /**
    Represents an item that can place a warped fence gate within Minecraft.
    */
    static readonly "warpedFenceGate": ItemType;
    /**
    Represents warped fungus within Minecraft.
    */
    static readonly "warpedFungus": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "warpedFungusOnAStick": ItemType;
    /**
    Represents warped hyphae within Minecraft.
    */
    static readonly "warpedHyphae": ItemType;
    /**
    Represents warped nylium within Minecraft.
    */
    static readonly "warpedNylium": ItemType;
    /**
    Represents warped planks within Minecraft.
    */
    static readonly "warpedPlanks": ItemType;
    /**
    Represents an item that can place a warped pressure plate within Minecraft.
    */
    static readonly "warpedPressurePlate": ItemType;
    /**
    Represents an item that can place a set of warped roots within Minecraft.
    */
    static readonly "warpedRoots": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "warpedSign": ItemType;
    /**
    Represents an item that can place a slab of warped material within Minecraft.
    */
    static readonly "warpedSlab": ItemType;
    /**
    Represents an item that can place a set of warped stairs within Minecraft.
    */
    static readonly "warpedStairs": ItemType;
    /**
    Represents an item that can place a warped standing sign within Minecraft.
    */
    static readonly "warpedStandingSign": ItemType;
    /**
    Represents an item that can place a warped stem within Minecraft.
    */
    static readonly "warpedStem": ItemType;
    /**
    Represents an item that can place a warped trapdoor within Minecraft.
    */
    static readonly "warpedTrapdoor": ItemType;
    /**
    Represents an item that can place a warped wall sign within Minecraft.
    */
    static readonly "warpedWallSign": ItemType;
    /**
    Represents an item that can place a warped wart block within Minecraft.
    */
    static readonly "warpedWartBlock": ItemType;
    /**
    Represents water within Minecraft.
    */
    static readonly "water": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "waterBucket": ItemType;
    /**
    Represents an item that can place a water lily within Minecraft.
    */
    static readonly "waterlily": ItemType;
    /**
    Represents an item that can place a block of waxed copper within Minecraft.
    */
    static readonly "waxedCopper": ItemType;
    /**
    Represents an item that can place a block of waxed cut copper within Minecraft.
    */
    static readonly "waxedCutCopper": ItemType;
    /**
    Represents an item that can place a slab of waxed cut copper within Minecraft.
    */
    static readonly "waxedCutCopperSlab": ItemType;
    /**
    Represents an item that can place a set of waxed cut copper stairs within Minecraft.
    */
    static readonly "waxedCutCopperStairs": ItemType;
    /**
    Represents an item that can place a double slab of waxed cut copper within Minecraft.
    */
    static readonly "waxedDoubleCutCopperSlab": ItemType;
    /**
    Represents an item that can place a block of waxed exposed copper within Minecraft.
    */
    static readonly "waxedExposedCopper": ItemType;
    /**
    Represents an item that can place a block of waxed exposed cut copper within Minecraft.
    */
    static readonly "waxedExposedCutCopper": ItemType;
    /**
    Represents an item that can place a slab of waxed exposed cut copper within Minecraft.
    */
    static readonly "waxedExposedCutCopperSlab": ItemType;
    /**
    Represents an item that can place a set of waxed exposed cut copper stairs within Minecraft.
    */
    static readonly "waxedExposedCutCopperStairs": ItemType;
    /**
    Represents an item that can place a double slab of waxed exposed cut copper within Minecraft.
    */
    static readonly "waxedExposedDoubleCutCopperSlab": ItemType;
    /**
    Represents an item that can place a block of waxed oxidized copper within Minecraft.
    */
    static readonly "waxedOxidizedCopper": ItemType;
    /**
    Represents an item that can place a block of waxed oxidized cut copper within Minecraft.
    */
    static readonly "waxedOxidizedCutCopper": ItemType;
    /**
    Represents an item that can place a slab of waxed oxidized cut copper within Minecraft.
    */
    static readonly "waxedOxidizedCutCopperSlab": ItemType;
    /**
    Represents an item that can place a set of waxed oxidized cut copper stairs within Minecraft.
    */
    static readonly "waxedOxidizedCutCopperStairs": ItemType;
    /**
    Represents an item that can place a double slab of waxed oxidized cut copper within Minecraft.
    */
    static readonly "waxedOxidizedDoubleCutCopperSlab": ItemType;
    /**
    Represents an item that can place a block of waxed weathered copper within Minecraft.
    */
    static readonly "waxedWeatheredCopper": ItemType;
    /**
    Represents an item that can place a block of waxed weathered cut copper within Minecraft.
    */
    static readonly "waxedWeatheredCutCopper": ItemType;
    /**
    Represents an item that can place a slab of waxed weathered cut copper within Minecraft.
    */
    static readonly "waxedWeatheredCutCopperSlab": ItemType;
    /**
    Represents an item that can place a set of waxed weathered cut copper stairs within Minecraft.
    */
    static readonly "waxedWeatheredCutCopperStairs": ItemType;
    /**
    Represents an item that can place a double slab of waxed weathered cut copper within Minecraft.
    */
    static readonly "waxedWeatheredDoubleCutCopperSlab": ItemType;
    /**
    Represents an item that can place a block of weathered copper within Minecraft.
    */
    static readonly "weatheredCopper": ItemType;
    /**
    Represents an item that can place a block of weathered cut copper within Minecraft.
    */
    static readonly "weatheredCutCopper": ItemType;
    /**
    Represents an item that can place a slab of weathered cut copper within Minecraft.
    */
    static readonly "weatheredCutCopperSlab": ItemType;
    /**
    Represents an item that can place a set of weathered cut copper stairs within Minecraft.
    */
    static readonly "weatheredCutCopperStairs": ItemType;
    /**
    Represents an item that can place a double slab of weathered cut copper within Minecraft.
    */
    static readonly "weatheredDoubleCutCopperSlab": ItemType;
    /**
    Represents an item that can place a web within Minecraft.
    */
    static readonly "web": ItemType;
    /**
    Represents an item that can place a set of weeping vines within Minecraft.
    */
    static readonly "weepingVines": ItemType;
    /**
    Represents wheat within Minecraft.
    */
    static readonly "wheat": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "wheatSeeds": ItemType;
    /**
    Represents an item that can place a white candle within Minecraft.
    */
    static readonly "whiteCandle": ItemType;
    /**
    Represents an item that can place a white candle cake within Minecraft.
    */
    static readonly "whiteCandleCake": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "whiteDye": ItemType;
    /**
    Represents an item that can place a block of white glazed terracotta within Minecraft.
    */
    static readonly "whiteGlazedTerracotta": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "witchSpawnEgg": ItemType;
    /**
    Represents an item that can place a wither rose within Minecraft.
    */
    static readonly "witherRose": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "witherSkeletonSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "wolfSpawnEgg": ItemType;
    /**
    Represents an item that can place a block of wood within Minecraft.
    */
    static readonly "wood": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "woodenAxe": ItemType;
    /**
    Represents an item that can place a wooden button within Minecraft.
    */
    static readonly "woodenButton": ItemType;
    /**
    Represents an item that can place a wooden door within Minecraft.
    */
    static readonly "woodenDoor": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "woodenHoe": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "woodenPickaxe": ItemType;
    /**
    Represents an item that can place a wooden pressure plate within Minecraft.
    */
    static readonly "woodenPressurePlate": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "woodenShovel": ItemType;
    /**
    Represents an item that can place a wooden slab within Minecraft.
    */
    static readonly "woodenSlab": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "woodenSword": ItemType;
    /**
    Represents wool within Minecraft.
    */
    static readonly "wool": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "writableBook": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "writtenBook": ItemType;
    /**
    Represents an item that can place a yellow candle within Minecraft.
    */
    static readonly "yellowCandle": ItemType;
    /**
    Represents an item that can place a yellow candle cake within Minecraft.
    */
    static readonly "yellowCandleCake": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "yellowDye": ItemType;
    /**
    Represents an item that can place a yellow flower within Minecraft.
    */
    static readonly "yellowFlower": ItemType;
    /**
    Represents an item that can place a yellow block of glazed terracotta within Minecraft.
    */
    static readonly "yellowGlazedTerracotta": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "zoglinSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "zombieHorseSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "zombiePigmanSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "zombieSpawnEgg": ItemType;
    /**
    Type: [*ItemType*](ItemType.md)
    */
    static readonly "zombieVillagerSpawnEgg": ItemType;
  }
  export class MolangVariableMap {
    constructor();
    setColorRGB(variableName: string, color: Color): MolangVariableMap;
    setColorRGBA(variableName: string, color: Color): MolangVariableMap;
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector): MolangVariableMap;
    setVector3(variableName: string, vector: Vector): MolangVariableMap;
  }
  export class MusicOptions {
    /**
    Specifies a fade overlap for music at the end of play.
    */
    "fade": number;
    /**
    (to be removed in a future update.)
    */
    "location": Location;
    /**
    If set to true, this music track will play repeatedly.
    */
    "loop": boolean;
    /**
    Relative volume level of the music.
    */
    "volume": number;
    constructor();
  }
  export class NavigationResult {
    /**
    Whether the navigation result contains a full path, including to the requested destination.
    */
    readonly "isFullPath": boolean;
    /**
    A set of block locations that comprise the navigation route.
    */
    readonly "path": BlockLocation[];
  }
  export class NumberRange {
    /**
    Maximum value within a range.
    */
    "max": number;
    /**
    Minimum value within a range.
    */
    "min": number;
    next(): number;
  }
  export class PistonActivateEvent {
    /**
    Block impacted by this event.
    */
    readonly "block": Block;
    /**
    Dimension that contains the block that is the subject of this event.
    */
    readonly "dimension": Dimension;
    /**
    True if the piston is the process of expanding.
    */
    readonly "isExpanding": boolean;
    /**
    Contains additional properties and details of the piston.
    */
    readonly "piston": BlockPistonComponent;
  }
  export class PistonActivateEventSignal {
    subscribe(callback: (arg: PistonActivateEvent) => void): (arg: PistonActivateEvent) => void;
    unsubscribe(callback: (arg: PistonActivateEvent) => void): void;
  }
  export class PitchYawRotation {
    /**
    Pitch (up-and-down) element of this rotation.
    */
    "pitch": number;
    /**
    Yaw component (left-to-right) of this position.
    */
    "yaw": number;
  }
  export class Player {
    /**
    Rotation of the body component of the player.
    */
    readonly "bodyRotation": number;
    /**
    Dimension that the entity is currently within.
    */
    readonly "dimension": Dimension;
    /**
    Location of the center of the head component of the player.
    */
    readonly "headLocation": Location;
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
    readonly "location": Location;
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
    Retrieves or sets an entity that is used as the target of AI-related behaviors, like attacking. For players, which don't use any AI semantics, this property does not do anything.
    */
    "target": Entity;
    /**
    Current speed of the player across X, Y, and Z dimensions.
    */
    readonly "velocity": Vector;
    /**
    Vector of the current view of the player.
    */
    readonly "viewVector": Vector;
    addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;
    addTag(tag: string): boolean;
    getBlockFromViewVector(options?: BlockRaycastOptions): Block;
    getComponent(componentId: string): IEntityComponent;
    getComponents(): IEntityComponent[];
    getEffect(effectType: EffectType): Effect;
    getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[];
    getItemCooldown(itemCategory: string): number;
    getTags(): string[];
    hasComponent(componentId: string): boolean;
    hasTag(tag: string): boolean;
    kill(): void;
    playSound(soundID: string, soundOptions?: SoundOptions): void;
    removeTag(tag: string): boolean;
    runCommand(commandString: string): any;
    setVelocity(velocity: Vector): void;
    startItemCooldown(itemCategory: string, tickDuration: number): void;
    teleport(location: Location, dimension: Dimension, xRotation: number, yRotation: number): void;
    teleportFacing(location: Location, dimension: Dimension, facingLocation: Location): void;
    triggerEvent(eventName: string): void;
  }
  export class PlayerInventoryComponentContainer {
    /**
    Contains a count of the slots in the container that are empty.
    */
    readonly "emptySlotsCount": number;
    /**
    Returns the size capacity of the inventory container on this block.
    */
    readonly "size": number;
    addItem(itemStack: ItemStack): void;
    getItem(slot: number): ItemStack;
    setItem(slot: number, itemStack: ItemStack): void;
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
  }
  export class PlayerIterator {
    [Symbol.iterator](): Iterator<Player>;
    next(): IteratorResult<Player>;
  }
  export class PlayerJoinEvent {
    /**
    Player that has joined the world.
    */
    "player": Player;
  }
  export class PlayerJoinEventSignal {
    subscribe(callback: (arg: PlayerJoinEvent) => void): (arg: PlayerJoinEvent) => void;
    unsubscribe(callback: (arg: PlayerJoinEvent) => void): void;
  }
  export class PlayerLeaveEvent {
    /**
    Player that has left the world.
    */
    readonly "playerName": string;
  }
  export class PlayerLeaveEventSignal {
    subscribe(callback: (arg: PlayerLeaveEvent) => void): (arg: PlayerLeaveEvent) => void;
    unsubscribe(callback: (arg: PlayerLeaveEvent) => void): void;
  }
  export class SculkSpreader {
    addCursorsWithOffset(offset: BlockLocation, charge: number): void;
    getCursorPosition(index: number): BlockLocation;
    getMaxCharge(): number;
    getNumberOfCursors(): number;
    getTotalCharge(): number;
  }
  export class Seat {
    /**
    If specified, contains a forced rotation that the riders in this seat are facing.
    */
    "lockRiderRotation": number;
    /**
    A maximum number of riders that this seat can support.
    */
    "maxRiderCount": number;
    /**
    A minimum number of riders that can be placed in this seat position, if this seat is to be filled.
    */
    "minRiderCount": number;
    /**
    Physical location of this seat, relative to the entity's location.
    */
    "position": Location;
  }
  export class SoundOptions {
    /**
    Specifies a location of where to play a particular sound.
    */
    "location": Location;
    /**
    Pitch adjustment level for the sound.
    */
    "pitch": number;
    /**
    Relative volume level of the sound.
    */
    "volume": number;
    constructor();
  }
  export class StringBlockProperty {
    /**
    Name of this property.
    */
    readonly "name": string;
    /**
    A list of allowed values for this string property.
    */
    readonly "validValues": string[];
    /**
    The current value of this property.
    */
    "value": string;
  }
  export class TickEvent {
    /**
    Current tick at the time this event was fired.
    */
    readonly "currentTick": number;
    /**
    Time since the last tick was fired.
    */
    readonly "deltaTime": number;
  }
  export class TickEventSignal {
    subscribe(callback: (arg: TickEvent) => void): (arg: TickEvent) => void;
    unsubscribe(callback: (arg: TickEvent) => void): void;
  }
  export class Trigger {
    /**
    Event name of the trigger.
    */
    "eventName": string;
    constructor(eventName: string);
  }
  export class Vector {
    /**
    X component of this vector.
    */
    "x": number;
    /**
    Y component of this vector.
    */
    "y": number;
    /**
    Z component of this vector.
    */
    "z": number;
    /**
    A constant vector that represents (0, 0, -1).
    */
    static readonly "back": Vector;
    /**
    A constant vector that represents (0, -1, 0).
    */
    static readonly "down": Vector;
    /**
    A constant vector that represents (0, 0, 1).
    */
    static readonly "forward": Vector;
    /**
    A constant vector that represents (-1, 0, 0).
    */
    static readonly "left": Vector;
    /**
    A constant vector that represents (1, 1, 1).
    */
    static readonly "one": Vector;
    /**
    A constant vector that represents (1, 0, 0).
    */
    static readonly "right": Vector;
    /**
    A constant vector that represents (0, 1, 0).
    */
    static readonly "up": Vector;
    /**
    A constant vector that represents (0, 0, 0).
    */
    static readonly "zero": Vector;
    constructor(x: number, y: number, z: number);
    equals(other: Vector): boolean;
    length(): number;
    normalized(): Vector;
    add(a: Vector, b: Vector): Vector;
    cross(a: Vector, b: Vector): Vector;
    distance(a: Vector, b: Vector): number;
    divide(a: Vector, b: number | Vector): Vector;
    lerp(a: Vector, b: Vector, t: number): Vector;
    max(a: Vector, b: Vector): Vector;
    min(a: Vector, b: Vector): Vector;
    multiply(a: Vector, b: number | Vector): Vector;
    slerp(a: Vector, b: Vector, s: number): Vector;
    subtract(a: Vector, b: Vector): Vector;
  }
  export class WeatherChangeEvent {
    /**
    Dimension in which the weather has changed.
    */
    readonly "dimension": string;
    /**
    Whether it is lightning after the change in weather.
    */
    readonly "lightning": boolean;
    /**
    Whether it is raining after the change in weather.
    */
    readonly "raining": boolean;
  }
  export class WeatherChangeEventSignal {
    subscribe(callback: (arg: WeatherChangeEvent) => void): (arg: WeatherChangeEvent) => void;
    unsubscribe(callback: (arg: WeatherChangeEvent) => void): void;
  }
  export class World {
    /**
    Contains a set of events that are applicable to the entirety of the world.
    */
    readonly "events": Events;
    getDimension(dimensionId: string): Dimension;
    getPlayers(options?: EntityQueryOptions): PlayerIterator;
    playMusic(trackID: string, musicOptions?: MusicOptions): void;
    playSound(soundID: string, soundOptions?: SoundOptions): void;
    queueMusic(trackID: string, musicOptions?: MusicOptions): void;
    stopMusic(): void;
  }

  /**
  How many times the server ticks per second of real time.
  */
  export const TicksPerSecond = 20;
  /**
  A class that wraps the state of a world - a set of dimensions and the environment of Minecraft.
  */
  export const world: World;
}