import {View, Text, Alert} from 'react-native'
import {Link, router} from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { useState } from 'react';
import { createUser } from '@/lib/appwrite';


const SignUp = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({ name:'' ,email: '', password: '' });

    const submit = async () => {
        const { name, email, password } = form;

        if(!name || !email || !password) return Alert.alert('Error', 'Please enter valid email address & password.');

        setIsSubmitting(true)

        try{
            await createUser({ email, password, name });

            router.replace('/');
        }catch(error: any){
            Alert.alert('Error', error.message);
        }finally{
            setIsSubmitting(false)
        }

    }

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">  
        

            <CustomInput
                     label="Full Name"
                        placeholder="Enter your full name"
                        keyboardType="email-address"
                        value={form.name}
                        onChangeText={(text) => setForm((prev) => ({...prev, name: text}))}
               />
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
               title='Sign Up'
               isLoading={isSubmitting}
               onPress={submit}
               />
               <View className='flex justify-center mt-2 flex-row gap-2 pb-5'>
                <Text className='text-lg font-quicksand text-gray-100'>Already have an account ? </Text>
                <Link href="/sign-in" className='text-lg font-quicksand-bold !important text-primary'>Sign In</Link>
               </View>
    </View>
  );
}
export default SignUp;