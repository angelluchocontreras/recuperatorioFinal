import { useEffect, useState } from "react"
import { getProductById } from "./asyncMock"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProducts] = useState(null)
    const {itemId} = useParams()
    useEffect(() => {
        getProductById(itemId)
        .then(response =>{
            setProducts(response)
        })
        .catch(error =>{
            console.error(error)
        })
    },[itemId])
    return(
        <div>
            <ItemDetail {...product}/>
        </div>
         

    )
}
export default ItemDetailContainer