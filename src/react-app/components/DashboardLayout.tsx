import { ReactNode } from "react";
import Logo from "./icons/Logo";
import RoboIcon from "./icons/RoboIcon";
import CustomPlugIcon from "./icons/CustomPlugIcon";

import CustomBuildingIcon from "./icons/CustomBuildingIcon";
import {
  Plus,
  
  FileBarChart,
  Settings,
  ChevronDown,
  Bell,
} from "lucide-react";
import { LuMessageSquareText } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-[#F6F6F6]">
      {/* Sidebar */}
      <div className="w-[72px]  flex flex-col items-center py-5">
        <div className="mb-6">
          <Logo />
        </div>

        <button className="w-10 h-10 flex items-center justify-center text-[#9CA3AF] hover:text-black transition-colors mb-6">
          <Plus size={20} />
        </button>

        <nav className="flex flex-col items-center gap-3 flex-1">
          {/* Message icon */}
          <button className="w-10 h-10 flex items-center justify-center text-[#9CA3AF] hover:text-black transition-colors">
            <LuMessageSquareText size={20} />
          </button>

          <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-lg transition-colors">
  <RoboIcon />
</button>


         <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-lg transition-colors">
  <CustomPlugIcon/>
</button>


          {/* Graph icon changed here */}
          <button className="w-10 h-10 flex items-center justify-center text-[#9CA3AF] hover:text-black transition-colors">
            <BsGraphUpArrow size={20} />
          </button>

          <button className="w-10 h-10 flex items-center justify-center text-[#9CA3AF] hover:text-black transition-colors">
            <FileBarChart size={20} />
          </button>
        </nav>

        <div className="flex flex-col items-center gap-3 mt-auto">
         <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-lg transition-colors">
  <CustomBuildingIcon />
</button>


          <button className="w-10 h-10 flex items-center justify-center text-[#9CA3AF] hover:text-black transition-colors">
            <Settings size={20} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-[72px] bg-[#] border-b border-[#E5E5E5] px-8 flex items-center justify-between">
          <h1 className="text-[20px] font-medium text-[#1F2937] tracking-[-0.01em]">
            Dashboard Builder
          </h1>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">P</span>
              </div>
              <span className="text-[14px] font-medium text-[#1A1A1A]">
                Onepane Organisation
              </span>
              <ChevronDown className="w-4 h-4 text-[#6B6B6B]" />
            </button>

            <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-[#1A1A1A]" />
            </button>

            <img
              src="https://019c5820-5cb1-7ab7-83b8-c6c26ba1b56f.mochausercontent.com/1000579848-01.jpeg"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border border-[#E5E5E5]"
            />
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
