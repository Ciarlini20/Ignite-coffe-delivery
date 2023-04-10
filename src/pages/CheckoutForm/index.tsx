import { CurrencyDollar, MapPinLine } from "phosphor-react";
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Bank, CreditCard, Money } from 'phosphor-react';
import {  useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { SelectedCoffees } from "../../components/SelectedCoffees";
import { Link } from "react-router-dom";
import { DeliveryContext } from "../../contexts/DeliveryContext";

export function CheckoutForm(){
  const {totalPrice, selectedCoffees} = useContext(CoffeeContext)
  const {handleConfirmDelivery, payment, setBairro, setCEP, setCity, setNumber, setPayment, setStreet, setUF} = useContext(DeliveryContext)



  return(
    <form onSubmit={handleConfirmDelivery}>
      <div className="flex gap-8 max-w-[1440px] mx-auto px-40">
        <div className="w-[640px]">
           <h2 className="text-[#403937] font-bold text-lg mb-4">Complete seu pedido</h2>
            <div className="bg-[#F3F2F2] p-10 rounded-md mb-3">
             <h3 className="text-[#403937] font-roboto flex items-center gap-2">
                <span className="text-[#C47F17]"><MapPinLine size={22} /> </span> 
                Endereço de Entrega
              </h3>
              <h4 className="text-[#574F4D] text-sm font-roboto ml-[30px] mb-8">Informe o endereço onde deseja receber seu pedido</h4>
              <input
                onChange={(e) => setCEP(e.target.value)} 
                required
                name="CEP"
                id="CEP"
                type="text" 
                placeholder="CEP" 
                className="w-52 placehold-[#E6E5E5] text-[#574F4D]  font-roboto bg-[#EDEDED] p-3 rounded-md border-2 border-[#E6E5E5] mb-4"
              />
              <input
                onChange={(e) => setStreet(e.target.value)} 
                required
                name="Rua"
                id="Rua"
                type="text" 
                placeholder="Rua" 
                className="w-full placehold-[#E6E5E5] text-[#574F4D]  font-roboto bg-[#EDEDED] p-3 rounded-md border-2 border-[#E6E5E5] mb-4" 
              />
              <div className="flex gap-3 mb-4">
              <input
                onChange={(e) => setNumber(e.target.value)} 
                required
                name="Numero"
                id="Numero"
                type="text" 
                placeholder="Número" 
                className="w-52 placehold-[#E6E5E5] text-[#574F4D] font-roboto bg-[#EDEDED] p-3 rounded-md border-2 border-[#E6E5E5]" 
              />
              <input
                type="text" 
                placeholder="Complemento                                     Opcional"
                className="w-full placeholder:italic text-[#574F4D]  font-roboto bg-[#EDEDED] p-3 rounded-md border-2 border-[#E6E5E5]" 
              />
              </div>
              <div className="flex gap-3">
              <input
                onChange={(e) => setBairro(e.target.value)}
                required
                name="Bairro"
                id="Bairro"
                type="text" 
                placeholder="Bairro" 
                className="w-52 placehold-[#E6E5E5] text-[#574F4D] font-roboto bg-[#EDEDED] p-3 rounded-md border-2 border-[#E6E5E5] " 
              />
              <input
                onChange={(e) => setCity(e.target.value)} 
                required
                name="Cidade"
                id="Cidade"
                type="text" 
                placeholder="Cidade"
                className="w-full placehold-[#E6E5E5] text-[#574F4D]  font-roboto bg-[#EDEDED] p-3 rounded-md border-2 border-[#E6E5E5] " 
              />
              <input
                onChange={(e) => setUF(e.target.value)} 
                required
                name="UF"
                id="UF"
                type="text" 
                placeholder="UF"
                maxLength={2}
                className="w-14 placehold-[#E6E5E5] text-[#574F4D]  font-roboto bg-[#EDEDED] p-3 rounded-md border-2 border-[#E6E5E5] " 
              />
              </div>
            </div>

            <div className="bg-[#F3F2F2] p-10 rounded-md">
            <h3 className="text-[#403937] font-roboto flex items-center gap-2">
                <span className="text-[#8047F8]"><CurrencyDollar size={22} /></span> 
                Pagamento
              </h3>
              <h4 className="text-[#574F4D] text-sm font-roboto ml-[30px] mb-8">O pagamento é feito na entrega. Escolha a forma que deseja pagar</h4>
              <ToggleGroup.Root
                type="single"
                className='flex w-full gap-3'
                onValueChange={setPayment}
              >
                <ToggleGroup.Item 
                  value='CARTÃO DE CRÉDITO' 
                  className='w-full bg-[#E6E5E5] flex items-center p-4 gap-3 rounded-md justify-center font-roboto text-[#574F4D] text-xs data-[state=on]:bg-[#EBE5F9]  data-[state=on]:border-[#8047F8] data-[state=on]:border-2'
                  
                >
                  <CreditCard size={16} className='text-[#8047F8]'/> 
                  CARTÃO DE CRÉDITO
                </ToggleGroup.Item>

                <ToggleGroup.Item
                  value='CARTÃO DE DÉBITO'
                  className='w-full bg-[#E6E5E5] flex items-center p-4 gap-3 rounded-md justify-center font-roboto text-[#574F4D] text-xs data-[state=on]:bg-[#EBE5F9]  data-[state=on]:border-[#8047F8] data-[state=on]:border-2'
                >
                  <Bank size={16} className='text-[#8047F8]'/> 
                  CARTÃO DE DÉBITO
                </ToggleGroup.Item>

                <ToggleGroup.Item 
                  value='DINHEIRO' 
                  className='w-full bg-[#E6E5E5] flex items-center p-4 gap-3 rounded-md justify-center font-roboto text-[#574F4D] text-xs data-[state=on]:bg-[#EBE5F9] data-[state=on]:border-[#8047F8] data-[state=on]:border-2'
                >
                  <Money size={16} className='text-[#8047F8]'/> 
                  DINHEIRO
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>

        </div>

        <div className="w-[448px]">
          <h2 className="text-[#403937] font-bold text-lg mb-[15px]">Cafés selecionados</h2>
          <div className="p-10 bg-[#F3F2F2] flex flex-col items-center rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md">
           {selectedCoffees.length === 0
            ? <Link to={"/"} className="text-center text-[#574F4D] mb-5">Nenhum café selecionado. <br/> Escolha um de nossos deliciosos cafés <span className="text-cyan-300">clicando aqui</span></Link> 
            : selectedCoffees.map(coffee => {
            return(
              <SelectedCoffees
                key={coffee.id}
                id={coffee.id}
                image={coffee.image}
                name={coffee.name}
                price={coffee.price}
                amount={coffee.coffeeAmount}
              />
            )
           })
           }
           {selectedCoffees.length === 0
            ? null
            : <div className="w-full">
                <ul className="font-roboto text-[#574F4D] text-sm">
                  <li className="flex justify-between mb-3">Total de itens <div>R$ {totalPrice.toFixed(2)}</div></li>
                  <li className="flex justify-between mb-3">Entrega <div>R$ 3.50</div></li>
                  <li className="flex justify-between mb-6 font-bold text-xl">Total <div>R$ {(totalPrice + 3.5).toFixed(2)}</div></li>
               </ul>
              </div>
           }
            <Link to={'/confirmation'}>
            <button 
              className="bg-[#DBAC2C] font-bold font-roboto text-sm text-white py-3 px-28 w-full rounded-md" 
              type="submit"
              disabled={selectedCoffees.length === 0 || payment === ""}
            >
              CONFIRMAR PEDIDO
            </button>
            </Link>
          </div>
        </div>


      </div>
    </form>
  )
}