import { AppContext } from "@context/AppContext";
import { useContext } from "react";

type Props = { signElement: Sign };

type ReturnObj = {
    signName: string,
    horoscName: string,
    signDetail: Array<string>
}

export const getSignDetail = ({signElement}: Props): ReturnObj => {
    const {signLang, language} = useContext(AppContext);

    // console.log(signElement)

    const horoscObj = signLang[signElement.horoscope];
    const horoscName = horoscObj?.name
        ? (language === 'esp')
            ? `Horóscopo ${horoscObj?.name}`
            : `${horoscObj?.name} horoscope`
        : "loading...";

    const signObj = horoscObj ? horoscObj[signElement.sign] : [];
    let signName =  signObj ? signObj?.name : "loading...";

    const subSign = (horoscObj && horoscObj[signElement.sub_element])
        ? (language === 'esp')
            ? `${signName} de ${horoscObj[signElement.sub_element]?.name}`
            : `${horoscObj[signElement.sub_element]?.name} ${signName}`
        : '';

    signName = !!subSign ? subSign : signName;

    const signDetail = signObj ? signObj?.description : [];
    !!subSign && signDetail.push(horoscObj[signElement.sub_element]?.description);

    return {signName, horoscName, signDetail}
}