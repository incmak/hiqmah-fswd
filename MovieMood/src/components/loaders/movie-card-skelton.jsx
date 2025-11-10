import Star from '../star';
import './movie-card-skelton.css';
export default function MovieCardSkelton() {
  return (
    <div className='movie-card-skelton'>
      <div className='movie-card'>
        <div className='skelton image' />
        <div className='movie-details'>
          <h2 className='movie-title skelton'></h2>
          <p className='movie-plot skelton'></p>
        </div>
        <div className='movie-ratings'>
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              color='#c3c0c0'
              // color={index < dataRating ? 'orange' : '#000'}
              // onClick={() => handleRating(index + 1)}
            />
          ))}
        </div>

        <button className='skelton'></button>
      </div>
    </div>
  );
}
