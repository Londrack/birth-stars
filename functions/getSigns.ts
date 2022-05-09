export const emptySign ={
    horoscope: '',
    sign: ''
}

const digitalSum = (number:string | number):number => number
    .toString()
    .split('')
    .reduce((r:number, n:string) => r + parseInt(n)
    , 0);

const getDateSeparate = (date: string):{day:number, month: number, year: number} => {
    date = date.substring(0,8);
    const day: number = parseInt(date.substring(6,8));
    const month: number = parseInt(date.substring(4,6));
    const year: number = parseInt(date.substring(0,4));
    return {day, month, year}
}

const getZodiacNumber = (date: string): number => {
    const {day, month} = getDateSeparate(date);

    if ((day >= 21 && month === 1) || (day <= 19 && month === 2)) return 0
    if ((day >= 20 && month === 2) || (day <= 20 && month === 3)) return 1
    if ((day >= 21 && month === 3) || (day <= 20 && month === 4)) return 2
    if ((day >= 21 && month === 4) || (day <= 20 && month === 5)) return 3
    if ((day >= 21 && month === 5) || (day <= 21 && month === 6)) return 4
    if ((day >= 22 && month === 6) || (day <= 21 && month === 7)) return 5
    if ((day >= 22 && month === 7) || (day <= 23 && month === 8)) return 6
    if ((day >= 24 && month === 8) || (day <= 22 && month === 9)) return 7
    if ((day >= 24 && month === 9) || (day <= 22 && month === 10)) return 8
    if ((day >= 23 && month === 10) || (day <= 22 && month === 11)) return 9
    if ((day >= 23 && month === 11) || (day <= 21 && month === 12)) return 10
    if ((day >= 22 && month === 12) || (day <= 20 && month === 1)) return 11
}

const getAlchemist = (date: string) : string => {
    let sumDate: number = digitalSum(date);
    let finalSum: number = (sumDate > 10) ? digitalSum(sumDate) : sumDate;
    finalSum = (finalSum > 10) ? digitalSum(finalSum) : finalSum;
    finalSum = (finalSum % 10 === 0) ? 0 : finalSum;

    const signArray: Array<string> = [
        'copper',
        'silver',
        'iron',
        'mercury',
        'zinc',
        'tin',
        'lead',
        'platinum',
        'nickel',
        'gold'
    ]

    return signArray[finalSum];
}

const getArabic: Array<string> = [
    'sling',
    'axe',
    'dagger',
    'mace',
    'iron_mallet',
    'knife',
    'cutlass',
    'machete',
    'chain',
    'gumia',
    'arrow',
    'lance'
]

const getCeltic = (date:string): string => {
    const {day, month} = getDateSeparate(date);

    const arrSigns = [
        'deer',
        'cat',
        'snake',
        'fox',
        'bull',
        'sea_horse',
        'raven',
        'horse',
        'salmon',
        'swan',
        'butterfly',
        'wolf',
        'hawk',
    ]

    if ((day >= 24 && month === 12) || (day <= 20 && month === 1)) return arrSigns[0];
    if ((day >= 21 && month === 1) || (day <= 17 && month === 2)) return arrSigns[1];
    if ((day >= 18 && month === 2) || (day <= 17 && month === 3)) return arrSigns[2];
    if ((day >= 18 && month === 3) || (day <= 14 && month === 4)) return arrSigns[3];
    if ((day >= 15 && month === 4) || (day <= 12 && month === 5)) return arrSigns[4];
    if ((day >= 13 && month === 5) || (day <= 9 && month === 6)) return arrSigns[5];
    if ((day >= 11 && month === 6) || (day <= 7 && month === 7)) return arrSigns[6];
    if ((day >= 8 && month === 7) || (day <= 4 && month === 8)) return arrSigns[7];
    if ((day >= 6 && month === 8) || (day <= 1 && month === 9)) return arrSigns[8];
    if ((day >= 2 && month === 9) || (day <= 29 && month === 9)) return arrSigns[9];
    if ((day >= 30 && month === 9) || (day <= 27 && month === 10)) return arrSigns[10];
    if ((day >= 28 && month === 10) || (day <= 24 && month === 11)) return arrSigns[11];
    if ((day >= 25 && month === 11) || (day <= 23 && month === 12)) return arrSigns[12];

    return ''
}

