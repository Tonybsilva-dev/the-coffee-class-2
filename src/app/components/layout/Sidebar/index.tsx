"use client";

import { Menu, Search } from "lucide-react";
import Logo from "../../../assets/Icon/1.svg";
import { MainNavigation } from "./MainNavigation";
// import { WidgetMetric } from "./WidgetMetric/index";
import { Divider } from "./Divider";
import { Profile } from "./Profile";
import { SecondaryNavigation } from "./SecondaryNavigation";
// import { Input } from "../../common/Input";
// import PermissionComponent from "../../custom/PermissionComponent";

import * as Collapsible from "@radix-ui/react-collapsible";
import { WidgetMetric } from "./WidgetMetric";
import { Button } from "../../shared/Button";
import Image from "next/image";

export default function Sidebar() {
  return (
    <Collapsible.Root
      aria-label="Sidebar Navigation"
      role="navigation"
      className="flex flex-col gap-6 border-b dark:border-zinc-800 dark:bg-zinc-900 border-zinc-200 p-4 data-[state=open]:h-screen data-[state=open]:bottom-0 lg:data-[state=open]:bottom-0 fixed left-0 top-0 right-0 z-20 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:relative"
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-row space-x-2">
          <strong className="flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            <Image src={Logo} alt="Logo" width={32} height={32}  className="w-6 h-6" />
            <span className="">The Coffee Class</span>
          </strong>
        </div>
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost" aria-label="toggle menu sidebar">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex z-50 overflow-y-auto"
      >
        {/* <PermissionComponent role="business">
          <Input.Root>
            <Input.Prefix>
              <Search className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control placeholder="Pesquisar..." />
          </Input.Root>
        </PermissionComponent> */}
        {/* <PermissionComponent role="customer">
          <Button
            variant="outline"
            title="TROCAR DE EMPRESA"
            aria-label="Selecionar outra empresa"
            onClick={openCompaniesModal}
          >
            SELECIONAR OUTRA EMPRESA
          </Button>
        </PermissionComponent> */}
        <MainNavigation />
        <SecondaryNavigation />
        <WidgetMetric />
        <Divider />
        <Profile />
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
