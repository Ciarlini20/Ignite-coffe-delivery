import { MapPin, ShoppingCart } from "phosphor-react"
import Logo from "../../assets/Logo.svg"
import { useContext } from "react"
import { CoffeeContext } from "../../contexts/CoffeeContext"
import { NavLink } from "react-router-dom"


export function Header(){
  const {selectedCoffees} = useContext(CoffeeContext)

  return(
    <div className="flex justify-between px-40 py-8 bg-[#FAFAFA] max-w-[1440px] mx-auto sticky top-0 z-10">
         <NavLink to="/" title="Homepage">
            <img src={Logo}/>
          </NavLink> 
      <div className="flex justify-center gap-3">
        <div className="flex text-[#4B2995] bg-[#EBE5F9] p-2 gap-1 rounded-md">
          <MapPin size={22} />
          Fortaleza, CE
        </div>
            {selectedCoffees.length === 0 
            ? <button className="p-2 bg-[#F1E9C9] text-[#C47F17] rounded-md">
              <NavLink to="/checkout" title="checkout">
                <ShoppingCart size={22} />
              </NavLink> 
              </button>
            :  <button className="p-2 bg-[#F1E9C9] text-[#C47F17] rounded-md">
                 <NavLink to="/checkout" title="checkout">
                  <ShoppingCart size={22} />
                </NavLink> 
                   <span className="bg-[#C47F17] rounded-full text-white w-5 h-5 flex justify-center items-center absolute top-6 right-[155px]">{selectedCoffees.length}</span>
                </button>
          }
      </div>
    </div>
  )
}