const getAztec = (date:string): string => {
    const {day, month} = getDateSeparate(date);

    const arrSign = [
        'alligator',
        'house',
        'flower',
        'snake',
        'deer',
        'jaguar',
        'cane',
        'rabbit',
        'eagle',
        'bow',
        'flint',
        'dog',
    ]

    if( (day === 4 && month === 1) || (day === 16 && month === 1) || (day === 18 && month === 1) || (day === 2 && month === 2) || (day === 10 && month === 3) || (day === 22 && month === 3) || (day === 3 && month === 4) || (day === 15 && month === 4) || (day === 27 && month === 4) || (day === 9 && month === 5) || (day === 21 && month === 5) || (day === 2 && month === 6) || (day === 14 && month === 6) || (day === 26 && month === 6) || (day === 8 && month === 7) || (day === 20 && month === 7) || (day === 1 && month === 8) || (day === 13 && month === 8) || (day === 25 && month === 8) || (day === 6 && month === 9) || (day === 18 && month === 9) || (day === 30 && month === 9) || (day === 12 && month === 10) || (day === 24 && month === 10) || (day === 5 && month === 11) || (day === 17 && month === 11) || (day === 29 && month === 11) || (day === 11 && month === 12) || (day === 23 && month === 12)
    ) return arrSign[0];
    if( (day === 5 && month === 1) || (day === 17 && month === 1) || (day === 29 && month === 1) || (day === 3 && month === 2) || (day === 15 && month === 2) || (day === 27 && month === 2) || (day === 11 && month === 3) || (day === 23 && month === 3) || (day === 4 && month === 4) || (day === 16 && month === 4) || (day === 28 && month === 4) || (day === 10 && month === 5) || (day === 22 && month === 5) || (day === 3 && month === 6) || (day === 15 && month === 6) || (day === 27 && month === 6) || (day === 9 && month === 7) || (day === 21 && month === 7) || (day === 2 && month === 8) || (day === 14 && month === 8) || (day === 26 && month === 8) || (day === 7 && month === 9) || (day === 19 && month === 9) || (day === 1 && month === 10) || (day === 13 && month === 10) || (day === 25 && month === 10) || (day === 6 && month === 11) || (day === 18 && month === 11) || (day === 30 && month === 11) || (day === 12 && month === 12) || (day === 24 && month === 12)
    ) return arrSign[1];
    if( (day === 6 && month === 1) || (day === 18 && month === 1) || (day === 30 && month === 1) || (day === 4 && month === 2) || (day === 16 && month === 2) || (day === 28 && month === 2) || (day === 29 && month === 2) || (day === 12 && month === 3) || (day === 24 && month === 3) || (day === 5 && month === 4) || (day === 17 && month === 4) || (day === 29 && month === 4) || (day === 11 && month === 5) || (day === 23 && month === 5) || (day === 4 && month === 6) || (day === 16 && month === 6) || (day === 28 && month === 6) || (day === 10 && month === 7) || (day === 22 && month === 7) || (day === 3 && month === 8) || (day === 15 && month === 8) || (day === 27 && month === 8) || (day === 8 && month === 9) || (day === 20 && month === 9) || (day === 2 && month === 10) || (day === 14 && month === 10) || (day === 26 && month === 10) || (day === 7 && month === 11) || (day === 19 && month === 11) || (day === 1 && month === 12) || (day === 13 && month === 12) || (day === 25 && month === 12)
    ) return arrSign[2];
    if( (day === 7 && month === 1) || (day === 19 && month === 1) || (day === 31 && month === 1) || (day === 5 && month === 2) || (day === 17 && month === 2) || (day === 1 && month === 3) || (day === 13 && month === 3) || (day === 25 && month === 3) || (day === 6 && month === 4) || (day === 18 && month === 4) || (day === 30 && month === 4) || (day === 12 && month === 5) || (day === 24 && month === 5) || (day === 5 && month === 6) || (day === 17 && month === 6) || (day === 29 && month === 6) || (day === 11 && month === 7) || (day === 23 && month === 7) || (day === 4 && month === 8) || (day === 16 && month === 8) || (day === 28 && month === 8) || (day === 9 && month === 9) || (day === 21 && month === 9) || (day === 3 && month === 10) || (day === 15 && month === 10) || (day === 27 && month === 10) || (day === 8 && month === 11) || (day === 20 && month === 11) || (day === 2 && month === 12) || (day === 14 && month === 12) || (day === 26 && month === 12)
    ) return arrSign[3];
    if( (day === 8 && month === 1) ||  (day === 20 && month === 1) ||  (day === 1 && month === 2) ||  (day === 6 && month === 2) ||  (day === 18 && month === 2) ||  (day === 2 && month === 3) ||  (day === 14 && month === 3) ||  (day === 26 && month === 3) ||  (day === 7 && month === 4) ||  (day === 9 && month === 4) ||  (day === 19 && month === 4) ||  (day === 1 && month === 5) ||  (day === 13 && month === 5) ||  (day === 25 && month === 5) ||  (day === 6 && month === 6) ||  (day === 18 && month === 6) ||  (day === 30 && month === 6) ||  (day === 12 && month === 7) ||  (day === 24 && month === 7) ||  (day === 5 && month === 8) ||  (day === 17 && month === 8) ||  (day === 29 && month === 8) ||  (day === 10 && month === 9) ||  (day === 22 && month === 9) ||  (day === 4 && month === 10) ||  (day === 16 && month === 10) ||  (day === 28 && month === 10) ||  (day === 9 && month === 11) ||  (day === 21 && month === 11) ||  (day === 3 && month === 12) ||  (day === 15 && month === 12) ||  (day === 27 && month === 12)
    ) return arrSign[4];
    if( (day === 9 && month === 1) || (day === 21 && month === 1) || (day === 7 && month === 2) || (day === 19 && month === 2) || (day === 3 && month === 3) || (day === 15 && month === 3) || (day === 27 && month === 3) || (day === 8 && month === 4) || (day === 20 && month === 4) || (day === 2 && month === 5) || (day === 14 && month === 5) || (day === 26 && month === 5) || (day === 7 && month === 6) || (day === 19 && month === 6) || (day === 1 && month === 7) || (day === 13 && month === 7) || (day === 25 && month === 7) || (day === 6 && month === 8) || (day === 18 && month === 8) || (day === 30 && month === 8) || (day === 11 && month === 9) || (day === 23 && month === 9) || (day === 5 && month === 10) || (day === 17 && month === 10) || (day === 29 && month === 10) || (day === 10 && month === 11) || (day === 22 && month === 11) || (day === 4 && month === 12) || (day === 16 && month === 12) || (day === 28 && month === 12)
    ) return arrSign[5];
    if( (day === 10 && month === 1) || (day === 22 && month === 1) || (day === 8 && month === 2) || (day === 20 && month === 2) || (day === 4 && month === 3) || (day === 16 && month === 3) || (day === 28 && month === 3) || (day === 9 && month === 4) || (day === 21 && month === 4) || (day === 3 && month === 5) || (day === 15 && month === 5) || (day === 27 && month === 5) || (day === 8 && month === 6) || (day === 20 && month === 6) || (day === 2 && month === 7) || (day === 14 && month === 7) || (day === 26 && month === 7) || (day === 7 && month === 8) || (day === 19 && month === 8) || (day === 31 && month === 8) || (day === 12 && month === 9) || (day === 24 && month === 9) || (day === 6 && month === 10) || (day === 18 && month === 10) || (day === 30 && month === 10) || (day === 11 && month === 11) || (day === 23 && month === 11) || (day === 5 && month === 12) || (day === 17 && month === 12) || (day === 29 && month === 12)
    ) return arrSign[6];
    if( (day === 11 && month === 1) || (day === 23 && month === 1) || (day === 9 && month === 2) || (day === 21 && month === 2) || (day === 5 && month === 3) || (day === 17 && month === 3) || (day === 29 && month === 3) || (day === 10 && month === 4) || (day === 22 && month === 4) || (day === 4 && month === 5) || (day === 16 && month === 5) || (day === 28 && month === 5) || (day === 9 && month === 6) || (day === 21 && month === 6) || (day === 3 && month === 7) || (day === 15 && month === 7) || (day === 27 && month === 7) || (day === 8 && month === 8) || (day === 20 && month === 8) || (day === 1 && month === 9) || (day === 13 && month === 9) || (day === 25 && month === 9) || (day === 7 && month === 10) || (day === 19 && month === 10) || (day === 31 && month === 10) || (day === 12 && month === 11) || (day === 24 && month === 11) || (day === 6 && month === 12) || (day === 18 && month === 12) || (day === 30 && month === 12)
    ) return arrSign[7];
    if( (day === 12 && month === 1) || (day === 24 && month === 1) || (day === 10 && month === 2) || (day === 22 && month === 2) || (day === 6 && month === 3) || (day === 18 && month === 3) || (day === 30 && month === 3) || (day === 11 && month === 4) || (day === 23 && month === 4) || (day === 5 && month === 5) || (day === 17 && month === 5) || (day === 29 && month === 5) || (day === 10 && month === 6) || (day === 22 && month === 6) || (day === 4 && month === 7) || (day === 16 && month === 7) || (day === 28 && month === 7) || (day === 9 && month === 8) || (day === 21 && month === 8) || (day === 2 && month === 9) || (day === 14 && month === 9) || (day === 26 && month === 9) || (day === 8 && month === 10) || (day === 20 && month === 10) || (day === 1 && month === 11) || (day === 13 && month === 11) || (day === 25 && month === 11) || (day === 7 && month === 12) || (day === 19 && month === 12) || (day === 31 && month === 12)
    ) return arrSign[8];
    if( (day === 1 && month === 1) || (day === 13 && month === 1) || (day === 25 && month === 1) || (day === 11 && month === 2) || (day === 23 && month === 2) || (day === 7 && month === 3) || (day === 19 && month === 3) || (day === 31 && month === 3) || (day === 12 && month === 4) || (day === 24 && month === 4) || (day === 6 && month === 5) || (day === 18 && month === 5) || (day === 30 && month === 5) || (day === 11 && month === 6) || (day === 23 && month === 6) || (day === 5 && month === 7) || (day === 17 && month === 7) || (day === 29 && month === 7) || (day === 10 && month === 8) || (day === 22 && month === 8) || (day === 3 && month === 9) || (day === 15 && month === 9) || (day === 27 && month === 9) || (day === 9 && month === 10) || (day === 21 && month === 10) || (day === 2 && month === 11) || (day === 14 && month === 11) || (day === 26 && month === 11) || (day === 8 && month === 12) || (day === 20 && month === 12)
    ) return arrSign[9];
    if( (day === 2 && month === 1) || (day === 14 && month === 1) || (day === 26 && month === 1) || (day === 12 && month === 2) || (day === 24 && month === 2) || (day === 8 && month === 3) || (day === 20 && month === 3) || (day === 1 && month === 4) || (day === 13 && month === 4) || (day === 25 && month === 4) || (day === 7 && month === 5) || (day === 19 && month === 5) || (day === 31 && month === 5) || (day === 12 && month === 6) || (day === 24 && month === 6) || (day === 6 && month === 7) || (day === 18 && month === 7) || (day === 30 && month === 7) || (day === 11 && month === 8) || (day === 23 && month === 8) || (day === 4 && month === 9) || (day === 16 && month === 9) || (day === 28 && month === 9) || (day === 10 && month === 10) || (day === 22 && month === 10) || (day === 3 && month === 11) || (day === 15 && month === 11) || (day === 27 && month === 11) || (day === 9 && month === 12) || (day === 21 && month === 12)
    ) return arrSign[10];
    if( (day === 3 && month === 1) || (day === 15 && month === 1) || (day === 27 && month === 1) || (day === 13 && month === 2) || (day === 25 && month === 2) || (day === 9 && month === 3) || (day === 21 && month === 3) || (day === 2 && month === 4) || (day === 14 && month === 4) || (day === 26 && month === 4) || (day === 8 && month === 5) || (day === 20 && month === 5) || (day === 1 && month === 6) || (day === 13 && month === 6) || (day === 25 && month === 6) || (day === 7 && month === 7) || (day === 19 && month === 7) || (day === 31 && month === 7) || (day === 12 && month === 8) || (day === 24 && month === 8) || (day === 5 && month === 9) || (day === 17 && month === 9) || (day === 29 && month === 9) || (day === 11 && month === 10) || (day === 23 && month === 10) || (day === 4 && month === 11) || (day === 16 && month === 11) || (day === 28 && month === 11) || (day === 10 && month === 12) || (day === 22 && month === 12)
    ) return arrSign[11];

    return ''
}

