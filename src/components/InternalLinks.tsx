import React from 'react';
import Link from 'next/link';

const InternalLinks: React.FC = () => {
  return (
    <div className="bg-gray-50 py-8 mt-8">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-xl font-semibold mb-4 text-center">Dịch Vụ Taxi Điện Easup</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Dịch Vụ Chính</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/dich-vu/taxi-4-cho" className="text-blue-600 hover:underline">Taxi Điện 4 Chỗ</Link></li>
              <li><Link href="/dich-vu/taxi-7-cho" className="text-blue-600 hover:underline">Taxi Điện 7 Chỗ</Link></li>
              <li><Link href="/dich-vu/dua-don-san-bay" className="text-blue-600 hover:underline">Đưa Đón Sân Bay</Link></li>
              <li><Link href="/dich-vu/di-cong-tac" className="text-blue-600 hover:underline">Đi Công Tác</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Tuyến Đường</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/tuyen-duong/easup-buon-ma-thuot" className="text-blue-600 hover:underline">Easup ⇆ Buôn Ma Thuột</Link></li>
              <li><Link href="/tuyen-duong/easup-cumgar" className="text-blue-600 hover:underline">Easup ⇆ CưMgar</Link></li>
              <li><Link href="/tuyen-duong/easup-eale-eabung" className="text-blue-600 hover:underline">Easup ⇆ EaLê, EaBung</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Thông Tin</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/bang-gia" className="text-blue-600 hover:underline">Bảng Giá</Link></li>
              <li><Link href="/ve-chung-toi" className="text-blue-600 hover:underline">Về Chúng Tôi</Link></li>
              <li><Link href="/lien-he" className="text-blue-600 hover:underline">Liên Hệ</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalLinks;
