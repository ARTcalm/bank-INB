import { MainCredit } from "./MainCredit/MainCredit"
import { MainQuotes } from "./MainQuotes/MainQuotes"
import { MainCardSlider } from "./MainCardSlider/MainCardSlider"
import { MainDeposit } from "./MainDeposit/MainDeposit"
import { MainApp } from "./MainApp/MainApp"
import { MainServices } from "./MainServices/MainServices"
import { MainOptions } from "./MainOptions/MainOptions"
import { SearchBlock } from "../SearchBlock/SearchBlock"
import { Footer } from "../Layout/Footer/Footer"
import { Header } from "../Layout/Header/Header"
import { Menu } from "../Layout/Menu/Menu"

export const MainPage = (props) =>{
    const {dataQuotes, menuState, setMenuState} = props

    return(
        <>
            <Menu menuState={menuState} setMenuState={setMenuState} />
            <Header setMenuState={setMenuState} menuState = {menuState}/>
            <main>
                <MainQuotes dataQuotes={dataQuotes}/>
                <MainCredit/>
                <MainCardSlider />
                <MainDeposit />
                <MainApp/>
                <MainServices />
                <MainOptions />
                <SearchBlock />
            </main>
            <Footer />
        </>
    )
}