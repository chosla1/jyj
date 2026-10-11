export type PracticeArea = {
  id: string;
  title: string;
  description: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    id: "voice-phishing",
    title: "보이스피싱·전화금융사기",
    description:
      "보이스피싱, 기관사칭, 가족사칭 등 전화금융사기 피해에 대한 법률 대응과 피해금 회복을 검토합니다.",
  },
  {
    id: "investment-fraud",
    title: "투자사기·폰지사기",
    description:
      "가상자산, 투자플랫폼, 리딩방, 폰지사기 등 다양한 투자사기 피해에 대해 사실관계를 분석하고 대응 방안을 검토합니다.",
  },
  {
    id: "recovery",
    title: "사기피해금 회복",
    description:
      "사기 피해 발생 이후 자금 흐름과 관련 자료를 확인하고 민·형사상 가능한 대응을 통해 피해금 회복 방안을 검토합니다.",
  },
  {
    id: "debt-collection",
    title: "대여금·미수금·채권회수",
    description:
      "대여금, 거래대금, 미수금 등 회수하지 못한 금전채권에 대해 지급청구 및 민사절차 등 가능한 대응 방법을 검토합니다.",
  },
];
