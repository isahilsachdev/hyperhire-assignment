import Image from 'next/image';
import React from 'react';

const MakingProcessSection = () => {
  const steps = [
    { heading: 'STEP 1', description: '영상 제작 문의를 통해 의뢰 확인 후', description2: '상담을 통해 방향 설정 및 내용 협의', subHeading: '사전 논의' },
    { heading: 'STEP 2', description: '스토리보드 전달&수정을 통한 기획안 확정', description2: '가상인간 발화용 스크립트 작성과 프롬프팅', subHeading: '영상 기획' },
    { heading: 'STEP 3', description: '작성한 스크립트로 가상인간 영상 생성', description2: '그외 이미지, 배경 음악 등 필요 요소 생성', subHeading: '영상 생성 ' },
    { heading: 'STEP 4', description: '영상 전문가의 편집, 디자인, 후반 작업 단계', description2: '필요시 실사 촬영 병행하여 편집본 완성', subHeading: '영상 편집' },
    { heading: 'STEP 5', description: '고객 피드백 반영하여 최종본 완성 및 납품', description2: '* 영상 수정 무료 1회 제공', subHeading: '최종 납품' },
  ];

  return (
    <div className="flex flex-col items-center my-[108px] bg-black px-4 lg:px-0">
      <div className="relative mb-8 px-2">
        <h2 className="text-center text-[24px] md:text-[32px] font-bold">
          MAKING PROCESS
        </h2>
        <span className="absolute top-0 left-0 w-2 h-2 rounded-full bg-gradient-to-r from-[#FF4E83] to-[#FFBB54]"></span>
      </div>

      {/* Cards */}
      <div className="h-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 px-4 w-[98%] justify-center lg:w-[90%]">
        {/* Left Card */}
        <div className="flex flex-col items-center w-full justify-center lg:w-[48%] max-w-full lg:max-w-[80%] h-inherit bg-[#141414] rounded-[20px] border border-[#FFFFFF26] py-12 px-4">
          {/* Card Content */}
          <h2 className="text-[28px] md:text-[44px] font-bold">일반 제작</h2>
          <p className="text-gray-400 text-[16px] md:text-[20px] font-bold">제작 시작 후 5영업일 이내</p>

          <div className="flex flex-col items-center space-y-4 mt-8 w-[98%] md:w-[94%]">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`w-[90%] max-w-[98%] lg:w-[99%] lg:max-w-[99%] p-6 border-2 border-[#FFFFFF26] bg-black rounded-[15px] md:rounded-[52px] text-center ${index !== 4 ? 'tooltip-gray' : ''} mb-2 flex`}
              >
                <div className='w-full m-auto md:w-[90%] flex md:flex-row items-center gap-[32px] lg:gap-[22px] 2xl:w-[80%]'>
                  <div>
                    <h4
                      className="text-[18px] whitespace-nowrap text-left font-bold bg-clip-text text-transparent md:text-[12px]"
                      style={{
                        background: 'linear-gradient(96.34deg, #FF4E83 0.62%, #FFBB54 97.92%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                      }}>
                        {step.heading}
                    </h4>
                    <p className="text-gray-400 whitespace-nowrap text-left text-[20px] text-white font-bold">{step.subHeading}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-[18px] text-left">{step.description}</p>
                    <p className="text-gray-400 text-[18px] text-left">{step.description2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div
          style={{
            background: 'linear-gradient(#141414, #141414) padding-box, linear-gradient(135deg, #FF4E83, #FFBB54) border-box',
          }}
          className="flex flex-col items-center w-full lg:w-[48%] max-w-full lg:max-w-[80%] h-inherit bg-[#141414] rounded-[20px] border border-[#FFFFFF26] py-12 px-4"
        >
          {/* Card Content */}
          <div className="text-center mb-10">
              <h2 
                className="text-[28px] md:text-[44px] font-bold bg-clip-text text-transparent mb-4"
                style={{
                  background: 'linear-gradient(96.34deg, #FF4E83 0.62%, #FFBB54 97.92%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                Ploonet Quickserve™
              </h2>
              <h4 className="text-base md:text-xl font-bold">제작 시작 후 12~48시간 이내</h4>
          </div>
          <div className="flex flex-col mt-4 gap-5 w-[80%]">
            {[{
              title: "제작 안내",
              description: '영상 제작 문의를 통해 의뢰 확인 후 견적 및 진행 순서 안내',
              imgSrc: '/process1.svg',
            }, {
              title: '영상 생성',
              description: '스크립트 수신 즉시 가상인간 영상 생성 그외 이미지, 배경 음악 등 필요 요소 생성',
              imgSrc: '/process1.svg',
            }, {
              title: '편집 및 납품',
              description: '편집 진행, 12~48시간 내 최종본 완성 및 납품',
              imgSrc: '/process3.svg',
            }].map((step, index) => (
              <div key={index} className="flex flex-row gap-6">
                <div className="rounded-[15px] w-[100px] h-[100px] md:w-[134px] md:h-[134px] flex flex-col items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #FF4E83 0%, #FFBB54 100%)'}}>
                  <p className="text-sm md:text-md text-white-500 mb-2">STEP {index + 1}</p>
                  {
                    index !== 1 && (
                      <Image 
                        src={step.imgSrc} 
                        alt={step.title} 
                        width={36}
                        height={18}
                      />
                    )
                  }
                </div>

                <div className="border-b border-b-[#FFFFFF26] flex flex-col justify-center flex-1">
                  <h4 className="text-sm md:text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className='mt-16 px-4 lg:px-0'>
        <p className="text-gray-400 text-sm md:text-base">
          * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며, 모션그래픽 등 전문 작업이 필요할 경우 작업 기간은 조정될 수 있습니다.
        </p>
        <p className="text-gray-400 text-sm md:text-base">
          ** 영상의 길이, 영상 제작에 필요한 수준에 따라 빠른 작업이 불가할 수 있으며, 클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default MakingProcessSection;
