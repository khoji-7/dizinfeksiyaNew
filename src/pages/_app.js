import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../../public/locales/i18n.jsx";
import 'aos/dist/aos.css'; // AOS CSS
import AOS from 'aos'; // AOS JS
import useSWR from 'swr'

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
      offset: 200, // skroll qilingan masofa (px)
      once: true,
      mirror:true,// animatsiya faqat bir marta ishlashi kerak
    });

    // AOS-ni sahifa har safar yangilanganda qayta yuklash
    AOS.refresh();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;