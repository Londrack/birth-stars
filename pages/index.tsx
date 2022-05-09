import { useRouter } from 'next/router'
import { AppContext } from "@context/AppContext";
import { useContext } from "react";
import Head from 'next/head'

export default function Home() {
    const {lang} = useContext(AppContext);
    const router = useRouter();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dateValue = e.target[0].value;
        const date = dateValue.split('-').join('');
        router.push(`/result/${date}`);
    }

    return (
        <>
            <Head>
                <title>My page title</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <div className="flex items-center justify-center h-3/5">
                <div>
                    <div className="text-center md:text-3xl text-2xl text-amber-100">
                        <p>{lang.intro1}</p>
                        <p>{lang.intro2}</p>
                        <p className="py-8">{lang.intro3}</p>
                    </div>
                    <form className="text-center" onSubmit={handleSubmit}>
                        <input
                            className="text-center p-4 rounded-lg text-2xl"
                            type="date"
                            name="birthday"
                            id="birthday"
                            required
                        />
                        <br/>
                        <button
                            className="mt-8 p-4 bg-amber-400 rounded-xl uppercase hover:bg-amber-600"
                            type="submit"
                        >{lang.formularyLabels?.send}</button>
                    </form>
                </div>
            </div>
        </>
    )
}
