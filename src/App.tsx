import React from 'react';
import './App.scss';
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import imgBanner1 from './Banner/banner1.png'
import imgBanner2 from './Banner/banner2.png'

function App() {

  return (
    <div className="app__page">
      <HeaderSearch/>
      <div className={'app__body'}>
        <div className={'app__wrap-title'}>
          <div className={'app__title'}>
            <span>Представляем</span>
            <h1>
              Все лучшее впереди
            </h1>
          </div>
        </div>
        <div className={'app__wrap-banner'}>

          <img src={imgBanner1} alt={'banner'} className={'app__banner app__banner1'}/>
          <img src={imgBanner2} alt={'banner'} className={'app__banner2'}/>
        </div>
      </div>
    </div>
  );
}

export default App;
