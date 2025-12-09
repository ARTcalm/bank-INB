import { OpenButton } from "../../OpenButton/OpenButton"
import style from "./MainCredit.module.css"

export const MainCredit = () => {
    return(
        <div className={style.creditMainBlock}>
            <h1>Кредиты<br/>по выгодным условиям <a>20%</a></h1>
            <div className={style.advantageBlock}>
                <div className={style.advantageCard}>До 10 миллионов рублей</div>
                <div className={style.advantageCard }>6 месяцев каникул</div>
                <div className={style.advantageCard}>На любые цели и задачи</div>
            </div>
            <div className={style.button}>
                <OpenButton title={"Оформить"} className={style.creditButton} navLink={"/credit"} />
            </div>
        </div>
    )
}