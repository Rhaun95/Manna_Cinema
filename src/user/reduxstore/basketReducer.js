import {createSlice} from '@reduxjs/toolkit'

let initialState={
    movieList: [],
    movieBasket: [],  //장바구니 영화
    seatBasket: [],   //장바구니 좌석
    bookedSeats :[],  //예매된 자석(필요한가?)
    selectForPay:[
      [
        //movieBasket
    ],
      [
        //itemBasket
      ]
    ],
}

const movieSlice = createSlice({
  name : 'basket',
  initialState,
  reducers : {
    getAllMovies(state, action){
       state.movieList= action.payload;
    },
    getMovieBasket(state,action){
      state.movieBasket = action.payload.totalBooking;
    },
    setSelectedSeat(state,action){
       state.seatBasket = action.payload.id;
    },
    setSeatInMovieBasket(state,action){
      state.movieBasket.seat_num = action.payload.resultBasket;
    },
    setSeatForDB(state,action){
      state.seatBasket = action.payload.resultDB;
    }, 
    //선택한 좌석들
    getBookedSeats(state, action){
      state.bookedSeats = action.payload.result;
    },
    setMovieForPay(state, action){
      state.selectForPay[0] = action.payload.mb;
    },
    setItemForPay(state, action){
      state.selectForPay[1] = action.payload.bi;
    },
  }
});


export default movieSlice.reducer;

//action export
export const movieBasketActions = movieSlice.actions;
