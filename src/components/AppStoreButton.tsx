import React from 'react'
import clsx from 'clsx'

import { ctaDetails } from '@/data/cta'

const AppStoreButton = ({ dark }: { dark?: boolean }) => {
    return (
        <a href="tel:+84835340340">
            <button
                type="button"
                className={clsx(
                    "flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md",
                    {
                        "text-white bg-foreground hover:bg-opacity-90": dark,
                        "text-foreground bg-white hover:bg-gray-100": !dark
                    }
                )}
            >
                <div className="mr-3">
                    <svg viewBox="0 0 512 512" width="20">
                        <path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                </div>
                <div>
                    <div className="-mt-1 font-sans text-xl font-semibold">
                        Báo Giá
                    </div>
                </div>
            </button>
        </a>


    )
}

export default AppStoreButton