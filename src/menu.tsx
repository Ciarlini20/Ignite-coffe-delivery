import ExpressoTradicional from "./assets/ExpressoTradicional.png"
import ExpressoAmericano from "./assets/ExpressoAmericano.png"
import ExpressoCremoso from "./assets/ExpressoCremoso.png"
import ExpressoGelado from "./assets/ExpressoGelado.png"
import CafeComLeite from "./assets/CafeComLeite.png"
import Latte from "./assets/Latte.png"
import Capuccino from "./assets/Capuccino.png"
import Macchiato from "./assets/Macchiato.png"
import Mocaccino from "./assets/Mocaccino.png"
import ChocolateQuente from "./assets/ChocolateQuente.png"
import Cubano from "./assets/Cubano.png"
import Havaiano from "./assets/Havaiano.png"
import Arabe from "./assets/Arabe.png"
import Irlandes from "./assets/Irlandes.png"

export const menu = [
  {
    id: "Expresso Tradicional",
    image: ExpressoTradicional,
    name: "Expresso Tradicional",
    price: 9.9,
    type: "tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
  },
  {
    id: "Expresso Americano",
    image: ExpressoAmericano,
    name: "Expresso Americano",
    price: 9.9,
    type: "tradicional",
    description: "Expresso diluído, menos intenso que o tradicional",
  },
  {
    id: "Expresso Cremoso",
    image: ExpressoCremoso,
    name: "Expresso Cremoso",
    price: 9.9,
    type: "tradicional",
    description: "Café expresso tradicional com espuma cremosa",
  },
  {
    id: "Expresso Gelado",
    image: ExpressoGelado,
    name: "Expresso Gelado",
    price: 9.9,
    type: "tradicional",
    type2: "GELADO",
    description: "O tradicional café feito com água quente e grãos moídos",
  },
  {
    id: "Café com Leite",
    image: CafeComLeite,
    name: "Café com Leite",
    price: 9.9,
    type: "tradicional",
    type2: "COM LEITE",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
  },
  {
    id: "Latte",
    image: Latte,
    name: "Latte",
    price: 9.9,
    type: "tradicional",
    type2: "COM LEITE",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
  },
  {
    id: "Capuccino",
    image: Capuccino,
    name: "Capuccino",
    price: 9.9,
    type: "tradicional",
    type2: "COM LEITE",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
  },
  {
    id: "Macchiato",
    image: Macchiato,
    name: "Macchiato",
    price: 9.9,
    type: "tradicional",
    type2: "COM LEITE",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
  },
  {
    id: "Mocaccino",
    image: Mocaccino,
    name: "Mocaccino",
    price: 9.9,
    type: "tradicional",
    type2: "COM LEITE",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
  },
  {
    id: "Chocolate Quente",
    image: ChocolateQuente,
    name: "Chocolate Quente",
    price: 9.9,
    type: "ESPECIAL",
    type2: "COM LEITE",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
  },
  {
    id: "Cubano",
    image: Cubano,
    name: "Cubano",
    price: 9.9,
    type: "ESPECIAL",
    type2: "ALCOÓLICO",
    type3: "GELADO",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
  },
  {
    id: "Havaiano",
    image: Havaiano,
    name: "Havaiano",
    price: 9.9,
    type: "ESPECIAL",
    description: "Bebida adocicada preparada com café e leite de coco",
  },
  {
    id: "Árabe",
    image: Arabe,
    name: "Árabe",
    price: 9.9,
    type: "ESPECIAL",
    description: "Bebida preparada com grãos de café árabe e especiarias",
  },
  {
    id: "Irlandês",
    image: Irlandes,
    name: "Irlandês",
    price: 9.9,
    type: "ESPECIAL",
    type2: "ALCOÓLICO",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
  }
]