import React from "react";
import './Welcome.css';
import 'animate.css';
import Translate from '../Translate/Translate';
import { useTranslation } from "react-i18next";


const Welcome = () => {
    const { t } = useTranslation();
    return (
        <div className="page page1">
            <div className="boxU box1 animate__backInRight">
            <div className="lang animate__animated animate__zoomInDown animate__delay-1s">
                    <Translate />
                </div>
                <div className="devlogo animate__animated animate__backInUp animate__delay-1s"></div>
                    <h1 className="ha h1a animate__animated animate__lightSpeedInRight animate__delay-2s">{t("tit1")}</h1>
                    <h2 className="ha h2a animate__animated animate__lightSpeedInLeft animate__delay-3s">{t("tit2")}</h2>
                    <h2 className="ha h2b animate__animated animate__backInDown animate__delay-4s">{t("tit3")}</h2>
                    <a href={t("linked1")}><button className="btnHow btn animate__animated animate__lightSpeedInLeft animate__delay-4s">{t("button1")}</button></a>
                    <a href={t("linked2")}><button className="btnHow btn animate__animated animate__lightSpeedInRight animate__delay-4s">{t("button2")}</button></a>
                    <h2 className="ha h2b animate__animated animate__bounceIn animate__delay-5s">{t("scrl")}</h2>
            </div>
        </div>
    )
}

export default Welcome