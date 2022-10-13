import React, {FC} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

type Props = {

}

const Home: FC<Props> = (props) => {
    return (
        <main className="main">
            <section className="banner">
                <div className="container">
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="banner__swiper banner-swiper"
                    >
                        <SwiperSlide className="banner-swiper__item">
                            <img className="banner-swiper__image" src="./images/swiper-item-1.jpg" alt="swiper-item"/>
                            <div className="banner-swiper__content">
                                <h2 className="banner-swiper__title">
                                    Кристенсон – новый связующий «Зенита-Казань».
                                </h2>
                                <p className="banner-swiper__description">
                                    Многие считают его лучшим в мире.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="banner-swiper__item">
                            <img className="banner-swiper__image" src="./images/swiper-item-1.jpg" alt="swiper-item"/>
                            <div className="banner-swiper__content">
                                <h2 className="banner-swiper__title">
                                    Кристенсон – новый связующий «Зенита-Казань».
                                </h2>
                                <p className="banner-swiper__description">
                                    Многие считают его лучшим в мире.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="banner-swiper__item">
                            <img className="banner-swiper__image" src="./images/swiper-item-1.jpg" alt="swiper-item"/>
                            <div className="banner-swiper__content">
                                <h2 className="banner-swiper__title">
                                    Кристенсон – новый связующий «Зенита-Казань».
                                </h2>
                                <p className="banner-swiper__description">
                                    Многие считают его лучшим в мире.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="banner-swiper__item">
                            <img className="banner-swiper__image" src="./images/swiper-item-1.jpg" alt="swiper-item"/>
                            <div className="banner-swiper__content">
                                <h2 className="banner-swiper__title">
                                    Кристенсон – новый связующий «Зенита-Казань».
                                </h2>
                                <p className="banner-swiper__description">
                                    Многие считают его лучшим в мире.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </main>
    )
}

export default Home