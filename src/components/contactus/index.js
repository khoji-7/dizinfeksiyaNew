import React, { useEffect, useRef, useState } from 'react';
import cls from "./style.module.css";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  const modalRef = useRef(null);
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  async function sendTelegramMessage() {
    const botToken = "7058068827:AAEwJvDklNcroajvm3PUIx9SvYgbOVAXG1k";
    const chatId = "-4230106591";
    const Name = document.getElementById("name").value;
    const senderAddress = document.getElementById("phone").value;

    if (!Name || !senderAddress) {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    const Sended = `
      Xat jo'natmasi: -----------------------\n 
      Jo'natuvchi ismi: ${Name}\n-----------------------\n 
      Nomer: ${senderAddress}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: Sended,
          }),
        }
      );
      if (response.status === 200) {
        setMessage('Xabaringiz yetkazildi');
        modalRef.current.style.display = "block";
      }
    } catch (error) {
      console.error("Xatolik:", error);
    }
  }

  useEffect(() => {
    const modal = modalRef.current;
    const btn = btnRef.current;
    const span = spanRef.current;

    btn.onclick = () => {
      modal.style.display = "block";
    }

    span.onclick = () => {
      modal.style.display = "none";
    }

    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }

    // Cleanup function
    return () => {
      btn.onclick = null;
      span.onclick = null;
      window.onclick = null;
    }
  }, []);

  return (
    <div className={cls.contactParent} id="contact">
      <div className={cls.container}>
        <div className={cls.contact}>
          <p className={cls.contactTitle}>{t("contactTitle")}</p>
          <input
            type="text"
            name=""
            id="name"
            className={cls.contactInput}
            placeholder="name"
            required
          />
          <input
            type="number"
            className={cls.contactInput}
            placeholder="phone"
            id="phone"
            required
          />
          <button
            className={cls.contactBtn}
            type="submit"
            onClick={sendTelegramMessage}
            id="myBtn"
            ref={btnRef}
          >
            {t("Yuborish")}
          </button>
        </div>
        <img
          src="https://www.dezinfeksiyatashkent.uz/assets/contact-a5f11f68.png"
          alt=""
          className={cls.contactImg}
        />
      </div>
      <div id="myModal" className={cls.modal} ref={modalRef}>
        <div className={cls.modalContent}>
          <span className={cls.close} ref={spanRef}>&times;</span>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
