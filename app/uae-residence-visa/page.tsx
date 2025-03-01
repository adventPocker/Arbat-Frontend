import { Metadata } from "next";
import FreeZoneHero from "../components/FreeZoneHero";
import SectionH8 from "../sections/sectionH8";
import UAEVisaPage from "./sections/uae-visa-page";

export const metadata: Metadata = {
  title: "UAE Residence Visa Services | Arbat Corporate",
  description:
    "Professional UAE residence visa services. Expert assistance with visa applications, renewals, and golden visa programs.",
  keywords: [
    "UAE residence visa",
    "Dubai visa services",
    "UAE golden visa",
    "residence permit UAE",
    "visa application Dubai",
    "UAE visa renewal",
  ],
}

export default function Page() {
    return (
      <div className="mt-[64px] ">
        <FreeZoneHero
         catogery="Free Zone"
          professionalImagesrc="people-14.png"
                    title="UAE Residence Visa"
          descriptions="The UAE, known as the jewel of the Middle East, offers a vibrant economy and luxurious lifestyle, making it a prime destination for individuals looking to invest, start businesses, or relocate. Whether it’s Dubai’s cutting-edge infrastructure or Abu Dhabi’s cultural richness, the UAE is an ideal place to live and work.
If you’re considering calling the UAE home, securing a UAE Residence Visa is your first step. Here’s everything you need to know about the process."

        />
        <UAEVisaPage />
        <SectionH8 />
      </div>
    );
}