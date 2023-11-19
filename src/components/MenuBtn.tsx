import {CgMenuGridO} from "react-icons/cg";

const MenuBtn = ({setMenu, menu}) => {
  return (
    <div className={'border-t-4 border-black-400 w-[100%] flex justify-center pt-2 pb-3'}>
      <button onClick={() => setMenu(!menu)}>
        <CgMenuGridO className={'text-4xl text-slate-600'}/>
      </button>
    </div>
  )
}

export default MenuBtn
