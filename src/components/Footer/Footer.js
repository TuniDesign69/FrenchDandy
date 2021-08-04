import React from 'react'
import style from "./Footer.module.css"
import photo from "./logo_footer.png"
import { GrFacebookOption } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import { AiOutlineTwitter } from 'react-icons/ai'
const Footer = () => {
    return (
        <div className={style.Container}>
            <div className={style.Info}>
            <div className={style.Logo}>
<img src={photo}/> 
            </div>
            <div className={style.Text}>
             <p>French Dandy Int, is a French luxury goods manufacturer. The brand philosophy is relying on “fantaisie” and “elegance”.</p>
            </div>
            <div style={{width:"100%"}}>
            <div className={style.Contact}>
            
            <FiInstagram size={30} style={{backgroundColor:"white",borderRadius:"50%",padding:"4px"}} />
            <GrFacebookOption size={27} style={{backgroundColor:"white",borderRadius:"50%"}} />
            
            <AiOutlineTwitter size={29} style={{backgroundColor:"white",borderRadius:"50%",padding:"4px"}} />
            <ImWhatsapp size={30} style={{backgroundColor:"white",borderRadius:"50%",padding:"4px"}} />
             </div>
             </div>
            </div>
            <div className={style.footerHalf}>
                <div className={style.Bricks}>
                    <h3>ABOUT</h3>
                    <ul>
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Brand Guidelines</li>
                        <li>Terms&Conditons</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className={style.Bricks}>
                <h3>SERVICES</h3>
                    <ul>
                    
                        <li>How To Order</li>
                        <li>Our Product</li>
                        <li>Order Status</li>
                        <li>Promo</li>
                        <li>Payment Method</li>
                    </ul>
                </div>
                <div className={style.Bricks}>
                <h3>OTHER</h3>
                    <ul>
                    <li>Contact Us</li>
                        <li>Help</li>
                        <li>Privacy</li>
                    </ul>
                </div>


            </div>
            
        </div>
    )
}

export default Footer
