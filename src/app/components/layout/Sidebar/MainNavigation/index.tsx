import {
  Home,
  GalleryHorizontal,
  Files,
  CookingPot,
  ChefHat,
  Package,
  Users,
  Boxes,
} from "lucide-react";
import { NavItem } from "./NavItem";

export function MainNavigation() {
  return (
    <nav
      className="space-y-0.5 max-h-full overflow-y-auto"
      aria-label="Primary Navigation"
    >
      <NavItem title="Início" icon={Home} path="/dashboard/" />
      <NavItem title="Usuários" icon={Users} path="/dashboard/users" />
      <NavItem title="Produtos" icon={Package} path="/dashboard/products" />
      <NavItem title="Cozinha" icon={CookingPot} path="/dashboard/kitchen" />
      <NavItem title="Receitas" icon={ChefHat} path="/dashboard/recipes" />
      <NavItem title="Relatórios" icon={Files} path="/dashboard/reports" />
      <NavItem title="Estoque" icon={Boxes} path="/dashboard/stock" />
    </nav>
  );
}