const getDruid = (date:string): string => {
    const {day, month} = getDateSeparate(date);

    const arrSigns = [
        'apple_tree',
        'fir_tree',
        'elm',
        'cypress',
        'poplar',
        'cedar',
        'pine_tree',
        'willow',
        'linden',
        'hazel',
        'rowan',
        'maple',
        'walnut',
        'jasmine',
        'chestnut',
        'ash_tree',
        'hornbeam',
        'fig_tree',
        'oak',
        'birch',
        'olive',
        'beech',
    ]

    if ((day >= 22 && month === 12) || (day <= 1 && month === 1)
        || (day >= 25 && month === 6) || (day <= 4 && month === 7))
    return arrSigns[0];

    if ((day >= 2 && month === 1) || (day <= 1 && month === 1)
        || (day >= 5 && month === 7) || (day <= 14 && month === 7))
    return arrSigns[1];

    if ((day >= 12 && month === 1) || (day <= 24 && month === 1)
        || (day >= 15 && month === 7) || (day <= 25 && month === 7))
    return arrSigns[2];

    if ((day >= 25 && month === 1) || (day <= 3 && month === 2)
        || (day >= 26 && month === 7) || (day <= 4 && month === 8))
    return arrSigns[3];

    if ((day >= 4 && month === 2) || (day <= 8 && month === 2)
        || (day >= 5 && month === 8) || (day <= 13 && month === 8))
    return arrSigns[4];

    if ((day >= 9 && month === 2) || (day <= 18 && month === 2)
        || (day >= 14 && month === 8) || (day <= 23 && month === 8))
    return arrSigns[5];

    if ((day >= 19 && month === 2) || (day <= 29 && month === 2)
        || (day >= 24 && month === 8) || (day <= 2 && month === 9))
    return arrSigns[6];

    if ((day >= 1 && month === 3) || (day <= 10 && month === 3)
        || (day >= 3 && month === 9) || (day <= 12 && month === 9))
    return arrSigns[7];
    
    if ((day >= 11 && month === 3) || (day <= 20 && month === 3)
        || (day >= 13 && month === 9) || (day <= 22 && month === 9))
    return arrSigns[8];
    
    if ((day >= 22 && month === 3) || (day <= 31 && month === 3)
        || (day >= 24 && month === 9) || (day <= 3 && month === 10))
    return arrSigns[9];
    
    if ((day >= 1 && month === 4) || (day <= 10 && month === 4)
        || (day >= 4 && month === 10) || (day <= 13 && month === 10))
    return arrSigns[10];
    
    if ((day >= 11 && month === 4) || (day <= 20 && month === 4)
        || (day >= 14 && month === 10) || (day <= 23 && month === 10))
    return arrSigns[11];
    
    if ((day >= 21 && month === 4) || (day <= 30 && month === 4)
        || (day >= 24 && month === 10) || (day <= 2 && month === 11))
    return arrSigns[12];
    
    if ((day >= 1 && month === 5) || (day <= 14 && month === 5)
        || (day >= 3 && month === 11) || (day <= 11 && month === 11))
    return arrSigns[13];
    
    if ((day >= 15 && month === 5) || (day <= 24 && month === 5)
        || (day >= 12 && month === 11) || (day <= 21 && month === 11))
    return arrSigns[14];
    
    if ((day >= 25 && month === 5) || (day <= 3 && month === 6)
        || (day >= 22 && month === 11) || (day <= 1 && month === 12))
    return arrSigns[15];
    
    if ((day >= 4 && month === 6) || (day <= 13 && month === 6)
        || (day >= 2 && month === 12) || (day <= 11 && month === 12))
    return arrSigns[15];

    if ((day >= 14 && month === 6) || (day <= 23 && month === 6)
        || (day >= 12 && month === 12) || (day <= 20 && month === 12))
    return arrSigns[16];

    if ((day === 21 && month === 3)) return arrSigns[17];

    if ((day === 24 && month === 6)) return arrSigns[18];

    if ((day === 23 && month === 9)) return arrSigns[19];

    if ((day === 22 && month === 12)) return arrSigns[20];


    return ''
}

