import { BooleanField } from "../classes/DataBase";
import { NumberField } from "../classes/DataBase";
import { MapField } from "../classes/DataBase";
import { StringField } from "../classes/DataBase";

export type StaticFieldType = typeof BooleanField | typeof NumberField | typeof MapField | typeof StringField;
export type FieldType = StaticFieldType['prototype'];
export type FieldTypeIds = FieldType['type'];