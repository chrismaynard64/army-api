

const ARMIES = [
{ name: 'DarkAngels', image: '', units: []
}

];

const UNITS = [
    { name: 'Tactical Squad', image: '',
        powerRating: 5,
        Role: '',
        character: false,
        army: '5c32a61e0e512f3b001c5be2',

    models: [
        {    name: 'Space Marine',
            image: '',
            portrait: '',
            movement: 6,
            weaponSkill: 3,
            ballisticSkill: 3,
            strength: 4,
            toughness: 4,
            wounds: 1,
            attacks: 1,
            leadership: 7,
            save: 3,
            fly: false,
            movementMinimum: null,
            psyker: false,
            keywords: ['IMPERIUM', 'ADEPTUS ASTARTES'],
            factionKeywords: ['INFANTRY', 'TACTICAL SQUAD'],
            numberMin: 4,
            numberMax: 9
        },
        {    
            name: 'Space Marine Sergeant',
            image: '',
            portrait: '',
            movement: 6,
            weaponSkill: 3,
            ballisticSkill: 3,
            strength: 4,
            toughness: 4,
            wounds: 1,
            attacks: 1,
            leadership: 8,
            save: 3,
            fly: false,
            movementMinimum: null,
            psyker: false,
            keywords: ['IMPERIUM', 'ADEPTUS ASTARTES'],
            factionKeywords: ['INFANTRY', 'TACTICAL SQUAD'],
            numberMin: 1,
            numberMax: 1
        }
    ],



}
];

module.exports = {
    ARMIES,
    UNITS
}