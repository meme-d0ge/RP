import type { ComponentProps } from "react";
import { BasketIcon } from "@/shared/components/BasketIcon.tsx";
import style from "./Logo.module.scss";
export const Logo = ({ ...props }: ComponentProps<"a">) => {
	return (
		<a className={style.logo} {...props}>
			<BasketIcon className={style["logo-svg"]} />
			<span className={style["logo-text"]}>
				МАГАЗИН <span className={style["logo-text-accent"]}>24/7</span>
			</span>
		</a>
	);
};
