import { Link } from 'react-router-dom'

function CategoryCard({ url, category, rating }) {
    return (
        <Link
            to={"/category?category=" + category.trim().toLowerCase()}
            className='bg-white rounded shadow-lg overflow-hidden'
        >
            <img src={url} alt={category} style={{ height: '160px', width: '300px' }} />
            <div className='p-4'>{category}</div>
        </Link>
    );
}

export default CategoryCard;