import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './slices/contacts';
import filterSlice from './slices/filter';
import { usefetchContactsQuery } from '../redux/operations'
import  contactsApi  from './operations';
import { setupListeners } from '@reduxjs/toolkit/query';


 const store = configureStore({
  reducer: {
    filterSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
export default store;
// export default setupListeners(store.dispatch);

