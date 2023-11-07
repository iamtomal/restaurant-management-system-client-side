import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";
import SponsorCard from "./SponsorCard";



const Sponsor = () => {

  const sponsors = useLoaderData();
  return (
    <div>


      <div>
        <p className=" font-concert text-center text-4xl text-orange-700 mt-3">
          Our Partners
        </p>
        <Marquee direction="right">

      <div className="flex gap-4 my-8">
      {
            sponsors?.map(sponsor =><SponsorCard key={sponsor.id} sponsor={sponsor}></SponsorCard>)
        }
      </div>
</Marquee>

        
      </div>





    </div>
  );
};

export default Sponsor;