// app/email-verification/page.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EmailVerificationPage() {
  const router = useRouter();

  const handleNextClick = () => {
    router.push("/next-page");
  };

  return (
    <div className="relative w-[430px] h-[932px] bg-[#F5F5F5]">
      {/* Header */}
      <header className="absolute top-0 left-0 w-[430px] h-[68px] bg-white flex items-center px-[20px] gap-[16px]">
        <Image
          src="/images/hamburger_menu_mobile.png"
          alt="Menu"
          width={30}
          height={30}
        />
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={81.68}
          height={24.5}
        />
      </header>

      {/* Title Section */}
      <div className="absolute top-[64px] left-0 w-[430px] h-[80px] bg-white flex flex-col justify-center items-center px-[20px] gap-[4px]">
        <div className="flex flex-row justify-center items-center w-[404px] h-[46px] gap-[10px]">
          <div className="w-[24px] h-[24px]">
            <Image
              src="/images/arrow_left.png"
              alt="Back"
              width={24}
              height={24}
            />
          </div>
          <h1 className="w-[370px] h-[36px] text-[24px] leading-[36px] font-semibold text-black text-center">
            Email Verification
          </h1>
        </div>
        <p className="w-[228px] h-[24px] text-[16px] leading-[24px] font-normal text-black text-center">
          Your Email has been Verified
        </p>
      </div>

      {/* Main content */}
      <main className="absolute top-[192px] left-[60.5px] w-[309px] h-[359px] bg-white border border-[#828282] rounded-[12px] flex flex-col items-center gap-[20px]">
        <img
          className="w-[309px] h-[236.64px] object-cover"
          alt="Email verification success"
          src="/images/email_verified.png"
        />
        <div className="flex flex-col items-center w-[196px] h-[67px] gap-[7px]">
          <h2 className="w-[196px] h-[33px] text-[22px] leading-[33px] font-bold text-black text-center">
            Congratulations!
          </h2>
          <p className="w-[196px] h-[27px] text-[18px] leading-[27px] font-medium text-black text-center">
            Email Verified!!
          </p>
        </div>
      </main>

      {/* Next button */}
      <div className="absolute top-[688px] left-[12px] w-[406px] h-[48px] bg-[#0070E0] rounded-[48px] flex items-center justify-center">
        <button
          onClick={handleNextClick}
          className="text-[18px] leading-[27px] font-semibold text-white text-center"
        >
          Next
        </button>
      </div>
    </div>
  );
}