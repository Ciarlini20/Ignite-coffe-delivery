import { ReactNode, createContext, useState } from "react"

interface SelectedCoffeeProps{
  id: string,
  image: string,
  name: string,
  price: number,
  coffeeAmount: number,
}

interface CoffeeContextType{
  selectedCoffees: SelectedCoffeeProps[]
  addSelectedCoffees: (coffee: SelectedCoffeeProps) => void
  totalPrice: number,
  setSelectedCoffees: Function 

}

interface CoffeeContextProviderProps{
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({children} : CoffeeContextProviderProps){
  const [selectedCoffees, setSelectedCoffees] = useState<SelectedCoffeeProps[]>([])
  const [totalPrice, setTotalPrice] = useState(0)

  function addSelectedCoffees(coffee : SelectedCoffeeProps){
    const repeatedCoffeeId = selectedCoffees.filter(selectedCoffee => selectedCoffee.id === coffee.id)

    if(repeatedCoffeeId){
      const selectedCoffeeWithoutTheRepeatedOne = selectedCoffees.filter(selectedCoffee => selectedCoffee.id !== coffee.id)
      setSelectedCoffees(selectedCoffeeWithoutTheRepeatedOne)
      setSelectedCoffees(state => [...state, coffee])
    }else{
      setSelectedCoffees(state => [...state, coffee])
    }
  
    setTotalPrice(state => state + (coffee.coffeeAmount*coffee.price))
  }

  return(
    <CoffeeContext.Provider
      value={{
        selectedCoffees,
        addSelectedCoffees,
        totalPrice,
        setSelectedCoffees
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}