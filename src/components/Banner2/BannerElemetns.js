import styled from "styled-components"

export const BannerContainer = styled.div`
background: #000;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px ;
height: 900px;
position: relative;
z-index:  1;
`

export const BannerBG= styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden ;
`

export const ImageBG = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`
export const BannerContent = styled.div`
z-index: 3 ;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
` 

export const BannerH1=styled.h2`
color: #fff;
font-size: 200% ;
text-align: center;
letter-spacing:3px;
text-shadow: black ;
font-weight: 100;
text-shadow: 2px 2px black;

`