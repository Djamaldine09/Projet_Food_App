import {View, Text, Alert} from 'react-native'
import {Link, router} from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { useState } from 'react';
import { signIn } from '@/lib/appwrite';
import * as Sentry from "@sentry/react-native";


const SignIn = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({ email: '', password: '' });

    const submit = async () => {
        const { email, password } = form;

        if(!email || !password) return Alert.alert('Error', 'Please enter valid email address & password.');

        setIsSubmitting(true)

        try{

            await signIn({ email, password });
            router.replace('/');
        }catch(error: any){
            Alert.alert('Error', error.message);
            Sentry.captureEvent(error);
        }finally{
            setIsSubmitting(false)
        }

    }

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">  

            <CustomInput
                     label="Email"
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        value={form.email}
                        onChangeText={(text) => setForm((prev) => ({...prev, email: text}))}
               />
               <CustomInput
                     label="Password"
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        value={form.password}
                        onChangeText={(text) => setForm((prev) => ({...prev, password: text}))}
               />
               <CustomButton
               title='Sign In'
               isLoading={isSubmitting}
               onPress={submit}
               />
               <View className='flex justify-center mt-5 flex-row gap-2 '>
                <Text className='text-lg font-quicksand text-gray-100'>Don&apos;t have an account? </Text>
                <Link href="/sign-up" className='text-lg font-quicksand-bold !important text-primary'>Sign Up</Link>
               </View>
    </View>
  );
}
export default SignIn;