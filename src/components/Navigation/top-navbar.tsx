import Image from "next/image";

export default function TopNavBar() {
  return (
    <Image
      priority
      src="/images/multivista-logo.png"
      height={71}
      width={70}
      alt="Multivista Logo"
    />
  );
}
