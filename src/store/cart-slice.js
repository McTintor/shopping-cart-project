import { createSlice } from "@reduxjs/toolkit";

const initialState = { cars: [], totalQuantity: 0, cartTotal: 0};

const cartSlice =  createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        increment(state, action) {
            const newCar = action.payload;
            const existingCar = state.cars.find(car => car.id === newCar.id);
            if (!existingCar) {
                state.cars.push(
                    { 
                        id: newCar.id,  
                        price: newCar.price, 
                        amount: 1, 
                        title: newCar.title, 
                        totalPrice: newCar.price, 
                        url: newCar.url
                    }
                );
            } else {
                existingCar.amount ++;
                existingCar.totalPrice = existingCar.totalPrice + newCar.price; 
            }
            state.totalQuantity++;
            state.cartTotal += newCar.price;
        },
        decrement(state, action) {
            const id = action.payload;
            const existingCar = state.cars.find(car => car.id === id);
            if (existingCar.amount === 1) {
                state.cars = state.cars.filter(car => car.id !== id);
            } else {
                existingCar.amount --;
                existingCar.totalPrice = existingCar.totalPrice - existingCar.price;
            }
            state.totalQuantity--;
            state.cartTotal -= existingCar.price;
        },
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;