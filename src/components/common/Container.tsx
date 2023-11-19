import Dashboard from "@/pages/dashboard/Dashboard";

export default function Container({children}) {
  return (
    <>
      <div className='max-w-[1510px] max-[1610px]:mx-[100px] m-auto'>
        {children}
      </div>
    </>
  )
}
