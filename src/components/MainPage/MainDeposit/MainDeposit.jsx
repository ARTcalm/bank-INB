import { BusinessCard } from "../../BusinessCard/BusinessCard"
import { OpenButton } from "../../OpenButton/OpenButton"
import style from "./MainDeposit.module.css"

export const MainDeposit = () => {
    return(
        <div className={style.depositContainer}>
            <h1>Вклады до <a>17%</a> годовых</h1>
            <div className={style.depositAdvantages}>
                <BusinessCard className={style.advantagesCard} icon={<img src="/img/Group 49.svg"/>} 
                title={"До 17% годовых"} desc={"Ставка по вкладу в рублях"} buttonLabel={''}/>
                <BusinessCard className={style.advantagesCard} icon={<img src="/img/Group 48.svg"/>} 
                title={"От 1 до 24 месяцев"} desc={"Срок для вклада"} buttonLabel={''}/>
                <BusinessCard className={style.advantagesCard} icon={<img src="/img/Group 50.svg"/>} 
                title={"От 30000₽"} desc={"Минимальная сумма вклада"} buttonLabel={''}/>
            </div>
            <OpenButton title={'Открыть вклад'} className={style.depositOpenButton} navLink={"/deposit"}/>
        </div>
    )
}