import { Routers } from "./Routers"
import { useEffect, useState, } from "react"
import {LoadingPreloader} from "./components/Layout/LoadingPreloader/LoadingPreloader.jsx"
import {useLocation} from "react-router-dom"

export const App = (props) => {
  const {dataQuotes} = props;
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    
    // Имитация загрузки данных
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Время загрузки

    return () => clearTimeout(timer);
  }, [location.pathname]);


  return(
    <>
      {loading && <LoadingPreloader />}
      <Routers dataQuotes={dataQuotes} />
    </>
  )
}



