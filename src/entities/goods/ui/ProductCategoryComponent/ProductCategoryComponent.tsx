import type { ComponentProps } from "react";
import type { ProductCategory } from "@/entities/goods";
import { IconByVariant } from "@/shared/icon-variants.tsx";
import style from "./ProductCategory.module.scss";
export const ProductCategoryComponent = ({
	text,
	icon,
	isSelected,
	className,
	id,
	...res
}: ProductCategory & ComponentProps<"div"> & { isSelected: boolean }) => {
	return (
		<div
			className={`${style["product-category"]} ${isSelected ? style["product-category--selected"] : ""} ${className}`}
			{...res}
		>
			<IconByVariant
				className={style["product-category-svg"]}
				iconName={icon}
			/>
			<span className={style["product-category-text"]}>{text}</span>
		</div>
	);
};
