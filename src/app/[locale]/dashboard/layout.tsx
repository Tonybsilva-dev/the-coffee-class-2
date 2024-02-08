import { ScrollProgressHorizontal } from "@/app/components/layout/ScrollProgressHorizontal"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='lg:grid-cols-app min-h-screen lg:grid dark:bg-zinc-900'>
      Sidebar
      <div className='max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8'>
        <div className="mb-2">
        <ScrollProgressHorizontal />
        </div>
        {children}
      </div>
    </div>
  )
}
