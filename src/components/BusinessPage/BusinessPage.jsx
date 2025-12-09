import { Footer } from "../Layout/Footer/Footer"
import { Header } from "../Layout/Header/Header"
import { Menu } from "../Layout/Menu/Menu"
import { BusinessAreaActivities } from "./BusinessAreaActivities/BusinessAreaActivities"
import { BusinessCredit } from "./BusinessCredit/BusinessCredit"
import { BusinessLeasing } from "./BusinessLeasing/BusinessLeasing"
import { BusinessOpen } from "./BusinessOpen/BusinessOpen"
import { BusinessServiceRate } from "./BusinessServiceRate/BusinessServiceRate"


export const BusinessPage = (props) => {
    const {menuState, setMenuState} = props
    return(
        <>
            <Menu menuState={menuState} setMenuState={setMenuState} />
            <Header setMenuState={setMenuState} menuState = {menuState}/>
            <main>
                <BusinessOpen />
                <BusinessServiceRate/>
                <BusinessCredit />
                <BusinessLeasing />
                <BusinessAreaActivities />
            </main>
            <Footer />
        </>
    )    
}