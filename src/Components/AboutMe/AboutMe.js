import React from "react";
import './AboutMe.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import photo from './Media/photo.jpg'
import { useTranslation } from "react-i18next";


const AMS = AnimationOnScroll

const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <div className="page page2">
            <AMS animateIn="animate__backInLeft">
                <div className="boxU box2">
                    <AMS animateIn="animate__rollIn" delay={500} offset={0}>
                        <img id="photo" src={photo} alt="me"/>
                        <AMS animateIn="animate__jackInTheBox" delay={500} offset={0}>
                            <h1>{t("about")}</h1>
                                <h3>
                                    <p className="atMe">{t("a1")}</p>
                                    <p className="atMe">{t("a2")}</p>
                                </h3>
                            <hr/>
                        </AMS>
                        <AMS animateIn="animate__jackInTheBox" delay={500} offset={0}>
                            <h1>{t("programming")}</h1>
                                <h3>
                                    <p>{t("a3")}</p>
                                    <p>{t("a4")}</p>
                                </h3>
                                <hr/>
                            <AMS animateIn="animate__jackInTheBox" delay={500} offset={0}>
                                <h1>{t("hobby")}</h1>
                                <h3>
                                    <p>{t("a5")}</p>
                                </h3>
                            </AMS>
                        </AMS>
                    </AMS>
                </div>
            </AMS>
        </div>
    )
}

export default AboutMe