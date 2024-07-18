import cls from "./style.module.css"
import { useTranslation } from "react-i18next";


const ContactUs = () => {

    const { t } = useTranslation();

    async function sendTelegramMessage() {
        const botToken = "7058068827:AAEwJvDklNcroajvm3PUIx9SvYgbOVAXG1k";
        const chatId = "-4230106591";
        const Name = document.getElementById("name").value;
        const senderAddress = document.getElementById("phone").value;
        
    
    
            
    
        
        const Sended = `
        
       Xat jo'natmasi: -----------------------\n 
        Jo'natuvchi ismi: ${Name}\n-----------------------\n 
        nomer:${senderAddress}
       
        
        `
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
                        text: Sended
                    }),
                }
            );
            if (response.status === 200) { 
                alert("Xabaringiz yetkazildi");
                window.location.reload()
            }
        } catch (error) {
            console.error("Xatolik:", error);
    
        }
        console.log(Name);
    }
    
   
      


    return(
        <div className={cls.contactParent} id="contact">
    <div className={cls.container}>
        <div className={cls.contact}>
            <p className={cls.contactTitle}>
                {t("contactTitle")}
            </p>
            <input type="text" name="" id="name" className={cls.contactInput} placeholder="name"/>
            <input type="number" className={cls.contactInput} placeholder="phone" id="phone"/>
            <button className={cls.contactBtn} type="submit" onClick={sendTelegramMessage}>
            {t("Yuborish")}
            </button>
        </div>
        <img src="https://www.dezinfeksiyatashkent.uz/assets/contact-a5f11f68.png" alt="" className={cls.contactImg}/>
    </div>
    </div>
    )
} 
export default ContactUs    