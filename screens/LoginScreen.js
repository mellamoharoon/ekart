import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontiso from 'react-native-vector-icons/Fontisto'
import Check from 'react-native-vector-icons/FontAwesome'


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={{flex: 1}}>
            <ImageBackground source={require('../assests/BG.png')} style={{flex: 1}}>
                <View style={tw`ml-auto`}>
                <Image source={require('../assests/Logo.png')} style={tw`h-20 w-20`} />
                <Text style={tw`ml-5 font-bold text-red-600`}>Ekart</Text>
                </View>
                <View style={tw`bg-white bg-opacity-50 mx-10 my-28 p-10 rounded-2xl`}>
                    <View style={tw`flex flex-row items-center`}>
                        <AntDesign name="mail" size={24} color='gray' />
                <TextInput secureTextEntry value={email} onChange={(text) => setEmail(text)}
                placeholder='Email' 
                />
                </View>
                <View style={tw`flex flex-row items-center`}>
                    <Fontiso name="locked" size={24} color="gray" />
                    <View>
                <TextInput secureTextEntry value={password} onChange={(text) => setPassword(text)}
                placeholder='Password'
                />
                <View style={tw`flex flex-row items-center`}>
                <View style={tw`flex flex-row items-center mr-5`}>
                        <Check name='check-circle' size={10} color="gray" />
                        <Text style={tw`text-sm`}>Remember me</Text>
                </View>
                <Text>Forgot password?</Text>
                </View>
                </View>
                </View>
                    <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
                        <View style={tw`bg-red-500 px-7 py-2 rounded-xl mt-7 mx-7`}>
                        <Text style={tw`text-white font-bold mx-auto text-xl shadow-xl`}>Login</Text>
                        </View>
                    </TouchableOpacity>
                <Text style={tw`mx-auto`}>Don't have an account <Text style={{textDecorationLine: 'underline'}}>Sign up</Text></Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
