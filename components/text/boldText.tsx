import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { textProps } from "./types";

const BoldTextStyle = styled.Text`
  font-size: 64px;
  font-family: Baloo2-Bold;
  
`;

const BoldText:FunctionComponent<textProps> = (props)=>{
    return <BoldTextStyle style={props.textStyles}> {props.children}</BoldTextStyle>
}
export default BoldText