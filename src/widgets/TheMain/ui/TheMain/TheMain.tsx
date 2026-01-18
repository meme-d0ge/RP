import { ProductsMock } from "@/app/mocks/data.tsx";
import { MainInfo } from "@/widgets/TheMain/ui/MainInfo/MainInfo.tsx";
import { ProductList } from "@/widgets/TheMain/ui/ProductList/ProductList.tsx";
import style from "./TheMain.module.scss";
export const TheMain = () => {
	return (
		<main className={`${style["main-container"]} container`}>
			<div className={style.main}>
				<div className={style["main-info"]}>
					<MainInfo />
				</div>
				<div className={style["main-products"]}>
					<ProductList products={ProductsMock}></ProductList>
					<span className={style["main-products-text"]}>
						Чтобы купить предмет, нажмите на него и выберите количество, после
						чего выберите способ оплаты.
					</span>
				</div>
			</div>
		</main>
	);
};
