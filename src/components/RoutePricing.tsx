import React from 'react';
import { FiMapPin, FiDollarSign, FiClock } from 'react-icons/fi';

const RoutePricing: React.FC = () => {
  const routes = [
    {
      from: "Easup",
      to: "Buôn Ma Thuột",
      price: "500k",
      duration: "45-60 phút",
      icon: <FiMapPin className="text-blue-500" />
    },
    {
      from: "Easup",
      to: "CưMgar",
      price: "450k",
      duration: "40-50 phút",
      icon: <FiMapPin className="text-green-500" />
    },
    {
      from: "Easup",
      to: "EaLê, EaBung",
      price: "550k",
      duration: "50-65 phút",
      icon: <FiMapPin className="text-purple-500" />
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">Bảng Giá Tuyến Đường</h3>
        <p className="text-foreground-accent">Taxi Điện Easup - Giá cả minh bạch, không phát sinh</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {routes.map((route, index) => (
          <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                {route.icon}
                <span className="font-semibold text-foreground">Tuyến</span>
              </div>
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {route.price}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground-accent">Từ:</span>
                <span className="font-semibold text-foreground">{route.from}</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-8 h-0.5 bg-blue-300"></div>
                <FiMapPin className="text-blue-400 mx-2" size={16} />
                <div className="w-8 h-0.5 bg-blue-300"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground-accent">Đến:</span>
                <span className="font-semibold text-foreground">{route.to}</span>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-blue-200">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <FiClock className="text-gray-500" size={14} />
                  <span className="text-foreground-accent">Thời gian:</span>
                </div>
                <span className="font-medium text-foreground">{route.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <FiDollarSign className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
          <div>
            <h4 className="font-semibold text-yellow-800 mb-1">Thông Tin Bổ Sung</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Giá trên đã bao gồm phí cầu đường</li>
              <li>• Phí chờ: 50k/giờ (nếu có yêu cầu)</li>
              <li>• Đặt xe trước: Miễn phí</li>
              <li>• Hỗ trợ hành lý: Miễn phí</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-6">
        <p className="text-foreground-accent mb-3">Và nhiều tuyến đường khác với giá từ 350k - 650k</p>
        <a 
          href="tel:+84835340340" 
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
        >
          <FiMapPin size={18} />
          Gọi Ngay: 0835.340.340
        </a>
      </div>
    </div>
  );
};

export default RoutePricing;
