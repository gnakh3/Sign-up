import bg from "../../assets/bg.svg";
import SignUp from "../SignUp/SignUp";

const Structure = () => {
  return (
    <div
      className="w-full lg:h-screen bg-cover font-Poppins flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-8 lg:gap-12 py-24 lg:py-0 overflow-x-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-white flex flex-col gap-4 lg:gap-3 w-full max-w-[360px] lg:max-w-[525px] mx-auto lg:mx-0">
        <h1 className="text-[28px] lg:text-[50px] font-bold leading-9 lg:leading-[55px] tracking-[-0.52px] flex items-center justify-center lg:justify-start">
          Learn to code by watching others
        </h1>
        <p className="leading-6.5">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="flex flex-col gap-6 w-full max-w-[360px] lg:max-w-[540px] mx-auto lg:mx-0">
        <div className="w-full max-w-[360px] md:max-w-[540px] h-22 md:h-15 bg-[#5E54A4] rounded-[10px] text-white flex items-center justify-center shadow-[0px_8px_#00000025] cursor-pointer mx-auto text-[15px] leading-6.5">
          <span className="w-full max-w-[220px] md:max-w-auto">
            <strong>Try it free 7 days</strong> then $20/mo. thereafter
          </span>
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default Structure;
