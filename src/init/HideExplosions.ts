import { MolangVariableMap, SoundOptions, world } from "mojang-minecraft";

world.events.explosion.subscribe((evd) => {
  if (evd.source && (evd.source.id === 'mbc:cancel' || evd.source.hasTag('<$mbc;cancelExplosionEffects=true;/>'))) return;
  evd.dimension.spawnParticle(
    "mbc:dragon_death_explosion_emitter",
    evd.source.location,
    new MolangVariableMap()
  );
  const s = new SoundOptions();
  s.location = evd.source.location;
  for (let plr of evd.dimension.getPlayers()) {
    plr.playSound("mbc.random.explode", s);
  }
});