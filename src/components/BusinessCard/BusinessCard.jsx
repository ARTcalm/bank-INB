import { OpenButton } from "../OpenButton/OpenButton"

export const BusinessCard = (props) => {
    
    const {icon, title, desc, buttonLabel, className, navLink, id} = props
    return(
        <div className={className} id={id} >
            {icon}
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <OpenButton  title={buttonLabel} navLink={navLink} />
        </div>
    )
}