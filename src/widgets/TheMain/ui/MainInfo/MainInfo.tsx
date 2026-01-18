/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
import { useState } from "react";
import { ProductCategoriesMock } from "@/app/mocks/data.tsx";
import { ArrowIcon } from "@/shared/components/ArrowIcon.tsx";
import { CounterProduct } from "@/widgets/TheMain/ui/CounterProduct/CounterProduct.tsx";
import style from "@/widgets/TheMain/ui/MainInfo/MainInfo.module.scss";
import { PaymentMethods } from "@/widgets/TheMain/ui/PaymentMethods/PaymentMethods.tsx";
import { ProductCategoryList } from "@/widgets/TheMain/ui/ProductCategoryList/ProductCategoryList.tsx";
import { ToBePaid } from "@/widgets/TheMain/ui/ToBePaid/ToBePaid.tsx";

export const MainInfo = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<div className={style["main-info"]}>
			<button
				onClick={() => {
					setIsOpen((prevState) => {
						return !prevState;
					});
				}}
				className={style["main-info-select-goods"]}
			>
				ВЫБОР ТОВАРОВ
				<ArrowIcon
					style={{
						transitionDuration: "0.7s",
						rotate: `${isOpen ? "90deg" : "0deg"}`,
					}}
				/>
			</button>
			{isOpen ? (
				<ProductCategoryList categories={ProductCategoriesMock} />
			) : (
				<div className={style["main-info-payment"]}>
					<CounterProduct />
					<ToBePaid />
					<PaymentMethods className={style["main-info-payment-methods"]} />
				</div>
			)}
		</div>
	);
};
