import { Colors, windowHeight } from "@/Theme/Variables";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


export const styles = StyleSheet.create({
    signUpImage : {
        width:"100%",
        height: windowHeight * 0.55,
        backgroundColor:"#E5E5E5",
    },
    mainContainer: {
        flex:1,
        paddingHorizontal:RFValue(16),
        marginTop:RFValue(14.06)
    },
    titleStyle:{
        fontSize:RFValue(36),
        fontFamily:"Inter",
        fontWeight:"700",
        letterSpacing:0.2,
        color:Colors.green,
        textTransform:"uppercase",
        padding:0,
        margin:0,

    },
    subtitleStyle:{
        fontSize:RFValue(16),
        fontFamily:"Inter",
        fontWeight:"500",
        letterSpacing:0.2,
        color:Colors.black,
    },
    mobileInputContainer:{
        marginTop:RFValue(29),
    },
    mobileInputText:{
        fontSize:RFValue(14),
        color:Colors.darkGreen,
        fontWeight:"700"
    },
    mobileInput:{
        marginTop:RFValue(7),
        fontWeight:"700",
        borderRadius:RFValue(5)
    },
    buttonStyle:{
        marginTop:RFValue(37),
    }
    
})