const getChinese = (date:string): string => {
    const {year} = getDateSeparate(date);
    const arrSigns = [
        'rat',
        'ox',
        'tiger',
        'rabbit',
        'dragon',
        'snake',
        'horse',
        'goat',
        'monkey',
        'rooster',
        'dog',
        'pig',
    ];
    return arrSigns[((year - 1900) % 12)];
}

const getChineseMaterial = (date:string): string => {
    const yearDigit = parseInt(date.substring(3,4));
    const arrSigns = [
        'metal',
        'water',
        'wood',
        'fire',
        'ground',
    ]

    switch(yearDigit){
        case 0:
        case 1: return arrSigns[0];
        case 2:
        case 3: return arrSigns[1];
        case 4:
        case 5: return arrSigns[2];
        case 6:
        case 7: return arrSigns[3];
        case 8:
        case 9: return arrSigns[4];
    }
    return ''
}

const getEgyptian = (date:string): string => {
    const {day, month} = getDateSeparate(date);
    const arrSigns = [
        'bastet',
        'selket',
        'apep',
        'path',
        'thot',
        'isis',
        'ra',
        'horus',
        'maat',
        'osiris',
        'hathor',
        'anubis',
    ];

    if ((day >= 16 && month === 1) || (day <= 15 && month === 2)) return arrSigns[0];
    if ((day >= 16 && month === 2) || (day <= 15 && month === 3)) return arrSigns[1];
    if ((day >= 16 && month === 3) || (day <= 15 && month === 4)) return arrSigns[2];
    if ((day >= 16 && month === 4) || (day <= 15 && month === 5)) return arrSigns[3];
    if ((day >= 16 && month === 5) || (day <= 15 && month === 6)) return arrSigns[4];
    if ((day >= 16 && month === 6) || (day <= 15 && month === 7)) return arrSigns[5];
    if ((day >= 16 && month === 7) || (day <= 15 && month === 8)) return arrSigns[6];
    if ((day >= 16 && month === 8) || (day <= 15 && month === 9)) return arrSigns[7];
    if ((day >= 16 && month === 9) || (day <= 15 && month === 10)) return arrSigns[8];
    if ((day >= 16 && month === 10) || (day <= 15 && month === 11)) return arrSigns[9];
    if ((day >= 16 && month === 11) || (day <= 15 && month === 12)) return arrSigns[10];
    if ((day >= 16 && month === 12) || (day <= 15 && month === 1)) return arrSigns[11];
}

