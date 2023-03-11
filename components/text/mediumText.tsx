import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { textProps } from "./types";

const MediumTextStyle = styled.Text`
  font-size: 24px;
  text-align: left;
  font-family: Baloo2-Medium;
  
`;

const mediumText:FunctionComponent<textProps> = (props)=>{
    return <MediumTextStyle style={props.textStyles}> {props.children}</MediumTextStyle>
}
export default mediumText