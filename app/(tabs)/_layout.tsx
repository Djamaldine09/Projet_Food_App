import { Text, View } from "react-native";
import React from "react";
import { Redirect, Slot } from "expo-router";

export default function Layout(){
    const isAuthenticated = false; // Remplacez par votre logique d'authentification
    if (!isAuthenticated) return <Redirect href="/sign-in" />;

    return <Slot />;
}