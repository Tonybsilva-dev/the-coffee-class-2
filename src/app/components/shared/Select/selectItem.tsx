'use client'

import * as SelectPrimitive from "@radix-ui/react-select";
import { Check } from "lucide-react";

type SelectItemProps = SelectPrimitive.SelectItemProps & {
  text: string;
};

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-orange-50 dark:data-[highlighted]:bg-zinc-700"
      data-dd-action-name={`${text.toUpperCase()} selected`}
      {...props}
    >
      <SelectPrimitive.ItemText className="text-black dark:text-zinc-100">
        {text}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4 text-orange-500 dark:text-orange-300" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}
