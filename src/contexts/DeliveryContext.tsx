import { Dispatch, FormEvent, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CoffeeContext } from "./CoffeeContext";

interface DeliveryContextProps{
    setPayment: Dispatch<SetStateAction<string>>
    setCEP: Function,
    setStreet: Function,
    setNumber: Function,
    setBairro: Function,
    setCity: Function,
    setUF: Function,
    payment: string,
    handleConfirmDelivery: (event: FormEvent) => void,
    street: string,
    number: string,
    city: string,
    UF: string
}

interface DeliveryContextProviderProps{
  children: ReactNode
}

export const DeliveryContext = createContext({} as DeliveryContextProps)

export function DeliveryContextProvider({children}: DeliveryContextProviderProps){
  const [CEP, setCEP] = useState<string>('')
  const [street, setStreet] = useState<string>('')
  const [number, setNumber] = useState<string>('')
  const [bairro, setBairro] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [UF, setUF] = useState<string>('')
  const [payment, setPayment] = useState<string>('')

   
  function handleConfirmDelivery(event: FormEvent){

  }


  return(
    <DeliveryContext.Provider
      value={{
        setPayment,
        setCEP,
        setStreet,
        setNumber,
        setBairro,
        setCity,
        setUF,
        payment,
        handleConfirmDelivery,
        street,
        number,
        city,
        UF,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  )
}