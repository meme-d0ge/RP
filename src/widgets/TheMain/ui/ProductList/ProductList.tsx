import { observer } from "mobx-react-lite";
import { type Product, ProductComponent } from "@/entities/goods";
import { productStore } from "@/widgets/TheMain/model/ProductStore.ts";
import style from "./ProductList.module.scss";

export const ProductList = observer(({ products }: { products: Product[] }) => {
	const { selectedProduct, setSelectedProduct, selectedCategoryId } =
		productStore;
	return (
		<div className={style.products}>
			{products.map((product) => {
				const { id, ...res } = product;
				if (product.categoryId.indexOf(selectedCategoryId) === -1) {
					return null;
				}
				return (
					<ProductComponent
						className={style.product}
						onClick={() => {
							setSelectedProduct(product);
						}}
						isSelected={selectedProduct?.id === id}
						key={`${selectedCategoryId}-${id}`}
						{...res}
					/>
				);
			})}
		</div>
	);
});
