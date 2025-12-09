import { OpenButton } from "../../OpenButton/OpenButton"
import style from "./BusinessLeasing.module.css"

export const BusinessLeasing = () => {
    return(
        <div  className={style.businessLeasingContainer} id="leasing" >
            <h1>Берите авто в лизинг</h1>
            <div className={style.cardContainer}>
                <img src="/img/LeasingCar2.jpeg" />
                <div className={style.cardDescContent}>
                    <h2 className={style.cardDescTitle}>Лизинг</h2>
                    <p className={style.cardDescText}>Подготовим документы и обсудим индивидуальные условия всего за час. Поможем выбрать авто и договориться о цене</p>
                    <OpenButton title={"Подробнее"} className={style.openFormButton}/>
                </div>
            </div>
        </div>
    )
}