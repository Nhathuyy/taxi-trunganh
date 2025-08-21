import React from 'react';
import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi';

const AddressInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-bold text-foreground mb-4">Thông Tin Liên Hệ</h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <FiMapPin className="text-secondary mt-1 flex-shrink-0" size={20} />
          <div>
            <p className="font-semibold text-foreground">Địa Chỉ:</p>
            <p className="text-foreground-accent">3V45+26J, Cư M'Lan, Ea Súp, Đắk Lắk, Việt Nam</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FiPhone className="text-secondary mt-1 flex-shrink-0" size={20} />
          <div>
            <p className="font-semibold text-foreground">Hotline:</p>
            <a href="tel:+84835340340" className="text-foreground-accent hover:text-secondary">
              0835.340.340
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FiClock className="text-secondary mt-1 flex-shrink-0" size={20} />
          <div>
            <p className="font-semibold text-foreground">Giờ Làm Việc:</p>
            <p className="text-foreground-accent">24/7 - Phục vụ mọi lúc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
