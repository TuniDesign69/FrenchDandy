import React from 'react'
import style from "./Form.module.css"
const Form = () => {
    return (
        <div className={style.Container}>
            <h1>QUESTIONNAIRE</h1>
            <div  className={style.line}></div>
            <p className={style.parag}>Sign up to our news letter and be the first to discover our new exclusive collections</p>
            <input placeholder="Modèle" className={style.input}/>
            <input placeholder="Taille" className={style.input}/>
            <input placeholder="Numéro" className={style.input}/>
            <input placeholder="Email" className={style.input}/>
            <input placeholder="Adresse de livraison"  className={style.input}/>
            <button className={style.Command}>COMMANDEZ</button>
            <h1 style={{marginTop:"3%"}}>SUBSCRIBE</h1>
            <p className={style.parag}>Sign up to our news letter and be the first to discover our new exclusive collections</p>
            <div style={{display:"flex",flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center"}}><input placeholder="YOUR EMAIL" className={style.input1} /><button  className={style.button2}>SUBSCRIBE</button></div>
        </div>
    )
}

export default Form
