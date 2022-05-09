import { Button } from '@components/Button';
import { ErrorText } from '@components/ErrorText';
import { SignCard } from '@components/SignCard';
import { SignModal } from '@components/SignModal';
import { Title } from '@components/Title';
import { AppContext } from '@context/AppContext';
import { getSigns } from 'functions/getSigns';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react';

const ResultPage = () => {
    const {
        lang, saveFav,
        signsList, setSignsList,
    } = useContext(AppContext);

    // const [signsList, setSignsList] = useState<Array<Sign>>([emptySign]);
    const router = useRouter();
    const [dateText, setDateText] = useState<string>('');
    const [year, setYear] = useState<number>(0);

    let date = router.query.date as string || '';

    useEffect(() => {
        if(date && date.length === 8) {
            setSignsList(getSigns(date))
            setYear(parseInt(date.substring(0,4)))
        };
        date && setDateText(`${date.substring(6,8)} / ${date.substring(4,6)} / ${date.substring(0,4)}`);
    }, [date]);

    const addFavorite = () =>{
        // Falta poner la lógica para capturar el nombre del Fav
        const name = 'FALTA DEFINIR';
        saveFav({name, date});
    }

    return(
        <>
            {date.length < 8
                ? <ErrorText text={lang.dateControl} />
                : (year < 1900) ? <ErrorText text={lang.dateMinimal} />
                : <>
                    <Head>
                        <title>BirthStars: {dateText}</title>
                        <meta property="og:title" content="BirthStars" key="title" />
                    </Head>
                    <SignModal />
                    <div className='flex justify-center items-center mb-5'>
                        <Title size="60px" type='h2'><>{dateText}</></Title>
                        {/* <span onClick={addFavorite}>
                            <Button>
                                {lang.addToFavorites}
                            </Button>
                        </span> */}
                    </div>
                    <div className='overflow-auto h-[70vh]'>
                        <div className='grid gap-5
                            grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                            {signsList.length > 1 && signsList.map((signElement, i) =>
                                <SignCard
                                    key={JSON.stringify(signElement)}
                                    signElement={signElement}
                                    index={i}
                                />
                            )}
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default ResultPage;