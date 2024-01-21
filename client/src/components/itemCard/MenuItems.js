import style from '../../components/itemCard/MenuItems.module.css'
import ItemCard from './ItemCard'

import item1 from '../../assets/foodItems/burger.jpg'
import item2 from '../../assets/foodItems/item2_pizza.jpg'
import item3 from '../../assets/foodItems/item3_pasta.jpg'
import item4 from '../../assets/foodItems/item4_hotdog.jpg'
import item5 from '../../assets/foodItems/item5_friedrice.jpg'
import item6 from '../../assets/foodItems/item6_chicken.jpeg'
import item7 from '../../assets/foodItems/item7_burrito.jpg'
import item8 from '../../assets/foodItems/item8_mac.jpg'


const ItemsData = [
    {
        id: 1,
        name: 'Item 1',
        description: 'Description 1',
        price: 2.5,
        image: item1
    },

    {
        id: 2,
        name: 'Item 2',
        description: 'Description 2',
        price: 5,
        image: item2
    },

    {
        id: 3,
        name: 'Item 3',
        description: 'Description 3',
        price: 8,
        image: item3
    },

    {
        id: 4,
        name: 'Item 4',
        description: 'Description 3',
        price: 5.5,
        image: item4
    },

    {
        id: 5,
        name: 'Item 5',
        description: 'Description 5',
        price: 10,
        image: item5
    },

    {
        id: 6,
        name: 'Item 6',
        description: 'Description 6',
        price: 9,
        image: item6
    },

    {
        id: 7,
        name: 'Item 7',
        description: 'Description 7',
        price: 4.5,
        image: item7
    },

    {
        id: 8,
        name: 'Item 8',
        description: 'Description 8',
        price: 9.5,
        image: item8
    }
]

const MenuItems = () => {
    return <section className={style.items}>
        {ItemsData.map(item => 
        <ItemCard 
        key={item.id}
        id={item.id}
        image={item.image}
        name={item.name}
        description={item.description}
        price={item.price}
        />
        )}

    </section>
}
export default MenuItems