import Image from "next/image";

export function HeaderLogo() {
  return (
    <Image
      src="/images/header-logo.png"
      alt="Neptune B2B logo"
      width={1056}
      height={291}
      sizes="(max-width: 640px) 120px, 160px"
      className="h-9 w-auto object-contain"
      priority
    />
  );
}
