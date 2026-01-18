import { observer } from "mobx-react-lite";
import { type ChangeEvent, useCallback } from "react";
import { productStore } from "@/widgets/TheMain/model/ProductStore.ts";
import styles from "./CounterProduct.module.scss";
export const CounterProduct = observer(() => {
	const { countProduct } = productStore;
	const handlerInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		productStore.setCountProduct(Number(event.target.value));
	}, []);
	return (
		<div className={styles["counter-container"]}>
			<div className={styles.counter}>
				<span className={styles["counter-quantity"]}>Количевство</span>
				<span>{countProduct}</span>
			</div>
			<input
				onChange={handlerInput}
				value={countProduct}
				className={styles["counter-input"]}
				type="range"
				id="volume"
				name="volume"
				min="0"
				max="400"
			/>
		</div>
	);
});
