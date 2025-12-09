import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { BrowserRouter, useLocation } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const apiUrlCBRQuotes = `https://www.cbr-xml-daily.ru/daily_json.js`;
  let responseCBRQuotes = await fetch(apiUrlCBRQuotes)
  let jsonDataQuotes = await responseCBRQuotes.json()
  const dataQuotes = [
    {...jsonDataQuotes.Valute.USD, image:"/img/QuoteIconUSD.svg"},
    {...jsonDataQuotes.Valute.EUR, image:"/img/QuoteIconEUR.svg"},
    {...jsonDataQuotes.Valute.CNY, image:"/img/QuoteIconCNY.svg"},
  ]
  console.log(jsonDataQuotes)
  

root.render(
  <BrowserRouter >
      <App dataQuotes={dataQuotes}/>
  </BrowserRouter>
);
