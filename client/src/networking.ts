import { Bullet } from "./gameObjects/bullet";
import { Player } from "./gameObjects/player";
import { MuzzleFlash } from "./gameObjects/muzzleFlash";
import { Rotation } from "./util/rotation";
import { Vec2 } from "./util/vec2";
type worldData = {
  players: Player[];
  bullets: Bullet[];
  muzzelflashes: MuzzleFlash[];
};

export function convertGameObjects(data: any): worldData {
  let newData: worldData = {
    players: [],
    bullets: [],
    muzzelflashes: [],
  };

  for (let i in data) {
    let object = data[i];
    if (object.type == "player") {
      newData.players.push(
        new Player(
          object.id,
          object.player,
          new Rotation(object.rotation.angle),
          new Vec2(object.position.x, object.position.y),
          object.name || "",
          object.health
        )
      );
      // console.log(object.position);
    } else if (object.type == "muzzle_flash") {
      newData.muzzelflashes.push(
        new MuzzleFlash(
          object.id,
          object.player,
          new Rotation(object.rotation.angle),
          new Vec2(object.position.x, object.position.y)
        )
      );
    } else if (object.type == "bullet") {
      newData.bullets.push(
        new Bullet(
          object.id,
          object.player,
          new Rotation(object.rotation.angle),
          new Vec2(object.position.x, object.position.y)
        )
      );
    }
  }
  return newData;
}
