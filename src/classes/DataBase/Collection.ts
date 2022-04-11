import { BooleanField, MapField, NumberField, StringField } from "mbcore-gametest/src/classes/DataBase/Fields";
import { FieldTypes } from "../../enums/FieldTypes";
import { FieldTypeIds } from "../../types/DataBase";
import { Document } from "./Document.js";

export type schema = { [key: string]: typeof FieldTypes.boolean | typeof FieldTypes.string | typeof FieldTypes.number | [typeof FieldTypes.map, schema] }
export class Collection<docSchema extends schema = {}> {
  static fromSave(data: any) {
    const schema: schema = {};
    type data = {type: FieldTypeIds; data: any} | [{type: FieldTypeIds; data: any}, {[k:string]:data}]
    const parseType = (data: data): schema[keyof schema] => {
      if (Array.isArray(data)) {
        const type = MapField;
        const mSchema: any = {};
        for (let k2 in data[1]) {
          mSchema[k2] = parseType(data[1][k2])
        }
        return [type, mSchema];
      } else {
        let type;
        switch (data.type) {
          case 'number': {
            type = NumberField
            break;
          }
          case 'string': {
            type = StringField
            break;
          }
          case 'boolean': {
            type = BooleanField
            break;
          }
        }
        return type;
      }
    }
    for (let k in data.schema) {
      schema[k] = parseType(data.schema[k] as unknown as any)
    };
    const c = new Collection(data.id, schema);
    for (let d of data.documents) {
      d = Document.fromSave(d, c);
      c._documents.set(d.id, d);
    }
    return c;
  }

  toSave(): {
    id: string;
    documents: ReturnType<Document["toSave"]>[];
    schema: { [k: string]: any };
  } {
    const schema: { [k: string]: any } = {};
    for (let k in this.docSchema) {
      if (Array.isArray(this.docSchema[k])) {
        const mSchema: any = {};
        // @ts-expect-error
        for (let k2 in this.docSchema[k][1]) {
          // @ts-expect-error
          mSchema[k2] = this._docSchema[k][1][k2].toSave();
        }
        // @ts-expect-error
        schema[k] = [this.docSchema[k][0].toSave(), mSchema]
        // @ts-expect-error
      } else schema[k] = this.docSchema[k].toSave();
    }
    return {
      id: this.id,
      documents: Array.from(this._documents.values()).map((v) => v.toSave()),
      schema,
    };
  }

  private _id: string;
  get id() {
    return this._id;
  }

  private _docSchema: docSchema;
  get docSchema() {
    return this._docSchema;
  }

  private _documents = new Map<string, Document<string, this>>();

  hasDocument(id: string) {
    return this._documents.has(id);
  }

  writeDocument(document: Document<string, this>) {
    return this._documents.set(document.id, document);
  }

  getDocument(id: string) {
    if (!this.hasDocument(id))
      throw new Error("No Document with this id exists");
    return this._documents.get(id);
  }

  getAllDocuments() {
    return Array.from(this._documents.values());
  }

  deleteDocument(document: Document<string, this> | string) {
    this._documents.delete(typeof document === 'string' ? document : document.id);
  }

  deleteAllDocuments() {
    this._documents.clear();
  }

  constructor(id: string, docSchema: docSchema) {
    this._id = id;
    this._docSchema = docSchema;
  }
}
