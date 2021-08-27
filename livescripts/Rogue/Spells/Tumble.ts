const TUMBLE:uint32 = GetID("Spell","TLRClasses","rogue-tumble");
const PREPARATION:uint32 = GetID("Spell","TLRClasses","rogue-preparation");

export function OnTumble(events: TSEventHandlers) {
    events.SpellID.OnCast(TUMBLE, (spell)=> {
        const caster = spell.GetCaster();
        if (!caster.IsNull() && caster.IsUnit()) {
            caster.ToUnit().AddAura(PREPARATION, caster.ToUnit());
        }
    });
}

export function OnFanOfKnives(events: TSEventHandlers) {
    events.SpellID.OnCast(51723, (spell)=> {
        const caster = spell.GetCaster();
        if (!caster.IsNull() && caster.IsUnit()) {
            if (caster.ToUnit().HasAura(PREPARATION)) {
                caster.ToUnit().RemoveAura(PREPARATION);
                caster.ToPlayer().SetPower(caster.ToPlayer().GetPower(3) + spell.GetPowerCost(), -1);
            }
        }
    });
}