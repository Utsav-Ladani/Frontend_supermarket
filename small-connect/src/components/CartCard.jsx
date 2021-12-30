import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import Rating from './Rating'

function ItemCard({ details }) {
    const { name, price, discount, rating } = details;
    const [quantity, setQuantity] = useState(1);

    const incQty = () => {
        setQuantity(quantity + 1);
    }

    const decQty = () => {
        setQuantity((quantity - 1) > 0 ? (quantity - 1) : 0);
    }

    return (
        <div className='w-full max-w-xl p-8 grid items-center text-gray-500 bg-white rounded shadow-lg' style={{ gridTemplateColumns: "1fr auto" }}>
            <div className='flex flex-col' >
                <span className='text-black text-2xl'>{name}</span>
                <Rating rating={rating} />
                <span>Price: {price} &#x20B9;</span>
                {discount > 0 ? (<span>Discount: {discount}%</span>) : null}
            </div>
            <span className='flex gap-x-4 items-center'>
                <Button
                    variant='outlined'
                    sx={{ padding: "0", height: "35px", minWidth: "35px" }}
                    onClick={decQty}
                >
                    <RemoveIcon />
                </Button>
                <span>{quantity}</span>
                <Button
                    variant='outlined'
                    sx={{ padding: "0", height: "35px", minWidth: "35px" }}
                    onClick={incQty}
                >
                    <AddIcon />
                </Button>
            </span>
        </div>
    );
}

export default ItemCard;