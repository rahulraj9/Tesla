import React from 'react'
import styled, { css } from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu'
function AppBar() {
    return (
        <Container>
            <a>
                <img src="images/logo.svg" alt="Tesla" />
            </a>
            <Menu>
                 <a href="#">MODEL S</a> 
                 <a href="#">MODEL 3</a> 
                 <a href="#">MODEL X</a> 
                 <a href="#">MODEL Y</a> 
                 <a href="#">SOLAR ROOF</a> 
                 <a href="#">SOLAR PANNEL</a> 
            </Menu>

            <RightMenu>
                 <a href="#">SHOP</a> 
                 <a href="#">TESLA ACCOUNT</a> 
                <CustomMenu/>
            </RightMenu>
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
