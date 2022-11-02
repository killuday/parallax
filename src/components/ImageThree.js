import { Parallax } from 'react-parallax';
import Fucker from '../img/Space.jpg'

const ImageThree = () => (
    <Parallax className='image' bgImage={Fucker} strength={800}>
       <div className='content'>
        <span className='img-txt'>a trip to the space</span>
       </div>
    </Parallax>
);

export default ImageThree