import LogoImage from '/images/logo192.png';

function Logo({ ...props }) {
  return (
    <div className='w-11 flex gap-3' {...props}>
        <img src={LogoImage}/>
        <div className='flex items-center'>
            <h1 className='poppins-semibold text-xl'>
                Name
            </h1>
        </div>
    </div>
  )
}

export default Logo;