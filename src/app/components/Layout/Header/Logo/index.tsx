import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="inline-block max-w-[160px]">
      <Image
        src="/images/logo/logo.png"
        alt="logo"
        width={160} // Matches your target width
        height={50} // Matches your target height
        priority // Ensures fast loading for a critical asset
        className="w-auto h-12 md:h-[50px] object-contain object-left"
        // Explanation of classes:
        // h-12: Standard height on mobile (48px)
        // md:h-[50px]: Specific 50px height on tablet+ screens
        // object-contain: Scales without stretching
        // object-left: Aligns the content to the left side
      />
    </Link>
  );
};

export default Logo;
