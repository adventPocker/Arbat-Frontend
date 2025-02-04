import FreeZoneHero from "../components/FreeZoneHero";
import SectionH8 from "../sections/sectionH8";
import FreeZonesGrid from "./sections/FreeZoneList";

export default function page() {
  return (
    <div className="mt-[64px] ">
      <FreeZoneHero
        professionalImagesrc="people-16.png"
        title="Free Zone License Locations and Pricingx"
        descriptions="The Free Zone jurisdiction offers 100% foreign ownership, making it an ideal choice for wholesale distributors, re-exporters, warehousing operations, service providers, and manufacturers focusing on markets beyond the MENA region."
      />
      <FreeZonesGrid />
      <SectionH8 />
    </div>
  );
}
