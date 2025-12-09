import style from "./ErrorPage.module.css"
import { Menu } from "../Layout/Menu/Menu"
import { Header } from "../Layout/Header/Header"
import { Footer } from "../Layout/Footer/Footer"
import { OpenButton } from "../OpenButton/OpenButton"

export const ErrorPage = (props) => {
    const {menuState, setMenuState} = props 
    return(
        <>
            <main>
                <div className={style.errorMessage}>
                    <a href="/"><img src="/img/INBfooterIcon.svg"/></a>
                    <h1>404</h1>
                    <h2>Такой страницы нет<br/>или она не готова</h2>
                    <OpenButton title={'Вернуться на главную'} className={style.backPageButton} navLink={'/'} />    
                </div>                
            </main>
        </>
    )
}