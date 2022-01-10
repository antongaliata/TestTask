import './header.scss'
import {ImgArrow, ImgSearch} from "./Img";
import {useEffect, useRef, useState} from "react";

const HeaderSearch = () => {
  const [isShowInput, setIsShowInput] = useState(false)
  const [isActiveButt, setIsActiveButt] = useState(false)
  const rootEl = useRef(null);

  useEffect(() => {
    // @ts-ignore
    const onClick = e => rootEl.current.contains(e.target) || setIsActiveButt(false)
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);


  return <div
    className={`header-search`}>
    <div className={`header-search__wrap-search ${isShowInput ? 'header-search__search-active' : 'header-search__search-disabled'}`}>
      <div className={'header-search__input-container'}
           ref={rootEl}
           onClick={() => {
             setIsActiveButt(true)
           }}>
        <input className={`header-search__input ${isActiveButt && 'header-search__active-input'}`}
               placeholder={'Начать поиск'}/>
        <div className={`header-search__search-button ${isActiveButt && 'active-butt'} `}>
          {isActiveButt ? 'Найти' : <ImgSearch/>}
        </div>
      </div>
      <div className={`header-search__wrap-arrow ${isShowInput ? 'header-search__arrow-open' : 'header-search__arrow-closed'}`}
           onClick={() => {
             setIsShowInput(!isShowInput)
           }
           }>
        <ImgArrow/>
      </div>
    </div>




  </div>

}

export default HeaderSearch;