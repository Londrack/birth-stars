import { AppContext } from "@context/AppContext";
import { getSignDetail } from "functions/getSignDetail";
import { useContext, useEffect } from "react";

export function SignModal() {
    const {signsList,
        activeSignIndex, setActiveSignIndex,
        setShowModal, showModal}
        = useContext(AppContext);
    const signElement = signsList[activeSignIndex];
    const {signName, horoscName, signDetail} = getSignDetail({signElement});
    const maxListIndex = signsList.length - 1;

    const onCloseModal = ():void => {
        document.getElementById('showModalBox').style.opacity = '0';
        setTimeout(()=>setShowModal(false), 300);
    }

    const onNavigateNext = ():void => {
        console.log(activeSignIndex);
        
        activeSignIndex !== maxListIndex && setActiveSignIndex(activeSignIndex+1);
        console.log(activeSignIndex);
    }

    const onNavigatePrev = ():void => {
        console.log(activeSignIndex);
        activeSignIndex !== 0 && setActiveSignIndex(activeSignIndex-1);
        console.log(activeSignIndex);
    }

    useEffect(() => {
        const keyDownHandler = (event):void => {
            if(event.key === 'Escape'){
                onCloseModal()
            }
        }
        document.addEventListener("keydown", keyDownHandler);
        // clean up
        return () => {
          document.removeEventListener("keydown", keyDownHandler);
        };
      }, []);

    return (
        showModal ?
            <div id="showModalBox" className='fixed inset-0 z-10 w-screen h-screen
            flex justify-center items-center transition-all duration-300'>

                <div className="bg-white w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 rounded-2xl py-5 px-7 relative z-10
                animate-showmodalbox">
                    <span onClick={onCloseModal}
                        className="cursor-pointer absolute top-4 right-5 font-bold
                         text-amber-600">X</span>

                    <h2 className="font-amatic text-5xl">{signName}</h2>
                    <small>{horoscName}</small>
                    <div className="mt-5 overflow-auto h-4/5 pr-1">
                        {signDetail.map((text, i)=>
                            <p className="pb-5" key={`${i}-desc-${horoscName}`}>{text}</p>
                        )}
                    </div>
                    <nav className="flex justify-between text-5xl text-amber-600">
                        <span onClick={onNavigatePrev}
                        className={` ${activeSignIndex === 0
                        ? 'opacity-50 cursor-default' : 'cursor-pointer'}`}> &lt; </span>

                        <span onClick={onNavigateNext}
                        className={` ${activeSignIndex === maxListIndex
                        ? 'opacity-50 cursor-default' : 'cursor-pointer'}`}> &gt; </span>
                    </nav>
                </div>

                <div onClick={onCloseModal}
                    className={`bg-black/60 fixed w-screen h-screen inset-0 cursor-pointer ease-in-out
                    animate-fadein`}></div>
            </div>
        : <></>
    )
}
