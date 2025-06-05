import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Mang đến dịch vụ taxi điện hiện đại, an toàn và tiện lợi tại Đắk Lắk.",
    quickLinks: [
        {
            text: "Dịch vụ",
            url: "#services"
        },
        {
            text: "Bảng giá",
            url: "#pricing"
        },
        {
            text: "Hỏi đáp",
            url: "#faqs"
        }
    ],
    telephone: '0835.340.340',
    socials: {
        facebook: 'https://www.facebook.com/taxidieneasup',
      
    }
}
