import React from 'react'
import TextField from '@material-ui/core/TextField';
import styled, { css } from 'styled-components';
import LoginHeader from './LoginHeader'
import LoginFooter from './LoginRegisterFooter'

function LoginPage() {
    return (
        
        <Container>
            <LoginHeader/>
            <Header>
                <h1>Sign In</h1>
            </Header>
            <FormContent>
                <h4>Email</h4>
                <CustomizedTextField />
                <h4>Password</h4>
                <CustomizedTextField />
            </FormContent>
            <TopButton>SignIn</TopButton>
            <ForgetData>

                <a>Forget email?</a>
                <p>|</p>
                <a>Forget Password?</a>

            </ForgetData>
            <BreakLine>
              <p>----------------------------or----------------------------</p>
            </BreakLine>

            <DownButton>Create Account</DownButton>
            
<LoginFooter/>
        </Container>
    )
}

export default LoginPage

const Container = styled.div`
position:relative;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height :100%
`

const Header = styled.div`
margin-top:100px;
margin-left:-295px;
margin-bottom:20px
`
const FormContent = styled.div`
h4{
    margin-top:20px;
    margin-bottom:20px;
    margin-left:-351px;
   
};
`

const CustomizedTextField = styled(TextField)`
background-color:rgba(220,225,232,0.8);
height:40px;
width:427px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
font-size:12px;
cursor:pointer;
margin:8px;
style:none;
`

const TopButton = styled.div`
background-color:rgba(13,76,199,0.8);
height:40px;
width:427px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
font-size:12px;
cursor:pointer;
margin:25px 20px 20px 20px`

const DownButton = styled(TopButton)`
border:1px solid black;
background-color:white;
color:black;
`

const ForgetData = styled.div`
display:flex;

a{
    margin-right:12px;
    margin-left:12px;
    cursor:pointer;
    font-size:12px;
    text-decoration: underline;
}
`

const BreakLine = styled.div`
margin-top:10px`