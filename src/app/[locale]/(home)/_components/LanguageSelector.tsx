'use client'

import { useRouter, usePathname } from 'next/navigation';
import { Select } from '@/app/components/shared/Select';
import { SelectItem } from '@/app/components/shared/Select/selectItem';
import { useTranslations } from 'next-intl';

export default function LanguageSelector() {
  const router = useRouter();
  const pathName = usePathname()
  const t = useTranslations('Header');

  const handleChangeLocale = (value: string) => {
    router.push(value, { scroll: false });
  };

  return (
    <Select placeholder={t('language')} defaultValue={pathName.substring(1)} onValueChange={handleChangeLocale}>
      <SelectItem value="en-US" text='en-US' />
      <SelectItem value="pt-BR" text='pt-BR' />
    </Select>
  );
}
