import { NumberField, StringField, BooleanField, MapField } from "../classes/DataBase/index.js";

export const FieldTypes: {
  number: typeof NumberField,
  string: typeof StringField,
  boolean: typeof BooleanField,
  map: typeof MapField
} = {
  number: NumberField,
  string: StringField,
  boolean: BooleanField,
  map: MapField
}
