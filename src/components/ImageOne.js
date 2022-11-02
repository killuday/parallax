import { Parallax } from 'react-parallax';
import Earth from '../img/Earth.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Earth} strength={800}>
       <div className='content'>
        <span className='img-txt'>a trip to the space</span>
       </div>
    </Parallax>
);

export default ImageOne