import Image from "next/image";

export function FooterLogo() {
  return (
    <Image
      src="/images/footer-logo.png"
      alt="Neptune B2B logo"
      width={325}
      height={262}
      sizes="(max-width: 640px) 140px, 180px"
      className="h-16 w-auto object-contain"
    />
  );
}
