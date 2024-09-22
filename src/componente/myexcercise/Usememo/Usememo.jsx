import { useEffect, useMemo, useState } from 'react'

export const Usememo = () => {
  const [products, setproducts] = useState([
    {
      id: 1,
      name: 'Wireless Earbuds',
      price: 49.99,
      category: 'Electronics',
      inStock: true,
      rating: 4.5,
      description:
        'High-quality wireless earbuds with noise cancellation and long battery life.',
      brand: 'SoundMaster'
    },
    {
      id: 2,
      name: 'Gaming Laptop',
      price: 1299.99,
      category: 'Computers',
      inStock: false,
      rating: 4.8,
      description:
        'High-performance gaming laptop with the latest graphics card and fast SSD.',
      brand: 'GamerPro'
    },
    {
      id: 3,
      name: 'Smartwatch',
      price: 199.99,
      category: 'Wearables',
      inStock: true,
      rating: 4.3,
      description:
        'Water-resistant smartwatch with fitness tracking and customizable watch faces.',
      brand: 'TechTime'
    },
    {
      id: 4,
      name: 'Electric Kettle',
      price: 29.99,
      category: 'Home Appliances',
      inStock: true,
      rating: 4.0,
      description:
        'Fast-boiling electric kettle with automatic shut-off and temperature control.',
      brand: 'HomeEase'
    },
    {
      id: 5,
      name: 'Bluetooth Speaker',
      price: 59.99,
      category: 'Audio',
      inStock: false,
      rating: 4.7,
      description:
        'Portable Bluetooth speaker with deep bass and 12-hour battery life.',
      brand: 'SoundWave'
    }
  ])
  const [newproduct, setnewproduct] = useState('')
  const [showinput, setshowinput] = useState(false)
  const [productssorted, setproductssorted] = useState([...products])

  const sortedproduct = useMemo(() => {
    return products.filter((item) => item.price > 20)
  }, [products])
  useEffect(() => {
    setproductssorted(sortedproduct)
  }, [sortedproduct])
  const handleproduct = (e) => {
    setnewproduct(e.target.value)
  }
  const addproduct = () => {
    setproducts([
      ...products,
      {
        id: products.length + 1,
        name: newproduct,
        price: 30,
        category: 'Uncategorized',
        inStock: true,
        rating: 0,
        description: 'No description available',
        brand: 'Generic'
      }
    ])
    setnewproduct('')
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setshowinput(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div>
      {console.log('entering to the string')}
      {productssorted.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
      {showinput && (
        <label htmlFor='newproduct'>
          <input
            type='text'
            name='newproduct'
            id='newproduct'
            value={newproduct}
            onChange={handleproduct}
          ></input>
          <button onClick={addproduct}>Add Product</button>
        </label>
      )}
    </div>
  )
}
