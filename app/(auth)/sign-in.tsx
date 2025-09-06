import { Text, View, Button  } from "react-native";
import { router } from "expo-router";

const SignIn = () => {
  return (
    <View className="flex-1 justify-center items-center">  
        <Text className="text-lg font-quicksand-regular">Sign In Screen</Text>
        <Button title="Sign Up" onPress={() => router.push("/sign-up")} />
    </View>
  );
}
export default SignIn;