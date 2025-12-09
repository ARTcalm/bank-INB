import { FaArrowRight } from "react-icons/fa"
import style from "./InvestAccountForm.module.css"

export const InvestAccountForm = () => {
    return(
        <div className={style.investAccountFormContainer} id="account-open">
            <h1>Откройте<br/> счёт для инвестиций</h1>
            <div className={style.sequenceCardsContainer}>
                <div className={style.sequenceCard}>
                    <div className={style.title}>
                        <span>1</span>
                    </div>
                    <p>Заполните заявку онлайн. Понадобится только паспорт и телефон</p>
                </div>
                <FaArrowRight className={style.arrow} style={{fontSize:"30px",color:"white"}} />
                <div className={style.sequenceCard}>
                    <div className={style.title}>
                        <span>2</span>
                    </div>
                    <p>Откроем счет за 5 минут. Если биржа закрыта, то откроем счет на следующий торговый день  </p>
                </div>
                <FaArrowRight className={style.arrow} style={{fontSize:"30px",color:"white"}} />
                <div className={style.sequenceCard}>
                    <div className={style.title}>
                        <span>3</span>
                    </div>
                    <p>Привезем все документы. Если вы клиент INB, подпишите их онлайн</p>
                </div>
            </div>
            <div className={style.formContainer}>
                <h1>Введите номер телефона</h1>
                <h2>Для граждан РФ старше 14 лет. До 18 лет — с согласия родителей</h2>
                <form name="telephoneForm" >
                    <div className={style.inputContainer}>
                        <span>+7</span>
                        <input name="telephone" type="tel" maxLength={10} required />
                    </div>
                    <div className={style.submitContainer}>
                        <input type="submit" value="Далее" />
                    </div>
                </form>
                <p>Нажимая «Дальше», вы соглашаетесь с <a href="/invest">обработкой персональных данных и условиями передачи информации</a></p>
            </div>
        </div>
    )
}