import * as React from "react";
import Header from "../components/header";
import SectionCardFormFilter from "../components/section-card-form-filter";
import SectionCard2 from "../components/section-card2";
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

const LandingPage = () => {
  return (
    <div className="relative [background:radial-gradient(50%_50%_at_50%_50%,_#58f28a,_#000)] w-full flex flex-col items-start justify-start text-center text-5xl text-white font-mobile-caption-1-medium">
      <Header dimensions="/frame.svg" />
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
              src="/shadow@2x.png"
            />
            <img
              className="absolute top-[10.1px] left-[12.4px] w-[235.4px] h-[508px] object-cover mix-blend-normal"
              alt=""
              src="/iphone-14-pro-space-black-mockup-label@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[261.3px] h-[529.7px] object-cover"
              alt=""
              src="/main@2x.png"
            />
          </div>
          <div className="relative w-[329.9px] h-[668.7px] ml-[-35px]">
            <img
              className="absolute top-[0px] left-[0px] w-[329.9px] h-[668.7px] object-cover opacity-[0.7]"
              alt=""
              src="/shadow1@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[329.9px] h-[668.7px] object-cover"
              alt=""
              src="/main1@2x.png"
            />
            <img
              className="absolute top-[12.8px] left-[15.7px] w-[297.2px] h-[641.4px] object-cover mix-blend-normal"
              alt=""
              src="/iphone-14-pro-space-black-mockup-label1@2x.png"
            />
          </div>
          <div className="relative w-[260.4px] h-[527.8px] ml-[-35px]">
            <img
              className="absolute top-[0px] left-[0px] w-[260.4px] h-[527.8px] object-cover opacity-[0.7]"
              alt=""
              src="/shadow2@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[260.4px] h-[527.8px] object-cover"
              alt=""
              src="/main2@2x.png"
            />
            <img
              className="absolute top-[10.1px] left-[12.4px] w-[234.6px] h-[506.2px] object-cover mix-blend-normal"
              alt=""
              src="/iphone-14-pro-space-black-mockup-label2@2x.png"
            />
          </div>
        </div>
      </div>
      <SectionCardFormFilter
        uniqueId="/vector-1.svg"
        uniqueTextId="/vector-2.svg"
        uniqueImageId="/vector-1.svg"
      />
      <SectionCard2 />
      <TradeMorePayLessSection
        dimension="/frame1.svg"
        imageDimensions="/frame2.svg"
        imageDimensionsText="/texture@2x.png"
        imageDimensionsText2="/frame1.svg"
        imageDimensionsText3="/image-93@2x.png"
      />
      <ExploreTheMarketsSection
        imageDimensions="/rectangle@2x.png"
        carImageDimensions="/vector4@2x.png"
        imageDimensionsUrl="/texture1@2x.png"
      />
      <FrontierUnlockSection />
      <SectionCardForm imageDimensions="/texture3@2x.png" />
      <SectionCard />
      <SectionCardFormFilter1
        image109="/image-109@2x.png"
        image110="/image-110@2x.png"
        image111="/image-111@2x.png"
        image112="/image-112@2x.png"
        image113="/image-113@2x.png"
        image114="/image-114@2x.png"
        image115="/image-115@2x.png"
        utsavSomaniBackgrou="/20200117133556utsavsomani-background-removed-1@2x.png"
        picABackgroundRemoved1="/pica-background-removed-1@2x.png"
        iHD3HIa400x400BackgroundR="/6ihd3hia-400x400-background-removed-1@2x.png"
        backgroundRemoved1="/1675483650655-background-removed-1@2x.png"
        image116="/image-116@2x.png"
        image117="/image-117@2x.png"
        iMG20220825085142768Backg="/img-20220825-085142-768-background-removed-1@2x.png"
        imageBackgroundRemoved1="/image-background-removed-1@2x.png"
      />
      <SectionCardFormFilter2
        group1000003818="/group-1000003818.svg"
        texture="/texture4@2x.png"
        unsplasho5NBw8GTnMc="/unsplasho5nbw8gtnmc@2x.png"
        group10000038181="/group-1000003818.svg"
        texture1="/texture4@2x.png"
        group10000038182="/group-1000003818.svg"
        unsplashZHvM3XIOHoE="/unsplashzhvm3xiohoe@2x.png"
      />
      <EarnMoneySection
        texture="/texture5@2x.png"
        texture1="/texture5@2x.png"
        texture2="/texture5@2x.png"
      />
      <TradeTogetherSection1 />
      <VisionariesSection1
        texture="/texture6@2x.png"
        image95="/image-95@2x.png"
        texture1="/texture6@2x.png"
        image94="/image-94@2x.png"
        texture2="/texture6@2x.png"
        image96="/image-96@2x.png"
      />
      <SectionForm1 />
      <ContainerCard1
        dimensionCode="/group-626657.svg"
        dimensionCodeImageUrl="/group-2007.svg"
      />
    </div>
  );
};

export default LandingPage;
