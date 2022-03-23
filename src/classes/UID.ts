import { Entity } from "mojang-minecraft";

export class UID {
  static UIDRegex = /<\$mbc;uid=(.*?);\/>/;
  
  static getUID(entity: Entity) {
    for (let tag of entity.getTags()) {
      const m = this.matchTag(tag);
      if (m) return m[1];
    }
  }

  static matchTag(tag: string) {
    return tag.match(this.UIDRegex);
  }

  static createUID() {
    var dt = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }

  static createTag(uid = this.createUID()) {
    return `<$mbc;uid=${uid};/>`;
  }
}