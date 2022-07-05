import { ScoreboardIdentityType } from "mojang-minecraft";
import { CommandHandler } from "./CommandHandler.js";
import { Scoreboard } from "./Scoreboard.js";

function createRegex(id: string) {
  return new RegExp(
    `₧{DataSave}\\[\\/id:\\(${id}\\)\\/\\]\\[\\/data:\\([^º]+º\\)\\/]`,
    "g"
  );
}

type ObjVal = Obj | string | number | boolean;
interface Obj {
  [key: string]: ObjVal | ObjVal[];
}

const JSONSaveSB = new Scoreboard("mbcJSONSave");

export class JSONSave {
  static maxStoreLength = 256;

  private static json: string;

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

      const target = `"${data}"`;
      JSONSaveSB.set(target, i);
      str = str.slice(this.maxStoreLength);
    }
  }
}

JSONSave.setJSON({
  test: {},
  test2: [{}, "", 0],
});
