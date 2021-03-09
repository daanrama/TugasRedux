import {TAMBAH,KURANG} from './type'
import {kelas} from '../DataKelas'

export const reducerKelas = (state=kelas,action) => {
    switch(action.type){
        case TAMBAH:
            console.log('PROSES TAMBAH');
            return {...state,pilihan:klikAmbilKelas(action.payload)}
        case KURANG:
            console.log('PROSES KURANG');
            return {...state,pilihan:klikKurangKelas(action.payload)}
    }
}

const klikAmbilKelas=(index)=>{
    if(kelas.pilihan.includes(index) == false){
        kelas.pilihan.push(index);
    }
    kelas.pilihan.sort();
    return kelas.pilihan;
}

const klikKurangKelas = (index) => {
    kelas.pilihan.splice(index,1);
    kelas.pilihan.sort();
    return kelas.pilihan;
}