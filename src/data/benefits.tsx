import { FiBarChart2, FiDollarSign,FiMap,FiPhoneCall,FiSmile ,FiClock,  FiTarget,  FiUser } from "react-icons/fi";
import React from "react";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Taxi Điện Easup Trung Anh – Tiện Lợi & Giá Tốt",
        description: "Chúng tôi tự hào phục vụ hành khách tại khu vực Ea Súp với dịch vụ taxi điện uy tín, an toàn và giá cả hợp lý. Đặt xe nhanh chóng, đón tận nơi – chỉ một cuộc gọi là có ngay xe!",
        bullets: [
            {
                title: "Phục Vụ Khu Vực Ea Súp",
                description: "Chuyên đưa đón nội thành, liên tỉnh, đón sân bay, đi công tác, đi chơi cuối tuần – luôn sẵn sàng phục vụ bạn.",
                icon: <FiMap size={26} />
            },
            {
                title: "Giá Cả Hợp Lý – Minh Bạch",
                description: "Cam kết giá tốt, không phát sinh chi phí bất ngờ. Bạn có thể đặt xe ngay mà không lo lắng về giá.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Gọi Điện Dễ Dàng, Xe Có Ngay",
                description: "Chỉ cần gọi số: +84835340340, tài xế sẽ có mặt nhanh nhất, đưa đón tận nơi, an toàn và chuyên nghiệp.",
                icon: <FiTarget  size={26} />
            },
            {
                title: "Tiện Ích Đặc Biệt",
                description: "Xe đời mới, luôn sạch sẽ, thoáng mát. Tài xế nhiệt tình, am hiểu địa phương. Luôn ưu tiên phục vụ nhu cầu của bạn.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Dịch Vụ Chăm Sóc Khách Hàng",
                description: "Đội ngũ tài xế thân thiện, luôn sẵn sàng hỗ trợ và chăm sóc khách hàng tận tình, chu đáo.",
                icon: <FiUser size={26} />
              }
         
        ],
        imageSrc: "/images/friendly-trunganh-taxi.jpg"
    },
    {
        title: "Taxi Điện Easup – Trung Anh",
        description: "Dịch vụ taxi điện an toàn, tiện lợi, phục vụ khu vực Ea Súp và các tuyến lân cận với giá cả công khai, minh bạch. Địa chỉ: 3V45+26J, Cư M'Lan, Ea Súp, Đắk Lắk, Việt Nam.",
        bullets: [
          {
            title: "Giá Cả Hợp Lý",
            description: "Tuyến Easup ⇆ Buôn Ma Thuột: từ 500k; Easup ⇆ CưMgar: 450k; Easup ⇆ EaLê, EaBung: 550k; và nhiều tuyến khác.",
            icon: <FiDollarSign size={26} />
          },
          {
            title: "Đa Dạng Tuyến Đường",
            description: "Cung cấp nhiều tuyến xe từ Easup đi Buôn Ma Thuột, CưMgar, EaĐrơk, CưKbang, EaH’leo… với giá từ 350k – 650k.",
            icon: <FiMap size={26} />
          },
          {
            title: "Phục Vụ Nhanh Chóng",
            description: "Luôn có xe sẵn sàng đón khách tận nơi, phục vụ 24/7, hotline: 0835.340.340.",
            icon: <FiPhoneCall size={26} />
          },
          {
            title: "Tài Xế Thân Thiện",
            description: "Đội ngũ tài xế chuyên nghiệp, nhiệt tình, am hiểu tuyến đường Ea Súp và khu vực lân cận.",
            icon: <FiSmile size={26} />
          },
          {
            title: "Taxi Điện Easup giá rẻ, chất lượng cao",
            description: "Giá công khai, chỉ tính thêm phụ phí chờ 50k/tiếng khi có yêu cầu. Địa chỉ: 3V45+26J, Cư M'Lan, Ea Súp, Đắk Lắk.",
            icon: <FiClock size={26} />
          }
        ],
        imageSrc: "/images/sumenh-trunganh-taxi.jpg"
    },
]
