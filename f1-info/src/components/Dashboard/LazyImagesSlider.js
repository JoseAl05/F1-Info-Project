import React from 'react'
import { useInView } from 'react-intersection-observer'
import '../../App.css';

const LazyImageSlider = ({src,alt}) => {
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
                <div className="slide-drivers">
                    <div style={{"backgroundImage":`url(${src})`}} alt={alt}/>
                </div>
            ):null}
        </div>
    )
}
export default LazyImageSlider;