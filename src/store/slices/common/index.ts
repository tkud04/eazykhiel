import { createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define a type for the slice state
interface CommonState {
  isAppReady: boolean
  isFirstTimeLaunch: boolean
  email: string
  role: string
}

// Define the initial state using that type
const initialState: CommonState = {
  isFirstTimeLaunch: true,
  isAppReady: false,
  email: '',
  role: 'user'
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAppReady: (state, action: PayloadAction<boolean>) => {
      state.isAppReady = action.payload;
    },
    setFirstTimeLaunch: (state, action: PayloadAction<boolean>) => {
      state.isFirstTimeLaunch = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
        state.email = action.payload;
    },
    setRole: (state, action: PayloadAction<string>) => {
        state.role = action.payload;
    }
  },
});

export const {setAppReady, setFirstTimeLaunch,setEmail,setRole} = userSlice.actions;

export default userSlice.reducer;
