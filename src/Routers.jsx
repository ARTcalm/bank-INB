import {Route, Routes, useLocation} from "react-router-dom"
import {Header} from "./components/Layout/Header/Header.jsx"
import { Footer } from "./components/Layout/Footer/Footer.jsx"
import { Menu } from "./components/Layout/Menu/Menu.jsx"
import { useEffect, useState } from "react"
import { CreditPage } from "./components/CreditPage/CreditPage.jsx"
import { BusinessPage } from "./components/BusinessPage/BusinessPage.jsx"
import { MainPage } from "./components/MainPage/MainPage.jsx"
import { CreditForm } from "./components/CreditPage/CreditForm/CreditForm.jsx"
import { ErrorPage } from "./components/ErrorPage/ErrorPage.jsx"
import { InvestPage } from "./components/InvestPage/InvestPage.jsx"

export const Routers = (props) => {
  const location = useLocation()
  const {dataQuotes} = props
  const [menuState, setMenuState] = useState(false)

  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);


  useEffect(() =>{
    if(menuState){document.body.style.overflowY = "hidden"}
    else{document.body.style.overflowY = "visible"}
  },[menuState])


  return(
    <>
      <Routes location={location} key={location.pathname} >
        <Route index element={<MainPage dataQuotes={dataQuotes} menuState={menuState} setMenuState={setMenuState} />}/>
        <Route path="business">
          <Route index  element={<BusinessPage menuState={menuState} setMenuState={setMenuState}/>} />
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
        <Route path="credit">
          <Route index element={<CreditPage menuState={menuState} setMenuState={setMenuState}/> } />
          <Route path="loan-form" element={<CreditForm />} />
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
        <Route path="invest">
          <Route index element={<InvestPage menuState={menuState} setMenuState={setMenuState}/>} />
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}
