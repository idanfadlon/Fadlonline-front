import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "./colors";

export const Container = styled.View`
    flex: 1;
    align-items:"center";
    backgrond-color:${colors.white};
    `;
    
export const screenWdith = Dimensions.get("screen").width
export const screenHeight = Dimensions.get("screen").height
