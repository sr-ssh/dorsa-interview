import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer, // the cach reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(apiSlice.middleware),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export default store;
