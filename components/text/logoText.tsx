import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { textProps } from "./types";

const LogoTextStyle = styled.Text`
  font-size: 72px;
  text-align: center;
  font-family: LeckerliOne-Regular;
  color:${colors.yellow}
  margin-top:60;
  
`;

const LogoText:FunctionComponent<textProps> = (props)=>{
    return <LogoTextStyle style={props.textStyles}> {props.children}</LogoTextStyle>
}
export default LogoText