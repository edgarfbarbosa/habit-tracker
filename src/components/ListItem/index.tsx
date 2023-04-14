import './styles.css'
import { Item } from '../../types/item'

type Props = {
    item: Item
}

const ListItem = ({ item }: Props) => {
    return (
        <div className="list-item__container">
            <input type="checkbox"></input>
            <label>{item.name}</label>
        </div>
    )
}

export default ListItem