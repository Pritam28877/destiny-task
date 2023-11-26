import * as React from "react";
import Header from "../components/header";
import SectionCardFormFilter from "../components/section-card-form-filter";
import SectionCard3 from "../components/section-card3";
import TradeMorePayLessSection from "../components/trade-more-pay-less-section";
import ExploreTheMarketsSection from "../components/explore-the-markets-section";
import FrontierUnlockSection from "../components/frontier-unlock-section";
import SectionCardForm from "../components/section-card-form";
import SectionCard from "../components/section-card";
import SectionCardFormFilter1 from "../components/section-card-form-filter1";
import SectionCardFormFilter2 from "../components/section-card-form-filter2";
import EarnMoneySection from "../components/earn-money-section";
import TradeTogetherSection1 from "../components/trade-together-section1";
import VisionariesSection1 from "../components/visionaries-section1";
import SectionForm1 from "../components/section-form1";
import ContainerCard1 from "../components/container-card1";

const LandingPage1 = () => {
  return (
    <div className="relative [background:radial-gradient(50%_50%_at_50%_50%,_#58f28a,_#000)] w-full flex flex-col items-start justify-start text-center text-5xl text-white font-mobile-caption-1-medium">
      <Header dimensions="/frame6.svg" />
      <div className="self-stretch flex flex-col items-center justify-center pt-20 px-0 pb-[120px] gap-[76px]">
        <div className="flex flex-col items-center justify-center gap-[40px]">
          <div className="w-[693px] h-[202px] flex flex-row items-end justify-end text-77xl">
            <b className="relative tracking-[-4.19px] leading-[100px]">
              <p className="m-0">It’s time to trade,</p>
              <p className="m-0">
                <span>{`the `}</span>
                <span className="[background:linear-gradient(96.58deg,_#78e65d,_#d5fa39)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  future.
                </span>
              </p>
            </b>
            <b className="relative tracking-[-4.19px] leading-[100px] inline-block [background:linear-gradient(96.58deg,_rgba(212,_249,_56,_0.7),_rgba(213,_250,_57,_0.7))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [filter:blur(33.52px)] ml-[-406px]">
              future.
            </b>
          </div>
          <div className="relative leading-[36px] text-gray-100 hidden">
            Derivates made simple!
          </div>
          <div className="relative capitalize text-neutrals-grey-4">
            Trade BTC, ETH Futures with 125x leverage and earn rewards.
          </div>
        </div>
        <div className="w-[779.6px] h-[668.7px] flex flex-row items-center justify-start">
          <div className="relative w-[261.3px] h-[529.7px]">
            <img
              className="absolute top-[0px] left-[0px] w-[261.3px] h-[529.7px] object-cover opacity-[0.7]"
              alt=""
              src="/shadow3@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[261.3px] h-[529.7px] object-cover"
              alt=""
              src="/main3@2x.png"
            />
            <img
              className="absolute top-[10.1px] left-[12.4px] w-[235.4px] h-[508px] object-cover mix-blend-normal"
              alt=""
              src="/iphone-14-pro-space-black-mockup-label3@2x.png"
            />
          </div>
          <div className="relative w-[329.9px] h-[668.7px] ml-[-35px]">
            <img
              className="absolute top-[0px] left-[0px] w-[329.9px] h-[668.7px] object-cover opacity-[0.7]"
              alt=""
              src="/shadow4@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[329.9px] h-[668.7px] object-cover"
              alt=""
              src="/main4@2x.png"
            />
            <img
              className="absolute top-[12.8px] left-[15.7px] w-[297.2px] h-[641.4px] object-cover mix-blend-normal"
              alt=""
              src="/iphone-14-pro-space-black-mockup-label4@2x.png"
            />
          </div>
          <div className="relative w-[260.4px] h-[527.8px] ml-[-35px]">
            <img
              className="absolute top-[0px] left-[0px] w-[260.4px] h-[527.8px] object-cover opacity-[0.7]"
              alt=""
              src="/shadow5@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[260.4px] h-[527.8px] object-cover"
              alt=""
              src="/main5@2x.png"
            />
            <img
              className="absolute top-[10.1px] left-[12.4px] w-[234.6px] h-[506.2px] object-cover mix-blend-normal"
              alt=""
              src="/iphone-14-pro-space-black-mockup-label5@2x.png"
            />
          </div>
        </div>
      </div>
      <SectionCardFormFilter
        uniqueId="/vector-12.svg"
        uniqueTextId="/vector-1.svg"
        uniqueImageId="/vector-3.svg"
      />
      <SectionCard3 />
      <TradeMorePayLessSection
        dimension="/frame7.svg"
        imageDimensions="/frame8.svg"
        imageDimensionsText="/texture7@2x.png"
        imageDimensionsText2="/frame7.svg"
        imageDimensionsText3="/image-931@2x.png"
        propWidth="77.13%"
        propRight="22.87%"
        propLeft="calc(50% - 41.5px)"
        propLeft1="calc(50% - 45px)"
        propLeft2="calc(50% - 72.5px)"
        propWidth1="77.13%"
        propRight1="22.87%"
        propLeft3="calc(50% - 51.5px)"
        propLeft4="calc(50% - 55.5px)"
        propLeft5="calc(50% - 99.5px)"
        propWidth2="114.8%"
        propRight2="-14.8%"
        propWidth3="77.13%"
        propRight3="22.87%"
        propLeft6="calc(50% - 41.5px)"
        propLeft7="calc(50% - 45px)"
        propLeft8="calc(50% - 94.8px)"
      />
      <ExploreTheMarketsSection
        imageDimensions="/rectangle1@2x.png"
        carImageDimensions="/vector8@2x.png"
        imageDimensionsUrl="/texture8@2x.png"
      />
      <FrontierUnlockSection propBackgroundImage="url('/frame-10000038391@3x.png')" />
      <SectionCardForm
        imageDimensions="/texture9@2x.png"
        propLeft="calc(50% - 279.75px)"
        propLeft1="calc(50% - 279.75px)"
      />
      <SectionCard />
      <SectionCardFormFilter1
        image109="/image-1091@2x.png"
        image110="/image-1101@2x.png"
        image111="/image-1111@2x.png"
        image112="/image-1121@2x.png"
        image113="/image-1131@2x.png"
        image114="/image-1141@2x.png"
        image115="/image-1151@2x.png"
        utsavSomaniBackgrou="/20200117133556utsavsomani-background-removed-11@2x.png"
        picABackgroundRemoved1="/pica-background-removed-11@2x.png"
        iHD3HIa400x400BackgroundR="/6ihd3hia-400x400-background-removed-11@2x.png"
        backgroundRemoved1="/1675483650655-background-removed-11@2x.png"
        image116="/image-1161@2x.png"
        image117="/image-1171@2x.png"
        iMG20220825085142768Backg="/img-20220825-085142-768-background-removed-11@2x.png"
        imageBackgroundRemoved1="/image-background-removed-11@2x.png"
      />
      <SectionCardFormFilter2
        group1000003818="/group-10000038181.svg"
        texture="/texture10@2x.png"
        unsplasho5NBw8GTnMc="/unsplasho5nbw8gtnmc1@2x.png"
        group10000038181="/group-10000038181.svg"
        texture1="/texture11@2x.png"
        group10000038182="/group-10000038181.svg"
        unsplashZHvM3XIOHoE="/unsplashzhvm3xiohoe1@2x.png"
        propLeft="calc(50% - 183.15px)"
        propLeft1="calc(50% - 183.15px)"
        propLeft2="calc(50% - 183.15px)"
      />
      <EarnMoneySection
        texture="/texture12@2x.png"
        texture1="/texture12@2x.png"
        texture2="/texture12@2x.png"
      />
      <TradeTogetherSection1 propBackgroundImage="url('/frame-10000055361@3x.png')" />
      <VisionariesSection1
        texture="/texture13@2x.png"
        image95="/image-951@2x.png"
        texture1="/texture13@2x.png"
        image94="/image-941@2x.png"
        texture2="/texture13@2x.png"
        image96="/image-961@2x.png"
        propAlignSelf="unset"
        propWidth="1459px"
        propHeight="813px"
        propFlexShrink="0"
      />
      <SectionForm1 />
      <ContainerCard1
        dimensionCode="/group-6266571.svg"
        dimensionCodeImageUrl="/group-20071.svg"
      />
    </div>
  );
};

export default LandingPage1;
