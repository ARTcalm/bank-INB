import { NavLink } from "react-router"
import style from "./Footer.module.css"
import { FOOTERNAVMENU } from "./../../../consts"


export const Footer = () =>{
    return(
        <footer className={style.footerContainer}>
            <div className={style.footerMenuContainer}>
                <div className={style.menuBlock}>
                    {FOOTERNAVMENU.map(block =>(
                        <div> 
                            <h1>{block.h1}</h1>
                            {block.a.map(el =>(
                                <NavLink to={el.path}>
                                    <p>{el.name}</p>
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </div>
                <img src="/img/INBfooterIcon.svg" />    
            </div>
        </footer>
    )
}