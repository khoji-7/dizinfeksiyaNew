import Accordion from 'react-bootstrap/Accordion'
import cls from './style.module.css'
import { useTranslation } from "react-i18next";

function Faq() {

    const { t } = useTranslation();

    return (
        <div className={cls.container} id='faq'>
            <p className={cls.faqTitle} >Faq</p>

            <div className={cls.acor}>
                <div className='accordion' id='accordionExample'>
                    <div className='accordion-item'>
                        <h2 class='accordion-header'>
                            <button
                                className='accordion-button'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseOne'
                                aria-expanded='true'
                                aria-controls='collapseOne'
                            >
                                {t("acordion1")}
                            </button>
                        </h2>
                        <div
                            id='collapseOne'
                            className='accordion-collapse collapse show'
                            data-bs-parent='#accordionExample'
                        >
                            <div className='accordion-body'>
                                {t("acordion12")}
                                </div>
                        </div>
                    </div>
                    <div className='accordion-item'>
                        <h2 className='accordion-header'>
                            <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseTwo'
                                aria-expanded='false'
                                aria-controls='collapseTwo'
                            >
                                {t("acordion2")}
                            </button>
                        </h2>
                        <div
                            id='collapseTwo'
                            className='accordion-collapse collapse'
                            data-bs-parent='#accordionExample'
                        >
                            <div className='accordion-body'>
                                {t("acordion22")}
                            </div>
                        </div>
                    </div>
                    <div className='accordion-item'>
                        <h2 className='accordion-header'>
                            <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseThree'
                                aria-expanded='false'
                                aria-controls='collapseThree'
                            >
                                {t("acordion3")}
                            </button>
                        </h2>
                        <div
                            id='collapseThree'
                            className='accordion-collapse collapse'
                            data-bs-parent='#accordionExample'
                        >
                            <div className='accordion-body'>
                                {t("acordion32")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
