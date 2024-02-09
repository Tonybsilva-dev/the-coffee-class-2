import { ChevronRight } from 'lucide-react'
import { ElementType } from 'react'

interface NavItemProps {
  title: string
  icon: ElementType
  path?: string;
}

export function NavItem({ title, icon: Icon, path }: NavItemProps) {
  return (
    <a
      href={path || "#!"}
      data-dd-action-name={`[NavItem] ${title}`}
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-orange-50 dark:hover:bg-zinc-800"
    >
      <Icon className="h-5 w-5 text-zinc-500 group-hover:text-orange-500" />
      <span className="font-medium text-zinc-700 group-hover:text-orange-500 dark:text-zinc-100 dark:group-hover:text-orange-500">
        {title}
      </span>
      <ChevronRight className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-orange-500 dark:text-zinc-600" />
    </a>
  )
}