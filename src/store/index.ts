import {configureStore,combineReducers} from '@reduxjs/toolkit';
import {useDispatch, useSelector, TypedUseSelectorHook,} from 'react-redux';
import commonReducer from './slices/common';
/*import profileReducer from './slices/profile'
import accountsReducer from './slices/accounts'
import banksReducer from './slices/banks'
import branchesReducer from './slices/branches'
*/

const reducers = combineReducers({
  common: commonReducer,
});


export const store = configureStore({
  reducer: reducers
});




// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useEazykhielSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useEazykhielDispatch = () => useDispatch<AppDispatch>();
