import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Illustratiom from '../../assets/Illustration.png'
import { useContext } from 'react'
import { DeliveryContext } from '../../contexts/DeliveryContext'

export function Confirmation(){
  const {street,  number, city, UF, payment} = useContext(DeliveryContext)


  return(
    <div className="max-w-[1440px] mx-auto px-40">
      <h2 className='mt-20 text-[#C47F17] font-extrabold text-3xl'>Uhu! Pedido confirmado</h2>
      <h3 className='text-[#403937] text-xl font-roboto mb-10'>Agora é só aguardar que logo o café chegará até você</h3>

      <div className='flex gap-[102px] justify-center'>
        <div className='w-[526px] bg-gradient-to-r from-[#DBAC2C] to-[#8047F8] rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] p-[1.55px]'>
          <div className='w-full h-full flex items-center bg-white p-10 rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px]'>
            <ul className='flex flex-col gap-8'>
              <li className='flex items-center gap-3'>
                <div className='bg-[#8047F8] rounded-full text-white p-2'>
                  <MapPin size={20} />
                </div>
                <div className='font-roboto text-[#574F4D]'> 
                  Entrega em <span className='font-bold'>{street}, {number}</span><br/> 
                  {city} - {UF.toUpperCase()}
                </div>
             </li>
             <li className='flex items-center gap-3'>
               <div className='bg-[#DBAC2C] rounded-full text-white p-2'>
                  <Timer size={20} />
                </div>
                <div className='font-roboto text-[#574F4D]'> 
                  Previsão de entrega <br/> 
                  <span className='font-bold'>20min - 30min</span>
                </div>
              </li>
              <li className='flex items-center gap-3'>
                <div className='bg-[#C47F17] rounded-full text-white p-2'>
                  <CurrencyDollar size={20} />
                </div>
                <div className='font-roboto text-[#574F4D]'> 
                  Pagamento na entrega <br/> 
                  <span className='font-bold'>{payment}</span>
                </div>
              </li>
            </ul>
          </div>
        </div> 
        <img src={Illustratiom}/>
      </div>
    </div>

  )
}