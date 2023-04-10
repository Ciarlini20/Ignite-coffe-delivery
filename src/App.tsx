import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import "./styles/global.css"
import { CoffeeContextProvider } from "./contexts/CoffeeContext"
import { DeliveryContextProvider } from "./contexts/DeliveryContext"

export function App() {
  return (
    <CoffeeContextProvider>
    <DeliveryContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </DeliveryContextProvider>
    </CoffeeContextProvider>
  )
}
