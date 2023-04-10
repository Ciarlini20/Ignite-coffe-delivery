import { Minus, Plus, Trash } from "phosphor-react"
import { useContext } from "react"
import { CoffeeContext } from "../../contexts/CoffeeContext"

interface SelectedCoffeesProps{
  id: string
  image: string
  name: string
  price: number
  amount: number
}

export function SelectedCoffees(props : SelectedCoffeesProps){
  const {selectedCoffees, addSelectedCoffees} = useContext(CoffeeContext)

  function decreaseCoffeeAmount(){}

  function increaseCoffeeAmount(){}

  function removeCoffee(){}


  return(
    <div className="flex w-full mb-6 pb-6 border-b-2">
      <div className="w-[64px] h-[64px] mr-5">
        <img src={props.image}/>
      </div>

      <div className="flex flex-col gap-2 mr-[50px]">
        <div className="font-roboto">{props.name}</div>
        <div className="flex gap-2">
        <div  className="flex items-center justify-center bg-[#E6E5E5] text-[#272221] font-roboto gap-1 px-2 py-1 rounded-md">
              <button 
                className="text-[#8047F8]"
                //onClick={decreaseCoffeeAmount}
              >
                <Minus size={16} />
              </button>
              <span>
                {props.amount}
              </span>
              <button 
                className="text-[#8047F8]"
                //onClick={increaseCoffeeAmount}
              >
                <Plus size={16} />
              </button>
            </div>
            <button 
              className="flex items-center gap-1 bg-[#E6E5E5] text-[#574F4D] text-xs px-2 py-1 rounded-md"
              //onClick={removeCoffee}
              >
              <span className="text-[#8047F8]"><Trash size={16}/></span>REMOVER
            </button>
        </div>
      </div>

      <div>
        <p className="text-[#574F4D]">
          <span className=" font-roboto text-sm">
            R$ 
          </span>
          <span className="font-extrabold text-2xl">
            {props.price.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  )
}