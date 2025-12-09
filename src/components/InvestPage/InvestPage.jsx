import { Footer } from "../Layout/Footer/Footer"
import { Header } from "../Layout/Header/Header"
import { Menu } from "../Layout/Menu/Menu"
import { InvestAccountForm } from "./InvestAccountForm/InvestAccountForm"
import { InvestActivity } from "./InvestActivity/InvestActivity"
import { InvestAdvatanges } from "./InvestAdvantages/InvestAdvantages"
import { InvestStockSlider } from "./InvestStockSlider/InvsestStockSlider"
import { SearchBlock } from "../SearchBlock/SearchBlock"


export const InvestPage = (props) =>{
    
    const {menuState, setMenuState} = props

    return(
        <>
            <Menu menuState={menuState} setMenuState={setMenuState} />
            <Header setMenuState={setMenuState} menuState = {menuState}/>
            <main>
                <InvestStockSlider />
                <InvestActivity />
                <InvestAccountForm />
                <InvestAdvatanges />
                <SearchBlock />
            </main>
            <Footer />
        </>
    )
}