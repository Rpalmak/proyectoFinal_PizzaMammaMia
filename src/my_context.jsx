import { createContext, useState, useEffect } from 'react'

const PizzaContext = createContext()

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [detailsCart, setDetailsCart] = useState([])

  useEffect(() => {
    getPizzas()
  }, [])

  const getPizzas = async () => {
    const res = await fetch('../public/pizzas.json')
    const pizzas = await res.json()
    setPizzas(pizzas)
  }

  const addPizza = ({ id, price, name, img }) => {
    const product = { id, price, name, img, count: 1 };
    const findProduct = detailsCart.findIndex((p) => p.id === id);
  
    if (findProduct >= 0) {
      detailsCart[findProduct].count++;
      setDetailsCart([...detailsCart]);
    } else {
      setDetailsCart([...detailsCart, product]);
    }
  };

  
  const addition = (i) => {
    detailsCart[i].count++
    setDetailsCart([...detailsCart])
  }
  const reduction = (i) => {
    if (detailsCart[i].count === 1) {
      detailsCart.splice(i, 1)
    } else {
      detailsCart[i].count--
    }
    setDetailsCart([...detailsCart])
  }
  const total = detailsCart.reduce(
    (a, { count, price }) => a + price * count,
    0
  )

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        detailsCart,
        setDetailsCart,
        addPizza,
        addition,
        reduction,
        total
      }}
    >
      {children}
    </PizzaContext.Provider>
  )
}


export { PizzaProvider };

export default PizzaContext