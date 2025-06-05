import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';
export const pricingTable: { description: string; price: string }[] = [
    {
        description: 'Giá mở cửa',
        price: '10.000 đ / km',
    },
    {
        description: 'Giá cước từ Km tiếp theo đến km 25',
        price: '12.500 đ / km',
    },
    {
        description: 'Giá cước từ Km 25 đến km 100',
        price: '9.000 đ / km',
    },
    {
        description: 'Giá cước từ Km 101 trở lên',
        price: '8.000 đ / km',
    },
];

const Testimonials: React.FC = () => {
    return (
        <div className="grid gap-4 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-2 lg:max-w-full">
            {pricingTable.map((item, index) => (
                <div
                    key={index}
                    className="flex justify-between p-4 border border-gray-300 rounded shadow-sm"
                >
                    <p className="text-base text-foreground font-medium">{item.description}</p>
                    <p className="text-base text-secondary font-semibold">{item.price}</p>
                </div>
            ))}
        </div>

    );
};

export default Testimonials;
