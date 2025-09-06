import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";

export default function AuthLayout(){
    return (
        <SafeAreaView className="flex-1">
                <Text className="text-center text-lg font-quicksand-bold p-4">Welcome to the Auth Section</Text>
                <Slot />
               
           
        </SafeAreaView>
    );
}
