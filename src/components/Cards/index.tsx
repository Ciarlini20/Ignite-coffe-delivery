import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { useState } from "react"

interface CardProps {
  image: string,
  name: string,
  price: number,
  type: string,
  type2?: string | null,
  type3?: string | null,
  description: string,
  id: string
  addSelectedCoffees: Function
}

export function Cards(props : CardProps){

  const [coffeeAmount, setCoffeeAmount] = useState<number>(0)



  function handleIncreaseCoffeNumber(){
    setCoffeeAmount(state => state + 1)
  }

  function handleDecreaseCoffeNumber(){
    if(coffeeAmount > 0){
      setCoffeeAmount(state => state - 1)
    }else{
      setCoffeeAmount(0)
    }
  }
  

  function handleAddToCart(){
    const currentCoffee = {
      id: props.id,
      image: props.image,
      name: props.name,
      price: props.price,
      coffeeAmount: coffeeAmount,
    }
    
    props.addSelectedCoffees(currentCoffee)
  }

  return(
    <div className="flex flex-col items-center justify-center w-64 bg-[#F3F2F2] rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md">

      <div className="w-[120px] h-[120px] relative -top-5">
        <img src={props.image}/>
      </div>

      <div className="px-5 flex flex-col items-center">

          {
          props.type3
            ? <div className="flex gap-1"> 
                <span className="bg-[#F1E9C9] text-[#C47F17] text-[10px] font-roboto font-bold rounded-[100px] px-2 py-1 mb-2 max-w-[100px] flex justify-center ">
                  {props.type.toUpperCase()}
                </span>
                <span className="bg-[#F1E9C9] text-[#C47F17] text-[10px] font-roboto font-bold rounded-[100px] px-2 py-1 mb-2 max-w-[100px] flex justify-center ">
                  {props.type2}
                </span>
                <span className="bg-[#F1E9C9] text-[#C47F17] text-[10px] font-roboto font-bold rounded-[100px] px-2 py-1 mb-2 max-w-[100px] flex justify-center ">
                  {props.type3}
                </span>
            </div>
            : props.type2
              ? <div className="flex gap-1"> 
                  <span className="bg-[#F1E9C9] text-[#C47F17] text-[10px] font-roboto font-bold rounded-[100px] px-2 py-1 mb-2 max-w-[100px] flex justify-center ">
                    {props.type.toUpperCase()}
                  </span>
                  <span className="bg-[#F1E9C9] text-[#C47F17] text-[10px] font-roboto font-bold rounded-[100px] px-2 py-1 mb-2 max-w-[100px] flex justify-center ">
                    {props.type2}
                  </span>
                </div>
              : <span className="bg-[#F1E9C9] text-[#C47F17] text-[10px] font-roboto font-bold rounded-[100px] px-2 py-1 mb-2 max-w-[100px] flex justify-center ">
                  {props.type.toUpperCase()}
                </span>
          }
        
        <h3 className="text-[#403937] text-lg font-bold mb-2">{props.name}</h3>
        <p className="mb-8 text-center text-[#8D8686]">{props.description}</p>

        <div className="flex w-full justify-center items-center gap-6 mb-5">
          <p className="text-[#574F4D]">
            <span className=" font-roboto text-sm">
              R$ 
            </span>
            <span className="font-extrabold text-2xl">
              {props.price.toFixed(2)}
            </span>
          </p>

          <div className="flex gap-2 items-center">
            <div  className="flex items-center justify-center bg-[#E6E5E5] text-[#272221] font-roboto gap-1 p-2 rounded-md">
              <button 
                className="text-[#8047F8]"
                onClick={handleDecreaseCoffeNumber}
              >
                <Minus size={16} />
              </button>
              <span>
                {coffeeAmount}
              </span>
              <button 
                className="text-[#8047F8]"
                onClick={handleIncreaseCoffeNumber}
              >
                <Plus size={16} />
              </button>
            </div>
            <button 
              disabled={coffeeAmount === 0}
              className="bg-[#4B2995] text-white p-2 rounded-md"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={22}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}