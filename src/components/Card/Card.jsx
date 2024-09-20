import React from 'react';

const Card = ({product,handleAddCart}) => {
  return (
    <div >
     <div className="card shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={product.image}
      alt="Shoes"
      className="rounded-xl w-60 h-52" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product.title.slice(0,20)}</h2>
    <p>{product.description.slice(0,90)}</p>
    <h2 className='text-xl font-bold text-black'>Price: ${product.price}</h2>
    <div className="card-actions">
      <button onClick={()=>handleAddCart(product)} className="btn btn-success ">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Card;