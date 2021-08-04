import React from 'react'
import style from './Landing.module.css'
import img from '../../assets/ornament.png'
const Landing = () => {
    return (
        <div className={style.Landing}>
            <div className={style.Container}>


                <img  src={img} />
           
                <button className={style.ContactUsButton}>CONTACT US</button>
            </div>


        </div>
    )
}

export default Landing
