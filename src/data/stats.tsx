import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "200+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Chuyến xe được thực hiện mỗi ngày, đảm bảo an toàn và tiện lợi cho hành khách."
    },
    {
        title: "5.0",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Điểm đánh giá cao trên các nền tảng, được khách hàng tin tưởng và yêu thích."
    },
    {
        title: "Di chuyển linh hoạt",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Đi lại dễ dàng, thuận tiện trong toàn khu vực tỉnh Đắk Lắk."
    }
    
];