import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import NotesScreen from './NotesScreen';
import ShoppingListScreen from './ShoppingListScreen'
import RecipesScreen from './RecipesScreen'
import TaskScreen from './TasksScreen'



const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tasks" component={TaskScreen} />
            <Tab.Screen name="Shopping List" component={ShoppingListScreen} />
            <Tab.Screen name="Recipes" component={RecipesScreen} />
            <Tab.Screen name="Notes" component={NotesScreen} />
        </Tab.Navigator>
    );
}

const MainScreen = (props) => {
    return (
        <View>
            <Text>Main Screen</Text>
            <TouchableOpacity onPress={() => { console.log('Navigating'); props.navigation.navigate('QRScreen') }}><Text>QR</Text></TouchableOpacity>
            <MyTabs />
        </View>

    )
}

export default MainScreen;