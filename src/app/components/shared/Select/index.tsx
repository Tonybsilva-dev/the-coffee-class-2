'use-client'

import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import React, { forwardRef } from "react";

interface SelectProps extends SelectPrimitive.SelectProps {
  children: React.ReactNode;
  placeholder: string;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ children, placeholder, ...props }, ref) => {
    return (
      <div style={{ zIndex: 1000 }} ref={ref}>
        <SelectPrimitive.Root {...props}>
          <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-md border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-orange-500 dark:focus-within:ring-orange-500/20 dark:data-[placeholder]:text-zinc-400">
            <SelectPrimitive.Value
              className="text-black"
              placeholder={placeholder}
            />
            <SelectPrimitive.Icon>
              <ChevronDown className="h-5 w-5 text-zinc-500" />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              side="bottom"
              position="popper"
              className="z-50 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-md border border-zinc-200 bg-white animate-slideDownAndFade dark:border-zinc-700 dark:bg-zinc-800"
              sideOffset={4}
            >
              <SelectPrimitive.Viewport className="z-50 overflow-y-auto max-h-52">
                {children}
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </div>
    );
  }
);

Select.displayName = "Select";
