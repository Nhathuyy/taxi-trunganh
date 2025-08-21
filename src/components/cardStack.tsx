"use client";

import React from "react";
import "/src/app/app.css";

type CardItemProps = {
  src: string;
  name: string;
  review: string;
  content: string;
  className: string; // Thêm className để giữ card1, card2, ...
};

const CardItem: React.FC<CardItemProps> = React.memo(({ src, name, review, content, className }) => (
  <div className={`card ${className}`}>
    <a
      href="https://www.facebook.com/taxidieneasup/reviews"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-inherit no-underline"
    >
      <div className="fb-review-header">
        <img
          src={src}
          alt="Avatar"
          className="fb-avatar"
          width="25"
          height="25"
          loading="lazy"
        />
        <p className="fb-text">
          <span className="fb-name">{name}</span>      <img
          src="https://preview.checchiadesign.com/code/reviewcard/img/review-icon.png" width="10px"></img> 
          <p className="text-black"> đề xuất</p>
          <span className="fb-company">Taxi Điện Easup -</span>
          <span className="fb-phone">0835.340.340</span>
        </p>
      </div>

      <div className="fb-review-content">{content}</div>
      <div className="fb-link">Hiển thị đánh giá trên Facebook</div>
    </a>
  </div>
));

const ScrollOverlapCards: React.FC = () => {
  // Card data + class riêng
  const cards = [
    {
      src: "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/536299108_122141704292666501_2096295036208238761_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wMbPeXQy9PUQ7kNvwGXr80y&_nc_oc=AdkLmJQpoweJYeRXwR_oYs-Ld5boIBb-RONHcywLlR2P87PZf7eQ3-BrEUafHLfLJHMxz5JErLvmyWvxIU-K7OOL&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=XAaFMoARIbB2xFGT4m1guw&oh=00_AfUDriFn2S_pAjfnptx2_MTmQ_CYUeQAfMmb56uaU6SAyg&oe=68ACC6E7",
      name: "Mạnh Hùng",
      review: "recommend",
      content: "Dịch vụ tốt, tuyệt vời. Tài xế vui vẻ",
      className: "card1",
    },
    {
       src: "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/534923330_122141704214666501_2550953932131751277_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iSA-X0r7izMQ7kNvwFRjUf3&_nc_oc=AdlR6N10bFV-_kQC-ZaEsIU3vJlXngPL6EFpZOKzOfqAkbVMGIKkLIj82G9cpHBMFFZTkz1dGaHVub0CFMpOHvod&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=pvxhEE29Af_P_2XKlqYBpg&oh=00_AfWIbgUbwK8sif8fRVu9X6sDElc6tKOl2aBcbhfMCLpCJA&oe=68ACDF55",
      name: "Khách hàng",
      review: "recommend",
      content: "Giá rẻ, xe sạch sẽ, tài xế cẩn thận đẹp trai",
      className: "card2",
    },
    {
      src: "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/535850628_122141704208666501_7452387897298188071_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hI5gxlHgmY4Q7kNvwGbt_kR&_nc_oc=AdkfG7z_ivcSJS_yb6GrQbmaTWAP6nZ7ZJZ5kjiAEIZhp7nAqxCyr7NmViArCiSadD57thrc-QRYOJYPbx8NA4N1&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=_4A6voXrV-JKRBGleQ5JXw&oh=00_AfUxrm8kZ9sgKM3ueILIfzJmJPAnQQNaei93kjT6qx3tBA&oe=68ACDC39",
      name: "Rober Tai",
      review: "recommend",
      content: "👉 Giá cả hợp lý. 👉 Đặt xe nhanh chóng",
      className: "card3",
    },
    {
      src: "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/537101013_122141704166666501_6939955562504940861_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1Ut_IUuGLzYQ7kNvwFFj_ty&_nc_oc=Adm76AoxkAyJvMsUCrYHGqFKayui9VU1k0w8C0nWuZ13u1psyXnv6bZEMt_QJfMuO7AlqCCQh0CzE84hDbos2E0z&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=hkr_hjlniDMLMk2O5Kqrrg&oh=00_AfWri6jlCZRu_1xw7_e7mQsbr7c1MXLNxlhqynk0ddJCwg&oe=68ACE179",
      name: "Hải Phong",
      review: "recommend",
      content: "Giá hợp lý, tài xế tận tình, vui vẻ, lịch sự",
      className: "card4",
    },
  ];

  return (
    <div>
      <div style={{ height: "0.1vh", display: "flex", alignItems: "center", justifyContent: "center" }} />

      <div className="container">
        {cards.map((card, index) => (
          <CardItem key={index} {...card} />
        ))}
      </div>

      <div style={{ height: "25vh", display: "flex", alignItems: "center", justifyContent: "center" }} />
    </div>
  );
};

export default React.memo(ScrollOverlapCards);
