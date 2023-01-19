import { useTranslation } from "react-i18next";
import './Translate.css'

const lngs = [
  { code: "en", native: "ENG" },
  { code: "es", native: "ESP" },
  { code: "pl", native: "PL" },
];

export default function Translate() {
  const { i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div>
        {lngs.map((lng, i) => {
        const { code, native } = lng;
        return <button className="lngBtn" onClick={() => handleTrans(code)}>{native}</button>;
      })}

    </div>
  );
}