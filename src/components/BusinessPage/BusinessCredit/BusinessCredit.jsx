import style from "./BusinessCredit.module.css"
import {OpenButton} from "../../OpenButton/OpenButton"
export const BusinessCredit = () => {
    return(
        <div className={style.businessCreditContainer} id="loan">
            <h1>Предоставим <a>КАПИТАЛ</a></h1>
            <div className={style.cardContainer}>
                <div className={style.cardDescContent}>
                    <h2 className={style.cardDescTitle}>Узнайте сумму кредита в пару кликов</h2>
                    <div className={style.cardDescText}>
                        <p>На оборотные, инвестиционные цели или кассовые разрывы</p>
                        <p>До 10 миллионов рублей</p>
                        <p>Досрочные погашения без штрафов</p>
                    </div>
                    <OpenButton className={style.openFormButton} title={"Узнать сумму"} navLink={"/credit/loan-form"}/>
                </div>
                <img src="/img/CreditSuitcase.jpeg" />
            </div>
        </div>
    )
}