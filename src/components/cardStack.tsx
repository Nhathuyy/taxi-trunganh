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
      src: "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/534923330_122141704214666501_2550953932131751277_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2hZQk9v9m4gQ7kNvwE2FLs4&_nc_oc=AdlbLXASTiL_zt0_PVgqjUkYbtPK1MO-JspKQDjNn0uk1v9X_Oxj4n3GzyoUWR3Gomb_uLh7KSL3AU4yblEyk80J&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=HEugY_OeAGUnlO66KK_1oA&oh=00_AfWUB8unllnUo-Ejn-AE7OiUtERv8tR2v5FESD4SCEdCoQ&oe=68AB1D55",
      name: "Mạnh Hùng",
      review: "recommend",
      content: "Dịch vụ tốt, tuyệt vời. Tài xế vui vẻ",
      className: "card1",
    },
    {
      src: "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/537101013_122141704166666501_6939955562504940861_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JHvf-LoFZuAQ7kNvwFvX_ED&_nc_oc=AdlHovxLIZJqLFcKv7zSXpVZFEcTX0481fg6LE9s2Y1PfBo1dv1jnM2LEJTzu3cupbf8wVmzuODZ6ooH-FNoCYUN&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=Qn0oUmYcFeJrLb2erhMfwA&oh=00_AfWWTmX6UQk0A9GYLf5HJILEWu7qnPbSiTMqvcSa5NV99Q&oe=68AB1F79",
      name: "Le Dinh Phu",
      review: "recommend",
      content: "Giá rẻ, xe sạch sẽ, tài xế cẩn thận đẹp trai",
      className: "card2",
    },
    {
      src: "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/535850628_122141704208666501_7452387897298188071_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hI5gxlHgmY4Q7kNvwF5Y39z&_nc_oc=AdmUNQ3Gz5AtnWy6No4dWbYc_bN4Ar3p12nrAYMho7VL2hn_SPoWW9I_gF2Ylsul-KTeztT446q97o6lPNnhPwX_&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=NFgtHRIbWLR6zp1Jf19tJA&oh=00_AfWc-RX26F9SM9JFie-fVZ194PkJReJiukxmzUKONL34zQ&oe=68AB1A39",
      name: "Rober Tai",
      review: "recommend",
      content: "👉 Giá cả hợp lý. 👉 Đặt xe nhanh chóng",
      className: "card3",
    },
    {
      src: "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/536299108_122141704292666501_2096295036208238761_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=liR8nqRb8xYQ7kNvwEQ6OPx&_nc_oc=AdkqzifCfJpM2uq0rl13Deb1wwkuO4qLcOKg_qV4ryrky_asbkD9A5kThYssPPm0CyStC3K8udNptbDrGzB8OQXL&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=lWj8jw4pApkeJF_A0jEC0Q&oh=00_AfX0nC94cyXm-M0WC0PeZ6b4j4TMzT9qH-EPlyFEDmujmw&oe=68AB04E7",
      name: "Hải Phong",
      review: "recommend",
      content: "Giá hợp lý, tài xế tận tình, vui vẻ, lịch sự",
      className: "card4",
    },
  ];

  return (
    <div>
      <div style={{ height: "0.5vh", display: "flex", alignItems: "center", justifyContent: "center" }} />

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
