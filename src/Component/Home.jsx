import React from 'react'
import styled, { css } from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <div>
            <Container>
                <Section
                    title="Model S"
                    Description=" Order Online for Touchless Delivery"
                    LeftBtnTxt="CUSTOM ORDER"
                    RightBtnTxt="EXISTING INVENTORY"
                    backgroundImg="model-s.jpg"
                />
                <Section
                    title="Model y"
                    Description=" Order Online for Touchless Delivery"
                    LeftBtnTxt="CUSTOM ORDER"
                    RightBtnTxt="EXISTING INVENTORY"
                    backgroundImg="model-y.jpg"
                />
                  <Section
                    title="Model 3"
                    Description=" Order Online for Touchless Delivery"
                    LeftBtnTxt="CUSTOM ORDER"
                    RightBtnTxt="EXISTING INVENTORY"
                    backgroundImg="model-3.jpg"
                />
                <Section
                    title="Model x"
                    Description=" Order Online for Touchless Delivery"
                    LeftBtnTxt="CUSTOM ORDER"
                    RightBtnTxt="EXISTING INVENTORY"
                    backgroundImg="model-x.jpg"
                />
              
                <Section
                    title="Lowest Cost Solar Panels in America"
                    Description=" Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                    LeftBtnTxt="ORDER NOW"
                    RightBtnTxt="LEARN MORE"

                    backgroundImg="solar-panel.jpg"
                   
                />
                   <Section
                    title="Solar for New Roofs"
                    Description=" Money-back guarantee"
                    LeftBtnTxt="ORDER NOW"
                    RightBtnTxt="LEARN MORE"
                    backgroundImg="solar-roof.jpg"
                />
                 <Section
                    title="Accessories"
                    LeftBtnTxt="ORDER NOW"
                    backgroundImg="accessories.jpg"
                />
            </Container>

        </div>
    )
}

export default Home

const Container = styled.div`
height:100vh`