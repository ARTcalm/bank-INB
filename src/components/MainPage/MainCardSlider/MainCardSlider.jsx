import React from "react"
import { useState } from "react"
import style from "./MainCardSlider.module.css"
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import { OpenButton } from "../../OpenButton/OpenButton"
import { CARDS } from "../../../consts"

export const MainCardSlider = () =>{
    const [currentIndex, setCurrentIndex] = useState(0) // Индекс отображаемого слайда
    const [isActiveLeft, setIsActiveLeft] = useState(false) // Состояние активности левой стрелки
    const [isActiveRight, setIsActiveRight] = useState(false) // Состояние активности правой стрелки
    const [isActiveCard, setIsActiveCard] = useState(null) // Состояние активности выбранной карточки, при нажатии эффект её активации
    const [items, setItems] = useState(CARDS) 

    // Инициализируем необходимые карточки
    const getItems = () => {
        return [items[currentIndex], items[(currentIndex+1)%items.length]] 
    }

    // Визуализируем их
    const displayItems = getItems()
    // Функция изменения дизайеа главной карточки при нажатии на одну из пула выбора 
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

    // Предыдущая карточка
    const prevSlide = () =>{   
        setIsActiveRight(false)
        setIsActiveLeft(true)
        setTimeout(() =>{
            setIsActiveLeft(false)
            setCurrentIndex(prev =>(prev-1+items.length)%items.length)
        },800)
    }
    // Следующая карточка
    const nextSlide = () =>{
        setIsActiveLeft(false)
        setIsActiveRight(true)
        setTimeout(()=>{
            setIsActiveRight(false)
            setCurrentIndex(prev => (prev+1)%items.length)
        },800)
    }

    // Функция стоп при прокликивании одной и той же кнопки
    // Нужна, чтобы не баговалось анимации при быстро клике на кнопку
    // с её помощью анимация произойдёт только через 300мс после остановки прокликивания
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