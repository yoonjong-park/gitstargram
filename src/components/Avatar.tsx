import Image from "next/image";

type Props = { image?: string | null };

export default function Avatar({ image }: Props) {
  return (
    <div className="w-8 h-8 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300">
      <img
        className="rounded-full p-[0.1rem]"
        alt="profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer" // 외부 제공 x박스 이미지 미사용
      />
    </div>
  );
}
