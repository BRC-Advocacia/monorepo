import { cn } from "@/lib/utils";
import { DetailedHTMLProps, LiHTMLAttributes } from "react";

const GlowingListItem = (
  props: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
) => {
  return (
    <div className={cn("relative z-10", props.className)}>
      <span className="absolute inset-0 h-full w-full transform rounded-lg bg-(--background) bg-gradient-to-b from-(--azul-escuro) to-(--cor-p5) blur-[1px] -z-1" />
      <li
        {...props}
        className={cn(
          "grow cor-4 bg-(--azul-escuro) rounded-lg p-4 flex items-center justify-center z-1",
          props.className
        )}
      >
        {props.children}
      </li>
    </div>
  );
};

export default GlowingListItem;
