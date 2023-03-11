import React, { FunctionComponent} from "react";
import { View, StyleSheet, TextInput,TouchableOpacity} from "react-native";
// import styled from "styled-components/native";
import { colors } from "../components/colors";

// import { Container } from "../components/shared";
import LogoText from "../components/text/logoText";
import BoldText from "../components/text/boldText";
import RegularText from "../components/text/regularText";
import SemiBoldText from "../components/text/semiBoldText";


// const SignUpContainer = styled(Container)`
//     background-color:${colors.primary};
//     width: 100%;
//     height: 100%;
//     flex: 1;

// `;

const SignUpButtonPress = () =>{
    console.log("signup click")
}

const SignUpWithGooglePress = () =>{
    console.log("google signup click")
}

const SignInButtonPress = () =>{
    console.log("signin click")
}


const SignUp: FunctionComponent = () =>{
    return(
        <View style ={styles.container}>
            <LogoText>Fadlonline</LogoText>
            <BoldText textStyles = {styles.title}>Sign Up</BoldText>
            <RegularText textStyles={styles.textLabel}>Full Name</RegularText>
            <TextInput style = {styles.textInput}></TextInput>
            <RegularText textStyles={styles.textLabel}>Email</RegularText>
            <TextInput style = {styles.textInput}></TextInput>
            <RegularText textStyles={styles.textLabel}>Password</RegularText>
            <TextInput style = {styles.textInput}></TextInput>
            <RegularText textStyles={styles.textLabel}>Confirm password</RegularText>
            <TextInput style = {styles.textInput}></TextInput>
            <TouchableOpacity style = {styles.button} onPress={SignUpButtonPress}>
                <SemiBoldText>Signup</SemiBoldText>
            </TouchableOpacity>
            <TouchableOpacity onPress={SignUpWithGooglePress}>
                <RegularText textStyles={styles.signUpText}>Signup with google</RegularText>
            </TouchableOpacity>
            <TouchableOpacity onPress={SignInButtonPress}>
                <RegularText textStyles={styles.signUpText}>Already have account ? Sign In</RegularText>
            </TouchableOpacity>


            
        </View>
           
      
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        height:"100%",
        
        
    },
    title:{
        textAlign:'center',
        color:colors.yellow,
    },
    textLabel:{
        color:colors.secondary,
        width:"50%",
        textAlign:'left',
        marginVertical:5,
        padding: 10,
    },
    textInput:{
        height: 30,
        width:'95%',
        backgroundColor:colors.secondary,
        borderRadius: 5,
        padding: 10,
        marginLeft:10,
        marginRight:5,
    },
    button:{
        backgroundColor:colors.yellow,
        padding:5,
        alignSelf:"center",
        borderRadius:15,
        marginTop:5,
    },
    signUpText:{
        alignSelf:"center",
        color:colors.yellow,
        marginTop:6,
    },

    

})
export default SignUp