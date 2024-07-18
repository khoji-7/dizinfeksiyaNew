import cls from "./style.module.css"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArrowOutwardSharpIcon from '@mui/icons-material/ArrowOutwardSharp';
import FmdGoodSharpIcon from '@mui/icons-material/FmdGoodSharp';

export default function Footer (){
    return(
        <div className={cls.container}>
            <img src="https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png" alt="logo" className={cls.footerlogo} />
            <div className={cls.footer}>
            <div className={cls.footerText}>
                <FmdGoodSharpIcon/>
                <p className={cls.footerTextTitle}>
                    O'zbekiston toshkent shahri
                </p>
                <ArrowOutwardSharpIcon/>
            </div>
            <div className={cls.footerText}>
                <LocalPhoneIcon/>
                <p className={cls.footerTextTitle}>
                    +998 94 899 99 49
                </p>
                <ArrowOutwardSharpIcon/>
            </div>
            </div>
        </div>
    )
}