import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {kelas} from './DataKelas'

import { useSelector, useDispatch } from 'react-redux'
import { kurangList } from './redux/action'

const PilihanKelas = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    var pilihan = state.pilihan;
    return (
        <View style={styles.layarAtas}>
            {
                pilihan.map((value,index)=>(
                    <View style={styles.listView} key={index}>
                        <Text style={styles.listText}>{kelas.list[value]}</Text>
                        <TouchableOpacity style={styles.listButton} onPress={()=>dispatch(kurangList(index))}>
                            <Text style={styles.listTextButton}>x</Text>
                        </TouchableOpacity>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    layarAtas:{
        flex:1, 
        padding:10
    }, 
    listView:{
        borderBottomWidth:1,
        borderBottomColor:'#dedede',
        paddingTop:5,
        paddingBottom:5,
        flexDirection:'row'
    },
    listText:{
        flex:3,
        fontSize:20
    },
    listButton:{
        alignItems:'center',
        backgroundColor:'red',
        padding:5,
        paddingLeft:20,
        paddingRight:20
    },
    listTextButton:{
        color:'#FFFFFF'
    }
})

export default PilihanKelas
