import style from "./BusinessOpen.module.css"
import {OpenButton} from "../../OpenButton/OpenButton"

export const BusinessOpen = () => {
    return(
        <div className={style.businessOpenContainer} id="business-open">
            <h1>Поможем открыть <a>СВОЁ</a> дело</h1>
            <div className={style.businessCardsContainer}>
                <div className={style.businessCard}>
                    <img src="/img/businessOpenLeftPhoto.svg"/>
                    <div className={style.businessCardContent}>
                        <h1>Регистрация ИП</h1>
                        <p>Онлайн</p>
                        <p>Без нотариусов<br/>и госпошлин</p>
                        <p>За 30 минут</p>
                    </div>
                </div>
                <div className={style.businessCard}>
                    <div className={style.businessCardContent}>
                        <h1>Регистрация ООО</h1>
                        <p>Без очередей</p>
                        <p>Подготовим устав</p>
                        <p>Сэкономим<br/> на госпошлине</p>
                    </div>
                    <img src="/img/businessOpenRightPhoto.svg"/>
                </div>
            </div>
        </div>
    )
}