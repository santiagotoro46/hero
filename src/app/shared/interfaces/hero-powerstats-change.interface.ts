import { Hero, PowerStats } from './hero.interfaces';
export interface HeroPowerStatsChange {
    hero: Hero;
    powerstat: keyof PowerStats;
    value: number;
}