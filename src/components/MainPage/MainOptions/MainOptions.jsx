import style from "./MainOptions.module.css"
import {BusinessCard} from "../../BusinessCard/BusinessCard"

export const MainOptions = () =>{
    return(
        <div className={style.mainOptionContainer}>
            <h1>Тех. поддержка и отзывы</h1>
            <div className={style.optionCardsContainer}>
            <BusinessCard className={style.optionCard}
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4c1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10"></path></svg>
            } 
            title={'Техподдержка'} desc={'Отвечаем в течении 5 минут, решим все ваши вопросы'}/>
            <BusinessCard className={style.optionCard}
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.43 10L12 2l-2.43 8H2l6.18 4.41L5.83 22L12 17.31L18.18 22l-2.35-7.59L22 10z"></path></svg>
            } 
            title={'Отзывы'} desc={'Оставляйте отзывы и выбирайте лучшую продукцию '}/> 
            </div>
        </div>
    )
}