import FreeZoneHero from "../components/FreeZoneHero";
import SectionH8 from "../sections/sectionH8";
import BenefitsList from "./section/BenefitsList";

export default function Page() {
  return (
    <div className="mt-[64px] ">
      <FreeZoneHero
        professionalImagesrc="people-14.png"
        title="Overview"
        descriptions="The Free Zone jurisdiction offers 100% foreign ownership, making it an ideal choice for wholesale distributors, re-exporters, warehousing operations, service providers, and manufacturers focusing on markets beyond the MENA region."
      />
      <BenefitsList />
      <SectionH8 />
    </div>
  );
}
