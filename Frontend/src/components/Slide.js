import React from 'react'
import { Slide } from 'react-slideshow-image'
import './Slide.css'

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows : true
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <li>
                        <a href="./filmer">
                        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xcD84rH2f1dytTFeJlopoJ5MKgW.jpg"/>
                        </a>
                        </li>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                    <li>
                        <a href="./filmer">
                        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/k0jeyTsYzDWlY6FLfBYOmeShNRw.jpg"/>
                        </a>
                     </li>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                    <li>
                        <a href="./filmer">
                        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ueC9OZEJF98gbPI0RsKaR821qX9.jpg"/>
                        </a>
                     </li>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                    <li>
                        <a href="./filmer">
                        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg"/>
                        </a>
                     </li>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                    <li>
                        <a href="./filmer">
                        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ogFqy52mfhnlEP7pr5rUCzwngnB.jpg"/>
                        </a>
                     </li>
                    </div>
                </div>
            </Slide>
        </div>

    )
}
export default Slideshow;