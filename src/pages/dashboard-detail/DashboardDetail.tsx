import Cards from "@/components/cards/Cards";
import { CgMenuGridO } from "react-icons/cg";
import {CardInfo} from "@/constants/card-info";
import {useParams} from "react-router-dom";
import MenuBtn from "@/components/MenuBtn";
import {useState} from "react";

const DashboardDetail = () => {
  const param = useParams()
  const [menu, setMenu] = useState(false)
  return (
      <div className={`shadow-2xl flex justify-between  ${menu ? '' : 'flex-col-reverse'}`}>

        <div className={'flex flex-col justify-between pt-5 w-[100%] items-center'}>
          {menu && <div className={'flex flex-col items-center justify-center space-y-10 mt-40'}>
            <h2 className={'text-6xl'}>{`${CardInfo[0].title} ${param.id || ''}`}</h2>
            <p className={'text-xl text-center w-[70%]'}>{CardInfo[0].text}</p>
          </div>}

          <MenuBtn setMenu={setMenu} menu={menu}/>
        </div>

        <div>
          {!menu && <div className={'flex justify-center mt-7 mb-4'}>
            <h1 className={'text-3xl'}>Drones</h1>
          </div>}
          <div className={`${menu ? 'overflow-y-scroll w-[370px] h-[100vh] border-l-4 border-black-400' : 'h-[82.7vh] overflow-y-auto'} flex justify-center`}>
            <Cards setMenu={setMenu} className={`py-5 ${menu ? 'space-y-2' : 'grid grid-cols-5 gap-4 px-10'}`}/>
          </div>
        </div>
      </div>
  )
}

export default DashboardDetail
