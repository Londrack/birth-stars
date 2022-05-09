import { AppContext } from "@context/AppContext";
import { useContext } from "react";

export function Footer() {
    const {lang } = useContext(AppContext);
    return (
        <>
            <footer className="text-amber-100 absolute bottom-0 flex
            w-full justify-center items-center text-center text-md
            invisible sm:visible">
                <p>{lang.footer1} <a className="text-amber-400" href="https://github.com/Londrack" target="_blank">@Londrack</a></p>
                {/* <p>{lang.footer2} <a className="text-amber-400" href="https://www.freepik.es/" target="_blank">@Freepik.</a></p> */}
            </footer>
        </>
    )
}
