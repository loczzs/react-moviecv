import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "apis/movieAPI";
const initialState = {
 
  isLoading: false,
  error: null,
  
  users:[],
  updateuser:[],
};
export const getUser = createAsyncThunk(
  "admin/movielist/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const data = await movieAPI.getUser();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getDetailss = createAsyncThunk(
  "admin/movielist/getDetailuser",
  async (title, { rejectWithValue }) => {
    console.log(title)
    try {
      const data = await movieAPI.getuserDetail(title);
      console.log(data)
      
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const UpdateUsers = createAsyncThunk(
  "admin/update/users",
  async (title, { rejectWithValue ,dispatch}) => {
    console.log(title)
    try {
      const data = await movieAPI.updateuser(title);
      console.log(data)
      dispatch(getUser())
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)
export const adduser = createAsyncThunk(
  "admin/adduser",
  async (title, { rejectWithValue,dispatch }) => {
    try {
      const data = await movieAPI.addUser(title);
      dispatch(getUser())
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)
export const DeleteUser = createAsyncThunk(
  "admin/deleteUser",
  async (title, { rejectWithValue,dispatch }) => {
    try {
      console.log(title)
      const data = await movieAPI.DeleteUser(title.userid,title.acces);
      dispatch(getUser())
    } catch (error) {
        console.log(error)
      return rejectWithValue(error);
    }
  }
)

const useradSlice = createSlice({
  name:"admin/movielist",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.users = payload;
      state.isLoading = false;
    });
    builder.addCase(getUser.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });

    builder.addCase(getDetailss.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDetailss.fulfilled, (state, { payload }) => {
      state.updateuser = payload;
      state.isLoading = false;
    });
    builder.addCase(getDetailss.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
  // sacasa:(builder)=>{
  //   builder.addCase(getDetail.pending, (state) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(getDetail.fulfilled, (state, { payload }) => {
  //     state.updateMovie = payload;
  //     state.isLoading = false;
  //   });
  //   builder.addCase(getDetail.rejected, (state, { payload }) => {
  //     state.error = payload;
  //     state.isLoading = false;
  //   });
  

  // }
})
export default useradSlice.reducer
