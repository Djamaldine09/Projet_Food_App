import { images } from "@/constants"; // Ajout de l'import
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CartButton = () => {
    const totalItems = 10; // Example item count
  return (
    <TouchableOpacity className="flex items-center justify-center size-10 rounded-full bg-black" onPress={()=> {}}>
      <Image className="size-5" source={images.bag} resizeMode='contain' />
      {totalItems > 0 && (
        <View className="absolute -top-2 -right-1 flex items-center justify-center size-5 bg-primary rounded-full">
          <Text className="text-xs font-quicksand-bold text-white">{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
    );
};

export default CartButton;

