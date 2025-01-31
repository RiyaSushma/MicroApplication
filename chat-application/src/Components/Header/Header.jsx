import { Logo } from "../Elements";
import CloseIcon from '@mui/icons-material/Close';

function Header() {

    return (
        <nav className="w-full h-14 flex items-center p-2">
            <div className="flex flex-wrap align-middle justify-start p-3">
                <Logo/>
            </div>
            {/* <div className="flex justify-end ml-auto p-5">
                <div className="bg-slate-100 p-0.25 rounded shadow-custom shadow-gray-400">
                    <CloseIcon/>
                </div>
            </div> */}
        </nav>
    );
}

export default Header;