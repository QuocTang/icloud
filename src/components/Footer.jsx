import React from 'react'
import styled from 'styled-components'
import { mobile } from '../reponsive'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 112px;
    ${mobile({flexWrap: "wrap", width: "349px"})}
`

const ContentSpan = styled.span`
  color: rgba(0,0,0,.5);
  line-height: 1.8;
  text-align: center;
  font-family: SFUIText,Helvetica Neue,sans-serif;
  font-size: 11.5px;
  font-weight: 500;
  white-space: pre;
  opacity: 0.9;
  ${mobile({fontSize: "10px", paddingLeft: "30px", fontWeight: "600"})}
`

const ContentA = styled.a`
  color: rgba(0,0,0,.5);
  line-height: 1.8;
  font-family: SFUIText,Helvetica Neue,sans-serif;
  font-size: 11.5px;
  font-weight: 500;
  white-space: pre;
  opacity: 0.9;
  ${mobile({fontSize: "10px", fontWeight: "600"})}
`

const Footer = () => {
  return (
    <Container>
        <ContentSpan>
            <ContentA>Create Apple ID  |  </ContentA>
            <ContentA>System Status  |  </ContentA> 
            <ContentA>Privacy Policy |  </ContentA>
            <ContentA>Terms & Conditions  |  </ContentA> 
        </ContentSpan>
        <ContentSpan>Copyright © 2022 Apple Inc. All rights reserved.</ContentSpan>
    </Container>
  )
}

export default Footer