const getGypsy: Array<string> = [
    'cup',
    'chapel',
    'dirk',
    'crown',
    'chandeliers',
    'wheel',
    'star',
    'bell',
    'coin',
    'dagger',
    'axe',
    'horseshoe',
]

const getMaya = (date:string):string => {
    const {day, month} = getDateSeparate(date);
    const arrSigns = [
        'alligator',
        'monkey',
        'hawk',
        'jaguar',
        'fox',
        'snake',
        'rabbit',
        'turtle',
        'bat',
        'scorpion',
        'deer',
        'owl',
        'peacock',
    ]

    if ((day >= 13 && month === 12) || (day <= 9 && month === 1)) return arrSigns[0];
    if ((day >= 10 && month === 1) || (day <= 6 && month === 2)) return arrSigns[1];
    if ((day >= 7 && month === 2) || (day <= 6 && month === 3)) return arrSigns[2];
    if ((day >= 7 && month === 3) || (day <= 3 && month === 4)) return arrSigns[3];
    if ((day >= 4 && month === 4) || (day <= 1 && month === 5)) return arrSigns[4];
    if ((day >= 2 && month === 5) || (day <= 29 && month === 5)) return arrSigns[5];
    if ((day >= 30 && month === 5) || (day <= 26 && month === 6)) return arrSigns[6];
    if ((day >= 27 && month === 6) || (day <= 25 && month === 7)) return arrSigns[7];
    if ((day >= 26 && month === 7) || (day <= 22 && month === 8)) return arrSigns[8];
    if ((day >= 23 && month === 8) || (day <= 19 && month === 9)) return arrSigns[9];
    if ((day >= 20 && month === 9) || (day <= 17 && month === 10)) return arrSigns[10];
    if ((day >= 18 && month === 10) || (day <= 14 && month === 11)) return arrSigns[11];
    if ((day >= 15 && month === 11) || (day <= 12 && month === 12)) return arrSigns[12];
    return ''
}

