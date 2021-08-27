import { OnFanOfKnives, OnTumble } from "./Rogue/Spells/Tumble";

export function Main(events: TSEventHandlers) {
    OnTumble(events);
    OnFanOfKnives(events);
}