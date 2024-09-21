import React, { useEffect, useState } from 'react'
import Card from './Card'

const Products = () => {
    const [products, setProducts] = useState([])
    const [discount, setDiscount] = useState(0)
    useEffect(() => {
        getProducts()
        const storedDiscount = localStorage.getItem('discount');
        if (storedDiscount) {
            setDiscount(JSON.parse(storedDiscount));
        }
    }, [])

    const getProducts = async () => {
        const datos = await fetch('https://fakestoreapi.com/products')
        const prod = await datos.json()
        setProducts(prod)
    }

    return (
        <>
            <div className='flex justify-center py-20 text-3xl'>

                <h1>The best products</h1>
            </div>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-3'>

                    {products.map((product: any) => (
                        <Card key={product.id} name={product.title} description={product.description} image={product.image} price={product.price} discount={discount} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Products