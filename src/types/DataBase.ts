import { FieldTypes } from "../enums/FieldTypes";

export type FieldType = typeof FieldTypes[keyof typeof FieldTypes];
export type FieldTypeIds = FieldType['type'];