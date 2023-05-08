import { useState } from 'react'
import { Item } from '../../types/item'

import styles from './ListItem.module.css'

type Props = {
    item: Item
}

const ListItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done)

    return (
        <div className={styles['list-item__container']}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={(event) => setIsChecked(event.target.checked)}
            />
            <label>{item.name}</label>
        </div>
    )
}

export default ListItem