export type RecoveryCase = {
  id: string;
  category: string;
  type: string;
  amount: string;
  result: string;
  period: string;
  summary: string;
  process: string;
  attorney: string;
};

export const caseFilters = [
  "전체",
  "보이스피싱",
  "로맨스스캠",
  "투자사기",
  "대여금",
  "미수금",
] as const;

export const cases: RecoveryCase[] = [
  {
    id: "case-1",
    category: "보이스피싱",
    type: "검찰 사칭",
    amount: "3,200만 원",
    result: "전액 환수",
    period: "4개월",
    summary:
      "검찰을 사칭한 전화로 '계좌가 범죄에 연루됐다'며 송금 요구",
    process: "지급정지 신청, 계좌 추적, 형사 고소",
    attorney: "김상철",
  },
  {
    id: "case-2",
    category: "보이스피싱",
    type: "은행 사칭",
    amount: "1,800만 원",
    result: "1,500만 원 환수",
    period: "5개월",
    summary:
      "은행 직원을 사칭해 보안 점검이 필요하다며 지정 계좌로 이체를 요구",
    process: "지급정지 신청, 금융사 조회 협조, 민사 청구",
    attorney: "김상철",
  },
  {
    id: "case-3",
    category: "보이스피싱",
    type: "가족 사칭",
    amount: "850만 원",
    result: "전액 환수",
    period: "3개월",
    summary:
      "자녀를 사칭한 메신저로 급히 돈이 필요하다며 송금을 요구",
    process: "계좌 지급정지, 대화 내역 확보, 형사고소",
    attorney: "김상철",
  },
  {
    id: "case-4",
    category: "보이스피싱",
    type: "검찰 사칭",
    amount: "5,200만 원",
    result: "4,100만 원 환수",
    period: "7개월",
    summary:
      "검찰 수사관 사칭 전화로 안전계좌 이체를 반복 요구",
    process: "다수 계좌 추적, 지급정지, 형사 고소 및 민사 절차",
    attorney: "김상철",
  },
  {
    id: "case-5",
    category: "보이스피싱",
    type: "금융감독원 사칭",
    amount: "2,400만 원",
    result: "전액 환수",
    period: "4개월",
    summary:
      "금융감독원을 사칭해 계좌 점검이 필요하다며 이체를 유도",
    process: "지급정지 신청, 거래내역 분석, 형사 고소",
    attorney: "김상철",
  },
  {
    id: "case-6",
    category: "보이스피싱",
    type: "경찰 사칭",
    amount: "960만 원",
    result: "700만 원 환수",
    period: "6개월",
    summary:
      "경찰을 사칭해 범죄 연루를 언급하며 지정 계좌로 송금을 요구",
    process: "계좌 추적, 지급정지, 수사기관 고소",
    attorney: "김상철",
  },
  {
    id: "case-7",
    category: "보이스피싱",
    type: "택배 사칭",
    amount: "420만 원",
    result: "전액 환수",
    period: "2개월",
    summary:
      "미배송 택배 수수료를 빌미로 소액 결제를 유도한 뒤 추가 송금을 요구",
    process: "결제 내역 확보, 지급정지, 형사 고소",
    attorney: "김상철",
  },
  {
    id: "case-8",
    category: "보이스피싱",
    type: "기관 사칭",
    amount: "3,700만 원",
    result: "2,900만 원 환수",
    period: "8개월",
    summary:
      "공공기관을 사칭한 전화로 보조금 환수 명목의 송금을 요구",
    process: "자금 이동 경로 확인, 지급정지, 민·형사 절차",
    attorney: "김상철",
  },
  {
    id: "case-9",
    category: "로맨스스캠",
    type: "메신저 투자 유도",
    amount: "2,100만 원",
    result: "전액 환수",
    period: "6개월",
    summary:
      "메신저로 접근한 상대가 친밀 관계를 형성한 뒤 투자 입금을 유도",
    process: "대화·송금 내역 확보, 계좌 추적, 형사 고소",
    attorney: "김상철",
  },
  {
    id: "case-10",
    category: "로맨스스캠",
    type: "가상자산 송금",
    amount: "4,800만 원",
    result: "3,200만 원 환수",
    period: "9개월",
    summary:
      "해외 거주자를 사칭하며 가상자산 지갑으로 송금을 반복 요구",
    process: "거래소 조회, 지갑 주소 추적, 형사 고소",
    attorney: "김상철",
  },
  {
    id: "case-11",
    category: "로맨스스캠",
    type: "비상금 요구",
    amount: "1,200만 원",
    result: "전액 환수",
    period: "5개월",
    summary:
      "급한 사정을 이유로 비상금 송금을 요청한 뒤 연락이 두절",
    process: "입금 계좌 확인, 지급정지, 형사고소",
    attorney: "김상철",
  },
  {
    id: "case-12",
    category: "로맨스스캠",
    type: "출금 수수료 명목",
    amount: "3,500만 원",
    result: "2,200만 원 환수",
    period: "7개월",
    summary:
      "투자 수익 출금을 위해 수수료·세금을 추가로 입금해야 한다고 요구",
    process: "플랫폼·계좌 자료 확보, 자금 추적, 민·형사 검토",
    attorney: "김상철",
  },
  {
    id: "case-13",
    category: "로맨스스캠",
    type: "해외 계좌 송금",
    amount: "6,100만 원",
    result: "4,000만 원 환수",
    period: "10개월",
    summary:
      "해외 사업 자금을 명목으로 여러 차례 해외 계좌 송금을 요구",
    process: "해외 송금 내역 정리, 계좌 추적, 형사 고소",
    attorney: "김상철",
  },
  {
    id: "case-14",
    category: "투자사기",
    type: "리딩방",
    amount: "1,600만 원",
    result: "전액 환수",
    period: "5개월",
    summary:
      "종목 리딩방을 통해 단기간 고수익을 약속하며 투자금을 모집",
    process: "대화·입금 내역 확보, 운영 주체 확인, 형사 고소",
    attorney: "김상철",
  },
  {
    id: "case-15",
    category: "투자사기",
    type: "가상자산 플랫폼",
    amount: "8,400만 원",
    result: "5,600만 원 환수",
    period: "11개월",
    summary:
      "가상자산 투자 플랫폼에 입금한 뒤 출금이 제한되고 추가 입금을 요구",
    process: "거래내역·지갑 주소 확인, 계좌 추적, 민·형사 절차",
    attorney: "김상철",
  },
  {
    id: "case-16",
    category: "투자사기",
    type: "폰지 구조",
    amount: "2,700만 원",
    result: "전액 환수",
    period: "6개월",
    summary:
      "후순위 투자금으로 선순위 수익을 지급하는 구조로 투자 권유",
    process: "투자 구조 분석, 입금 내역 정리, 형사 고소",
    attorney: "김상철",
  },
  {
    id: "case-17",
    category: "투자사기",
    type: "증권사 사칭",
    amount: "4,300만 원",
    result: "3,100만 원 환수",
    period: "8개월",
    summary:
      "증권사 직원을 사칭한 상담으로 가짜 투자사이트에 입금을 유도",
    process: "홈페이지·통화 자료 확보, 계좌 추적, 형사 고소",
    attorney: "김상철",
  },
  {
    id: "case-18",
    category: "투자사기",
    type: "출금 제한",
    amount: "1,050만 원",
    result: "전액 환수",
    period: "4개월",
    summary:
      "소액 수익 출금 이후 본 투자금 출금이 막히고 수수료를 요구",
    process: "거래 화면 보존, 지급정지, 형사 고소",
    attorney: "김상철",
  },
  {
    id: "case-19",
    category: "투자사기",
    type: "가짜 투자사이트",
    amount: "9,200만 원",
    result: "6,800만 원 환수",
    period: "12개월",
    summary:
      "실제 금융회사를 흉내 낸 사이트에 반복 입금한 뒤 출금이 거부됨",
    process: "사이트·앱 자료 확보, 다수 계좌 추적, 민·형사 절차",
    attorney: "김상철",
  },
  {
    id: "case-20",
    category: "투자사기",
    type: "리딩방 추가입금",
    amount: "2,250만 원",
    result: "1,800만 원 환수",
    period: "5개월",
    summary:
      "손실 회복을 이유로 리딩방에서 추가 입금을 반복 요구",
    process: "대화 내역 확보, 입금 계좌 확인, 형사 고소",
    attorney: "김상철",
  },
  {
    id: "case-21",
    category: "대여금",
    type: "차용증 있는 대여",
    amount: "1,500만 원",
    result: "전액 회수",
    period: "3개월",
    summary:
      "차용증을 작성하고 빌려준 뒤 약정 기한에도 반환되지 않음",
    process: "차용증·이체내역 검토, 내용증명, 지급청구",
    attorney: "정유진",
  },
  {
    id: "case-22",
    category: "대여금",
    type: "지인 대여",
    amount: "800만 원",
    result: "전액 회수",
    period: "4개월",
    summary:
      "지인에게 생활자금을 이체로 빌려준 뒤 반환이 지연됨",
    process: "메시지·이체내역 확인, 지급청구, 소송",
    attorney: "정유진",
  },
  {
    id: "case-23",
    category: "대여금",
    type: "사업자금 대여",
    amount: "5,000만 원",
    result: "4,200만 원 회수",
    period: "8개월",
    summary:
      "사업 운영 자금을 대여했으나 분할 상환 약정이 이행되지 않음",
    process: "계약·이체 자료 검토, 지급명령, 강제집행 검토",
    attorney: "정유진",
  },
  {
    id: "case-24",
    category: "대여금",
    type: "차용증 없는 대여",
    amount: "1,200만 원",
    result: "전액 회수",
    period: "6개월",
    summary:
      "차용증 없이 계좌이체와 메신저 약정만으로 금전을 대여",
    process: "이체·대화 자료 정리, 대여 사실 입증, 지급청구",
    attorney: "정유진",
  },
  {
    id: "case-25",
    category: "대여금",
    type: "분할상환 약정",
    amount: "2,800만 원",
    result: "2,400만 원 회수",
    period: "7개월",
    summary:
      "분할 상환을 약정했으나 중도부터 입금이 중단됨",
    process: "약정 내용 확인, 잔액 산정, 민사 청구",
    attorney: "정유진",
  },
  {
    id: "case-26",
    category: "미수금",
    type: "거래대금",
    amount: "3,600만 원",
    result: "전액 회수",
    period: "5개월",
    summary:
      "물품 공급 후 세금계산서를 발행했으나 거래대금이 지급되지 않음",
    process: "계약서·세금계산서 검토, 내용증명, 지급청구",
    attorney: "정유진",
  },
  {
    id: "case-27",
    category: "미수금",
    type: "공사대금",
    amount: "7,500만 원",
    result: "6,000만 원 회수",
    period: "9개월",
    summary:
      "공사 완료 후에도 잔금이 지급되지 않고 지급 시기가 반복 연기됨",
    process: "도급자료·기성 내역 확인, 지급청구, 소송",
    attorney: "정유진",
  },
  {
    id: "case-28",
    category: "미수금",
    type: "용역비",
    amount: "940만 원",
    result: "전액 회수",
    period: "3개월",
    summary:
      "용역 수행 후 대금 지급이 지연되고 연락이 소홀해짐",
    process: "용역계약·수행 자료 확인, 내용증명, 지급청구",
    attorney: "정유진",
  },
  {
    id: "case-29",
    category: "미수금",
    type: "물품대금",
    amount: "2,160만 원",
    result: "1,900만 원 회수",
    period: "6개월",
    summary:
      "반복 납품 후 외상 잔액이 누적되어 회수가 지연됨",
    process: "거래명세서·계좌내역 정리, 지급청구",
    attorney: "정유진",
  },
  {
    id: "case-30",
    category: "미수금",
    type: "외상매출",
    amount: "4,400만 원",
    result: "전액 회수",
    period: "8개월",
    summary:
      "장기간 외상 거래 후 잔액 정산이 이루어지지 않음",
    process: "거래 원장·세금계산서 검토, 지급명령, 민사 절차",
    attorney: "정유진",
  },
];
