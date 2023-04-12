import { ReactNode, createContext, useState } from "react"

interface SelectedCoffeeProps{
  id: string,
  image: string,
  name: string,
  price: number,
  coffeeAmount: number,
}

interface RemoveCoffee{
  id: string,
  price: number,
  amount: number
}

interface CoffeeContextType{
  selectedCoffees: SelectedCoffeeProps[]
  addSelectedCoffees: (coffee: SelectedCoffeeProps) => void
  totalPrice: number,
  setSelectedCoffees: Function, 
  removeSelectedCoffee: (coffee: RemoveCoffee) => void,
  updateSelectedCoffees: (updatedCoffee : any) => void,
  increasePrice: (updatedCoffee : any) => void,
  decreasePrice: (updatedCoffee : any) => void
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

  function removeSelectedCoffee(coffee: RemoveCoffee){
    const selectedCoffeeWithoutTheRepeatedOne = selectedCoffees.filter(selectedCoffee => selectedCoffee.id !== coffee.id)
    setSelectedCoffees(selectedCoffeeWithoutTheRepeatedOne)

    setTotalPrice(state => state - (coffee.amount*coffee.price))
  }

  function updateSelectedCoffees(updatedCoffee : SelectedCoffeeProps){
    const selectedCoffeeWithoutTheRepeatedOne = selectedCoffees.filter(selectedCoffee => selectedCoffee.id !== updatedCoffee.id)
    setSelectedCoffees(selectedCoffeeWithoutTheRepeatedOne)
    setSelectedCoffees(state => [...state, updatedCoffee])
  }

  function increasePrice(updatedCoffee : SelectedCoffeeProps){
    setTotalPrice(state => state + updatedCoffee.price)
  }

  function decreasePrice(updatedCoffee : SelectedCoffeeProps){
    setTotalPrice(state => state - updatedCoffee.price)
  }

  return(
    <CoffeeContext.Provider
      value={{
        selectedCoffees,
        addSelectedCoffees,
        totalPrice,
        setSelectedCoffees,
        removeSelectedCoffee,
        updateSelectedCoffees,
        increasePrice,
        decreasePrice
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}