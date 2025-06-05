"use client";

import "/src/app/app.css";
import React from "react";

const ScrollOverlapCards: React.FC = () => {
  return (
    <div>
      <div
        style={{
          height: "1vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>

      <div className="container">
        {/* Card 1 */}
        <div className="card card1">
          <a
            href="https://www.facebook.com/taxidieneasup/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-inherit no-underline"
          >
            <div className="fb-review-header">
              <img
                src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/495669127_3058479574328169_5663703267194201360_n.jpg"
                alt="Ảnh đại diện"
                className="fb-avatar"
              />
              <strong className="fb-name">Trần Mạnh Hùng</strong>
              <img
                src="https://preview.checchiadesign.com/code/reviewcard/img/review-icon.png"
                width="20px"
                alt="icon"
                className="fb-icon"
              />
              <p className="text-card">recommend</p>
              <span className="fb-link-company">Taxi Điện Easup - 0835.340.340</span>
            </div>
            <div className="fb-review-content">
              Dịch vụ tốt, tuyệt vời. Tài xế vui vẻ
            </div>
            <div className="fb-link">Hiển thị đánh giá trên Facebook</div>
          </a>
        </div>

        {/* Card 2 */}
        <div className="card card2">
          <a
            href="https://www.facebook.com/taxidieneasup/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-inherit no-underline"
          >
            <div className="fb-review-header">
              <img
                src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-1/475697625_603352399067941_2734883673600761697_n.jpg"
                alt="Ảnh đại diện"
                className="fb-avatar"
              />
              <strong className="fb-name">Le Dinh Phu</strong>
              <img
                src="https://preview.checchiadesign.com/code/reviewcard/img/review-icon.png"
                width="20px"
                alt="icon"
                className="fb-icon"
              />
              <p className="text-card">recommend</p>
              <span className="fb-link-company">Taxi Điện Easup - 0835.340.340</span>
            </div>
            <div className="fb-review-content">
              Giá rẻ, xe sạch sẽ, tài xế cẩn thận đẹp trai
            </div>
            <div className="fb-link">Hiển thị đánh giá trên Facebook</div>
          </a>
        </div>

        {/* Card 3 */}
        <div className="card card3">
          <a
            href="https://www.facebook.com/taxidieneasup/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-inherit no-underline"
          >
            <div className="fb-review-header">
              <img
                src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-1/495556771_10227656854115156_7327625062654152181_n.jpg"
                alt="Ảnh đại diện"
                className="fb-avatar"
              />
              <strong className="fb-name">Rober Tai</strong>
              <img
                src="https://preview.checchiadesign.com/code/reviewcard/img/review-icon.png"
                width="20px"
                alt="icon"
                className="fb-icon"
              />
              <p className="text-card">recommend</p>
              <span className="fb-link-company">Taxi Điện Easup - 0835.340.340</span>
            </div>
            <div className="fb-review-content">
              👉 Dịch vụ chuyên nghiệp.<br />
              👉 Đặt xe nhanh chóng<br />
              👉 Giá cả hợp lý.<br />
              👉 Di chuyển cùng TAXI ĐIỆN không hề có mùi xăng dầu — KHÔNG LO SAY XE
            </div>
            <div className="fb-link">Hiển thị đánh giá trên Facebook</div>
          </a>
        </div>

        {/* Card 4 */}
        <div className="card card4">
          <a
            href="https://www.facebook.com/taxidieneasup/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-inherit no-underline"
          >
            <div className="fb-review-header">
              <img
                src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/448341214_2543947235801067_2849778947543033425_n.jpg"
                alt="Ảnh đại diện"
                className="fb-avatar"
              />
              <strong className="fb-name">Hải Phong</strong>
              <img
                src="https://preview.checchiadesign.com/code/reviewcard/img/review-icon.png"
                width="20px"
                alt="icon"
                className="fb-icon"
              />
              <p className="text-card">recommend</p>
              <span className="fb-link-company">Taxi Điện Easup - 0835.340.340</span>
            </div>
            <div className="fb-review-content">
              Giá hợp lý, tài xế tận tình, vui vẻ, lịch sự
            </div>
            <div className="fb-link">Hiển thị đánh giá trên Facebook</div>
          </a>
        </div>
      </div>

      <div
        style={{
          height: "25vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
    </div>
  );
};

export default ScrollOverlapCards;
