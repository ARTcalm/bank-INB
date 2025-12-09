import style from "./SearchBlock.module.css"

export const SearchBlock = () => {
    return(
        <div className={style.searchBlockContainer}>
            <h1>Найдите своё решение</h1>
            <div className={style.searchContainer}>
                <svg xmlns="http://www.w3.org/2000/svg"><path d="M14.521 12.174l4.215 4.215a1.482 1.482 0 11-2.095 2.095l-4.165-4.165A7.407 7.407 0 01.837 8.24a7.408 7.408 0 1113.684 3.934zM3.237 8.24a5.008 5.008 0 1010.015 0 5.008 5.008 0 00-10.015 0z"  fill="currentColor" ></path></svg>
                <input type="textarea" name="search-on-page" placeholder="Ищите что-то конкретное?"/>
            </div>
        </div>
    )
}