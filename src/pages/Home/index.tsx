import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import HomePageImage from "../../assets/HomePageImage.png"
import {menu} from "../../menu"
import { Cards } from "../../components/Cards"
import { useContext } from "react"
import { CoffeeContext } from "../../contexts/CoffeeContext"


export function Home(){
  const {addSelectedCoffees} = useContext(CoffeeContext)

  return(
    <div className="max-w-[1440px] mx-auto">
      <div className="px-40 py-8 flex justify-between mb-28">
        <div>
          <h1 className="text-5xl text-[#272221] font-extrabold leading-[130%] mb-4">Encontre o café perfeito<br/>para qualquer hora do dia</h1>
          <h2 className="text-xl font-normal font-roboto text-[#403937] mb-16">Com o Coffee Delivery você recebe seu café onde estiver, a <br/> qualquer hora </h2>
          <ul className="grid grid-cols-2 gap-5">
          <li className="flex gap-3 font-roboto max-h-8 text-[#574F4D]" >
            <span className="p-2 text-white rounded-full bg-[#C47F17]"><ShoppingCart size={16}/></span>
            Compra simples e segura
          </li>
          <li className="flex gap-3 font-roboto max-h-8 text-[#574F4D]" >
            <span className="p-2 text-white rounded-full bg-[#574F4D]"><Package size={16}/></span>
            Embalagem mantém o café intacto
          </li>
          <li className="flex gap-3 font-roboto max-h-8 text-[#574F4D]" >
            <span className="p-2 text-white rounded-full bg-[#DBAC2C]"><Timer size={16}/></span>
            Entrega rápida e rastreada
          </li>
          <li className="flex gap-3 font-roboto max-h-8 text-[#574F4D]" >
            <span className="p-2 text-white rounded-full bg-[#8047F8]"><Coffee size={16}/></span>
            O café chega fresquinho até você
          </li>
          </ul>
        </div>
        <div>
          <img src={HomePageImage}/>
        </div>
      </div>
      <div className="px-40">
        <h2 className="font-extrabold text-3xl text-[#403937] mb-14">Nossos cafés</h2>
        <div className="grid grid-cols-4 mb-20 gap-10">
          {menu.map(menu => {   
            return(
            <Cards
              key={menu.id}
              id={menu.id}
              image={menu.image}
              name={menu.name}
              price={menu.price}
              type={menu.type}
              type2={menu.type2}
              type3={menu.type3}
              description={menu.description}
              addSelectedCoffees={addSelectedCoffees}
            />
          )
          })}
        </div>
      </div>
    </div>
  )
}