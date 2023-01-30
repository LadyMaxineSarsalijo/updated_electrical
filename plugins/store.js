import { configureStore } from '@reduxjs/toolkit'
//import authReducer from '../screens/Authentication/authSlice'
import deviceReducer from '../screen/components/deviceSlice'
import historyReducer from '../screen/components/HistorySlice'
import authReducer from '../screen/components/userSlice'

export default configureStore({
  reducer: {
    devices: deviceReducer,
    history: historyReducer,
    auth: authReducer
    
  },
 
})