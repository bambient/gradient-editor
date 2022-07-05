import Header from '../sections/Header';
import '../styles/globals.scss';
import { useState } from "react";


function MyApp(
  { Component, 
    ...pageProps }) {

    const [message, setMessage] = useState("hello");
    const [gradient, setGradient] = useState(null);

    return (
      <div className="page">
        <Header/>
        <Component gradient={gradient} setGradient={setGradient} {...pageProps}/>
      </div>
  )
}

export default MyApp

