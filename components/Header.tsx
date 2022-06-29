import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Button } from './Button';
import { Title } from './Title';

export function Header() {
    const router = useRouter();
    const {favList, language, setLanguage, lang } = useContext(AppContext);
    const favListSize = favList.length;

    const onSetLang = () => {
        const newLang = (language === 'eng') ? 'esp' : 'eng';
        setLanguage(newLang);
    }

    const goToFavs = () => {
        router.push(`/favs`);
    }

    return (
        <header className='md:flex md:justify-between'>
            <Title><Link href="/">BirthStars</Link></Title>
            <nav className='flex justify-center md:justify-end items-center'>
                {!!favListSize &&
                    <span onClick={goToFavs}>
                        <Button>{lang.favDates}</Button>
                    </span>
                }
                <span className='absolute top-2 right-1 sm:relative sm:top-auto sm:right-auto' onClick={onSetLang}>
                    <Button>
                        {lang.langText}
                    </Button>
                </span>
            </nav>
        </header>
    )
}
