import Header from '../sections/Header';
import '../styles/globals.scss';
import { useState } from "react";


function MyApp(
  { Component, 
    ...pageProps }) {

    const [gradient, setGradient] = useState(null);

    return (
      <div className="page">
        <Header gradient={gradient}/>
        <Component gradient={gradient} setGradient={setGradient} {...pageProps}/>
      </div>
  )
}

export default MyApp

