

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import galleryImage from "../../utils/galleryImage";

import { ReviewsItem } from '../ReviewsItem/ReviewsItem';

export const Reviews = ( { global } ) => {

    const reviews = Array.isArray( global.reviews ) ? global.reviews : [];

    return (

        <div className="reviews-container">

            <Swiper
                slidesPerView={2}
                spaceBetween={100}
                loop={true}
                pagination={{
                    // clickable: true,
                    dynamicBullets: true,
                }}

                modules={[ Grid, Pagination, Navigation ]}
                className="mySwiper"
            >
                {
                    reviews.map( ( review, index ) => {
                        return (

                            <SwiperSlide key={index}>
                                <ReviewsItem key={index} review={{ id: index, ...review }} />
                            </SwiperSlide>
                        )
                    } )
                }
            </Swiper>
        </div>
    );
};
