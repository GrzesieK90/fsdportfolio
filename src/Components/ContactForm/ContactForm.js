import React, {useState} from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import 'animate.css';
import './ContactForm.css'
import map from './Media/map.png'
import { useTranslation } from "react-i18next";

const AMS = AnimationOnScroll
const FORM_ENDPOINT = "https://public.herotofu.com/v1/5b076a00-90e0-11ed-a003-6f0b76086b1c";

const ContactForm = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="page">
        <AMS animateIn="animate__zoomIn">
          <div className="boxU box5">
          <div className="texts texts1">{t("cfb1")}</div>
          <div className="texts">{t("cfb2")}</div>
          </div>
        </AMS>
      </div>
    );
  }
  return(
    <div className="page page5">
      <AMS animateIn="animate__backInRight">
        <div className="boxU box5">
        <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      >
      <AMS animateIn="animate__jello" delay={1000}>
        <p className="hire">{t("cf1")}</p>
      </AMS>
      <AMS animateIn="animate__lightSpeedInRight" delay={1000}>
        <div className="group">
          <h1 className="h1c">{t("cf3")}</h1>
          <div>
            <input className="holder data name" type="text" placeholder={t("int1")} name="name" required />
          </div>
          <div>
            <input className="holder data email" type="email" placeholder="Email" name="email" required />
          </div>
          <div>
            <textarea className="holder area" placeholder={t("int2")} name="message" required />
          </div>
          <div>
            <button className="holder button btnHow" type="submit">{t("cfb3")}</button>
          </div>
        </div>
      </AMS>
      <AMS animateIn="animate__lightSpeedInLeft" delay={1000}>
        <h1 className="h1c">{t("cf2")}<hr/>{t("cf4")}</h1>
      <a href="https://www.google.com/maps/place/C.+Ram%C3%B3n+y+Cajal,+32,+03390+Benej%C3%BAzar,+Alicante/@38.0792768,-0.8395562,17z/data=!3m1!4b1!4m6!3m5!1s0xd63a3f31afeb0e1:0x3ac2ca28756ec958!8m2!3d38.0792726!4d-0.8369813!16s%2Fg%2F11c2cyjstc?entry=ttu"><img className="map btnHow" alt="map" src={map}></img></a>
      </AMS>
      </form>
        </div>
      </AMS>
    </div>
  )
}

export default ContactForm