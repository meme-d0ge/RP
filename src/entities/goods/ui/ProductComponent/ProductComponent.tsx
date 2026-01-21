import type { ComponentProps } from "react";
import type { Product } from "@/entities/goods";
import style from "./ProductComponent.module.scss";

export const ProductComponent = ({
	...props
}: Product & ComponentProps<"div"> & { isSelected: boolean }) => {
	const { price, img, id, name, isSelected, className, ...res } = props;
	return (
		<div
			className={`${style.product} ${isSelected ? style["product--selected"] : ""} ${className}`}
			{...res}
		>
			<div className={style.productImageContainer}>
				<img className={style.productImage} src={img} alt="" />
			</div>
			<span className={style.productName}>{name}</span>
			<span className={style.productPrice}>₴{price}</span>
		</div>
	);
};
