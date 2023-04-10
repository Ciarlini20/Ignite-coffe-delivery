import {Routes, Route} from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { CheckoutForm } from "./pages/CheckoutForm"
import { Confirmation } from "./pages/Confirmation"
import { Home } from "./pages/Home"


export function Router(){
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/checkout" element={<CheckoutForm />}/>
        <Route path="/confirmation" element={<Confirmation />}/>
      </Route>
    </Routes>
  )
}