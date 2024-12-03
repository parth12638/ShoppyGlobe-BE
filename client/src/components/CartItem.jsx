import { FaTrash } from "react-icons/fa";

const CartItem = ({
  name,
  price,
  qty,
  image,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center border-b py-2 sm:px-4 justify-between">
      <div className="flex gap-4 items-center">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 sm:h-20 sm:w-20 object-cover"
        />
        <div>
          {/* Displayed product name */}
          <h3 className="text-sm sm:text-lg font-semibold">{name}</h3>
          {/* Displayed product price */}
          <p className="text-gray-600 text-sm sm:text-base">
            Price: ${price.toFixed(2)}
          </p>
          {/* Displayed product quantity */}
          <p className="text-gray-600 text-xs sm:text-sm">Quantity: {qty}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 ml-3 sm:ml-0">
        {/* Added decrement button */}
        <button
          onClick={onDecrement}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          -
        </button>
        {/* Added increment button */}
        <button
          onClick={onIncrement}
          className="bg-green-500 text-white px-2 py-1 rounded"
        >
          +
        </button>
        {/* Added remove button */}
        <button onClick={onRemove} className="text-red-500">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
