

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ReviewsItem } from './ReviewsItem';
import { Breakpoint } from '../../utils';


export const Reviews = ( { global } ) => {

    const reviews = Array.isArray( global.reviews )
        ? global.reviews
        : [];

    return (
        <>
            <Breakpoint at="xs">
                <div className="reviews-container">

                    <Swiper
                        slidesPerView={2}
                        spaceBetween={180}
                        loop={true}
                        pagination={{
                            dynamicBullets: true,
                        }}

                        modules={[ Grid, Pagination, Navigation ]}
                        className="mySwiper1"
                    >
                        {
                            reviews.map( ( review, index ) => {
                                return (

                                    <SwiperSlide key={index}>
                                        <ReviewsItem
                                            key={index}
                                            review={{ id: index, ...review }}
                                        />
                                    </SwiperSlide>
                                )
                            } )
                        }
                    </Swiper>

                </div>
            </Breakpoint>

            <Breakpoint at="sm">

                <div className="reviews-container">

                    <Swiper
                        slidesPerView={2}
                        spaceBetween={70}
                        loop={true}
                        pagination={{
                            dynamicBullets: true,
                        }}

                        modules={[ Grid, Pagination, Navigation ]}
                        className="mySwiper2"
                    >
                        {
                            reviews.map( ( review, index ) => {
                                return (

                                    <SwiperSlide key={index}>
                                        <ReviewsItem
                                            key={index}
                                            review={{ id: index, ...review }}
                                        />
                                    </SwiperSlide>
                                )
                            } )
                        }
                    </Swiper>
                </div>

            </Breakpoint>

            <Breakpoint at="md">

                <div className="reviews-container">

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={100}
                        loop={true}
                        pagination={{
                            dynamicBullets: true,
                        }}

                        modules={[ Grid, Pagination, Navigation ]}
                        className="mySwiper3"
                    >
                        {
                            reviews.map( ( review, index ) => {
                                return (

                                    <SwiperSlide key={index}>
                                        <ReviewsItem
                                            key={index}
                                            review={{ id: index, ...review }}
                                        />
                                    </SwiperSlide>
                                )
                            } )
                        }
                    </Swiper>
                </div>

            </Breakpoint>

            <Breakpoint at="lg">

                <div className="reviews-container">

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={50}
                        loop={true}
                        pagination={{
                            dynamicBullets: true,
                        }}

                        modules={[ Grid, Pagination, Navigation ]}
                        className="mySwiper3"
                    >
                        {
                            reviews.map( ( review, index ) => {
                                return (

                                    <SwiperSlide key={index}>
                                        <ReviewsItem
                                            key={index}
                                            review={{ id: index, ...review }}
                                        />
                                    </SwiperSlide>
                                )
                            } )
                        }
                    </Swiper>
                </div>

            </Breakpoint>

            <Breakpoint at="xl">

                <div className="reviews-container">

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={50}
                        loop={true}
                        pagination={{
                            dynamicBullets: true,
                        }}

                        modules={[ Grid, Pagination, Navigation ]}
                        className="mySwiper3"
                    >
                        {
                            reviews.map( ( review, index ) => {
                                return (

                                    <SwiperSlide key={index}>
                                        <ReviewsItem
                                            key={index}
                                            review={{ id: index, ...review }}
                                        />
                                    </SwiperSlide>
                                )
                            } )
                        }
                    </Swiper>
                </div>

            </Breakpoint>

            <Breakpoint at="xxl">

                <div className="reviews-container">

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={100}
                        loop={true}
                        pagination={{
                            dynamicBullets: true,
                        }}

                        modules={[ Grid, Pagination, Navigation ]}
                        className="mySwiper3"
                    >
                        {
                            reviews.map( ( review, index ) => {
                                return (

                                    <SwiperSlide key={index}>
                                        <ReviewsItem
                                            key={index}
                                            review={{ id: index, ...review }}
                                        />
                                    </SwiperSlide>
                                )
                            } )
                        }
                    </Swiper>
                </div>

            </Breakpoint>

            <Breakpoint at="xxxl">

                <div className="reviews-container">

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        loop={true}

                        modules={[ Grid, Pagination, Navigation ]}
                        className="mySwiper3"
                    >
                        {
                            reviews.map( ( review, index ) => {
                                return (

                                    <SwiperSlide key={index}>
                                        <ReviewsItem
                                            key={index}
                                            review={{ id: index, ...review }}
                                        />
                                    </SwiperSlide>
                                )
                            } )
                        }
                    </Swiper>
                </div>

            </Breakpoint>
        </>
    );
};
