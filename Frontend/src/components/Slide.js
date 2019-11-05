import React from 'react'
import { Slide } from 'react-slideshow-image'
import './Slide.css'

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <li>
                        <a href="./filmer">
                        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"/>
                        </a>
                        </li>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                    <li>
                        <a href="./filmer">
                        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg"/>
                        </a>
                     </li>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                    <li>
                        <a href="./filmer">
                        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg"/>
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
                        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vn94LlNrbUWIZZyAdmvUepFBeaY.jpg"/>
                        </a>
                     </li>
                    </div>
                </div>
            </Slide>
        </div>

    )
}
export default Slideshow;