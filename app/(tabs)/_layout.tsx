import React from "react";
import { Redirect, Slot, Tabs } from "expo-router";
import useAuthStore from "@/store/auth.store";
import { Text,View, Image } from "react-native";
import { TabBarIconProps } from "@/type";
import { images } from "@/constants";
import cn from "clsx";
import { HeaderShownContext } from "@react-navigation/elements";

    const TabBarIcon = ({ focused, icon, title}: TabBarIconProps) => (
        <View className="flex justify-center items-center gap-2 min-w-20 min-h-full relative top-5">
            <Image source={icon} resizeMode="contain" className="size-5" tintColor={focused ? '#fe8c00' : '#5d5f6d'}/>
            <Text className={cn('text-sm font-bold', focused ? 'text-primary' : 'text-gray-200')}>{title}</Text>
            
        </View>
    )

export default function TabLayout(){
    const { isAuthenticated } = useAuthStore();
    if (!isAuthenticated) return <Redirect href="/sign-in" />;

    return (
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                marginHorizontal: 20,
                height: 80,
                position: 'absolute',
                bottom: 40,
                backgroundColor: 'white',
                shadowColor: '1a1a1a',
                shadowOffset: { width: 0, height: 2},
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 5
            }
        }}
        >
        <Tabs.Screen 
                    name="index" 
                    options={{ 
                        title: 'Home', 
                        tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} icon={images.home} title="Home" />
                        )
                             }}
        />
            <Tabs.Screen 
                    name="search" 
                    options={{ 
                        title: 'Search', 
                        tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} icon={images.search} title="Search" />
                        )
                             }}
        />
        <Tabs.Screen 
                    name="cart" 
                    options={{ 
                        title: 'Cart', 
                        tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} icon={images.bag} title="Cart" />
                        )
                             }}
        />
        <Tabs.Screen 
                    name="profil" 
                    options={{ 
                        title: 'Profil', 
                        tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} icon={images.person} title="Profil" />
                        )
                             }}
        />

        </Tabs>
    )
}