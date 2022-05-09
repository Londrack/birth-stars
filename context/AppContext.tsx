import { emptySign } from 'functions/getSigns';
import { createContext, useContext, useEffect, useState } from 'react'
import { dataFile } from '../data';
import { signsTexts } from '../signsTexts';

export type GlobalContext = {
    favList: Array<FavStructure>,
    saveFav:(fav: FavStructure) => void,
    language: string,
    setLanguage:(l: string) => void,
    lang: any,
    signLang: any,
    activeSignIndex: number,
    setActiveSignIndex:(index: number) => void,
    signsList: Array<Sign>,
    setSignsList:(sign: Array<Sign>) => void,
    showModal:boolean,
    setShowModal:(v: boolean) => void,
}

export const AppContext = createContext<GlobalContext>(undefined);

export function AppProvider({ children }) {
  const data = dataFile;
  const signData = signsTexts;

  const [language, setLanguage] = useState<string>('eng');
  const [lang, setLang] = useState<Object>({});
  const [signLang, setSignLang] = useState<Object>({});
  const [favList, setFavList] = useState<FavStructure[]>([]);

  const [activeSignIndex, setActiveSignIndex] = useState<number>(0);
  const [signsList, setSignsList] = useState<Array<Sign>>([emptySign]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const langData = (language === 'eng') ? data.eng : data.esp;
    setLang(langData);
    const signLangData = (language === 'eng') ? signData.eng : signData.esp;
    setSignLang(signLangData);
  }, [language, data])

  useEffect(()=> {
    if (typeof window === "undefined") {
      setFavList([]);
    }
    try {
      const item = window.localStorage.getItem('favList');
      setFavList(item ? JSON.parse(item) : []);
    } catch (error) {
      console.log(error);
      setFavList([]);
    }
  }, [])

  const saveFav = (fav: FavStructure) => {
    const newFav: FavStructure = { name: fav.name, date: fav.date };
    const newFavList = [...favList, newFav]
    setFavList(newFavList);
    window.localStorage.setItem('favList', JSON.stringify(newFavList));
  }

  return (
    <AppContext.Provider
      value={{
        favList, saveFav,
        language, setLanguage, lang, signLang,
        activeSignIndex, setActiveSignIndex,
        signsList, setSignsList,
        showModal, setShowModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}

