import { NavLink } from "react-router"

export const OpenButton = (props) =>{
    const {title, className, navLink, onClick} = props
    return(
            <NavLink className={className} to={navLink} style={{textDecoration:"none",}} onClick={onClick}> 
                <p style={{margin:"0",}} >{title}</p>
            </NavLink>
    )
}