'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Menu, X } from 'lucide-react';
import BannerLogo from '../../../assets/Banner/2.svg'
import { useTranslations } from 'next-intl';
import { Button } from '@/app/components/shared/Button';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const t = useTranslations('Header');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header role="heading" aria-level={1} className="absolute inset-x-0 top-0 z-50">
      <nav role="navigation" aria-label="Main Menu" className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              width={80}
              height={80}
              className="h-12 w-auto"
              src={BannerLogo}
              alt="The Coffee Class Horizontal Logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant='ghost'
            type="button"
            className="-m-2.5 inline-flex items-center justify-center"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {t(item.name.toLowerCase())}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 gap-3 lg:justify-end">
          <LanguageSelector />
          <Button className="text-sm font-semibold leading-6">
            {t('login')} <span aria-hidden="true">&rarr;</span>
          </Button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                width={40}
                height={40}
                className="h-14 w-auto"
                src={BannerLogo}
                alt="The Coffee Class Horizontal Logo"
              />
            </a>
            <Button
              type="button"
              variant='ghost'
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-orange-50"
                  >
                    {t(item.name.toLowerCase())}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-orange-50"
                >
                  {t('login')}
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
