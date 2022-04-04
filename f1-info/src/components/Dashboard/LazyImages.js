import React from 'react'
import { useInView } from 'react-intersection-observer'
import '../../App.css';

const LazyImage = ({src,alt}) => {
    const {ref, inView} = useInView({
        triggerOnce:true,
        rootMargin:'200px 0px',
    })
    console.log(src);

    return(
        <div
            ref={ref}
            data-inview={inView}
        >
            {inView ? (
                <img
                    className='image-content'
                    alt={alt}
                    src={src}
                    width='270px'
                    height='160px'
                    loading='lazy'
                />
            ):null}
        </div>
    )
}
export default LazyImage;