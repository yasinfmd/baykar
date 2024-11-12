/* eslint-disable react/prop-types */
import "./style.css";

const Screen = ({ className, children, tab }) => {
  return (
    <div
      className={`${className && className}`}
      style={{
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
    >
      {tab && (
        <div className="w-full h-4 lg:h-10 gap-2 p-3 lg:p-[12px]  flex flex-row items-center justify-start">
          <div className="rounded-full w-2 h-2 bg-[#E11D48]"></div>
          <div className="rounded-full w-2 h-2 bg-[#FBBF24]"></div>
          <div className="rounded-full w-2 h-2 bg-[#22C55E]"></div>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Screen;
