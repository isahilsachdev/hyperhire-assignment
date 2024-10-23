'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ScrollContainer() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      setShowBtn(window.scrollY < window.innerHeight + 100);
    };

    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  const scrollBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };
  return (
    <aside className="hidden md:block">
      {
        showBtn ? (
          <div
            onClick={scrollBottom}
            className="fixed bottom-[50%] right-12 p-4 w-[125px] h-[125px] flex flex-col justify-center items-center bg-gradient-to-r from-red-400 to-red-600 rounded-full shadow-lg hover:bg-blue-500 text-white cursor-pointer"
          >
            <span className="text-sm text-center leading-tight">제작 문의하기</span>
            <Image src="/diagonal-tick-icon.svg" alt="scroll" width={15} height={15} className="w-[15px] h-auto" />
          </div>
        ) : null
      }
    </aside>
  );
}
