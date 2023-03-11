import React,{ FunctionComponent} from "react"
import { Image } from "react-native"
import styled from "styled-components/native"
//  my components
import { Container } from "../components/shared"
import splashImg from '../assets/fadlonlineSplash.png'

const SplashContainer = styled(Container)`
  width: 100%;
  height: 100%;
  
`;



const Splash:FunctionComponent = () =>{
    return(
      <SplashContainer>
         <Image source={splashImg}/>
      </SplashContainer>
       
      

  
    )
  }

export default Splash