import React from 'react';

const OnDemandSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-10 p-4">
      {/* Gradient Text */}
      <h2 
        className="text-2xl font-bold bg-clip-text text-transparent"
        style={{
          background: 'linear-gradient(96.34deg, #FF4E83 0.62%, #FFBB54 97.92%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
      >
        영상 제작소
      </h2>

      {/* Second Text */}
      <p 
        className="font-light text-[32px] md:text-[44px] text-center leading-snug md:leading-[68px] tracking-tight mt-6"
        style={{ fontFamily: 'Pretendard', letterSpacing: '-0.03em' }}
      >
        당장 내일&nbsp;
        <span className="font-bold">고품질 맞춤 영상</span>
        &nbsp;을 받아보세요.
      </p>

      {/* Circles Section */}
      <div className="flex justify-center mt-10">
        {[
          { heading: 'FAST', subHeading: 'X2' },
          { heading: 'QUALITY', subHeading: 'A++' },
          { heading: 'LOW', heading2: 'PRICE', subHeading: '1/2' },
          { heading: 'HIGH', heading2: 'TECH', subHeading: 'Gen AI' },
        ].map((item, index) => (
          <div 
            key={index}
            className="w-[80px] sm:w-[120px] h-[80px] sm:h-[120px] lg:w-[211px] lg:h-[211px] rounded-full flex flex-col justify-center items-center"
            style={{
              border: '1px solid transparent', 
              borderRadius: '50%',
              background: 'linear-gradient(#141414, #141414) padding-box, linear-gradient(135deg, #FF4E83, #FFBB54) border-box',
            }}
          >
            {/* Big Text */}
            <h3 
              className="text-[16px] lg:text-[32px] font-bold bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(135deg, #FF4E83 0%, #FFBB54 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            >
              {item.heading}
            </h3>

            {item.heading2 && (
              <h3 
                className="text-[16px] lg:text-[32px] font-bold bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(135deg, #FF4E83 0%, #FFBB54 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                {item.heading2}
              </h3>
            )}

            {/* Small Text */}
            <p 
              className="text-[14px] lg:text-[24px] font-medium bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(135deg, #FF4E83 0%, #FFBB54 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            >
              {item.subHeading}
            </p>
          </div>
        ))}
      </div>

      {/* New Section with Text */}
      <h3 className="text-[24px] md:text-[32px] font-bold mt-10">
        AI VIDEO ON YOUR DEMAND
      </h3>

      <div className="text-center mt-6 space-y-2 px-4">
        <p className="text-gray-400 text-[16px] md:text-[20px] font-bold">
          가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI 기술에
        </p>
        <p className="text-gray-400 text-[16px] md:text-[20px] font-bold">
          영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는 보장된 영상을 만듭니다.
        </p>
        <p className="text-gray-400 text-[16px] md:text-[20px] font-bold">
          가격은 절반으로, 속도는 두배로, 품질은 A++!
        </p>
        <p className="text-gray-400 text-[16px] md:text-[20px] font-bold">
          기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등
        </p>
        <p className="text-gray-400 text-[16px] md:text-[20px] font-bold">
          당신이 필요한 &lsquo;그 영상&rsquo;을 플루닛 영상제작소에 맡겨주세요.
        </p>
      </div>
    </div>
  );
};

export default OnDemandSection;
