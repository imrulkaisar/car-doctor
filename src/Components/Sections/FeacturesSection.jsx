import IconBox from "../IconBox";
import timeIcon from "./../../assets/icons/timetable.svg";
import phoneIcon from "./../../assets/icons/phone.svg";
import mapIcon from "./../../assets/icons/location.svg";

const FeacturesSection = () => {
  return (
    <div className="py-14 px-10 bg-secondary rounded-lg text-white flex gap-8 justify-around">
      <IconBox icon={timeIcon} title="7:00 am - 9:00 pm">
        We are open monday-friday
      </IconBox>
      <IconBox icon={phoneIcon} title="+2546 251 2658">
        Have a question?
      </IconBox>
      <IconBox icon={mapIcon} title="Liza Street, New York">
        Need a repair? our address
      </IconBox>
    </div>
  );
};

export default FeacturesSection;
