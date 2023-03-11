import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { textProps } from "./types";

const SemiBoldTextStyle = styled.Text`
  font-size: 24px;
  text-align: left;
  font-family: Baloo2-SemiBold;
  
`;


const SemiBoldText:FunctionComponent<textProps> = (props)=>{
    return <SemiBoldTextStyle style={props.textStyles}> {props.children}</SemiBoldTextStyle>
}
export default SemiBoldText