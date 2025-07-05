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
      src: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/83506137_166651841435133_8913637004265127936_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHYbI5l_lua5I-brnDyRhVWeDlzSSKH_Mx4OXNJIof8zHWSIk0e9yfUCpqHyYJinQCLBEzUh8u5ceRYSrxyibyv&_nc_ohc=G0eRBW2-q8MQ7kNvwEYa9RU&_nc_oc=AdkYLScqG1Cg6oBN8juIYu0qdpJ2Rjm3ImzyaMO86yybd0Jw3FtvVVl8cyd2d3wmd-w6j-8xmyIwZHLdR2gNqG10&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=wgW7CPHdkFp7kbplSFoQfg&oh=00_AfPhzJSWoRJzcks6CVFnRZ0AUHiV9pJQMzuqNC6R-bhZ5A&oe=6869DE48",
      name: "Mạnh Hùng",
      review: "recommend",
      content: "Dịch vụ tốt, tuyệt vời. Tài xế vui vẻ",
      className: "card1",
    },
    {
       src: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/508470290_705152155554631_5193222140796049408_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=dBVkgsnUbNcQ7kNvwFUOllj&_nc_oc=AdniySi2LK4GWtWHfta2OIcOCpO8GeeTEKBmfATgeaS3Nsze26BXhcGoBnIoKFZ5hws&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=uC7t7LtJQHSICU5PMH6-BA&oh=00_AfQnO0bA9iSx_6cYDfYvmSChDgNYdseU_Ve0NYr4-QDBmQ&oe=686EEF94",
      content: "Giá rẻ, xe sạch sẽ, tài xế cẩn thận đẹp trai",
      className: "card2",
    },
    {
      src: "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/495208730_10227656844834924_7473169096171911016_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=ynmpu_ZqtDYQ7kNvwFVUhBz&_nc_oc=AdnJ3nF66qNRPWtNVaZ5yyCe5QPb0UBSD1Y8RKgOwWZPqHRFzbSSHcJjPbby5FLMubQ&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=Qf4krUTNOGx6KkKPDWud9Q&oh=00_AfQ-SaVb9V54R22l1D5mmWsRSx1SUCuNPXZ4RTe7RhsDPg&oe=686F15F1",
      name: "Rober Tai",
      review: "recommend",
      content: "👉 Giá cả hợp lý. 👉 Đặt xe nhanh chóng",
      className: "card3",
    },
    {
      src: "https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.6435-9/139721602_3533125486798728_1995474353248579002_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFiQ3oakinxbyRpBJ1KF7QHRsLLVC344qhGwstULfjiqOi0GQS7d5BKESEtHQpBEq9TZYTRp2RMTJEd6YW4QTr9&_nc_ohc=K7wBRgOiW8EQ7kNvwFRAp89&_nc_oc=AdnrmMGIUD4aHqzMeQrX8rzpB7xVSUQ9ca2W89lO6zqPXNibGOOEG74Qf_cvGb3drewL_eV6e5twn9CVQUybwMfN&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=9AZcMhETY44Bi-40W2x3wQ&oh=00_AfPX0jW5rulsu-Q7xwnnMSGbEijHmHUpJW1qaZnb66YTuw&oe=686A0707",
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
