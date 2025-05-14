import {configureStore} from '@reduxjs/toolkit'
import loremSlice from './loremSlice.js'

const store = configureStore({
    reducer: {
        lorem: loremSlice
    }
})

export default store