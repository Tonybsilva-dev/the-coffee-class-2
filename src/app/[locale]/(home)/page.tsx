'use client'

import { Button } from '@/app/components/shared/Button';
import Header from './_components/Header'
import { useTranslations } from 'next-intl';

export default function Example() {

  const t = useTranslations('Index');

  return (
    <div className="bg-white">
      <Header />
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              {t('notice')}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                {t('docs')} <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t('title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('description')}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button>
                {t('button-1')}
              </Button>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                {t('button-2')} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
