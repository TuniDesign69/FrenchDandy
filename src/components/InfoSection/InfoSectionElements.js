 import styled from "styled-components";
import img from '../../assets/firestone.png'
 export const ServicesContainer= styled.div`
  height: 700px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background: #0c0c0c;

 @media screen and (max-width: 768px)
 {
  
     height: 1100px;
 }
 @media screen and (max-width: 480px){

      height:1300 px ;
 }
 `
 export const ServicesWrapper= styled.div`

 margin: 0 auto;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 align-items: center;
 grid-gap: 16px;
 padding: 0 50px;

 @media screen and (max-width: 1000px){
     grid-template-columns: 1fr 1fr;
 }
 @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 2px;
}
 `
 export const ServicesCard = styled.div`
 background: #fff;
 background-image: url(${img});
 display: flex;
 flex-direction: flex-start;
 align-items : center ;
 border-radius: 10px;

 padding: 30px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.2);
 transition: all 0.2s ease-in-out;

 &:hover{
     transform: scale(1.02);
     transition: all 0.2s ease-in-out;
     cursor:pointer;
 }
 
 `

 export const ServicesIcon= styled.img`
 height: 360px;
 width: 160px;
 margin-bottom: 10px;
 `
 export const ServicesH1 = styled.h1`
 
 font-size: 2.5 rem;
 color: #fff;
 margin-bottom: 30px;

 @media screen and (max-width: 480px){

    font-size: 2rem;
 }
 `;
 export const ServicesH2 =styled.h2`
 font-sire: 1 rem;
 margin-bottom:10px;
 `;

 export const ServicesP =styled.p`
 
 font-size: 1rem;
 text-align: center;
 `