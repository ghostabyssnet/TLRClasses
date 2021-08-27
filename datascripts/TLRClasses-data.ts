import { std } from "tswow-stdlib";
import { DBC_ChrRaces } from "wotlkdata/dbc/types/ChrRaces";
import { SQL } from "wotlkdata/sql/SQLFiles";

console.log("Hello from TLRClasses data script!");
const WARRIOR = std.Classes.load(1);
// WARRIOR.UI.ClassButton ... changing stuff is hard
// const TEST = std.Creatures.load(1);
// pUnit:SetCombatTargetingCapable(1/0)
// const test = SQL.gameobject_template.filter({});
//console.log(test);