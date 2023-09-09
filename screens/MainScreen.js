import React from 'react';
import { View, Text } from 'react-native'
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

const MainScreen = () => {
    return (

        <MyTabs />

    )
}

export default MainScreen;