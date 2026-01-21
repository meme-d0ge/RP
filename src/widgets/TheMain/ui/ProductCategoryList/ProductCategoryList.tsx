import { observer } from "mobx-react-lite";
import type { ProductCategory } from "@/entities/goods";
import { ProductCategoryComponent } from "@/entities/goods";
import { productStore } from "@/widgets/TheMain/model/ProductStore.ts";
import style from "./ProductCategoryList.module.scss";

export const ProductCategoryList = observer(
	({ categories }: { categories: ProductCategory[] }) => {
		const { setSelectedCategoryId, selectedCategoryId } = productStore;
		return (
			<div className={style["product-categories"]}>
				{categories.map((category) => {
					return (
						<ProductCategoryComponent
							className={style["product-category"]}
							isSelected={category.id === selectedCategoryId}
							onClick={() => {
								setSelectedCategoryId(category.id);
							}}
							id={category.id}
							key={category.id}
							text={category.text}
							icon={category.icon}
						/>
					);
				})}
			</div>
		);
	},
);
