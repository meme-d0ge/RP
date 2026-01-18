import type { ComponentProps } from "react";
import type { Product } from "@/entities/goods";
import style from "./ProductComponent.module.scss";

export const ProductComponent = ({
	...props
}: Omit<Product, "id"> & ComponentProps<"div"> & { isSelected: boolean }) => {
	const { price, img, name, isSelected, className, ...rest } = props;
	return (
		<div
			className={`${style.product} ${isSelected ? style["product--selected"] : ""} ${className}`}
			{...rest}
		>
			<div className={style.productImageContainer}>
				<img className={style.productImage} src={img} alt="" />
			</div>
			<span className={style.productName}>{name}</span>
			<span className={style.productPrice}>₴{price}</span>
		</div>
	);
};
