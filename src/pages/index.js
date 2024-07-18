import Banner from "@/components/banner";
import Header from "@/components/header";
import Service from "@/components/service";
import Guarante from "@/components/guarante";
import Faq from "@/components/faq";
import ContactUs from "@/components/contactus";
import Footer from "@/components/footer";
import { useTranslation } from "react-i18next";


export default function Home() {
  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="body">
      <div className="navbar">
        <nav class="navbar bg-body-tertiary fixed-top">
          <div class="container-fluid">
            <img
              src="https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png"
              alt="dezinfeksiyatashkent logo"
              className="navbarLogo"
            />
            <ul className="ul">
              <a href="#header" className="links">
                <li>{t("Asosiy")}</li>
              </a>
              <a href="#about" className="links">
                <li>{t("biz")}</li>
              </a>
              <a href="#service" className="links">
                <li>{t("xizmatlar")}</li>
              </a>
              <a href="#faq" className="links">
                <li>{t("faq")}</li>
              </a>
            </ul>
            <div>
              <select
                name="uz"
                id=""
                className="select"
                onChange={handleChange}
              >
                <option value="uz">uzbek</option>
                <option value="ru">russia</option>
                <option value="en">english</option>
              </select>
              <button className="navbarBtn">
                <a href="#service" className="BtnLink">{t("bog'lanish")}</a>
              </button>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-body">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="links" href="#header">
                      {t("Asosiy")}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#about" className="links">
                     {t("biz")}
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#service" className="links">
                      {t("xizmatlar")}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#faq" className="links">
                      {t("faq")}
                    </a>
                  </li>
                </ul>
                <button className="navbarBtnn">
                  <a href="#contact" className="BtnLink"> {t("bog'lanish")} </a>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Header />
      <Banner />
      <Service />
      <Guarante />
      <Faq />
      <ContactUs />
      <Footer />
    </div>
  );
}
