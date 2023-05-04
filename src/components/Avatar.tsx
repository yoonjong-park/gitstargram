import Image from "next/image";

type Props = {
  image?: string | null;
  size?: "small" | "normal";
  highlight?: boolean;
};

export default function Avatar({
  image,
  size = "normal",
  highlight = false,
}: Props) {
  return (
    <div className={getContainerStyle(size, highlight)}>
      <img
        className={`bg-white object-cover rounded-full ${getImageSizeStyle(
          size,
        )}`}
        alt="profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer" // 외부 제공 x박스 이미지 미사용
      />
    </div>
  );
}

function getContainerStyle(size: string, highlight: boolean): string {
  const baseStyle = "rounded-full flex justify-center items-center";
  const highlightStyle = highlight
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
    : "";
  const sizeStyle = size === "small" ? "w-9 h-9" : "w-[68px] h-[68px]";
  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: stirng): stirng {
  return size === "small" ? "w-[34px] h-[34px]" : "w-16 h-16 p-[0.2rem]";
}
