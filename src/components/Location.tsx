import { Bus, Clock, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/data/site";

/** API 키 없이 주소 핀을 표시하는 Google Maps embed URL */
export const officeMapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260!2d129.3518132!3d35.6306906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3567cafcd4decc0d%3A0x26fa345331011ac6!2z7Jq47IKw6rSR7Jet7IucIOu2gOq1rCDtm6jqs4TrqbQgMjUwLTM!5e0!3m2!1sko!2skr";

type LocationProps = {
  mapEmbedUrl?: string;
};

export function Location({ mapEmbedUrl = officeMapEmbedUrl }: LocationProps) {
  const src = mapEmbedUrl || officeMapEmbedUrl;

  return (
    <Section id="location" tone="white">
      <SectionHeading
        eyebrow="LOCATION"
        title="오시는 길"
        description="방문 상담을 원하시면 아래 주소를 확인해 주세요. 지도는 추후 API 연동으로 교체할 수 있습니다."
      />
      <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-4">
          <InfoRow icon={MapPin} label="주소">
            {site.address}
          </InfoRow>
          <InfoRow icon={Bus} label="대중교통">
            울산터미널에서 1462번 버스로 약 30분
          </InfoRow>
          <InfoRow icon={Clock} label="업무시간" note="주말 및 공휴일 휴무">
            평일 09:00 ~ 18:00
          </InfoRow>
        </div>
        <div className="min-h-[400px] w-full lg:col-span-8 lg:min-h-[450px]">
          <iframe
            title="정유진 변호사사무소 위치"
            src={src}
            width="100%"
            height="450"
            className="block h-[400px] w-full border-0 lg:h-[450px]"
            style={{ border: 0, display: "block", width: "100%" }}
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </Section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
  note,
}: {
  icon: LucideIcon;
  label: string;
  children: string;
  note?: string;
}) {
  return (
    <div className="bg-transparent">
      <div className="flex items-center gap-2">
        <Icon
          className="shrink-0 text-slate-500"
          size={18}
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <p className="bg-transparent text-sm text-slate-500">{label}</p>
      </div>
      <p className="mt-1 bg-transparent pl-7 text-base font-medium leading-7 text-slate-700 select-none">
        {children}
      </p>
      {note ? (
        <p className="mt-1 bg-transparent pl-7 text-sm leading-6 text-slate-500">
          {note}
        </p>
      ) : null}
    </div>
  );
}
