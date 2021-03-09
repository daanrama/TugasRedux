import {TAMBAH, KURANG} from './type'

export const tambahList = (index) => ({
    type:TAMBAH,
    payload:index
});

export const kurangList = (index) => ({
    type:KURANG,
    payload:index
})