import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { colors } from "../Globalcolors/colors";

export const fonts = () => {
    const [fontsLoaded] = useFonts({
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'), // Corrected
    });
    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return true;
}

export const Theme = StyleSheet.create({
    h1: {
        fontSize: 18,
        // color: colors.h1Textcolor,
        fontFamily: "Poppins-Bold"
    },
    h2: {
        fontSize: 14,
        // color: colors.h1Textcolor,
        fontFamily: "Poppins-SemiBold"
    },
    h3: {
        fontSize: 14,
        // color: colors.h1Textcolor,
        fontFamily: "Poppins-Medium"
    },
    h4: {
        fontSize: 14,
        // color: colors.h1Textcolor,
        fontFamily: "Poppins-Regular"
    },
    input_styles: {
        borderWidth: 1,
        fontSize: 14,
        // color: colors.h1Textcolor,
        borderRadius: 6,
        borderColor: "rgba(224, 228, 234, 1)",
        paddingHorizontal: 10,
        // paddingVertical: 11,
        height: 50,
        fontFamily: "Poppins-Medium",
    },
    distancebetweenmobedges: {
        marginHorizontal: 18
    },
    buttons_fontstyle: {
        fontFamily: "Poppins-SemiBold",
        fontWeight: "500",
        fontSize: 16
    },
    error_message: {
        color: "#f41616",
        fontSize: 12,
        fontFamily: "Poppins-Regular"
    },
});