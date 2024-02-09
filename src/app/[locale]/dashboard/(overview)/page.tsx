import TitlePage from "@/app/components/layout/TitlePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function Page() {
  return (
    <>
      <TitlePage title="Dashboard" description="Welcome [user.name]"/>
    </>
  )
}
