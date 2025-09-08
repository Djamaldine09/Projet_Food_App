import { images } from "@/constants";
import { Slot, Redirect} from "expo-router";
import React from "react";
import useAuthStore from "@/store/auth.store";
import { Dimensions, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Image, View } from "react-native";

export default function AuthLayout(){

    const { isAuthenticated } = useAuthStore();

    if (isAuthenticated) return <Redirect href="/"/>;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView className="bg-white h-full" keyboardShouldPersistTaps="handled">
                <View className="w-full relative" style={{ height: Dimensions.get('screen').height / 2.25}}>
                    <ImageBackground source={images.loginGraphic} className="size-full rounded-b-lg" resizeMode="stretch"/>
                    <Image source={images.logo} className="self-center size-48 absolute -bottom-16 z-10"/>
                </View>
                <Slot />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
