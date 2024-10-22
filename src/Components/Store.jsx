import { configureStore} from "@reduxjs/toolkit";
// import colorReducer from './Slice'
import todoReducer from './Slice'

const Store=configureStore({
    reducer:{
        // color:colorReducer,
        todo:todoReducer
    }
})
export default Store;