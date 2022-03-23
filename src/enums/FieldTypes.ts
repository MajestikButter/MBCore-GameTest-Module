import { NumberField, StringField, BooleanField, MapField } from "../classes/DataBase/index.js";

export const FieldTypes = {
  Number: new NumberField(),
  String: new StringField(),
  Boolean: new BooleanField(),
  MapField: new MapField()
}