import React, { useEffect, useState } from 'react'

const Discounts = () => {
  const [discount, setDiscount] = useState([]);

  useEffect(() => {
    localStorage.setItem('discount', JSON.stringify(discount));
  }, [discount]);

  const handleDiscount = (value) => {
    setDiscount(value);
  };

  return (
    <>
      <div className='flex items-center justify-center py-20'>
        <h1 className='text-3xl'>Selecciona un descuento!</h1>
      </div>
      <div className='flex items-center justify-center h-96'>
        <div className='mx-10'>
          <button
            className='bg-slate-300 text-black w-32 h-32'
            onClick={() => handleDiscount(25)}
          >
            25%
          </button>
        </div>
        <div className='mx-10'>
          <button
            className='bg-slate-300 text-black w-32 h-32'
            onClick={() => handleDiscount(50)}
          >
            50%
          </button>
        </div>
        <div className='mx-10'>
          <button
            className='bg-slate-300 text-black w-32 h-32'
            onClick={() => handleDiscount(75)}
          >
            75%
          </button>
        </div>
      </div>
    </>
  )
}

export default Discounts;
