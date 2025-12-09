import { OpenButton } from "../../OpenButton/OpenButton"
import style from "./CreditCard.module.css"

export const CreditCard = (props) => {

    const {tooltip, title, desc, lp1, lp2, lp3, sp3, image, navLink, id} = props

    return(
            <div className={style.card} id={id}>
                <div>
                    <h3 className={style.cardToolTip}>{tooltip}</h3>
                    <h2 className={style.cardTitle}>{title}</h2>
                    <p className={style.cardDesc}>{desc}</p>
                    <div className={style.cardParameters}>
                        <div>
                            <div className={style.largeParameter}>{lp1}</div>
                            <div className={style.smallParameter}>Сумма кредита</div>
                        </div>
                        <div>
                            <div className={style.largeParameter}>{lp2}</div>
                            <div className={style.smallParameter}>Срок кредита</div>
                        </div>
                        <div>
                            <div className={style.largeParameter}>{lp3}</div>
                            <div className={style.smallParameter}>{sp3}</div>
                        </div>
                    </div>
                    <OpenButton className={style.openFormButton} title={"Оформить"} navLink={navLink} />
                </div>
                <img src={image}/>
            </div>
    )
}