import style from "./MainQuotes.module.css"

export const MainQuotes = (props) => {
    const {dataQuotes} = props
    return(
        <div className={style.quotesBlock}>
            {dataQuotes.map(quote => (
                <div key={quote.CharCode} className={`${style.quotesCard} ${quote.Value > quote.Previous ? style.quoteUp : style.quoteDown}`}>
                    <div>
                        <p className={style.quotesCardTitle}>{quote.CharCode}</p>
                        <p className={style.quotesCardPrice}>{quote.Value.toFixed(2)}</p>
                    </div>
                    <img  src={quote.image} alt="quoteIcon"/>
                </div>
            ))}
        </div>
    )
}