import {cards} from "@/constants/cards";
import {Link} from "react-router-dom";

const Card = ({className, setMenu}) => {
  return (
    <div className={className}>
      {cards.map((item, index) => (
        <div className={'pb-5 mr-5'}>
          <Link to={`/dashboard/${index+1}`} onClick={() => setMenu(true)}>
            <div className={'hover:shadow-[0_0_25px_0_rgb(0,0,0,0.1)] active:shadow-[0_0_55px_0_rgb(0,0,0,0.1)] border-0 border-gray-50 shadow-[0_0px_10px_0px_rgb(0,0,0,0.1)] rounded-[15px] w-[220px] h-[220px] flex justify-center items-center'}>{item.name}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Card
