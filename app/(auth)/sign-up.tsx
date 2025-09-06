import { Text, View, Button  } from "react-native";
import { router } from "expo-router";

const SignUp = () => {
  return (
    <View className="flex-1 justify-center items-center">
        <Text className="text-lg font-quicksand-regular">Sign Up Screen</Text>
        <Button title="Sign In" onPress={() => router.push("/sign-in")} />
    </View>
  );
}
export default SignUp;