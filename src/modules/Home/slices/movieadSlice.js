import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "apis/movieAPI";
const initialState = {
  movies: [],
  isLoading: false,
  error: null,
  updateMovie: [],
};
export const getMovie = createAsyncThunk(
  "admin/movielist/getMovie",
  async (_, { rejectWithValue }) => {
    try {
      const data = await movieAPI.getMovies();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getDetail = createAsyncThunk(
  "admin/movielist/getDetailMovie",
  async (title, { rejectWithValue }) => {
    try {
      const data = await movieAPI.getMovieDetails(title);
      console.log(data)
      
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const updateMovies = createAsyncThunk(
  "admin/update/movie",
  async (title, { rejectWithValue ,dispatch}) => {
    console.log(title)
    try {
      const datazzs= await movieAPI.UpdateMovie(title);
      // console.log(datazzs)
      dispatch(getMovie())
    } catch (error) {
      // console.log(error)
      return rejectWithValue(error);
    }
  }
)
export const addmovie = createAsyncThunk(
  "admin/addmovie",
  async (title, { rejectWithValue,dispatch }) => {
    try {
      const data = await movieAPI.addMovie(title);
      // dispatch(getMovie())
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
)
export const DeleteMovie = createAsyncThunk(
  "admin/deletemovie",
  async (title, { rejectWithValue,dispatch }) => {
    try {
      console.log(title)
      const data = await movieAPI.DeleteMovie(title.movieId,title.acces);
      dispatch(getMovie())
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

const movieadSlice = createSlice({
  name:"admin/movielist",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(getMovie.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovie.fulfilled, (state, { payload }) => {
      state.movies = payload;
      state.isLoading = false;
    });
    builder.addCase(getMovie.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });

    builder.addCase(getDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDetail.fulfilled, (state, { payload }) => {
      state.updateMovie = payload;
      state.isLoading = false;
    });
    builder.addCase(getDetail.rejected, (state, { payload }) => {
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
export default movieadSlice.reducer
