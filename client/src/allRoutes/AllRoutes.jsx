import { Route, Routes } from "react-router-dom"
import { BookHotel } from "../pages/BookHotel"
import { ConfirmPayment } from "../Pages/ConfirmPayment"
import { HotelCheckout } from "../Pages/HotelCheckout"
import { Hotels } from "../Pages/Hotels"
import { SignIn } from "../Pages/SignIn"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/signin' element={<SignIn />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path='/hotels/:id' element={<BookHotel />} />
            <Route path='/checkout/bookhotel' element={<HotelCheckout />} />
            <Route path='/confirmpayment/stays' element={<ConfirmPayment />} />
        </Routes>
    )
}
