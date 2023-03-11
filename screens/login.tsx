import React, { FunctionComponent} from "react";
import { View, StyleSheet, TextInput,TouchableOpacity} from "react-native";

//my components
import { colors } from "../components/colors";
import LogoText from "../components/text/logoText";
import BoldText from "../components/text/boldText";
import RegularText from "../components/text/regularText";
import SemiBoldText from "../components/text/semiBoldText";


//TODO: implement funcionality

const SignInButtonPress = () =>{
    console.log("sign in click")
}

const SignInWithGooglePress = () =>{
    console.log("google sign in click")
}

const ForgetPasswordButtonPress = () =>{
    console.log("Forget Password click")
}


const Login: FunctionComponent = () =>{
    return(
        <View style ={styles.container}>
            <LogoText>Fadlonline</LogoText>
            <BoldText textStyles = {styles.title}>Sign In</BoldText>
            <RegularText textStyles={styles.textLabel}>Email</RegularText>
            <TextInput style = {styles.textInput}></TextInput>
            <RegularText textStyles={styles.textLabel}>Password</RegularText>
            <TextInput style = {styles.textInput}></TextInput>
            <TouchableOpacity onPress={ForgetPasswordButtonPress}>
                <RegularText textStyles={styles.signInText}>Forget your password ?</RegularText>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={SignInButtonPress}>
                <SemiBoldText>Sign In</SemiBoldText>
            </TouchableOpacity>
            <TouchableOpacity onPress={SignInWithGooglePress}>
                <RegularText textStyles={styles.signInText}>Sign In with google</RegularText>
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
    signInText:{
        alignSelf:"center",
        color:colors.yellow,
        marginTop:6,
    },

    

})
export default Login