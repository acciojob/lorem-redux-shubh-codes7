import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchApi = createAsyncThunk("fetchApi", () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
})

const loremSlice = createSlice({
    name: "lorem",
    initialState: {
        isLoading: true,
        isError: false,
        data: []
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApi.pending, (state, action) => {
            state.isLoading = true
        })

        builder.addCase(fetchApi.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })

        builder.addCase(fetchApi.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
        })
    }
})


export default loremSlice.reducer