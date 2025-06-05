import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Taxi 4 chổ',
        price: 29,
        features: [
            'Hành khách : 4',
            'Hành lý mang theo: 2',
            'Điều hòa : Có',
            ' Định vị GPS : Có',
            'Cảnh báo camera và máy bắn tốc độ : Có',
            'Tổng đài 24/7: Có',
            'Hỗ trợ tận tâm với trẻ em & người lớn tuổi',
            'Hỗ trợ hành lý',

            
        ],
    },
    {
        name: 'Taxi 7 chổ',
        price: 99,
        features: [
            'Hành khách : 6',
            'Hành lý mang theo: 2',
            'Điều hòa : Có',
            'Định vị GPS : Có',
            'Cảnh báo camera và máy bắn tốc độ : Có',
            'Tổng đài 24/7: Có',
            'Hỗ trợ tận tâm với trẻ em & người lớn tuổi',
            'Hỗ trợ hành lý',
            'Phù hợp cho gia đình, nhóm bạn, hoặc hành lý nhiều',
            'Sạc điện thoại sẵn sàng',
            
        ],
    },
    {
        name: 'Taxi thành phố',
        price: 'Custom',
        features: [
            'Hành khách : 6',
            'Hành lý mang theo: 2',
            'Điều hòa : Có',
            'Định vị GPS : Có',
            'Cảnh báo camera và máy bắn tốc độ : Có',
            'Tổng đài 24/7: Có',
            'Hỗ trợ tận tâm với trẻ em & người lớn tuổi',
            'Hỗ trợ hành lý',
            'Phù hợp cho gia đình, nhóm bạn, hoặc hành lý nhiều',
            'Dịch vụ chu đáo 24/7, tài xế am hiểu đường phố'
        ],
    },
]