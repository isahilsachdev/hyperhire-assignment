'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    videoType: '',
    name: '',
    email: '',
    phone: '',
    referenceVideo: '',
    agree: false,
    message: '의뢰하실 영상내용 아래 예시를 참고하셔서 이 중 편하신 내용을 기재해주세요. 고객님의 비즈니스 유형 : 관공서/일반기업/소상공인 등 영상 장르 : 홍보,프로모션/IR/프레젠테이션 등 내용 : 제작하시고자 하는 영상의 내용을 간단히 기재해주세요.',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const inputBoxClass = "w-full p-2 mt-2 text-white rounded-md bg-[#141414] h-[50px] px-[10px] border border-[#FFFFFF26]";

  return (
    <section className="flex flex-col items-center justify-center py-16 bg-black px-4 md:px-0 ">
      <div className="mb-10">
        <h4
          className="text-center text-2xl font-bold bg-clip-text text-transparent"
          style={{
            background: 'linear-gradient(96.34deg, #FF4E83 0.62%, #FFBB54 97.92%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}>
          영상 제작소
        </h4>
        <br />
        <h2 className="text-2xl md:text-3xl text-center mb-8">
          <span className="text-gray-200 font-bold">영상 제작이 필요하다면</span>, 지금 문의 주세요.
        </h2>
        <h3 className="text-md md:text-xl text-center mb-8 text-gray-400">
          여러분이 필요한 영상을 빠르게 제작하기 위해 플루닛 영상제작소가<br />즉시 연락 드리겠습니다
        </h3>
        <p className="text-md text-gray-500 text-center">henry.lim@saltlux.com</p>
      </div>
      <form className="max-w-[80%] mx-auto rounded-lg w-[900px]" onSubmit={handleSubmit}>
        <div className="mb-4">
          <select
            name="videoType"
            className={inputBoxClass}
            value={formData.videoType}
            onChange={handleChange}
          >
            <option value="영상 유형 선택<">영상 유형 선택</option>
            <option value="영상 유형 선택 2">영상 유형 선택 2</option>
            <option value="영상 유형 선택 3">영상 유형 선택 3</option>
            <option value="영상 유형 선택 4">영상 유형 선택 4</option>
            <option value="영상 유형 선택 5">영상 유형 선택 5</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            className={inputBoxClass}
            placeholder="연락 받으실 담당자 성함"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            className={inputBoxClass}
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            className={inputBoxClass}
            placeholder="휴대폰 번호"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            className="w-full p-2 mt-2 text-white rounded-md bg-[#141414] px-[10px] border border-[#FFFFFF26] h-[150px]"
            placeholder="메시지를 입력하세요"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="referenceVideo"
            className={inputBoxClass}
            placeholder="참고 영상"
            value={formData.referenceVideo}
            onChange={handleChange}
          />
        </div>
        <p className="text-[12px] text-[#FF6D51] text-left">
          * 참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크 주소를 적어주시면 더 정확히 안내해드리겠습니다.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-between pt-[80px]">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500"
              id="agree"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <span className="text-gray-500 text-sm">
              <span className="underline">개인정보처리방침</span>에 동의합니다.
            </span>
          </div>
          <button type="submit" className="bg-orange-600 text-white p-2 rounded hover:bg-orange-400">
            문의 보내기
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
