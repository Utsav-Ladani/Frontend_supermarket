import { Button } from '@mui/material';
import Rating from './Rating'


function ItemCard({ details }) {
    const { name, price, discount, rating } = details;

    return (
        <div className='w-full max-w-xl p-8 grid items-center text-gray-500 bg-white rounded shadow-lg' style={{gridTemplateColumns: "1fr auto"}}>
            <div className='flex flex-col' >
                <span className='text-black text-2xl'>{name}</span>
                <Rating rating={rating} />
                <span>Price: {price} &#x20B9;</span>
                {discount > 0 ? (<span>Discount: {discount}%</span>) : null}
            </div>
            <Button variant='outlined'>Add to Cart</Button>
        </div>
    );
}

export default ItemCard;