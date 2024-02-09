import { ReactNode } from "react";

export function PageRoot({ children }: { children: ReactNode }) {
  return <div className="mt-6 flex flex-col">{children}</div>;
}
