import { AppContext } from "@context/AppContext";
import { getSignDetail } from "functions/getSignDetail";
import { useContext } from "react";

type Props = {
    signElement: Sign,
    index: number,
    key: string
};

export function SignCard({ signElement, index }: Props) {
    const {signName, horoscName} = getSignDetail({signElement});
    const {setActiveSignIndex, setShowModal} = useContext(AppContext);

    const handlerClick = ():void => {
        setActiveSignIndex(index);
        setShowModal(true);
    }

    return (
        <div className="bg-white rounded-lg py-5 px-4 flex flex-col
        items-center cursor-pointer text-center"
        onClick={handlerClick}>
            <h3 className="leading-6">{signName}</h3>
            <p className="text-base">{horoscName}</p>
        </div>
    )
}
