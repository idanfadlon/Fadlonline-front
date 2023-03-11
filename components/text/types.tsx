import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface textProps{
    textStyles?:StyleProp<TextStyle>
    children: ReactNode
}