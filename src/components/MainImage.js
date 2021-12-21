import React, {useState} from 'react';
import { DataImage } from './DataImage';

export default function MainImage({imgs}) {
    const [img, setImg] = useState(0)
    const length = imgs.length;
    const nextImage = () =>{
        setImg(img === length - 1 ? 0 : img + 1)
    }
    const prevImage = () =>{
        setImg(img === 0 ? length - 1 : img - 1 )
    }
    if (!Array.isArray(imgs) || imgs.length <= 0) {
        return null
    }
    return (
        <>
            <section className="news-slider">
                    <section className="news-slider-tittle">تصاویر</section>
                    <section className="btn-slider">
                        <button className="next" onClick={nextImage}><i className="fas fa-sort-up"></i></button>
                        {DataImage.map((item, index)=>{
                            return(
                                <>
                                {(index === img) && (<img src={item.image} alt="news" key={index}/>)}
                                <a href={item.url} className={(index === img)  && "tittle-slider"}>{(index === img) && item.title}</a>
                                </>
                            )
                        })}
                        
                        <button className="back" onClick={prevImage}><i className="fas fa-sort-down"></i></button>
                    </section>
                </section>
        </>
    )
}
