import style from "./MainApp.module.css"

export const MainApp = () => {
    return(
        <div className={style.appMainContainer}>
            <h1>Более 2 млн людей выбрали <a>INB</a></h1>
            <div className={style.appDescContainer}>
                <img src="/img/INBDownloadIcon.svg" className={style.appIcon} />
                <div className={style.appDownloadDesc}>
                    <h1>Мобильное приложение <a>INB</a></h1>
                    <p>Проверяйте баланс, оплачивайте услуги, получайте помощь<br/> в чате 24/7</p>
                    <div className={style.appButtonsContainer}>
                        <a href="https://www.apple.com/app-store"><img src="/img/iosDownload.svg" style={{boxShadow:"0px 0px 30px #29133dff", borderRadius:"32px"}}/></a>
                        <a href="https://www.rustore.ru"><img src="/img/androidDownload.svg" style={{boxShadow:"0px 0px 30px #29133dff", borderRadius:"32px"}}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}