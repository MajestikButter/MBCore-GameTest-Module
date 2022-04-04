import { FieldTypes } from "../../enums/FieldTypes";
import { FieldTypeIds, StaticFieldType } from "../../types/DataBase";
import { Document } from "./Document.js";

export class Collection<docSchema extends { [key: string]: StaticFieldType } = {}> {
  static fromSave(data: any) {
    const schema: {[key: string]: StaticFieldType} = {};
    for (let k in data.schema) {
      schema[k] = FieldTypes[data.schema[k].type as FieldTypeIds];
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
      schema[k] = this.docSchema[k].toSave();
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
