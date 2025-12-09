import style from "./BusinessServiceRate.module.css"
import { BusinessCard } from "../../BusinessCard/BusinessCard"

export const BusinessServiceRate = () => {
    return(
        <div className={style.businessServiceRateContainer}>
            <h1>Тарифы на обслуживание счёта</h1>
            <div className={style.rateCardsContainer}>
            <BusinessCard icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                    <path fill="currentColor" d="M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128"/>
                    <path fill="currentColor" d="M384 128v64h256v-64zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64"/>
                </svg>
            } title={"Простой"} desc={"Для начинающих предпринимателей"} buttonLabel={"399₽/месяц"} className={style.rateCard} />
            <BusinessCard icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path fill="currentColor" d="M96 96v224c0 35.3 28.7 64 64 64h416c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64m64 160c35.3 0 64 28.7 64 64h-64zm64-160c0 35.3-28.7 64-64 64V96zm352 160v64h-64c0-35.3 28.7-64 64-64M512 96h64v64c-35.3 0-64-28.7-64-64M288 208a80 80 0 1 1 160 0a80 80 0 1 1-160 0M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v240c0 66.3 53.7 120 120 120h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72z"/>
                </svg>
            } title={"Продвинутый"} desc={"Для малого развивающегося бизнеса"} buttonLabel={"1799₽/месяц"} className={style.rateCard} />
            <BusinessCard icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m21 2l-5 5l-4-5l-4 5l-5-5v13h18zM5 21h14a2 2 0 0 0 2-2v-2H3v2a2 2 0 0 0 2 2"/>
                </svg>
            } title={"Профессиональный"} desc={"Для дела с большими оборотами"} buttonLabel={"3999₽/месяц"} className={style.rateCard}/>
            </div>
        </div>
    )
}