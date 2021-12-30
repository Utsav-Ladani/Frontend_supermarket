import StarIcon from '@mui/icons-material/Star';

function Rating({ rating }) {
    let arr = [1, 2, 3, 4, 5];
    return (
        <span>
            {arr.map((val, i) => (
                val <= rating ?
                    <StarIcon key={i} fontSize={'small'} className="text-yellow-300" /> :
                    <StarIcon key={i} fontSize={'small'} className="text-gray-200 opacity-50" />
            ))}
        </span>
    );
}

export default Rating;