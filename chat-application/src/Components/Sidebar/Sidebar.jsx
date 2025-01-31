import ForumIcon from '@mui/icons-material/Forum';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import GroupIcon from '@mui/icons-material/Group';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Sidebar() {
  return (
    <div className="w-12 flex flex-col p-2 h-full align-middle">
        { /* Top Icons */ }
        <div className='flex flex-col align-top justify-center gap-2'>
            <div className='hover:bg-sky-700 cursor-pointer w-fit h-fit p-1 rounded'>
                <ForumIcon style={{ fill: 'white' }}/>
            </div>
            <div className='hover:bg-slate-700 cursor-pointer w-fit h-fit p-1 rounded'>
                <ElectricBoltIcon style={{ fill: 'white' }}/>
            </div>
            <div className='hover:bg-slate-700 cursor-pointer w-fit h-fit p-1 rounded'>
                <GroupIcon style={{ fill: 'white' }}/>
            </div>
            <div className='hover:bg-slate-700 cursor-pointer w-fit h-fit p-1 rounded'>
                <ContactSupportIcon style={{ fill: 'white' }}/>
            </div>
            <div className='hover:bg-slate-700 cursor-pointer w-fit h-fit p-1 rounded'>
                <QueryStatsIcon style={{ fill: 'white' }}/>
            </div>
        </div>
        
        { /* Bottom Icons */ }
        <div className='flex flex-col mt-auto gap-2'>
            <div className='hover:bg-slate-700 cursor-pointer w-fit h-fit p-1 rounded'>
                <HelpIcon style={{ fill: 'white' }}/>
            </div>
            <div className='hover:bg-slate-700 cursor-pointer w-fit h-fit p-1 rounded'>
                <NotificationsIcon style={{ fill: 'white' }}/>
            </div>
            <div className='hover:bg-slate-700 cursor-pointer w-fit h-fit p-1 rounded'>
                <AccountCircleIcon style={{ fill: 'white' }}/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;