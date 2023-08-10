import { useState } from "react"

const ItemListContainer = () => {
    const [itemList, setitemList] = useState([])
    return (
        <div>
            {itemList.length > 0 ? (
                <> {itemList.map(item => <p> {item} </p>)} </>
            ) : (
                <p> </p>
            )}
        </div>
    )
}

export default ItemListContainer