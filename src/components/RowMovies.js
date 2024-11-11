/* eslint-disable jsx-a11y/iframe-has-title */
import React, {useState, useRef} from 'react';
import RowHeader from './RowHeader';

import CardPreview from './CardPreview';
import IconChevronLeft from './icons/IconChevronLeft';
import IconChevronRight from './icons/IconChevronRight';

const RowMovies = ({title, movies, genres}) => {
  const [showControl, setShowControl] = useState(false);

  const [sliderPosition, setSliderPosition] = useState(0);

  const listRef = useRef();
  const [, setMoved] = useState(false);

  const handleClickMove = (value) => {
    setMoved(true);
    const childNodesLength = listRef.current.childNodes.length;
    const offsetWidth = listRef.current.offsetWidth;
    let distanceX = listRef.current.getBoundingClientRect().x - 20;

    let totalClick = Math.floor((230 * childNodesLength - offsetWidth) / 230);

    if (value === 'left' && sliderPosition > 0) {
      // console.log("left");
      listRef.current.style.transform = `translateX(${260 + distanceX}px)`;
      // console.log("totalClick:", totalClick);
      // console.log("sliderPosition:", sliderPosition);
      setSliderPosition(sliderPosition - 1);
    }
    if (value === 'right' && sliderPosition < totalClick) {
      // console.log("right");
      listRef.current.style.transform = `translateX(${-260 + distanceX}px)`;
      // console.log(listRef.current.childNodes.length);
      // console.log("totalClick:", totalClick);
      // console.log("sliderPosition:", sliderPosition);
      setSliderPosition(sliderPosition + 1);
    }
    if (sliderPosition === totalClick - 1) {
      listRef.current.style.transform = `translateX(${0}px)`;

      distanceX = -2;
      setSliderPosition(0);
    }
  };

  if (!movies) return null;

  return (
    <section
      id="slider-content"
      className="pl-4 space-y-2 md:mt-4 slider-content "
    >
      <div
        onMouseEnter={() => setShowControl(true)}
        onMouseLeave={() => setShowControl(false)}
      >
        <RowHeader title={title}></RowHeader>
        <div className="relative wrap">
          {/* control-left */}

          {showControl && (
            <div
              onClick={() => handleClickMove('left')}
              className="absolute bottom-0 left-0 md:-left-5 z-20 flex items-center justify-center h-[5.7rem] md:h-[7.2rem]  cursor-pointer control-left bg-bgColor opacity-80"
            >
              <IconChevronLeft></IconChevronLeft>
            </div>
          )}

          {/* items */}

          <div
            ref={listRef}
            className="flex w-full h-full pl-2 transition-all cursor-pointer scrollbar-hide flex-nowrap gap-x-3 slider"
          >
            {movies.map((item) => {
              return (
                <div key={item.id} className="relative">
                  <div className="w-[180px] md:w-[230px]">
                    <CardPreview genres={genres} data={item}></CardPreview>
                  </div>
                </div>
              );
            })}
          </div>

          {/* control-right */}
          {showControl && (
            <div
              onClick={() => handleClickMove('right')}
              className="absolute bottom-0 right-0 md:right-2 z-20 flex items-center justify-center h-[5.7rem] md:h-[7.2rem] md:translate-x-3 cursor-pointer control-right bg-bgColor opacity-60"
            >
              <span className="w-8 h-8">
                <IconChevronRight className="w-8 h-8"></IconChevronRight>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RowMovies;
