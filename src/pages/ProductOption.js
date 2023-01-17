import React from 'react';

const ProductOption = ({product}) => {

    const {name, image, } = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} style={{height:'300px', width:'100%'}} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions justify-between">
      <button className="btn btn-primary">Details</button>
      <button className="btn btn-error" style={{color:'white'}}>Delete</button>
    </div>
  </div>
</div>
    );
};

export default ProductOption;