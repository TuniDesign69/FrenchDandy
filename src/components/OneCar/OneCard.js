import React from 'react'
import style from './OneCard.module.css'
import photo from "../../assets/Yin.png"

const OneCard = ({title,content,foot,bg}) => {
    console.log({photo});

    return (
        <div className={style.Container} style={{backgroundImage: `url(${bg})`,backgroundRepeat:'no-repeat'}}>
            <h1>{title}</h1>
            <p style={{color:"white"}}>{content}</p>
            <h3 style={{color:"white"}}>{foot}</h3>
        </div>
    )
}

export default OneCard
