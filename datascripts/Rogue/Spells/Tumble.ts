import { DBC,SQL } from 'wotlkdata'
import { Ids } from 'tswow-stdlib/Misc/Ids'
import { std } from "tswow-stdlib";
import { Pos } from "tswow-stdlib/Misc/Position";
import { GameObjectTemplate } from 'tswow-stdlib/GameObject/GameObjectTemplate';

const TUMBLE = std.Spells.create("TLRClasses", "rogue-tumble", 1953); // set class mask to rogue
TUMBLE.Attributes.dispelAuraOnImmunity.clear();
TUMBLE.Name.enGB.set("Tumble");
TUMBLE.Description.enGB.set("Dashes forward, applying Preparation for 2 seconds. If Fan of Knives is used while Preparation is active, it costs no energy, but consumes the effect.");
TUMBLE.AuraDescription.enGB.set("Dashing forward.");
TUMBLE.Effects.get(1).clear();
TUMBLE.Effects.get(2).clear();
TUMBLE.Effects.get(0).Radius.set(10, 10, 10);
TUMBLE.SchoolMask.Physical.mark();
TUMBLE.SchoolMask.Arcane.clear();
//TUMBLE.Power.setEnergy(0.25);
TUMBLE.row.PowerType.set(3);
TUMBLE.row.ManaCost.set(0);
TUMBLE.row.ManaCostPct.set(10)
TUMBLE.Cooldown.set(500, 0, 0, 0);
console.log(TUMBLE.objectify()); // 31 23 21 

const STR = std.Spells.load(48638);