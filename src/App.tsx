import { useState } from 'react'
import Header from "./components/header"
import { Item } from './types/item'

const App = () => {
  const [list, setList] = useState<Item[]>([
    // Exemplo de item:
    // { id: 1, name: "Ler", done: false }
  ])

  return (
    <Header />
  )
}

export default App