import { BusinessCard } from "../../BusinessCard/BusinessCard"
import style from "./BusinessAreaActivities.module.css"

export const BusinessAreaActivities = () =>{
    return(
        <div className={style.businessAreaContainer} id="acquiring">
            <h1>Подойдёт для любых сфер торговли</h1>
            <div className={style.areasActivitiesCards}>
                <BusinessCard className={style.areaActivityCard} icon={<img src="/img/AreaActivity1.jpg"/>}
                 title={"Онлайн торговля"} desc={"Для торговли на маркетплейсах"} 
                />
                <BusinessCard className={style.areaActivityCard} icon={<img src="/img/AreaActivity2.jpeg"/>}
                 title={"Розница"} desc={"Для магазинов, кафе, салонов, медицинсиких и бытовых услуг"} 
                />
                <BusinessCard className={style.areaActivityCard} icon={<img src="/img/AreaActivity3.jpeg"/>}
                 title={"ИТ-компании"} desc={"Для открытия вашего ИТ-бизнеса"} 
                />
                <BusinessCard className={style.areaActivityCard} icon={<img src="/img/AreaActivity4.jpeg"/>}
                 title={"Госзакупки"} desc={"Спецсчёт, независимые гарантии, КЭП, поиск тендеров"} id={"public-procurement"}
                />
            </div>
        </div>
    )
}