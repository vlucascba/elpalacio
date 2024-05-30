// src/components/Button.js
import React, { useState } from 'react';

const Button = () => {
  const [quantity, setQuantity] = useState(1);
  const [quantityType, setQuantityType] = useState('unidad');

  const handleQuantityChange = (change) => {
    setQuantity(prevQuantity => Math.max(prevQuantity + change, 1));
  };

  const handleQuantityTypeChange = (event) => {
    setQuantityType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí recopilas los datos del formulario y los envías a la base de datos
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ...otros campos del formulario... */}
      <label>
        <input type="radio" name="quantityType" value="unidad" checked={quantityType === 'unidad'} onChange={handleQuantityTypeChange} /> Por Unidad ($5)
      </label>
      <label>
        <input type="radio" name="quantityType" value="mediaDocena" checked={quantityType === 'mediaDocena'} onChange={handleQuantityTypeChange} /> Media Docena ($25)
      </label>
      <label>
        <input type="radio" name="quantityType" value="docena" checked={quantityType === 'docena'} onChange={handleQuantityTypeChange} /> Docena ($45)
      </label>

      {quantityType === 'unidad' && (
        <div>
          <button type="button" onClick={() => handleQuantityChange(-1)}>-</button>
          <input type="number" name="quantity" value={quantity} readOnly />
          <button type="button" onClick={() => handleQuantityChange(1)}>+</button>
        </div>
      )}

      <button type="submit">Enviar Pedido</button>
    </form>
  );
};

export default Button;
