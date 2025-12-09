import { useRef, useState } from "react"
import style from "./InvsestStockSlider.module.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { STOCKS } from "../../../consts"

export const InvestStockSlider = () => {
    const [stocks,setStocks] = useState(STOCKS)
    const getStocks = () => {
        return [
            stocks.slice(0,6),
            stocks.slice(6,12),
            stocks.slice(12,18)
        ]
    }
    const displayStocks = getStocks()
    const sliderRef = useRef(null)
    let currentIndex = 0
    const scrollToElement = (index) => {
        currentIndex = currentIndex+index
        if(currentIndex === sliderRef.current.children.length){
            currentIndex = 0
        }
        if(currentIndex <= -1){
            currentIndex = sliderRef.current.children.length - 1
        }
        if (sliderRef.current) {
            const element = sliderRef.current.children[currentIndex];
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'start'
                });
            }
        }
    };
    

    return(
        <div className={style.investStockSliderContainer} id="stocks">
            <h1>Мы<br/> рекомендуем</h1>
            <div className={style.sliderContainer}>
                <FaArrowLeft className={style.arrow} style={{color:"white", fontSize:"30px", position:"relative", zIndex:"300"}} onClick={() => scrollToElement(-1)}/>
                <div className={style.sliderMonitor} >
                    <div className={style.sliderTrack} ref={sliderRef}>
                        {
                            displayStocks.map(slideStocks => (
                                <div className={style.slide}>
                                    {
                                        slideStocks.map(stock => (
                                            <div key={stock.code} className={style.stock}>
                                                <img src={stock.icon}/>
                                                <div className={style.stockDesc}>
                                                    <h1>{stock.title}<a>&nbsp;({stock.code})</a></h1>
                                                    <p>{stock.value}₽</p>
                                                    <a href={stock.url}>Подробнее</a>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
                <FaArrowRight className={style.arrow} style={{color:"white", fontSize:"30px", position:"relative", zIndex:"300"}} onClick={() => scrollToElement(1)}/>
            </div>
        </div>
    )
}