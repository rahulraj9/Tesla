import React from 'react'
import styled, { css } from 'styled-components';
function LoginRegisterFooter() {
    return (
       <ContainerFooter>
           <h5><a>Tesla ©</a>
           <a>Privacy & Legal</a>
           <a>Contact</a>
           </h5>
       </ContainerFooter>
    )
}

export default LoginRegisterFooter

const ContainerFooter = styled.div`
margin-top:30px;

a{
    margin-left:25px;
    cursor:pointer;
};

`
