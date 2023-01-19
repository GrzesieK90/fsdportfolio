import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import 'animate.css';
import './MyProjects.css';
import { useTranslation } from "react-i18next";

import pokedex from './Media/pokedexApp.png';
import calc from './Media/calc.png';
import smart from './Media/smartbrain.png';
import bgg from './Media/bgGenerator.png';
import kitty from './Media/KittyF.png';
import aoc from './Media/aoc.png';
import vfp from './Media/vfp.png';
import travel from './Media/trlFin.png';

const AMS = AnimationOnScroll

const MyProjects = () => {
  const { t } = useTranslation();
  return(
    <div className="page page3">
      <AMS animateIn="animate__backInRight">
        <div className="boxU box3">
          <h1 className="head">{t("projects")}</h1>
          <AMS animateIn="animate__backInRight">
            <div className="pro">
              <AMS className="appl btnHow" animateIn="animate__bounceInLeft" delay={1000}>
                <a href="https://grzesiek90.github.io/VeryFirstProject/"><img className="imgA" alt="" src={vfp}></img></a>
                <h4>{t("app1")}</h4>
              </AMS>
              <AMS className="appl btnHow" animateIn="animate__bounceInLeft" delay={1500}>
                <a href="https://grzesiek90.github.io/Simple-Calculator/"><img className="imgA" alt="" src={calc}></img></a>
                <h4>{t("app2")}</h4>
              </AMS>
              <AMS className="appl btnHow" animateIn="animate__bounceInRight" delay={1500}>
                <a href="https://grzesiek90.github.io/Animation-of-circles/"><img className="imgA" alt="" src={aoc}></img></a>
                <h4>{t("app3")}</h4>
              </AMS>
              <AMS className="appl btnHow" animateIn="animate__bounceInRight" delay={1000}>
                <a href="https://grzesiek90.github.io/Background-Generator/"><img className="imgA" alt="" src={bgg}></img></a>
                <h4>{t("app4")}</h4>
              </AMS>
              <AMS className="appl btnHow" animateIn="animate__bounceInLeft" delay={1000}>
                <a href="https://grzesiek90.github.io/kittenfriends/"><img className="imgA" alt="" src={kitty}></img></a>
                <h4>{t("app5")}</h4>
              </AMS>
              <AMS className="appl btnHow" animateIn="animate__bounceInLeft" delay={1500}>
                <a href="https://grzesiek90.github.io/pokedex//"><img className="imgA" alt="" src={pokedex}></img></a>
                <h4>{t("app6")}</h4>
              </AMS>
              <AMS className="appl btnHow" animateIn="animate__bounceInRight" delay={1500}>
                <a href="https://grzesiek90.github.io/smartbrainfacerecognition/"><img className="imgA" alt="" src={smart}></img></a>
                <h4>{t("app7")}</h4>
              </AMS>
              <AMS className="appl btnHow" animateIn="animate__bounceInRight" delay={1000}>
                <a href="https://grzesiek90.github.io/travel-finder/"><img className="imgA" alt="" src={travel}></img></a>
                <h4>{t("app8")}</h4>
              </AMS>
            </div>
          </AMS>
        </div>
      </AMS>
    </div>
  )
}

export default MyProjects