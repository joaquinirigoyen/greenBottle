import React, { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import plantando4 from "../img/plantando4.jpg";

const Donation: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // Aquí puedes enviar los datos al backend u otra lógica
  };

  const formatCardNumber = (value: string) => {
    const cleanedValue = value.replace(/\D/g, ''); // Eliminar no dígitos
    const spacedValue = cleanedValue.replace(/(\d{4})/g, '$1 ').trim(); // Agrupar en bloques de 4
    return spacedValue.slice(0, 19); // Limitar a 16 dígitos (con espacios)
  };

  const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    event.target.value = formatCardNumber(value);
  };

  const formatExpiryDate = (value: string) => {
    const cleanedValue = value.replace(/\D/g, ''); // Eliminar no dígitos
    let formattedValue = cleanedValue.slice(0, 4); // Limitar a 4 caracteres (MM/AA)
    if (formattedValue.length > 2) {
      // Insertar automáticamente la barra "/" después del segundo carácter (mes)
      formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2);
    }
    return formattedValue;
  };

  const handleExpiryDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    event.target.value = formatExpiryDate(value);
  };

  const formatSecurityCode = (value: string) => {
    const cleanedValue = value.replace(/\D/g, ''); // Eliminar no dígitos
    return cleanedValue.slice(0, 3); // Limitar a 3 caracteres flex flex-col gap-8
  };

  const handleSecurityCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    event.target.value = formatSecurityCode(value);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center m-0 px-6 grid grid-cols-1 lg:grid-cols-1 gap-4" >
      <div className='lg:pl-6'>
        <span className="font-serif font-bold text-4xl text-center text-lime-700 mt-2">
          <h1 className='mb-4'>¡Gracias por tu Ayuda!</h1>
        </span>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8"> 
          <div className="flex flex-col ">
            <input type="text" placeholder="Nombre del titular" {...register("cardHolderName", { required: true })} className="input-field border border-gray-300 rounded-md p-2" />
            {errors.cardHolderName && <span className="text-red-500">El Nombre del titular es requerido</span>}
          </div>
          
          <div className="flex flex-col">
            <input type="text" placeholder="Apellido del titular" {...register("cardHolderLastName", { required: true })} className="border border-gray-300 rounded-md p-2" />
            {errors.cardHolderLastName && <span className="text-red-500">El apellido del titular es requerido</span>}
          </div>
          
          <div className="flex flex-col">
            <input type="text" placeholder="Número de tarjeta (max. 16 dígitos)" {...register("cardNumber", { required: true })} onChange={handleCardNumberChange} className="border border-gray-300 rounded-md p-2 flex-1" />
            {errors.cardNumber && <span className="text-red-500">El número de tarjeta es requerido</span>}
          </div>
          
          <div className="flex gap-4">
            <input type="text" placeholder="Vencimiento (MM/AA)" {...register("expiryDate", { required: true })} onChange={handleExpiryDateChange} className="border border-gray-300 rounded-md p-2 flex-1" />
            <input type="text" placeholder="Código de seguridad CVV" {...register("securityCode", { required: true })} onChange={handleSecurityCodeChange} className="border border-gray-300 rounded-md p-2 flex-1" />
          </div>
          
          {errors.expiryDate && <span className="text-red-500">La fecha de vencimiento es requerida</span>}
          {errors.securityCode && <span className="text-red-500">El código de seguridad es requerido</span>}

          <button type="submit" className="bg-lime-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-950 transition-colors duration-300">Continuar con el pago</button>
        </form>
      </div>
    </div>
  );
};

export default Donation;
