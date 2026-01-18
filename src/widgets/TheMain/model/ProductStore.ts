import { makeAutoObservable } from "mobx";
import type { Product } from "@/entities/goods";

class ProductStore {
	constructor() {
		makeAutoObservable(this);
	}
	selectedProduct: Product | null = null;
	setSelectedProduct = (product: Product) => {
		this.selectedProduct = product;
	};

	selectedCategoryId: string = "";
	setSelectedCategoryId = (id: string) => {
		this.selectedCategoryId = id;
	};

	countProduct: number = 0;
	setCountProduct = (value: number) => {
		this.countProduct = value;
	};
}
export const productStore = new ProductStore();
