import cls from "./style.module.css"
import { useTranslation } from "react-i18next";



const Banner = () =>{
    
    const { t ,i18n } = useTranslation();
    return(
        <div className={cls.bannerParent}>
        <div className={cls.container}>
            <div className={cls.banner}>
                <p className={cls.bannerTitle}>{t("bannerTitle")}</p>
                <p className={cls.bannerText}>
                    {t("bannerText")}
                </p>
                <button className="navbarBtnn"><a href="#contact" className="BtnLink">{t("bog'lanish")}</a></button>
            </div>
        </div>
    </div> 
    )
}

export default Banner