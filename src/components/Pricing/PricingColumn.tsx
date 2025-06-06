import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, features } = tier;

    return (
        <div className={clsx("w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full", { "shadow-lg": highlight })}>
            <div className="p-2 center border-b border-gray-200 rounded-t-xl">
                <h3 className="text-2xl font-semibold">{name}</h3>
               
                
            </div>
            <div className="p-2 mt-1">
                <p className="font-bold mb-0">DỊCH VỤ</p>
                <p className="text-foreground-accent mb">Trên cả sự tiện lợi cơ bản, bạn sẽ có thêm...</p>
                <ul className="space-y mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <BsFillCheckCircleFill className="h-3 w-3 text-secondary mr-2" />
                            <span className="text-foreground-accent">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PricingColumn