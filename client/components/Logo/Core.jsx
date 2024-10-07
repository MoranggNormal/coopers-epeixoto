import Image from "next/image";

import logo from "@/app/icons/logo.svg";

const Logo = ({ width = 180, height = 50 }) => {
  return (
    <div>
      <Image
        src={logo.src}
        alt="Coopers Digital Production"
        width={width}
        height={height}
        priority
      />
    </div>
  );
};

export default Logo;
