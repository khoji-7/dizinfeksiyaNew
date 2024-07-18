import React from "react";
import cls from "./style.module.css";
import {useEffect} from "react";
import AOS from "aos";
import { useTranslation } from "react-i18next";


export default function Header() {
    AOS.refresh();

    
    const { t } = useTranslation();

    return (
        <div className={cls.headerParent}>
            <div className={cls.container}>
                <div className={cls.header} id="header">
                    <div className={cls.headerCaption}>
                        <h1
                            className={cls.headerCaptionTitle}
                            data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="100
     "
     data-aos-duration="1000"
                            // ...
                        >
                            {t("Dizenfeksiya")}
                        </h1>
                        <p className={cls.headerCaptionText}>
                            {t("headerCaptionText")}
                             </p>
                        <img src="headerLogo.svg" alt="" className={cls.headerImgPos} />
                        <button className="navbarBtnn"><a href="#contact">{t("bog'lanish")}</a></button>
                    </div>
                    <img
                        src="https://www.dezinfeksiyatashkent.uz/assets/hero-9df3d259.jpg"
                        alt=""
                        className={cls.headerImg}
                    />
                </div>
                <div className={cls.aboutParent} id="about">
                    <p className={cls.aboutTitle}>{t("biz")}</p>
                    <div className={cls.aboutCardParent}>
                        <div className={cls.aboutCard}>
                            <img src="mask.svg" alt="" className={cls.aboutCardImg} />
                            <p className={cls.aboutCardTitle}>
                                {t("aboutCardTitle1")}
                            </p>
                            <p className={cls.aboutCardText}>
                               {t("aboutCardText1")}
                               </p>
                        </div>
                        <div className={cls.aboutCard}>
                            <img src="about.svg" alt="" className="aboutCardImg" />
                            <p className={cls.aboutCardTitle}>
                            {t("aboutCardTitle2")}

                            </p>
                            <p className={cls.aboutCardText}>
                            {t("aboutCardText2")}
                            </p>
                        </div>
                        <div className="aboutCard">
                            <img src="about1.svg" alt="" className="aboutCardImg" />
                            <p className={cls.aboutCardTitle}>
                                {t("aboutCardTitle3")}
                            </p>
                            <p className={cls.aboutCardText}>
                            {t("aboutCardText3")}
                             </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
