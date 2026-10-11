export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "상담 신청",
    description:
      "홈페이지 상담 신청 또는 전화를 통해 기본 정보를 남겨 주시면, 상담 일정을 안내드립니다.",
  },
  {
    number: "02",
    title: "사건 내용 확인",
    description:
      "현재 상황, 관련 자료, 희망하시는 결과를 확인하고 상담에 필요한 쟁점을 정리합니다.",
  },
  {
    number: "03",
    title: "법률 검토",
    description:
      "관련 법령과 절차를 기준으로 사안을 검토하고, 확인할 수 있는 범위 안에서 설명을 준비합니다.",
  },
  {
    number: "04",
    title: "대응 방향 안내",
    description:
      "가능한 선택지와 이후 절차를 안내합니다. 수임 여부는 상담 이후 별도로 협의합니다.",
  },
];
