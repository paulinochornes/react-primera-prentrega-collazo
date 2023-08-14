import { useState } from "react"

const ItemListContainer = ({greeting}) => {
    const [itemList, setitemList] = useState([])
    return (
        <div>
        <div>{greeting}</div>
            {itemList.length > 0 ? (
                <> {itemList.map(item => <p> {item} </p>)} </>
            ) : (
                <p> </p>
            )}
        </div>
    )
}

export default ItemListContainer
