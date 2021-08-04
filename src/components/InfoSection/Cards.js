 import React from 'react'
import style from "./Cards.module.css"
import OneCard from '../OneCar/OneCard'
import img from '../../assets/firestone.png'
import img2 from '../../assets/princeps.png'
import  img3 from '../../assets/Yin.png'
import banner from '../../assets/cartier.png'
import collab from '../../assets/laboutin.png'
import paris from "../../assets/gallery03.png"
import imgCARTIER from "../../assets/ornament2.png"


 function Cards() {
     const tab=[{title:'FANTAISIE',content:"Free imagination without without constraint or rule.Creative faculty.",foot:"FIRESTONE",bg:"/static/media/firestone.67de9619.png"},
                {title:"ELEGANCE",content:"Tasteful richness and refined grace.",foot:"PRINCEPS",bg:"/static/media/princeps.17aa4c07.png"},
                {title:"AUDACE",content:"Courage to explore the unknown within.",foot:"YIN",bg:"/static/media/Yin.171fae3b.png"}]
               
                // eslint-disable-next-line no-restricted-globals
              const x=screen.width/2;

     return (
  <div className={style.Container}>
<h1>OUR PHILOSOPHY</h1>
<div  className={style.line}></div>
<div className={style.cards}>
{tab.map((e)=><OneCard title={e.title} content={e.content} foot={e.foot} bg={e.bg}/>)}
</div>
<div  className ="row"className={style.Events}>
  <div className={style.EventInfo}>
  <img  className={style.imgCARTIER}  src={imgCARTIER} />
<h1>AT CARTIER'S</h1>
<h1>EVENT</h1>
<p style={{color:"white" ,fontSize:'120%',padding:"0.5% 0 2% 0"}}>Such an amazing event</p>
<button className={style.ContactUsButton}>READ MORE</button>
  </div>
  
<img src={banner} className={style.images}/>
 
</div>
<div className={style.Collab}>

    <img src={collab} className={style.images} />

  <div className={style.EventInfo1}>
<h1>LOUBOUTIN COLLAB</h1>
<p style={{color:"wheat" ,fontSize:'180%',padding:"0.5% 0 2% 0",letterSpacing:"3px"}}>The real collab start now. It was an<br/> honor to dress <b></b></p>
<p style={{color:"#e2e1e1" ,fontSize:'180%',padding:"0.5% 0 2% 0",letterSpacing:"3px"}}><b>Mr.Christian Louboutin</b></p>
<button className={style.ContactUsButton1}>READ MORE</button>
  </div>
</div>
<div className={style.Events}>
  <div className={style.EventInfo2}>
<h1 style={{fontSize:"400%"}}>PARIS FASHION</h1>
<h1 style={{fontSize:"400%"}}>WEEK HAUTE</h1>
<h1 style={{fontSize:"400%"}}>COUTURE '19</h1>
<p style={{color:"white" ,fontSize:'170%',padding:"7.5% 0 2% 0",letterSpacing:"3px"}}>Designs : <b>DERMAUD</b> & <b>PRINCEPS</b></p>
<button className={style.ContactUsButton} style={{padding:"3% 15%"}}>READ MORE</button>
  </div>
  
<img src={paris} className={style.images}/>
 
</div>
  </div>
     )
 }
 
 export default Cards
 