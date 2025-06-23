import React, { useState } from 'react';

const CarouselCard = React.memo(({ images, title, tools = [] }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((current + 1) % images.length);
    const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

    return (
        <div className="relative rounded-3xl overflow-hidden w-full md:w-[48%] mb-6">
            {/* Image Carousel */}
            <div className="relative w-full h-[370px]">
                <img
                    src={images[current]}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-all duration-300"
                />
                <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white px-2 py-1 rounded-full text-xs">
                    ‹
                </button>
                <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white px-2 py-1 rounded-full text-xs">
                    ›
                </button>
            </div>

            {/* Text & Tools */}
            <div className="absolute bottom-3 w-full px-4">
                <p className="font-semibold text-center text-[#22232c] dark:text-[#e0e0e0] mb-2">{title}</p>
                <div className="flex flex-wrap gap-2">
                    {tools.map((tool, idx) => (
                        <span
                            key={idx}
                            className="text-[10px] font-semibold px-3 py-2 rounded-full text-[#22232c] bg-[#e6ebf4]"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default CarouselCard;
