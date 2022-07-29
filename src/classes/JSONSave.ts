import { ScoreboardIdentityType } from "mojang-minecraft";
import { Scoreboard } from "./Scoreboard.js";

type ObjVal = Obj | string | number | boolean;
interface Obj {
  [key: string]: ObjVal | ObjVal[];
}

const JSONSaveSB = new Scoreboard("mbcJSONSave");

export class JSONSave {
  static maxStoreLength = 256;

  private static json = "{}";

  static get dataLength() {
    return this.json.length;
  }

  static getJSON() {
    return JSON.parse(this.json);
  }
  static setJSON(data: Obj) {
    this.json = JSON.stringify(data);
  }

  static fetch() {
    const entries = JSONSaveSB.objective
      .getScores()
      .sort((a, b) => a.score - b.score);

    let str = "";
    for (let entry of entries) {
      const ident = entry.participant;
      if (ident.type !== ScoreboardIdentityType.fakePlayer) continue;
      str += ident.displayName;
    }
    str = str.replace(/ÿ/g, '"').replace(/þ/g, "\\");
    str = str ? JSON.parse(`"${str}"`) : "{}";
    const parsed = JSON.parse(str);
    this.json = str;
    return parsed;
  }

  static save(async: boolean, minSaves?: number): void | Promise<void>;
  static save(async?: false): void;
  static async save(async: true, minSaves: number): Promise<void>;
  static save(async = false, minSaves?: number) {
    let str = JSON.stringify(this.json).slice(1, -1);
    const chunks = str.length / this.maxStoreLength;

    const save = (i: number) => {
      const data = str.slice(0, this.maxStoreLength);

      let target = '"';
      if (data.startsWith('"') && data.endsWith("\\"))
        target += `ÿ${data.slice(1, -1)}þ`;
      else if (data.endsWith("\\")) target += `${data.slice(0, -1)}þ`;
      else if (data.startsWith('"')) target += `ÿ${data.slice(1)}`;
      else target += data;
      target += '"';
      const success = JSONSaveSB.set(target, i);
      if (!success) console.log(target);
      str = str.slice(this.maxStoreLength);
    };

    if (async) {
      return new Promise<void>(async (resolve, reject) => {
        for (let ident of JSONSaveSB.objective.getScores()) {
          if (ident.participant.type !== ScoreboardIdentityType.fakePlayer)
            continue;
          JSONSaveSB.reset(`"${ident.participant.displayName}"`);
          if (ident.score % (minSaves ?? 200) == 0) await null;
        }

        for (let i = 0; i < chunks; i++) {
          save(i);
          if (i % (minSaves ?? 200) == 0) await null;
        }
        resolve();
      });
    } else {
      for (let ident of JSONSaveSB.objective.getParticipants()) {
        if (ident.type !== ScoreboardIdentityType.fakePlayer) continue;
        JSONSaveSB.reset(`"${ident.displayName}"`);
      }
      for (let i = 0; i < chunks; i++) save(i);
    }
    return;
  }
}
