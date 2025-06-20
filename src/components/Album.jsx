import { useState } from 'react';

const Album = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if(current === 0) {
            setCurrent(slides.length - 1);
        } else {
            setCurrent(current - 1);
        }
    }
    let nextSlide = () => {
        if(current === slides.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    }

    return (
    <div className="overflow-hidden relative mt-3">
        <div className="flex transition ease-out duration-200"
            style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((s, index) => (
                    <img
                        key={index}
                        src={s}
                        className="px-2"
                        alt={`Slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
                <button onClick={previousSlide}>
                    <svg className='hover:stroke-white cursor-pointer' xmlns="http://www.w3.org/2000/svg"
                        width="32" height="32" fill="none" stroke="#9cafa3" strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="2">
                        <path d="m12 19-7-7 7-7M19 12H5" />
                    </svg>
                </button>

                <button onClick={nextSlide}>
                    <svg className='hover:stroke-white cursor-pointer' xmlns="http://www.w3.org/2000/svg"
                        width="32" height="32" fill="none" stroke="#9cafa3" strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Album;
