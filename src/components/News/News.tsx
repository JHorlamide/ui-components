import React from 'react';
import NewsCard from './NewsCard/NewsCard';
import { NEWS_CONTENT } from '../../utils/mock.data';
import ARROW_RIGHT from '../../assets/arrow_right.svg';
import ARROW_LEFT from '../../assets/arrow_left.svg';
import CustomBtn from '../CustomBtn/CustomBtn';

function News() {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleScroll = (scrollOffset: number) => {
    if (ref.current !== null) {
      ref.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="relative mx-auto mt-10 space-y-20 md:space-y-32 w-full">
      <div className="flex space-x-6 px-5">
        <div className="flex flex-col space-y-5 pl-6">
          <h1
            className="text-[24px] text-primaryColor leading-[32px] md:text-[52px] md:font-[300px]
            md:leading-[56px] border-l-2 border-l-red-500 h-[50px] md:h-[75px]
            pl-5 py-2 md:pl-20"
          >
            News & Insights
          </h1>

          <p
            className="font-[400px] leading-[24px] text-[16px] text-primaryColor pl-5
            text-left w-[312px] md:text-[20px md:font-[500px] md:w-[553px] h-[48px] md:pl-20"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis elit
            condimentum eu quisque. Proin et orci.
          </p>
        </div>
      </div>

      {/* New Content */}
      <div
        ref={ref}
        className="flex overflow-x-scroll scroll-smooth md:overflow-x-hidden pb-10 px-5"
      >
        {NEWS_CONTENT.map((newItem) => (
          <NewsCard
            key={newItem.id}
            bgColor={newItem.bgColor}
            newHeading={newItem.newHeading}
            content={newItem.content}
            learnMorePath={newItem.path}
          />
        ))}
      </div>

      {/* Horizontal Scroll buttons */}
      <div className="hidden absolute md:flex flex-col right-12 top-[52px] -mt-20 z-10 items-center justify-center w-[55px]">
        <CustomBtn
          className="bg-white shadow-lg w-full h-[90px] flex justify-center items-center rounded-tr-[5px] rounded-tl-[5px]"
          rightIcon={
            <img className="w-[9px] h-[18px]" src={ARROW_RIGHT} alt="" />
          }
          onClick={() => handleScroll(40)}
        />

        <CustomBtn
          className="bg-white shadow-lg w-full h-[90px] flex justify-center items-center rounded-br-[5px] rounded-bl-[5px] border-t"
          rightIcon={
            <img className="w-[9px] h-[18px]" src={ARROW_LEFT} alt="" />
          }
          onClick={() => handleScroll(-40)}
        />
      </div>
    </div>
  );
}

export default News;
