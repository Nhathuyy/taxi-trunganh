import React from "react";

// Dữ liệu bảng giá
export const pricingTable: { description: string; price: string }[] = [
  {
    description: "Giá mở cửa",
    price: "10.000 đ / km",
  },
  {
    description: "Giá cước từ Km tiếp theo đến km 25",
    price: "12.500 đ / km",
  },
  {
    description: "Giá cước từ Km 25 đến km 100",
    price: "9.000 đ / km",
  },
  {
    description: "Giá cước từ Km 101 trở lên",
    price: "8.000 đ / km",
  },
];

// Tách item riêng để bọc React.memo
const PriceItem: React.FC<{ description: string; price: string }> = React.memo(
  ({ description, price }) => {
    return (
      <div className="flex justify-between p-4 border border-gray-300 rounded shadow-sm">
        <p className="text-base text-foreground font-medium">{description}</p>
        <p className="text-base text-secondary font-semibold">{price}</p>
      </div>
    );
  }
);

const Testimonials: React.FC = React.memo(() => {
    return (
      <div className="grid gap-4 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-2 lg:max-w-full">
        {pricingTable.map((item, index) => (
          <PriceItem
            key={index}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    );
  });
  
  // Thêm displayName để tránh ESLint warning
  Testimonials.displayName = "Testimonials";
  
  export default Testimonials;
  



