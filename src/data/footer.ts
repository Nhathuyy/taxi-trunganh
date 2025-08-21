import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Mang đến dịch vụ taxi điện Easup hiện đại, an toàn và tiện lợi tại Ea Súp, Đắk Lắk. Địa chỉ: 3V45+26J, Cư M'Lan, Ea Súp, Đắk Lắk, Việt Nam.",
    quickLinks: [
        {
            text: "Dịch vụ",
            url: "/dich-vu"
        },
        {
            text: "Bảng giá",
            url: "/bang-gia"
        },
        {
            text: "Về chúng tôi",
            url: "/ve-chung-toi"
        },
        {
            text: "Liên hệ",
            url: "/lien-he"
        },
        {
            text: "Taxi 4 chỗ",
            url: "/dich-vu/taxi-4-cho"
        },
        {
            text: "Taxi 7 chỗ",
            url: "/dich-vu/taxi-7-cho"
        },
        {
            text: "Đưa đón sân bay",
            url: "/dich-vu/dua-don-san-bay"
        }
    ],
    telephone: '0835.340.340',
    socials: {
        facebook: 'https://www.facebook.com/taxidieneasup',
      
    }
}