const getZodiac: Array<string> = [
    'aquarius',
    'pisces',
    'aries',
    'taurus',
    'gemini',
    'cancer',
    'leo',
    'virgo',
    'libra',
    'scorpio',
    'sagittarius',
    'capricorn',
]


export const getSigns = (date: string) : Array<Sign> => {
    const resultArray: Array<Sign> = [];
    const zodiacNumber = getZodiacNumber(date);    

    resultArray.push({horoscope:'zodiac', sign: getZodiac[zodiacNumber]});
    resultArray.push({horoscope:'maya', sign: getMaya(date)});
    resultArray.push({horoscope:'gypsy', sign: getGypsy[zodiacNumber]});
    resultArray.push({horoscope:'egyptian', sign: getEgyptian(date)});
    resultArray.push({horoscope:'chinese', sign: getChinese(date), sub_element: getChineseMaterial(date) });
    resultArray.push({horoscope:'celtic', sign: getCeltic(date)});
    resultArray.push({horoscope:'druid', sign: getDruid(date)});
    resultArray.push({horoscope:'aztec', sign: getAztec(date)});
    resultArray.push({horoscope:'alchemist', sign: getAlchemist(date)});
    resultArray.push({horoscope:'arabic', sign: getArabic[zodiacNumber]});

    return resultArray;
}