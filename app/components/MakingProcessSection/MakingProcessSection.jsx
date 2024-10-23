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
    <div className="flex flex-col items-center my-[108px]">
      <div className="relative mb-8 px-2">
        <h2 className="text-center text-[32px] font-bold">
          MAKING PROCESS
        </h2>
        <span className="absolute top-0 left-0 w-2 h-2 rounded-full bg-gradient-to-r from-[#FF4E83] to-[#FFBB54]"></span>
      </div>

      {/* Cards */}
      <div className="flex space-x-8 h-auto">
        {/* Left Card */}
        <div className="flex flex-col items-center w-[740px] max-w-[80%] h-inherit bg-[#141414] rounded-[20px] border border-[#FFFFFF26] py-12">
          {/* Card Content */}
          <h2 className="text-[44px] font-bold">일반 제작</h2>
          <p className="text-gray-400 text-[20px] font-bold">제작 시작 후 5영업일 이내</p>

          <div className="flex flex-col items-center space-y-4 mt-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="w-[600px] p-6 border-2 border-[#FFFFFF26] bg-black rounded-[52px] text-center tooltip-gray mb-2 flex items-center gap-[72px] pl-[80px]"
              >
                <div>
                  <h4
                    className="text-xl font-bold bg-clip-text text-transparent"
                    style={{
                      background: 'linear-gradient(96.34deg, #FF4E83 0.62%, #FFBB54 97.92%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                    }}>
                      {step.heading}
                  </h4>
                  <p className="text-gray-400">{step.subHeading}</p>
                </div>
                <div>
                  <p className="text-gray-400">{step.description}</p>
                  <p className="text-gray-400">{step.description2}</p>
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
          className="flex flex-col items-center w-[740px] max-w-[80%] h-inherit bg-[#141414] rounded-[20px] border border-[#FFFFFF26] py-12"
        >
          {/* Card Content */}
            <div className="text-center mb-10">
              <h2 
                className="text-[44px] font-bold bg-clip-text text-transparent mb-4"
                style={{
                  background: 'linear-gradient(96.34deg, #FF4E83 0.62%, #FFBB54 97.92%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                Ploonet Quickserve™
              </h2>
              <h4 className="text-lg md:text-xl font-bold">제작 시작 후 12~48시간 이내</h4>
            </div>
            <div className="flex flex-col mt-4 gap-5">
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
                <div key={index} className="flex flex-row lg:gap-2">
                  <div className="rounded-[15px] w-[100px] h-[100px] md:w-[134px] md:h-[134px] flex items-center flex-col justify-center mr-4 mb-4" style={{background: 'linear-gradient(135deg, #FF4E83 0%, #FFBB54 100%)'}}>
                    <p className="text-sm md:text-md text-white-500 mb-2">STEP {index + 1}</p>
                    {
                      index !== 1 && (
                        <img 
                          src={step.imgSrc} 
                          alt={step.title} 
                          className="opacity-[0.7]" 
                        />
                      )
                    }
                  </div>

                  <div className="md:ml-[20px] border-b border-b-[#FFFFFF26] flex flex-col justify-center w-auto flex-1">
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
    </div>
  );
};

export default MakingProcessSection;
