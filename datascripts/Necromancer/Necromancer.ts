import { std } from 'tswow-stdlib';

export const NECROMANCER_CLASS = 
    std.Classes.create(
        // Mod id
        'TLRClasses',
        // Entity id
        'necromancer',
        // The parent name of our class.
        'WARLOCK');

// change this to add other races (for instance: 'UNDEAD', 'HUMAN'...)
NECROMANCER_CLASS.addRaces(['UNDEAD']);

// name
NECROMANCER_CLASS.Name.enGB.set('Necromancer');

// color
NECROMANCER_CLASS.UI.Color.set(0xbd93f9);

// description
NECROMANCER_CLASS.UI.Info.add('- Role: Damage');
NECROMANCER_CLASS.UI.Info.add('- Light Armor (Cloth)');
NECROMANCER_CLASS.UI.Info.add('- Controls multiple undead servants');
NECROMANCER_CLASS.UI.Info.add('- Uses mana as a resource');
NECROMANCER_CLASS.UI.Description.set("Necromancers raise and control the undead.");

// spells
// TODO: put them in different files, clean up this mess

export const SUMMONING_SKILL = std.SkillLines.createClass('TLRClasses','summoning-skill',NECROMANCER_CLASS.ID);
SUMMONING_SKILL.Name.enGB.set('Summoning');

export const PLAGUE_SKILL = std.SkillLines.createClass('TLRClasses','plague-skill',NECROMANCER_CLASS.ID);
PLAGUE_SKILL.Name.enGB.set('Plague');