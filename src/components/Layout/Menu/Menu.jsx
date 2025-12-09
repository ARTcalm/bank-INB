import { NavLink, useNavigate } from "react-router"
import style from "./Menu.module.css"

export const Menu = (props) =>{

    let {menuState, setMenuState} = props
    const toNavigate = useNavigate()
    return(
        <>
            <div className={`${style.menuContainerBG} ${menuState ? style.activeMenu : style.inactiveMenu}`} onClick={() => {setMenuState(menuState = !menuState)}} ></div>
            <div className={`${style.menuContainerContent} ${menuState ? style.activeMenu : style.inactiveMenu}`}>
                <div className={style.menuUpPanel}>
                    <div className={style.menuUpLeft}>
                        <img onClick={() => {toNavigate("/"); setMenuState(menuState = !menuState)}} src="/img/INB.svg"/>
                        <div className={style.menuUpLeftButton} onClick={() => {setMenuState(menuState = !menuState)}}>
                            <img src="/img/MenuIcon.svg"/>
                            <p>Меню</p>
                        </div>
                    </div>
                    <div className={style.menuUpCenter}>
                        <NavLink to={"/"} onClick={() => {setMenuState(menuState = !menuState)}} >Гражданам</NavLink>
                        <NavLink to={"/business"} onClick={() => {setMenuState(menuState = !menuState)}} >Бизнесу</NavLink>
                        <NavLink to={"/invest"} onClick={() => {setMenuState(menuState = !menuState)}} >Инвестиции</NavLink>
                        <NavLink to={"/credit"} onClick={() => {setMenuState(menuState = !menuState)}} >Кредит</NavLink>
                    </div>
                    <div className={style.menuUpRight}>
                        <input type="textarea" name="search" placeholder="Ищите что-то конкретное?"/>
                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.521 12.174l4.215 4.215a1.482 1.482 0 11-2.095 2.095l-4.165-4.165A7.407 7.407 0 01.837 8.24a7.408 7.408 0 1113.684 3.934zM3.237 8.24a5.008 5.008 0 1010.015 0 5.008 5.008 0 00-10.015 0z"  fill="white" ></path></svg>
                    </div>
                </div>
                <div className={style.menuDownPanel}>
                    <div className={style.menuDownLinks}>
                        <div>
                            <NavLink to={"/#card"} onClick={() => {setMenuState(menuState = !menuState)}}>Дебетовая карта</NavLink>
                            <NavLink to={"/#card"} onClick={() => {setMenuState(menuState = !menuState)}}>Кредитная карта</NavLink>
                            <NavLink to={"/business#leasing"} onClick={() => {setMenuState(menuState = !menuState)}}>Лизинг</NavLink>
                            <NavLink to={"/business#business-open"} onClick={() => {setMenuState(menuState = !menuState)}}>Открытие ИП</NavLink>
                        </div>
                        <div>
                            <NavLink to={"/credit"} onClick={() => {setMenuState(menuState = !menuState)}}>Ипотека</NavLink>
                            <NavLink to={"/deposit"} onClick={() => {setMenuState(menuState = !menuState)}}>Вклады</NavLink>
                            <NavLink to={"/invest#account-open"} onClick={() => {setMenuState(menuState = !menuState)}}>Брокерский счёт</NavLink>
                            <NavLink to={"/invest#stocks"} onClick={() => {setMenuState(menuState = !menuState)}}>Акции</NavLink>
                        </div>
                    </div>
                    <div className={style.menuDownProfileContainer}>
                        <img src="/img/ProfileIcon2.svg"/>
                        <h1>Здравствуйте, Олег</h1>
                        <div>
                            <p>Мои карты</p>
                            <p>Мой кэшбэк <a className={style.cashbackValue}>234₽</a></p>
                            <p>Сервисы</p>
                            <p>Безопасность</p>
                            <p>Настройки</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}