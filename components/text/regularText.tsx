import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { textProps } from "./types";

const RegularTextStyle = styled.Text`
  font-size: 24px;
  text-align: left;
  font-family: Baloo2-Regular;
  
`;

const RegularText:FunctionComponent<textProps> = (props)=>{
    return <RegularTextStyle style={props.textStyles}> {props.children}</RegularTextStyle>
}
export default RegularText