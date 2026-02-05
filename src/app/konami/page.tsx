import { PrismaClient } from "@prisma/client";
import { Users, Eye, BarChart3 } from "lucide-react";

// --- FIX: FORCE DYNAMIC RENDERING ---
export const dynamic = 'force-dynamic';
export const revalidate = 0;
// ------------------------------------

const prisma = new PrismaClient();

export default async function Dashboard() {
  const visitorCount = await prisma.siteVisit.count();
  const registrationCount = await prisma.registration.count();
  
  // Calculate conversion rate
  const conversionRate = visitorCount > 0 
    ? ((registrationCount / visitorCount) * 100).toFixed(1) 
    : "0";

  return (
    <main className="min-h-screen bg-[#001232] text-white p-6 md:p-12 font-sans">
      
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl mb-2">Analytics Dashboard</h1>
        <p className="text-gray-400 mb-12 font-mono text-xs uppercase tracking-widest">
          Real-time Performance Data
        </p>

        {/* STATS GRID */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          {/* Visitors Card */}
          <div className="bg-[#000F2A] border border-white/10 p-8">
            <div className="flex items-center gap-3 mb-4 text-gray-400">
              <Eye className="w-5 h-5 text-[#FFB902]" />
              <span className="font-mono text-xs uppercase tracking-widest">Total Visitors</span>
            </div>
            <p className="text-5xl font-serif text-white">{visitorCount}</p>
          </div>

          {/* Registrations Card */}
          <div className="bg-[#000F2A] border border-white/10 p-8">
             <div className="flex items-center gap-3 mb-4 text-gray-400">
              <Users className="w-5 h-5 text-green-500" />
              <span className="font-mono text-xs uppercase tracking-widest">Registered</span>
            </div>
            <p className="text-5xl font-serif text-white">{registrationCount}</p>
          </div>

          {/* Conversion Rate Card */}
          <div className="bg-[#000F2A] border border-white/10 p-8">
             <div className="flex items-center gap-3 mb-4 text-gray-400">
              <BarChart3 className="w-5 h-5 text-blue-500" />
              <span className="font-mono text-xs uppercase tracking-widest">Conversion Rate</span>
            </div>
            <p className="text-5xl font-serif text-white">{conversionRate}%</p>
            <p className="text-xs text-gray-500 mt-2">
              {conversionRate}% of visitors sign up.
            </p>
          </div>

        </div>

        {/* LATEST REGISTRATIONS LIST */}
        <div className="border border-white/10 bg-[#000F2A] p-8">
          <h3 className="font-mono text-xs text-[#FFB902] uppercase tracking-widest mb-6">
            Recent Students
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-gray-500 text-xs font-mono uppercase">
                  <th className="pb-4 font-normal">Name</th>
                  <th className="pb-4 font-normal">Email</th>
                  <th className="pb-4 font-normal">Date Joined</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light text-gray-300">
                {(await prisma.registration.findMany({
                   take: 10,
                   orderBy: { createdAt: 'desc' }
                })).map((user) => (
                  <tr key={user.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 pr-4">{user.name}</td>
                    <td className="py-4 pr-4 text-gray-500">{user.email}</td>
                    <td className="py-4 font-mono text-xs text-gray-500">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}
