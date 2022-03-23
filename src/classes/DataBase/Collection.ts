import { FieldType } from "../../types/DataBase";
import { Document } from "./Document.js";

export class Collection<docSchema extends { [key: string]: FieldType } = {}> {
  static fromSave(data: any) {
    const c = new Collection(data.id, data.schema);
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

  private _documents = new Map<string, Document>();

  hasDocument(id: string) {
    return this._documents.has(id);
  }

  getDocument(id: string) {
    if (!this.hasDocument(id))
      throw new Error("No Document with this id exists");
    return this._documents.get(id);
  }

  createDocument(id: string) {
    if (this.hasDocument(id))
      throw new Error("Document with this id already exists");
    const doc = new Document(id, this);
    return doc;
  }

  constructor(id: string, docSchema: docSchema) {
    this._id = id;
    this._docSchema = docSchema;
  }
}
