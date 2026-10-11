export type Attorney = {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  photo: string;
  specialties: string[];
  career: string[];
  education: string[];
};

export const attorneys: Attorney[] = [
  {
    id: "jung",
    name: "정유진",
    nameEn: "Jung Yujin",
    role: "대표변호사",
    photo: "/images/jung.jpg",
    specialties: ["대여금", "미수금", "채권 회수"],
    career: [
      "현 정유진 법률사무소 대표변호사",
      "공군공중기동정찰사령부 인권자문변호사",
      "디엘이앤씨 주식회사 사내변호사",
      "검찰 심화 실무수습",
      "전 대법원 국선변호인",
      "전 서울특별시교육청 소속 변호사",
    ],
    education: [
      "성균관대학교 행정학과 졸업",
      "성균관대학교 법학전문대학원 졸업",
      "성균관대학교 법학전문대학원 박사과정 수료",
    ],
  },
  {
    id: "kim",
    name: "김상철",
    nameEn: "Kim Sangchul",
    role: "파트너변호사",
    photo: "/images/kim.jpeg",
    specialties: ["보이스피싱", "로맨스스캠", "투자사기 환수"],
    career: ["서울중앙지방법원 동계 실무수습", "헌법재판소 실무수습"],
    education: [
      "대원외국어고등학교 졸업",
      "성균관대학교 글로벌리더학부 졸업",
      "서울시립대학 법학전문대학원 졸업",
    ],
  },
];
