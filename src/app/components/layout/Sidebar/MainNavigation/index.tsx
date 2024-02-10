'use client'

import {
  Home,
  Files,
  CookingPot,
  ChefHat,
  Package,
  Users,
  Boxes,
} from "lucide-react";
import { NavItem } from "./NavItem";

import { useTranslations } from 'next-intl';


export function MainNavigation() {

  const t = useTranslations('NavItems');


  return (
    <nav
      className="space-y-0.5 max-h-full overflow-y-auto"
      aria-label="Primary Navigation"
    >
      <NavItem title={t('home')} icon={Home} path="/dashboard/" />
      <NavItem title={t('users')} icon={Users} path="/dashboard/users" />
      <NavItem title={t('products')} icon={Package} path="/dashboard/products" />
      <NavItem title={t('kitchen')} icon={CookingPot} path="/dashboard/kitchen" />
      <NavItem title={t('receipts')} icon={ChefHat} path="/dashboard/recipes" />
      <NavItem title={t('reports')} icon={Files} path="/dashboard/reports" />
      <NavItem title={t('stock')} icon={Boxes} path="/dashboard/stock" />
    </nav>
  );
}
