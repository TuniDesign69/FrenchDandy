import React from 'react'
import photo from '../../assets/vogue.png'
import {BannerContainer,BannerBG ,ImageBG,BannerH1,BannerContent} from '../Banner2/BannerElemetns'

const Banner = () => {
    return (
        <>
          <BannerContainer>
              <BannerBG>
                  <ImageBG src={photo}></ImageBG>
              </BannerBG>
              <BannerContent>
                  <BannerH1>“Every French Dandy product reflects the hard work put into it by the artisan. The main strength of the brand lies in the boldness which introduced each of our creation”</BannerH1>
              </BannerContent>
          </BannerContainer>  
        </>
    )
}

export default Banner
