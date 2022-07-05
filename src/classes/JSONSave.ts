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
    str = str.replace(/<\$>\\/g, "");
    str = str ? JSON.parse(`"${str}"`) : "{}";
    const parsed = JSON.parse(str);
    this.json = str;
    return parsed;
  }
  static save() {
    for (let ident of JSONSaveSB.objective.getParticipants()) {
      if (ident.type !== ScoreboardIdentityType.fakePlayer) continue;
      JSONSaveSB.reset(`"${ident.displayName}"`);
    }

    let str = JSON.stringify(this.json).slice(1, -1);
    const chunks = str.length / this.maxStoreLength;
    for (let i = 0; i < chunks; i++) {
      const data = str.slice(0, this.maxStoreLength);

      let target = '"';
      if (data.startsWith('"')) target += "<$>\\";
      if (data.endsWith("\\")) target += `${data.slice(0, -1)}<$>\\\\`;
      else target += data;
      target += '"';
      const success = JSONSaveSB.set(target, i);
      if (!success) console.log(target);
      str = str.slice(this.maxStoreLength);
    }
  }
}
