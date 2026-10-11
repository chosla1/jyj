export const site = {
  name: "정유진 법률사무소",
  attorneyTitle: "파트너변호사",
  attorneyName: "김상철",
  address: "울산광역시 북구 호계동 250-3 302호",
  region: "울산광역시 북구",
  /** 전화번호가 확정되면 숫자만 입력하세요. 예: 0521234567 */
  phoneTel: "",
  phoneDisplay: "[추후 입력]",
  email: "[추후 입력]",
  url: "https://example.com",
  heroImageSrc: "/images/hero.jpg",
  attorneyPhotoSrc: "",
  /** Google Maps iframe embed URL (API 키 불필요) */
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260!2d129.3518132!3d35.6306906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3567cafcd4decc0d%3A0x26fa345331011ac6!2z7Jq47IKw6rSR7Jet7IucIOu2gOq1rCDtm6jqs4TrqbQgMjUwLTM!5e0!3m2!1sko!2skr",
} as const;

export const seo = {
  title: "정유진 법률사무소 | 울산 법률상담",
  description:
    "울산 북구 호계동 정유진 법률사무소입니다. 파트너변호사 김상철이 의뢰인의 상황을 살피고, 신중한 법률 상담과 대응 방향을 안내합니다.",
  keywords: [
    "정유진 법률사무소",
    "울산 법률사무소",
    "울산 변호사",
    "울산 법률상담",
    "북구 변호사",
    "북구 법률사무소",
    "호계동 법률사무소",
  ],
};

export function getPhoneHref() {
  if (!site.phoneTel) return "#consultation";
  return `tel:${site.phoneTel}`;
}
