'use client'

import { useTranslations } from 'next-intl';
import { LifeBuoy, Settings } from 'lucide-react'
import { NavItem } from '../MainNavigation/NavItem'

export function SecondaryNavigation() {

  const t = useTranslations('NavItems');


  return (
    <div className="mt-auto flex flex-col gap-6" >
      <nav className="space-y-0.5" aria-label="Secondary Navigation">
        <NavItem title={t('support')} icon={LifeBuoy} />
        <NavItem title={t('settings')} icon={Settings} />
      </nav>
    </div>
  )
}