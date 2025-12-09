import { useEffect, useRef, useState } from "react"
import style from "./CreditForm.module.css"
import { FaArrowLeft, FaArrowRight, FaChevronDown} from "react-icons/fa6"
import {OpenButton} from "../../OpenButton/OpenButton"
import { Header } from "../../Layout/Header/Header"
import { useLocation, useNavigate } from "react-router"
import { LoanPeriodOptions, LoanReasonOptions } from "../../../consts"

export const CreditForm = () => {
    const [displayPeriodOptions,setDisplayPeriodOptions] = useState(LoanPeriodOptions)
    const [displayReasonOptions, setDisplayReasonOptions] = useState(LoanReasonOptions)
    const [totalMoneyValue, setTotalMoneyValue] = useState(100000)
    const [periodValue, setPeriodValue] = useState(displayPeriodOptions[0].value)
    const [keyRateValue, setKeyRateValue] = useState(20)
    let [isSelectPeriod, setIsSelectPeriod] = useState(false)
    let [isSelectReason, setIsSelectReason] = useState(false)        
    const annuityMonthlyPayment =(totalMoneyValue*(keyRateValue/100/12*(1+keyRateValue/100/12)**(periodValue*12)/((1+keyRateValue/100/12)**(periodValue*12)-1))).toFixed(2)
    let [displayTitlePeriod, setDisplayTitlePeriod] = useState(displayPeriodOptions[0].title)
    let [displayTitleReason, setDisplayTitleReason] = useState(null)

    const OpenSelectOption = (value) =>{
        if(value === "period"){
            setIsSelectPeriod(isSelectPeriod = !isSelectPeriod)
            setIsSelectReason(false)
        }
        if(value === "reason"){
            setIsSelectPeriod(false)
            setIsSelectReason(isSelectReason = !isSelectReason)
        }
    }
    const handleChangeValue = (event) => {
        const value = parseFloat(event.target.value)
        if(event.target.id === "money"){
            if(isNaN(value)){
                setTotalMoneyValue(50000)
            }
            else if(value > 10000000){
                setTotalMoneyValue(10000000)
            }
            else{
                setTotalMoneyValue(value)
            }
        }
    }
    const handleChangePeriod = (title, value) => {
        setDisplayTitlePeriod(title)
        setPeriodValue(value)
        setIsSelectPeriod(isSelectPeriod = !isSelectPeriod)
    }
    const handleChangeReason = (title) =>{
        setDisplayTitleReason(title)
        setIsSelectReason(isSelectReason = !isSelectReason)
    }
    const navigate = useNavigate();


    return(
        <main>
        <div className={style.creditFormBg}>
            <div className={style.creditFormContainer}>
                <OpenButton className={style.backNavButton} title={"← Вернуться"} onClick={() => navigate(-1)}  />
                <form className={style.formParameters}>
                    <h1>Рассчитайте платёж</h1>
                    <div className={style.Parameter}>
                        <h3>Сумма кредита</h3>
                        <div className={style.fieldOfChange} >
                            <div className={style.changeValueParam}>
                                <span>{totalMoneyValue}</span>
                                <span>&nbsp;₽</span>
                            </div>
                            <input type="text" inputMode="numeric" id="money" value={totalMoneyValue} onChange={handleChangeValue}/>
                        </div>
                    </div>
                    <div className={style.Parameter}>
                        <h3>Срок кредитования</h3>
                        <div className={style.fieldOfChange} onClick={() => OpenSelectOption("period")} style={isSelectPeriod ? {borderRadius:"16px 16px 0px 0px", borderBottom:"1px solid black", transition:"border-radius 300ms ease"} : {transition:"border-radius 300ms ease"}}>
                            <div className={style.changeParam}>
                                <span>{displayTitlePeriod}</span>
                                <FaChevronDown style={isSelectPeriod ? {transform:"rotate(180deg)", transition:"all 300ms ease"}:{transition:"all 300ms ease"}}/>
                            </div>
                        </div>
                        <div className={style.fieldOfSelect} style={isSelectPeriod ? {opacity:"1", borderRadius:"0px 0px 16px 16px"} : {opacity:"0", borderRadius:"16px 16px 16px 16px", visibility:"hidden"}}>
                                {displayPeriodOptions.map((option,index) => (
                                    <option className={style.option} onClick={()=>handleChangePeriod(option.title,option.value)}>{option.title}</option>
                                ))}
                        </div>
                    </div>
                    <div className={style.Parameter}>
                        <h3>Цель кредита</h3>
                        <div className={style.fieldOfChange} onClick={() => OpenSelectOption("reason")} style={isSelectReason ? {borderRadius:"16px 16px 0px 0px", borderBottom:"1px solid black", transition:"border-radius 300ms ease"} : {transition:"border-radius 300ms ease"}}>
                            <div className={style.changeParam}>
                                <span>{displayTitleReason}</span>
                                <FaChevronDown style={isSelectReason ? {transform:"rotate(180deg)", transition:"all 300ms ease"}:{transition:"all 300ms ease"}}/>
                            </div>
                        </div>
                        <div className={style.fieldOfSelect} style={isSelectReason ? {opacity:"1", borderRadius:"0px 0px 16px 16px"} : {opacity:"0", borderRadius:"16px 16px 16px 16px", visibility:"hidden"}}>
                                {displayReasonOptions.map((option,index) => (
                                    <option className={style.option} onClick={()=>handleChangeReason(option.title,option.value)}>{option.title}</option>
                                ))}
                        </div>
                    </div>
                    <div className={style.Parameter}>
                        <h3>Номер телефона</h3>
                        <div className={style.fieldOfChange}>
                            <span>+7</span><input type="tel" maxLength={10}required />
                        </div>
                    </div>
                    <div className={style.submitContainer} >
                        <button type="submit">Отправить<FaArrowRight/></button>
                        <div>
                            <input className={style.submitCheckbox} type="checkbox" required/>
                            <p>Я согласен с условиями <a href="">передачи информации</a></p>
                        </div>
                    </div>
                </form>
                <div className={style.resultContainer}>
                    <h3 className={style.resultTitle}>Ежемесячный платёж</h3>
                    <p className={style.resultCount}>{annuityMonthlyPayment}₽</p>
                    <a className={style.resultDesc}>По предварительной оценке: срок и платёж может быть изменён перед конечным оформлением</a>
                </div>
            </div>
        </div>
        </main>
    )
}
