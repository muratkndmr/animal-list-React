import './AnimalShow.css';
import { useState } from 'react';
import kuş from './svg/bird.svg';
import kedi from './svg/cat.svg';
import inek from './svg/cow.svg';
import köpek from './svg/dog.svg';
import timsah from './svg/gator.svg';
import heart from './svg/heart.svg';
import at from './svg/horse.svg';

const svgMap = {
    kuş,
    kedi,
    inek,
    köpek,
    timsah,
    at,
};
console.log(svgMap.bird);

function AnimalShow ( {type} ){
    const [clicks,setClicks] = useState(0);
    const handleClick = () =>{
        setClicks(clicks + 10 );
    }
return (
    <div onClick={handleClick} className='animal-show'>
    <img className='animal' src={svgMap[type]} alt="animal" />
    <img className='heart' src={heart}
     alt="heart"
     style={{ width: 10 +  clicks +'px' }} 
      />
</div>

);}

export default AnimalShow;