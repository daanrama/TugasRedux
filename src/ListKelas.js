import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import {kelas} from './DataKelas'

import { useDispatch } from 'react-redux'
import { tambahList } from './redux/action'

const klikAmbilKelas = (index) => {
    if(kelas.pilihan.includes(index) == false){
        kelas.pilihan.push(index);
    }else{
        alert(kelas.list[index]+" sudah pernah di ambil.");
    }
    kelas.pilihan.sort();    
    var daftar = '';
    var i = 0;
    kelas.pilihan.map((index)=>{
        i++;
        daftar = daftar+i+'. '+kelas.list[index]+'\n';
    })
    alert('Pilihan: \n'+daftar);
}

const ListKelas = ({navigation}) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.layarAtas}>
            {
                kelas.list.map((value,index)=>(
                    <View style={styles.listView} key={index}>
                        <Text style={styles.listText}>{value}</Text>
                        <TouchableOpacity onPress={()=>{klikAmbilKelas(index);dispatch(tambahList(index))}}>
                            <Text style={styles.listButton}>+</Text>
                        </TouchableOpacity>
                    </View>
                ))
            }
            <View>
                <Button 
                    title = "Lihat List Pilihan Kelas"
                    onPress={()=>navigation.navigate('Pilihan')}
                />
            </View>
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
        backgroundColor:'#DDDDDD',
        padding:5,
        paddingLeft:20,
        paddingRight:20
    }
})
export default ListKelas
