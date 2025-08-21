import { FiPhoneCall, FiMap, FiUser, FiSmile, FiStar } from "react-icons/fi";

const Logos: React.FC = () => {
  return (
    <section id="logos" className="py-16 px-5 bg-background text-center">
      <p className="text-lg font-medium text-center">
        Hơn <span className="text-secondary">1000+</span> khách hàng đã tin dùng dịch vụ taxi điện Easup
      </p>
      <div className="mt-8 w-full flex flex-wrap flex-row items-center justify-evenly gap-5 sm:gap-10 text-3xl text-gray-400 opacity-80">
        {/* Các icon đại diện dịch vụ */}
        <FiPhoneCall />
        <FiMap />
        <FiUser />
        <FiStar />
        <FiSmile />
      </div>
    </section>
  );
};

export default Logos;
