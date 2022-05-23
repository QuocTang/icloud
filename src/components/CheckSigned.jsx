import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Label = styled.label`
    color: #494949;
    font-size: 17px;
    line-height: 1.29412;
    font-weight: 400;
    letter-spacing: -.021em;
    font-family: SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
    margin-left: 10px;
    opacity: 0.8;
`

const CheckBox = styled.input`
    font-size: 10px;
    cursor: poiter;
    opacity: 0.9;
`

const Wrapper = styled.div`
    display: block;
    padding-left: 6px;
    margin-top: 17px;
    margin-bottom: 0;
    color: #333;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
`

const TitleForgot = styled.a`
    margin-top: 35px;
    cursor: pointer;
    color: #0070C9;
    font-size: 15px;
    line-height: 1.29412;
    font-weight: 300;
    letter-spacing: -.021em;
    opacity: 0.9;
    font-family: SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
`



const CheckSigned = () => {
  return (
    <Container>
        <Wrapper>
            <CheckBox type='checkbox'/>
            <Label>Keep me signed in</Label>
        </Wrapper>
        <TitleForgot>Forgot Apple ID or password?</TitleForgot>
    </Container>
  )
}

export default CheckSigned