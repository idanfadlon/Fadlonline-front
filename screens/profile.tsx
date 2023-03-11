import React, { FunctionComponent} from "react";
import { View, StyleSheet, TextInput,TouchableOpacity,Image} from "react-native";
import profile from "../assets/profile.png"
//my components
import { colors } from "../components/colors";
import SemiBoldText from "../components/text/semiBoldText";
import MediumText from "../components/text/mediumText";




//TODO: implement funcionality

const PersonalProfile:FunctionComponent = () =>{
    return(
        <View style ={styles.wrapper}>
            <SemiBoldText textStyles={styles.title}>Edit Profile</SemiBoldText>
            <View style ={styles.profilePictureSection}>
                <Image style={styles.profileImg} source={profile}></Image>
                <SemiBoldText textStyles={styles.subTitle}>Profile Picture</SemiBoldText>
            </View>
            <View style = {styles.profileDetailsSection}>
                <SemiBoldText textStyles={styles.subTitle}>Full Name</SemiBoldText>
                <MediumText textStyles={styles.details}>Full Name</MediumText>
            </View>
            <View style = {styles.profileDetailsSection}>
                <SemiBoldText textStyles={styles.subTitle}>Email</SemiBoldText>
                <MediumText textStyles={styles.details}>Email</MediumText>
            </View>
            <View style = {styles.profileDetailsSection}>
                <SemiBoldText textStyles={styles.subTitle}>Password</SemiBoldText>
                <MediumText textStyles={styles.details}>Password</MediumText>
            </View>

        </View>
    )


}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:colors.white,
        width:"100%",
        height:"100%",
    },
    title:{
        fontSize:48,
        marginLeft:10,
        marginTop:40,
        color:colors.primary,
        
    },
    profilePictureSection:{
        fontSize:36,
        margin:20,
        backgroundColor:colors.secondary,
        alignItems:"center",

    },

    profileDetailsSection:{
        margin:20,
        backgroundColor:colors.secondary,

    },
    
    profileImg:{
        margin:10,
    },
    
    subTitle:{
        fontSize:36,
        color:colors.primary,
    },
    
    details:{
        color:colors.yellow,
        padding:10,
    }


})
export default PersonalProfile