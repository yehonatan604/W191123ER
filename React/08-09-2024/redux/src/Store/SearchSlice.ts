import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initalSearchState = {
    search: ""
} 

const SearchSlice = createSlice({
    name: "search",
    initialState: initalSearchState,
    reducers: {
        searchWord: (state: TSearchState, action: PayloadAction<string>) => {
            state.search = action.payload;
        }
    }
})

export type TSearchState = typeof initalSearchState;
export const searchActions = SearchSlice.actions;
export default SearchSlice.reducer;