import React from "react";

interface NewsCardProps {
  bgColor: string;
  newHeading: string;
  content: string;
  learnMorePath: string;
}

const NewsCard = ({
  bgColor,
  newHeading,
  content,
  learnMorePath,
}: NewsCardProps) => {
  return (
    <div className="px-5">
      <div
        className={`${bgColor} relative w-[280px] h-[504px] md:w-[345px] md:h-[600px] rounded-[5px]`}
      >
        <div
          className="absolute bg-white w-[248px] h-[266px] left-0 right-[32px] 
            bottom-0 rounded-tr-[5px] flex flex-col justify-between py-5 px-5 md:w-[297px]
            md:h-[242px]"
        >
          <h1 className="font-[500px] text-[20px] leading-[24px] w-full h-auto text-left text-primaryColor">
            {newHeading}
          </h1>

          <p className="text-[14px] text-darkGray font-[400px] leading-[20px] w-full h-auto">
            {content}
          </p>

          {/* I used link for test, in a real world application the react-router package will be used instead */}
          <a
            href={learnMorePath}
            className="text-primaryColor font-[500px] text-[12px] leading-[14px] uppercase"
          >
            read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
