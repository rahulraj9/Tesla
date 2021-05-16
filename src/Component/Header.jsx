import React,{useState} from 'react'
import styled, { css } from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import {selectCars} from '../Redux/Cars/CarSlice'
import {useSelector} from 'react-redux'

function AppBar() {
    const[burgerStatus,setBurgerStatus]=useState(false)
    const cars = useSelector(selectCars)
    console.log(cars);
    return (
        <Container>
            <a>
                <img src="images/logo.svg" alt="Tesla" />
            </a>
            <Menu>
                {cars && cars.map((car,index)=>(
                    <a href="#">{car}</a> 

                )
                )}
                 {/* <a href="#">MODEL S</a> 
                 <a href="#">MODEL 3</a> 
                 <a href="#">MODEL X</a> 
                 <a href="#">MODEL Y</a> 
                 <a href="#">SOLAR ROOF</a> 
                 <a href="#">SOLAR PANNEL</a>  */}
            </Menu>

            <RightMenu>
                 <a href="#">SHOP</a> 
                 <a href="#">TESLA ACCOUNT</a> 
                <CustomMenu
                onClick={()=>setBurgerStatus(true)}
                />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <Closewrapper><Customclose  onClick={()=>setBurgerStatus(false)}/></Closewrapper>
                
                <li><a href="#">EXISTING INVENTORY</a></li>
                <li><a href="#">USED INVENTORY</a></li>
                <li><a href="#">TRADE-IN</a></li>
                <li><a href="#">CYBERTRUCK</a></li>
                <li><a href="#">ROADSTER</a></li>
                <li><a href="#">SEMI</a></li>
                <li><a href="#">CHARGING</a></li>
                <li><a href="#">POWERWALL</a></li>
                <li><a href="#">COMMERCIAL ENERGY</a></li>
                <li><a href="#">UTILITIES</a></li>
                <li><a href="#">TEST DRIVE</a></li>
                <li><a href="#">FIND US</a></li>
                <li><a href="#">SUPPORT</a></li>
                <li><a href="#">Hamburger Mobile Secondary</a></li>
                <li><a href="#">UNITED STATES</a></li>
            </BurgerNav>
        </Container>
    )
}

export default AppBar

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px
top:0;
left:0;
right:0;
z-index:1;
`
const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
    font-weight:600;
    padding:0 10px;
    flex-wrap:nowrap
}
@media(max-width:768px){
    display:none;
}
` 
const RightMenu = styled.div`
display:flex;
align-items:center;
a{
    font-weight:600;
   margin-right:10px;
    flex-wrap:nowrap
}
`

const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav  = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform:${props=>props.show ? 'translateX(0)':'translateX(100%)'};
transition:transform 0.4s ease-in;
li{
    padding:15px 0;
    border-bottom:1px solid rgba(0, 0, 0, .2);
    a{
        font-weight:600;
    }
}`

const Customclose = styled(CloseIcon)`
`

const Closewrapper = styled.div`
display:flex;
justify-content:flex-end`