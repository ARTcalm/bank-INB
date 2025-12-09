import style from "./InvestActivity.module.css"
import {BusinessCard} from "../../BusinessCard/BusinessCard"

export const InvestActivity = () =>{
    return(
        <div className={style.investActivityContainer} id="brokerage_open">
            <h1>Начни зарабатывать<br/> здесь и сейчас</h1>
            <div className={style.activityCardsContainer}>
                <BusinessCard icon={<img src="/img/InvestActivity1.svg" />} 
                title={"Инвестируйте с любой суммы"} desc ={"Откройте брокерский счёт и начните получать прибыль"} 
                className={style.activityCard} />
                <BusinessCard icon={<img src="/img/InvestActivity2.svg" />} 
                title={"Отслеживайте цены в любое время"} desc ={"Смотрите курс цен в реальном времени на любом устройстве"} 
                className={style.activityCard} />
                <BusinessCard icon={<img src="/img/InvestActivity3.svg" />} 
                title={`Начните получать выплаты уже сейчас`} desc ={"Получайте пассивный доход, пока денег работают за вас"} 
                className={style.activityCard} />
            </div>
        </div>
    )
}