    import React from 'react'
    import style from "./Cards.module.css"
    import { ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP } from './InfoSectionElements'
    const InfoSection = () => {
        return (
            <>
              <ServicesContainer >
                  <ServicesH1>OUR PHILOSOPHY</ServicesH1>
                  <div  className={style.line}></div>
                  <ServicesWrapper>
                      <ServicesCard>
                          <ServicesIcon/>
                          <ServicesH2>TEST2</ServicesH2>
                          <ServicesP>testp</ServicesP>
                      </ServicesCard>
                      <ServicesCard>
                          <ServicesIcon/>
                          <ServicesH2>TEST2</ServicesH2>
                          <ServicesP>testp</ServicesP>
                      </ServicesCard>
                      <ServicesCard>
                          <ServicesIcon/>
                          <ServicesH2>TEST2</ServicesH2>
                          <ServicesP>testp</ServicesP>
                      </ServicesCard>
                  </ServicesWrapper>
              </ServicesContainer>
            </>
        )
    }
    
    export default InfoSection
    