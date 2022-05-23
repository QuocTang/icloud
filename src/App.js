import Nav from "./components/Nav";
import PostForm from "./components/PostForm";
import './App.css'
import Header from "./components/Header";
import CheckSigned from "./components/CheckSigned";
import Footer from "./components/Footer";
import bg from "./img/bg.png"

import styled from "styled-components";

const BG = styled.div`
  width: 100%;
  height: 540px;
  background-image: url(${bg});
`

function App() {
  return (
    <>
    <Nav/>
    <BG>
    <Header/>
    <PostForm/>
    <CheckSigned/>
    
    <Footer/>
    </BG>
    </>
  )

  
}

export default App;
