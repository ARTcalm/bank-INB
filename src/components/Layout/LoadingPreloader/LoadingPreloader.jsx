import style from './LoadingPreloader.module.css'

export const LoadingPreloader = () => {
    return(
        <div className={style.preloaderContainer}>
            <div className={style.preloader_spinner}></div>
        </div>
    )
}