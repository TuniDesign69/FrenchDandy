import React from 'react'
import style from "./Gallerie.module.css"
import ph1 from "../../assets/gallery01.png"
import ph2 from "../../assets/gallery02.png"
import ph3 from "../../assets/gallery03.png"
import ph4 from "../../assets/gallery04.png"
import ph5 from "../../assets/gallery05.png"
import ph6 from "../../assets/gallery06.png"
import about from "../../assets/ornament4.png"
const Gallerie = () => {
    return (
        <div className={style.Container}>
        <h1>GALLERY</h1>
        <div  className={style.line}></div>
        <div className={style.card}>
            <img src={ph1} style={{padding:"3%"}}/> <img src={ph2} style={{padding:"3%"}}/> <img src={ph3} style={{padding:"3%"}}/> <img src={ph4} style={{padding:"3%"}}/> <img src={ph5} style={{padding:"3%"}}/> <img src={ph6} style={{padding:"3%"}}/>
        </div>
        <button className={style.ContactUsButton}>EXPLORE MORE</button>
        <div className={style.About}>
            <div className={style.Text}>
                <h1>ABOUT US</h1>
                <p>French Dandy Int, is a French luxury goods manufacturer. The brand philosophy is relying on “fantaisie” and “elegance”. Every French Dandy product reflects the hard work put into it by the artisan. The main strength of the brand French Dandy lies in the boldness which introduced each of his creation.</p>
                <p>The ownership, management and leadership of the company is composed by Hamza Jamad, Creative Director of the house, who designs and manufactures French Dandy collections in an artisanal way. He has solid experience in the luxury industry in the Middle East (Qatar, Dubai). He has managed luxury stores and brand relationships, monitored sales performance and put in place marketing plans.</p>
                <div  className={style.line}></div>
            </div>
           <img src={about}/>
        </div>
        </div>
    )
}

export default Gallerie
