import cls from "./style.module.css"
import { useTranslation } from "react-i18next";


const Service = () => {
    
    const { t } = useTranslation();


    return(
    <div>
    <div className={cls.serviceParent}id="service" >
    <div className={cls.container} >
        <div className={cls.service}>
            <p className={cls.serviceTitle}>{t("xizmatlar")}</p>
            <p className={cls.serviceText}>{t("serviceText")}</p>
            <div className={cls.serviceCardParent}>
                <div className={cls.serviceCard}>
                    <img
                        src="https://www.dezinfeksiyatashkent.uz/assets/dizinfeksiya-52660f2d.png"
                        alt=""
                        className={cls.serviceCardImg}
                    />
                    <div className={cls.serviceCardMain}>
                        <p className={cls.serviceCardMainTitle}>{t("serviceCardMainTitle1")}</p>
                        <p className={cls.serviceCardMainText}>
                            {t("serviceCardMainText1")}
                            </p>
                    </div>
                </div>
                <div className={cls.serviceCard}>
                    <img
                        src="https://www.dezinfeksiyatashkent.uz/assets/dezinyeksiya-bea8e70f.png"
                        alt=""
                        className={cls.serviceCardImg}
                    />
                    <div className={cls.serviceCardMain}>
                        <p className={cls.serviceCardMainTitle}>{t("serviceCardMainTitle2")}</p>
                        <p className={cls.serviceCardMainText}>
                            {t("serviceCardMainText2")}
                            </p>
                    </div>
                </div>
                <div className={cls.serviceCard}>
                    <img
                        src="https://www.dezinfeksiyatashkent.uz/assets/derazatsiya-83b522bf.png"
                        alt=""
                        className={cls.serviceCardImg}
                    />
                    <div className={cls.serviceCardMain}>
                        <p className={cls.serviceCardMainTitle}> {t("serviceCardMainTitle3")}</p>
                        <p className={cls.serviceCardMainText}>
                            {t( "serviceCardMainText3")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className={cls.serviceTypeParent}>
    <div className={cls.container}>
        <p className={cls.serviceTitle}>{t("xizmatturi")}</p>
        <div className={cls.serviceTypeCardParent}>
            <div className={cls.serviceTypeCard}>
                <p className={cls.serviceTypeCardTitle}>{t("klapalar")}</p>
                <p className={cls.serviceTypeCardText}>
                    {t("klapalar1")}
                    </p>
                    <button className={cls.serviceTypeCardBtn}><a href="#contact">{t("bog'lanish")}</a></button>
                <img
                    src="https://www.dezinfeksiyatashkent.uz/assets/klopi-6c1f42ef.jpg"
                    alt=""
                    className={cls.serviceTypeCardimg}
                />
            </div>
            <div className={cls.serviceTypeCard}>
                <p className={cls.serviceTypeCardTitle}>{t("tarakanlar")}</p>
                <p className={cls.serviceTypeCardText}>{t("tarakanlar1")}</p>
                <button className={cls.serviceTypeCardBtn}><a href="#contact">{t("bog'lanish")}</a></button>
                <img
                    src="https://www.dezinfeksiyatashkent.uz/assets/tarakan-d8b430bd.jpg"
                    alt=""
                    className={cls.serviceTypeCardimg}
                />
            </div>

            <div className={cls.serviceTypeCard}>
                <p className={cls.serviceTypeCardTitle}>chayon</p>
                <p className={cls.serviceTypeCardText}>
                    {t("chayon1")}
                </p>
                <button className={cls.serviceTypeCardBtn}><a href="#contact">{t("bog'lanish")}</a></button>
                <img
                    src="https://www.dezinfeksiyatashkent.uz/assets/skarpion-6902a7a9.jpg"
                    alt=""
                    className={cls.serviceTypeCardimg}
                />
            </div>

            <div className={cls.serviceTypeCard}>
                <p className={cls.serviceTypeCardTitle}>{t("kemiruvchilar")}</p>
                <p className={cls.serviceTypeCardText}>
                    {t("kemiruvchilar1")}
                    </p>
                    <button className={cls.serviceTypeCardBtn}><a href="#contact">{t("bog'lanish")}</a></button>
                <img
                    src="https://www.dezinfeksiyatashkent.uz/assets/grizuni-de8c9315.jpg"
                    alt=""
                    className={cls.serviceTypeCardimg}
                />
            </div>

            <div className={cls.serviceTypeCard}>
                <p className={cls.serviceTypeCardTitle}>{t("burgalar")}</p>
                <p className={cls.serviceTypeCardText}>
                    {t("burgalar1")}
                    </p>
                    <button className={cls.serviceTypeCardBtn}><a href="#contact">{t("bog'lanish")}</a></button>
                <img
                    src="https://www.dezinfeksiyatashkent.uz/assets/bloxi-7e06d020.jpg"
                    alt=""
                    className={cls.serviceTypeCardimg}
                />
            </div>
        </div>
    </div>
</div>
 
    </div>
 )
}
export default Service