
import styled, { css } from 'styled-components';
import LanguageIcon from '@material-ui/icons/Language';
import { useHistory } from "react-router";
import React from 'react'
function Login() {
    let history = useHistory();
    return (
      
        <Containers>
            <Header>
            <Typography onClick={(e) => history.push("/home")}>
                <img src="images/logo.svg" alt="Tesla" />
            </Typography>
            <Language>
                <Leftbutton>
                <LanguageIcon/>
                <p>en-us</p>
                </Leftbutton>
            </Language>
            </Header>
          
        </Containers>
    )
}

export default Login

const Typography = styled.div`
cursor:pointer;
`
const Containers = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;

`
const Header = styled.div`
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px
top:0;
left:0;
right:0;
z-index:1;
margin-left: 10px;
`

const Language = styled.div`
display:flex;
margin:2px;`

const Leftbutton = styled.div`

height:40px;
width:72px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
font-size:12px;
cursor:pointer;
margin:8px
hover{
    background-color:red
}`

const SignInContainer = styled.div`

`