import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";
import Loading from "../Loading";

const button = tv({
  base: [
    "rounded-md px-4 py-2 text-sm font-semibold outline-none shadow-sm",
    "focus:ring-2 focus:ring-offset-2 focus:ring-orange-500",
    "active:opacity-80",
  ],

  variants: {
    variant: {
      primary:
        "bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600",
      outline:
        "border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:text-zinc-400",
      ghost:
        "rounded-md px-2 hover:bg-zinc-50 shadow-none text-zinc-500 dark:hover:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800",
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {
    isLoading?: boolean;
  };

export function Button({
  variant,
  className,
  isLoading,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      role="button"
      disabled={isLoading}
      className={button({ variant, className })}
      data-dd-action-name={`${props.value?.toString} button`}
    >
      {isLoading ? <Loading /> : props.children}
    </button>
  );
}
