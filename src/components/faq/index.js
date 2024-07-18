import Accordion from 'react-bootstrap/Accordion'
import cls from './style.module.css'
import { useTranslation } from "react-i18next";

function Faq() {

    const { t } = useTranslation();

    return (
        <div className={cls.container} id='faq'>
            <p className={cls.faqTitle} >Faq</p>

            <div className={cls.acor}>
                <div class='accordion' id='accordionExample'>
                    <div class='accordion-item'>
                        <h2 class='accordion-header'>
                            <button
                                class='accordion-button'
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
                            class='accordion-collapse collapse show'
                            data-bs-parent='#accordionExample'
                        >
                            <div class='accordion-body'>
                                {t("acordion12")}
                                </div>
                        </div>
                    </div>
                    <div class='accordion-item'>
                        <h2 class='accordion-header'>
                            <button
                                class='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseTwo'
                                aria-expanded='false'
                                aria-controls='collapseTwo'
                            >
                                {t("accordion2")}
                            </button>
                        </h2>
                        <div
                            id='collapseTwo'
                            class='accordion-collapse collapse'
                            data-bs-parent='#accordionExample'
                        >
                            <div class='accordion-body'>
                                {t("acordion22")}
                            </div>
                        </div>
                    </div>
                    <div class='accordion-item'>
                        <h2 class='accordion-header'>
                            <button
                                class='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#collapseThree'
                                aria-expanded='false'
                                aria-controls='collapseThree'
                            >
                                {t("accordion3")}
                            </button>
                        </h2>
                        <div
                            id='collapseThree'
                            class='accordion-collapse collapse'
                            data-bs-parent='#accordionExample'
                        >
                            <div class='accordion-body'>
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
