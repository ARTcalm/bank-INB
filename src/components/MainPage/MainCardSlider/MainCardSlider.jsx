import React from "react"
import { useState } from "react"
import style from "./MainCardSlider.module.css"
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import { OpenButton } from "../../OpenButton/OpenButton"
import { CARDS } from "../../../consts"

export const MainCardSlider = () =>{
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isActiveLeft, setIsActiveLeft] = useState(false)
    const [isActiveRight, setIsActiveRight] = useState(false)
    const [isActiveCard, setIsActiveCard] = useState(null)
    const [items, setItems] = useState(CARDS)
    const getItems = () => {
        return [items[currentIndex], items[(currentIndex+1)%items.length]]
    }
    const displayItems = getItems()

    const handleChangeCardIcon = (srcBigCard, blockID, imgID) => {
        setItems( prevItem => {
                return prevItem.map( el => {
                        if(el.blockID === blockID){
                            return {...el, bigCardImg: srcBigCard}                   
                        }
                        return el
                    }
                )
            }
        )
        displayItems.map(el =>{
            if(el.blockID === blockID){
                setIsActiveCard(imgID)
            }
        })

    }
    const prevSlide = () =>{   
        setIsActiveRight(false)
        setIsActiveLeft(true)
        setTimeout(() =>{
            setIsActiveLeft(false)
            setCurrentIndex(prev =>(prev-1+items.length)%items.length)
        },800)
    }
    const nextSlide = () =>{
        setIsActiveLeft(false)
        setIsActiveRight(true)
        setTimeout(()=>{
            setIsActiveRight(false)
            setCurrentIndex(prev => (prev+1)%items.length)
        },800)
    }
    const debounce = (func, delay) => {
        let timer;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func();
            }, delay);
        };
    };
    const debouncingPrevSlide = debounce(prevSlide,300)
    const debouncingNextSlide = debounce(nextSlide,300)
    
    return(
    <div className={style.mainCardSliderBlock} id="card">
        <h1>Оформи <a>СВОЮ</a><br/> карту и совершай покупки</h1>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",maxWidth:`1200px`,margin:`0 auto`}}>
            <div onClick={debouncingPrevSlide} className={style.arrow}>
                <FaArrowLeft style={{fontSize:`48px`, cursor:"pointer", zIndex:100}} />
            </div>
            <div className={style.slider}>
                {displayItems.map((el,index) => (
                    <div key={index} className={`${style.card} ${
                        isActiveLeft  && index === 1 ? style.card_animate_left_LC:
                        isActiveLeft  && index === 0 ? style.card_animate_right_LC:
                        isActiveRight && index === 1 ? style.card_animate_right_RC:
                        isActiveRight && index === 0 ? style.card_animate_left_RC:
                        style.card    
                    }`} >
                        <h1>{el.h1}</h1>
                        <div className={style.cardContainerContent}>
                            <div className={style.cardLeftContent}>
                                <img src={el.bigCardImg} alt="mainCard"/>
                                <div className={style.cardInfo}>
                                    {el.p}
                                </div>
                            </div>
                            <div className={style.cardRightContent}>
                                <div>
                                    <h2>{el.chooseStyle}</h2>
                                    <div className={style.cardChooseStyleButtons}>
                                        {el.images.map(img => (
                                            <div className={style.cardChooseButtonBg}>
                                                <img src={img.src} className={`${isActiveCard === img.id ? style.activeChangeIcon : ""}`} alt={img.id} onClick={() => handleChangeCardIcon(img.srcBigCard, el.blockID, img.id)} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <OpenButton title={"Оформить"} className={style.openFormButton}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div onClick={debouncingNextSlide} className={style.arrow}>
                <FaArrowRight style={{fontSize:`48px`, cursor:"pointer", zIndex:100}} />
            </div>
        </div>
    </div>
    )
}