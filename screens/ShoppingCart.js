import React, {useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Searchbar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'

const ShoppingCart = ({navigation}) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [quantityWatch, setQuantityWatch] = useState(1)
    const [quantityYoga, setQuantityYoga] = useState(1)
    const [quantityBracelet, setQuantityBracelet] = useState(1)

    const onChangeSearch = query => setSearchQuery(query);  
    return (
        <View>
            <View style={tw`flex flex-row justify-between items-center`}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assests/menu.png')} style={tw`h-10 w-10 ml-5`} />
                </TouchableOpacity>
                <Image source={require('../assests/Logo.png')} style={tw`h-14 w-14 mr-2`} />
            </View>
            <View style={tw`mx-5`}>
            <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>
    <View style={tw`flex flex-row justify-around`}>
        <View>
        <Image source={require('../assests/watch.png')} style={tw`w-32 h-32`} />
        <View style={tw`flex flex-row items-center justify-between px-2 py-1 bg-gray-300 mx-5 rounded-md`}>
            <Icon onPress={() => setQuantityWatch((prev) => prev + 1)} name='pluscircleo' size={20} color='black' />
            <Text>{quantityWatch}</Text>
            <Icon onPress={() => setQuantityWatch((prev) => prev - 1)} name='minuscircleo' size={20} color='black' />
        </View>
        </View>
        <View>
        <Text style={tw`font-bold text-lg`}>Quetry Watch</Text>
        <Text style={tw`font-bold text-lg`}>Leather strap</Text>
        <Text style={tw`font-bold text-xl`}>₹{12000 * quantityWatch}</Text>
        <Text style={tw`font-bold`}>Color: <Text>Brown</Text></Text>
        <Text style={tw`text-green-400`}>In stock</Text>
        <View style={tw`flex flex-row mt-2`}>
        <TouchableOpacity>
            <View style={tw`border-2 border-red-500 px-2 py-1 mr-2 rounded-xl`}>
                <Text style={tw`text-red-500 font-bold`}>Delete</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={tw`bg-yellow-600 py-1 px-2 rounded-xl`}>
                <Text style={tw`text-white font-bold`}>See more like this</Text>
            </View>
        </TouchableOpacity>
        </View>
        </View>
    </View>
    <View style={tw`flex flex-row justify-around`}>
        <View>
        <Image source={require('../assests/yoga.png')} style={tw`w-32 h-32`} />
        <View style={tw`flex flex-row items-center justify-between px-2 py-1 bg-gray-300 mx-5 rounded-md`}>
            <Icon onPress={() => setQuantityYoga((prev) => prev + 1)} name='pluscircleo' size={20} color='black' />
            <Text>{quantityYoga}</Text>
            <Icon onPress={() => setQuantityYoga((prev) => prev - 1)} name='minuscircleo' size={20} color='black' />
        </View>
        </View>
        <View>
        <Text style={tw`font-bold text-lg`}>Yoga mat</Text>
        <Text style={tw`font-bold text-lg`}>Lorem ipsum</Text>
        <Text style={tw`font-bold text-xl`}>₹{1000 * quantityYoga}</Text>
        <Text style={tw`font-bold`}>Color: <Text>Blue</Text></Text>
        <Text style={tw`text-green-400`}>In stock</Text>
        <View style={tw`flex flex-row mt-2`}>
        <TouchableOpacity>
            <View style={tw`border-2 border-red-500 px-2 py-1 mr-2 rounded-xl`}>
                <Text style={tw`text-red-500 font-bold`}>Delete</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={tw`bg-yellow-600 py-1 px-2 rounded-xl`}>
                <Text style={tw`text-white font-bold`}>See more like this</Text>
            </View>
        </TouchableOpacity>
        </View>
        </View>
    </View>
    <View style={tw`flex flex-row justify-around`}>
        <View>
        <Image source={require('../assests/bracelet.png')} style={tw`w-32 h-32`} />
        <View style={tw`flex flex-row items-center justify-between px-2 py-1 bg-gray-300 mx-5 rounded-md`}>
            <Icon onPress={() => setQuantityBracelet((prev) => prev + 1)} name='pluscircleo' size={20} color='black' />
            <Text>{quantityBracelet}</Text>
            <Icon onPress={() => setQuantityBracelet((prev) => prev - 1)} name='minuscircleo' size={20} color='black' />
        </View>
        </View>
        <View>
        <Text style={tw`font-bold text-lg`}>Anchor Bracelet</Text>
        <Text style={tw`font-bold text-lg`}>Lorem ipsum</Text>
        <Text style={tw`font-bold text-xl`}>₹{500 * quantityBracelet}</Text>
        <Text style={tw`font-bold`}>Color: <Text>Gold</Text></Text>
        <Text style={tw`text-green-400`}>In stock</Text>
        <View style={tw`flex flex-row mt-2`}>
        <TouchableOpacity>
            <View style={tw`border-2 border-red-500 px-2 py-1 mr-2 rounded-xl`}>
                <Text style={tw`text-red-500 font-bold`}>Delete</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={tw`bg-yellow-600 py-1 px-2 rounded-xl`}>
                <Text style={tw`text-white font-bold`}>See more like this</Text>
            </View>
        </TouchableOpacity>
        </View>
        </View>
    </View>
    <Text style={tw`font-bold text-lg mx-auto mt-5`}>₹{(quantityWatch * 12000) + (quantityYoga * 1000) + (quantityBracelet * 500)}</Text>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <View style={tw`px-3 py-3 bg-red-500 mx-5 rounded-lg`}>
        <Text style={tw`text-white font-bold mx-auto`}>Proceed to buy (3 items)</Text>
    </View>
    </TouchableOpacity>
        </View>
    )
}

export default ShoppingCart

const styles = StyleSheet.create({})
