import { NavLink, useNavigate } from "react-router-dom"
import style from "./Header.module.css"
import { HEADERNAVMENU } from "../../../consts"

export const Header = (props) => {
    let {menuState, setMenuState} = props
    const navigateTo = useNavigate()

    return(
        <header className={style.headerContainer} >
            <div className={style.headerMenuContainer}>
                <div className={style.logo} onClick={() => navigateTo('/')}><img src="/img/INB.svg"/></div>
                <div className={style.menuButtons}>
                    <div className={style.openMenu} onClick={() => setMenuState(menuState = !menuState)}><img src="/img/MenuIcon.svg"/>Меню</div>
                    <div className={style.menuNavButtons}>            
                        {HEADERNAVMENU.map(el => (
                            <NavLink key={el.id} to={el.route}>
                                <div>{el.title}</div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>  
        </header>
    )
}