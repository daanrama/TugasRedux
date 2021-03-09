import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import PilihanKelas from './PilihanKelas'
import ListKelas from './ListKelas'

const RootStack = createStackNavigator();


const Navigasi = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name="List Kelas" component={ListKelas}/>
                <RootStack.Screen name="Pilihan" component = {PilihanKelas}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigasi
