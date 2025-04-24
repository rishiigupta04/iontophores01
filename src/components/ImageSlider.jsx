import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider = () => {
  const images = [
    "/img1.jpg",
    "/img2.jpeg",
    "/img3.jpeg",
    "/img4.jpeg",
    "/img5.jpg",
  ];
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <div
      id="myGallery"
      style={{ maxWidth: "1000px", margin: "0 auto", padding: "0px" }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // ① add Autoplay
        spaceBetween={20}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          // ② autoplay config
          delay: 0, // start next frame immediately
          disableOnInteraction: false, // keep going after drag/swipe
          pauseOnMouseEnter: false, // keep going on hover (optional)
        }}
        speed={5000} // ③ slide travel time (4 s per slide)
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        className="custom-swiper"
        style={{ width: "100%" }}
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              onClick={() => setLightboxImg(src)}
              style={{
                width: "70%",
                maxHeight: "70vh",
                objectFit: "contain",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <img
            src={lightboxImg}
            alt="Enlarged"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "12px",
              boxShadow: "0 0 20px rgba(0,0,0,.5)",
            }}
          />
          <button
            onClick={() => setLightboxImg(null)}
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "2rem",
              cursor: "pointer",
            }}
          >
            &times;
          </button>
        </div>
      )}

      {/* Swiper styles */}
      <style>{`
        .custom-swiper .swiper-button-next,
        .custom-swiper .swiper-button-prev {
          color: #00857c;
        }
        .custom-swiper .swiper-pagination-bullet {
          background: #00857c;
          opacity: 0.5;
        }
        .custom-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
