import { DBC,SQL } from 'wotlkdata'
import { Ids } from 'tswow-stdlib/Misc/Ids'
import { std } from "tswow-stdlib";
import { Pos } from "tswow-stdlib/Misc/Position";
import { GameObjectTemplate } from 'tswow-stdlib/GameObject/GameObjectTemplate';

// this spell has livescripts

const PREPARATION = std.Spells.create("TLRClasses", "rogue-preparation");
PREPARATION.Name.enGB.set("Preparation");
PREPARATION.Description.enGB.set("Passive");
PREPARATION.AuraDescription.enGB.set("Your next Fan of Knives has its Energy cost refunded.");
PREPARATION.Effects.add().EffectType
.setApplyAura()
.setDummy();
//PREPARATION.Effects.add().AuraType.setAddFlatModifier().Operation.setCost().BasePoints.set(-50).RandomPoints.set(1);
//PREPARATION.Effects.get(1).ClassMask.set(35, 0, 0);
PREPARATION.Effects.get(1).clear();
PREPARATION.Duration.set(2000, 0, 2000);
PREPARATION.Icon.set('Interface\\Icons\\ability_rogue_cheatdeath.blp');

const TUMBLE = std.Spells.create("TLRClasses", "rogue-tumble", 1953); // set class mask to rogue
TUMBLE.Attributes.dispelAuraOnImmunity.clear();
TUMBLE.Name.enGB.set("Tumble");
TUMBLE.Description.enGB.set("Dashes forward, applying Preparation for 2 seconds. If Fan of Knives is used while Preparation is active, it has its Energy cost refunded, but consumes the effect.");
TUMBLE.AuraDescription.enGB.set("Dashing forward.");
TUMBLE.Effects.get(1).clear();
TUMBLE.Effects.get(2).clear();
TUMBLE.Effects.get(0).Radius.set(10, 10, 10);
TUMBLE.SchoolMask.Physical.mark();
TUMBLE.SchoolMask.Arcane.clear();
TUMBLE.row.PowerType.set(3);
TUMBLE.row.ManaCost.set(25);
TUMBLE.row.ManaCostPct.set(0)
TUMBLE.Cooldown.set(500, 0, 0, 0);
TUMBLE.Effects.get(1).clear();
/*TUMBLE.Effects.add().EffectType
    .setApplyAura()
    .setDummy();*/
TUMBLE.Effects.get(1).ImplicitTargetA.setDestCaster();
TUMBLE.Duration.set(1000, 0, 1000);
TUMBLE.Icon.set('Interface\\Icons\\ability_rogue_fleetfooted.blp');
TUMBLE.StateKit.BaseEffect.set('Spells\\Shadow_Precast_Med_Base.mdx', 1, 1, 1, 1);
TUMBLE.CastKit.Animation.setSpecial1H();
//console.log(TUMBLE.objectify());

// TODO: fix huge cooldown bug when sprint is used
// TODO: add 'Spells\\Shadow_Precast_Med_Base.mdx' as effect to empowered shiv
const STR2 = std.Spells.load(51723);
//console.log(STR2.ClassMask.objectify());
STR2.ClassMask.set(0, 262144, 0);
STR2.row.ManaCost.set(35);
//console.log(STR.Effects.objectify());