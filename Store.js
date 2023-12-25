import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";
import FavouriteReducer from "./FavouriteReducer";
import AddressReducer from "./AddressReducer";
import PaymentReduces from "./PaymentReduces";
import CouponReducer from "./CouponReducer";
import bestselling from "./bestselling";
import timeReducer from "./timeReducer";
import DateReducer from "./DateReducer";
import NoOfDayReducer from "./NoOfDayReducer";
import CountryReducer from "./CountryReducer";
import CityReducer from "./CityReducer";

export default configureStore({
    reducer:{
        cart: CartReducer,
        favourite: FavouriteReducer,
        product: ProductReducer,
        address: AddressReducer,
        payment: PaymentReduces,
        coupon: CouponReducer,
        best: bestselling,
        time: timeReducer,
        date: DateReducer,
        day: NoOfDayReducer,
        country: CountryReducer,
        city: CityReducer
    }
})