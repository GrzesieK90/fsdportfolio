import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import 'animate.css'
import './Technology.css'
import Skillbars from "../SkillBars/SkillBars";
import { useTranslation } from "react-i18next";

import HT from './Media/html5.png'
import CS from './Media/css3.png'
import JS from './Media/js.png'
import RLogo from './Media/react.png'
import BS from './Media/bootstrap.png'
import Git from './Media/git.png'
import GH from './Media/github.png'
import NPM from './Media/npm.png'
import Re from './Media/redux.png'
import No from './Media/nodejs.png'
import Pg from './Media/postgres.png'
import Sas from './Media/sass.png'
import C from './Media/C.png'
import Cplus from './Media/C++.png'
import CSharp from './Media/CSharp.png'
import Visual from './Media/Visual.png'

const AMS = AnimationOnScroll

const Technology = () => {
    const { t } = useTranslation();
    return (
        <div className="page page4">
            <AMS animateIn="animate__backInLeft">
                <div className="boxU box4">
                    <div className="icons">
                        <AMS className="h1t" animateIn="animate__rollIn" delay={250}>
                            <h1 className="h1t">{t("tech1")}</h1>
                        </AMS>
                        <AMS className="AMS" animateIn="animate__rollIn" delay={500}>
                            <img className="logo" src={HT} alt="HTML Logo" />
                        </AMS>
                        <AMS className="AMS" animateIn="animate__rollIn" delay={750}>
                            <img className="logo" src={CS} alt="HTML Logo" />
                        </AMS>
                        <AMS className="AMS" animateIn="animate__rollIn" delay={1000}>
                            <img className="logo" src={JS} alt="JavaScript Logo" />
                        </AMS>
                        <AMS className="AMS" animateIn="animate__rollIn" delay={1250}>
                            <img className="logo" src={BS} alt="React Logo" />
                        </AMS>
                        <AMS className="AMS" animateIn="animate__rollIn" delay={500}>
                            <img className="logo" src={Git} alt="React Logo" />
                        </AMS>
                        <AMS className="AMS" animateIn="animate__rollIn" delay={750}>
                            <img className="logo" src={GH} alt="React Logo" />
                        </AMS>
                        <AMS className="AMS" animateIn="animate__rollIn" delay={1000}>
                            <img className="logo" src={RLogo} alt="React Logo" />
                        </AMS>
                        <AMS className="AMS" animateIn="animate__rollIn" delay={1250}>
                            <img className="logo" src={NPM} alt="React Logo" />
                        </AMS>
                        <AMS className="AMS" animateIn="animate__rollIn" delay={500}>
                            <img className="logo" src={Re} alt="React Logo" />
                        </AMS>
                        <AMS className="AMS" animateIn="animate__rollIn" delay={750}>
                            <img className="logo" src={No} alt="React Logo" />
                        </AMS>
                        <AMS className="AMS" animateIn="animate__rollIn" delay={1000}>
                            <img className="logo" src={Pg} alt="React Logo" />
                        </AMS>
                        <AMS className="AMS" animateIn="animate__rollIn" delay={1250}>
                            <img className="logo" src={Sas} alt="React Logo" />
                        </AMS>
                        <AMS className="AMS" animateIn="animate__rollIn" delay={500}>
                            <img className="logo" src={C} alt="React Logo" />
                        </AMS>
                        <AMS className="AMS" animateIn="animate__rollIn" delay={750}>
                            <img className="logo" src={Cplus} alt="React Logo" />
                        </AMS>
                        <AMS className="AMS" animateIn="animate__rollIn" delay={1000}>
                            <img className="logo" src={CSharp} alt="React Logo" />
                        </AMS>
                        <AMS className="AMS" animateIn="animate__rollIn" delay={1250}>
                            <img className="logo" src={Visual} alt="React Logo" />
                        </AMS>
                    </div>
                    <div className="skills">
                        <AMS animateIn="animate__zoomInDown" delay={1000}>
                            <h1 className="t1">{t("tech2")}</h1>
                                <Skillbars />
                        </AMS>
                    </div>
                </div>
            </AMS>
        </div>
    )
}

export default Technology