import { useState } from 'react'
import { Item } from './types/item'

import Header from './components/Header'
import ListItem from './components/ListItem'

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Ler", done: false },
    { id: 2, name: "Treinar", done: false }
  ])

  return (
    <div>
      <Header />
      {list.map((item, i) => (
        <ListItem key={i} item={item} />
      ))}
    </div>
  )
}

export default App