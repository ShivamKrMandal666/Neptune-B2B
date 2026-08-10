import Image from "next/image";

export function HeaderLogo() {
  return (
    <Image
      src="/images/header-logo.png"
      alt="Neptune B2B logo"
      height={36}
      width={0}
      sizes="(max-width: 640px) 120px, 160px"
      className="h-9 w-auto object-contain"
      priority
    />
  );
}
