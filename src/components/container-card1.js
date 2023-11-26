import * as React from "react";

const ContainerCard1 = ({ dimensionCode, dimensionCodeImageUrl }) => {
  return (
    <div className="self-stretch bg-mediumseagreen-200 overflow-hidden flex flex-col items-center justify-center py-[63px] px-[245px] gap-[40px] text-left text-sm text-white font-mobile-caption-1-medium">
      <img
        className="relative w-[127.3px] h-[29.3px]"
        alt=""
        src={dimensionCode}
      />
      <div className="flex flex-col items-center justify-start gap-[28px]">
        <div className="relative w-[628.2px] h-[17px]">
          <div className="absolute top-[0px] left-[83.4px]">Fees</div>
          <div className="absolute top-[0px] left-[0px]">Blog</div>
          <div className="absolute top-[0px] left-[168.2px]">Leaderboard</div>
          <div className="absolute top-[0px] left-[413px]">Contact Us</div>
          <div className="absolute top-[0px] left-[307px]">Careers</div>
          <div className="absolute top-[0px] left-[539.2px]">
            Privacy Policy
          </div>
        </div>
        <div className="relative leading-[24px] text-gainsboro text-center inline-block w-[786.9px]">{`Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. `}</div>
      </div>
      <img
        className="relative w-[189.5px] h-8"
        alt=""
        src={dimensionCodeImageUrl}
      />
    </div>
  );
};

export default ContainerCard1;
