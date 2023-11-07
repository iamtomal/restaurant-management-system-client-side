
const SponsorCard = ({sponsor}) => {
    console.log(sponsor);
    const {sponsor_image} = sponsor;
    return (
        <div>
            <div>
          <img className="h-40 mb-16" src={sponsor_image} />
        </div>
        </div>
    );
};

export default SponsorCard;