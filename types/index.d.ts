export {};

declare global {
    type Sign = {
        horoscope: string,
        sign: string,
        sub_element?: string,
    }

    type FavStructure = {
        name: string,
        date: string
    }
}