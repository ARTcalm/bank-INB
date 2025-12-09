import style from "./CreditPage.module.css"
import {OpenButton} from "../OpenButton/OpenButton"
import { CreditCard } from "./CreditCard/CreditCard"
import { Menu } from "../Layout/Menu/Menu"
import { Header } from "../Layout/Header/Header"
import { Footer } from "../Layout/Footer/Footer"

export const CreditPage = (props) =>{
    const {menuState, setMenuState} = props

    return(
        <>
            <Menu menuState={menuState} setMenuState={setMenuState} />
            <Header setMenuState={setMenuState} menuState = {menuState}/>
            <main>
                <div className={style.creditPageContainer}>
                    <h1 className={style.creditPageTitle}>Кредит на любые цели<br/><a>Быстро и надёжно</a></h1>
                    <OpenButton className={style.openFormButton} title={"Оформить кредит"} navLink={"loan-form"}/>
                    <div className={style.containerCards}>
                        <CreditCard 
                        tooltip={"На любые цели"} title={"Кредит наличными"} 
                        desc={"Деньги на любые покупки, быстро и надёжно. Необходим только паспорт"}
                        lp1={"До 10 000 000 ₽"} lp2={"До 15 лет"} lp3={"Бесплатно"} sp3={"Карта с деньгами в тот же день"}
                        image={"/img/moneyCreditIcon.jpeg"} navLink={"/credit/loan-form"} id={"any-loan"}
                        />
                        <CreditCard 
                        tooltip={"На автомобиль"} title={"Автокредит"} 
                        desc={"Кредит на любое авто. Новое или с пробегом, без справок и поручителей"}
                        lp1={"До 20 000 000 ₽"} lp2={"До 8 лет"} lp3={"0₽"} sp3={"Первоначальный взнос"}
                        image={"/img/carCreditIcon.jpg"} navLink={"/credit/loan-form"} id={"auto-loan"}
                        />
                        <CreditCard 
                        tooltip={"На покупку недвижимости"} title={"Ипотека"} 
                        desc={"Кредит на покупку жилья в новостройке или на вторичном рынке"}
                        lp1={"До 50 000 000 ₽"} lp2={"До 30 лет"} lp3={"Заявка онлайн"} sp3={"Поможем с решением за минуту"}
                        image={"/img/houseCreditIcon.jpeg"} navLink={"/credit/loan-form"} id={"mortgage-loan"}
                        />
                        <CreditCard 
                        tooltip={"На обучение в ВУЗе"} title={"Образовательный кредит"} 
                        desc={"Обучайтесь в любом вузе России с государственной аккредитацией"}
                        lp1={"До 6 000 000 ₽"} lp2={"До 25 лет"} lp3={"Льготная ставка"} sp3={"На весь срок кредита"}
                        image={"/img/educationCreditIcon.jpeg"} navLink={"/credit/loan-form"} id={"education-loan"}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}