import { BusinessCard } from '../../BusinessCard/BusinessCard'
import style from './InvestAdvantages.module.css'

export const InvestAdvatanges = () => {
    return(
        <div className={style.investAdvantagesContainer}>
            <h1>Доверьтесь нам</h1>
            <div className={style.advantagesCardsContainer}>
                <div className={style.cardsContainer}>
                    <BusinessCard icon={<img src='/img/InvestAdvantages1.svg' />}
                    title={"Бесплатно"} desc={"Открытие счёта — 0 ₽"} className={`${style.advantagesCard} ${style.topCard}`} />
                    <BusinessCard icon={<img src='/img/InvestAdvantages2.svg' />} 
                    title={"Лицензия участника рынка"} desc={"Деятельность лицензирована ЦБ РФ"} className={`${style.advantagesCard} ${style.topCard}`} />
                    <BusinessCard icon={<img src="/img/InvestAdvantages3.svg" />} 
                    title={"Круглосуточная поддержка"} desc={"В чате или по телефону"} className={`${style.advantagesCard} ${style.topCard}`} />
                </div>
                <div className={style.cardsContainer}>
                    <BusinessCard icon={<img src="/img/InvestAdvantages4.svg" />} 
                    title={"Более 1000 предложений"} desc={"К покупке доступны акции, облигации и фонды со всего мира"} className={`${style.advantagesCard} ${style.bottomCard}`} />
                    <BusinessCard icon={<img src="/img/InvestAdvantages5.svg" />} 
                    title={"В нашей команде профессиональные брокеры "} desc={"Поможем подобрать ценные бумаги под ваши желания"} className={`${style.advantagesCard} ${style.bottomCard}`} />
                </div>
            </div>
        </div>
    )
}