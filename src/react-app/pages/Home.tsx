import DashboardLayout from "../components/DashboardLayout";
import MetricCard from "../components/MetricCard";
import AccumulatedCostChart from "../components/AccumulatedCostChart";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Download, Check, ArrowUp, FileText } from 'lucide-react';



export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex h-full">
        {/* Left Panel - Dashboard Configuration */}
        <div className="w-[488px] bg-white border-r border-[#E5E5E5] flex flex-col ">
          {/* Back Button */}
          <div className="px-8 py-6 border-b border-[#E5E5E5]">
            <button className="flex items-center gap-2 text-[#6B6B6B] hover:text-black transition-colors">
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[14px] font-medium">Back to Dashboard</span>
            </button>
          </div>

          {/* Configuration Form */}
          <div className="flex-1 overflow-y-auto px-8 py-6">
            {/* Title Section */}
            <div className="mb-8">
              <h2 className="text-[24px]  font-weight:600 text-[#1F2937] mb-2 tracking-[-0.01em]">
                The Instant Dashboard
              </h2>
              <p className="text-[14px] text-[#6B7280] leading-relaxed">
                Transform JSON data into visual dashboards instantly
              </p>
            </div>

            {/* Dashboard Name */}
            <div className="mb-6">
              <label className="block text-[14px] font-medium text-[#1A1A1A] mb-2">
                Dashboard Name
              </label>
              <input
                type="text"
                value="Dashboard 1"
                className="w-full px-4 py-2.5 bg-white border border-[#E5E5E5] rounded-lg text-[14px] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                readOnly
              />
            </div>

            {/* API Key */}
            <div className="mb-6">
              <label className="block text-[14px] font-medium text-[#1A1A1A] mb-2">
                API Key
              </label>
              <input
                type="text"
                value="dsquiduiiw-2uwj2022-3thd8wws-eyei"
                className="w-full px-4 py-2.5 bg-white border border-[#E5E5E5] rounded-lg text-[14px] text-[#1A1A1A] font-mono focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                readOnly
              />
            </div>

            {/* JSON Data */}
            <div className="mb-6">
              <label className="block text-[14px] font-medium text-[#1A1A1A] mb-2">
                JSON Data
              </label>
              <textarea
                className="w-full px-4 py-3 bg-white border border-[#E5E5E5] rounded-lg text-[13px] text-[#1A1A1A] font-mono leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                rows={8}
                value={`{
  "report_title": "Sales Data",
  "items": [
    {"month": "Jan", "revenue": 45000, "expenses": 32000},
    {"month": "Feb", "revenue": 52000, "expenses": 35000},`}
                readOnly
              />
            </div>

            {/* Generate Button */}
            <div className="relative">
              <textarea
                className="w-full px-7 py-6 bg-[#] border border-[#E5E5E5] rounded-lg text-[13px] text-[#6B6B6B] leading-relaxed resize-none"
                rows={4}
                value="Design an expansive business dashboard featuring detailed charts that illustrate revenue versus expenses over time, prominent key metrics cards, and a comprehensive summary table."
                readOnly
              />
              <button className="absolute bottom-4 right-4 w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
  <ArrowUp className="w-5 h-5 text-white" />
</button>

            </div>
          </div>

          {/* Add Button */}
      
        </div>

        {/* Right Panel - Report Preview */}
        <div className="flex-1 bg-[#F7F7F7] flex flex-col">
          {/* Preview Header */}
          <div className="h-[72px] bg-white border-b border-[#E5E5E5] px-8 flex items-center justify-between">
            <h3 className="text-[18px] font-medium text-[#1F2937]">
              Report Preview
            </h3>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-[14px] text-[#6B6B6B]">Page 1 of 13</span>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center text-[#6B6B6B] hover:text-black hover:bg-gray-100 border border-[#E5E5E5] rounded transition-colors">
                    <ChevronsLeft className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-[#6B6B6B] hover:text-black hover:bg-gray-100 border border-[#E5E5E5] rounded transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-[#6B6B6B] hover:text-black hover:bg-gray-100 border border-[#E5E5E5] transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-[#6B6B6B] hover:text-blackhover:bg-gray-100 border border-[#E5E5E5] rounded transition-colors">
                    <ChevronsRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <button className="flex items-center gap-2 px-4 py-2 text-[#1A1A1A] hover:bg-gray-100 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                <span className="text-[14px] font-medium">Export</span>
              </button>
              
              <button className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                <span className="text-[14px] font-medium">Save</span>
                <Check className="w-4 h-4" />
              </button>
            </div>
          </div>
           
          {/* Report Content */}
         <div className="flex-1 overflow-y-auto p-2 ">
            <div className="max-w-[1200px] mx-auto bg-white shadow-sm p-7 ">

              {/* Page Indicator */}
             <div className="text-right mb-1">
  <span className="text-[12px] text-[#9CA3AF]">Pages 1 to 13</span>
</div>


              {/* Report Header */}
            
             <div className="flex items-start gap-4 mb-3 -mt-1">

                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="text-white w-6 h-6" />
                </div>
                <div className="mb-8 ">
                  <h1 className="text-[28px] font-medium text-[#1F2937] mb-1 tracking-[-0.01em]">
                    Monthly Report
                  </h1>
                  <p className="text-[14px] text-[#6B7280]">Comprehensive Overview</p>
                </div>
                
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-4 gap-6  mb-10">
                <MetricCard label="Over Utilised" value="5" />
                <MetricCard label="Replication Status" value="249" />
                <MetricCard label="Failed Backup Jobs" value="740" />
                <MetricCard label="Total Cost/Month" value="$28568.00" />
              </div>

              {/* Purpose Section */}
              <div className="mb-12">
                <h2 className="text-[20px] font-medium text-[#1F2937] mb-4 tracking-[-0.01em]">
                  Purpose of The Report
                </h2>
                <p className="text-[14px] text-[#4B5563] leading-relaxed mb-4">
                  This is a monthly report as part of the managed services provided by LogicEra. This report contains the following areas:
                </p>
                <ul className="space-y-2">
                  <li className="text-[14px] text-[#4B5563] leading-relaxed flex items-start">
                    <span className="mr-2">•</span>
                    <span>List of Azure resources provisioned and hosted on Azure.</span>
                  </li>
                  <li className="text-[14px] text-[#4B5563] leading-relaxed flex items-start">
                    <span className="mr-2">•</span>
                    <span>Health statistics for the month of December.</span>
                  </li>
                  <li className="text-[14px] text-[#4B5563] leading-relaxed flex items-start">
                    <span className="mr-2">•</span>
                    <span>Approx. Azure Consumption for the month of December.</span>
                  </li>
                </ul>
              </div>

              {/* Billing Section */}
              <div className="mb-8">
                <h2 className="text-[20px] font-medium text-[#1F2937] mb-4 tracking-[-0.01em]">
                  Azure Hosted Azure Billing Analysis 1st December 2025 – 31st December 2025 types
                </h2>
                <p className="text-[14px] text-[#4B5563] leading-relaxed mb-2">
                  • Subscription: Deyaar - HUB - Prod - Sub
                </p>
                <p className="text-[20px] font-medium text-[#1F2937] mt-4">
                  $4,099.31
                </p>
              </div>

              {/* Chart */}
              <AccumulatedCostChart />

              {/* Footer Cards */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="border border-[#E5E5E5] rounded-lg p-6">
                  <h3 className="text-[16px] font-medium text-[#1F2937]">Premium Support</h3>
                </div>
                <div className="border border-[#E5E5E5] rounded-lg p-6">
                  <h3 className="text-[16px] font-medium text-[#1F2937]">Premium Support</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
