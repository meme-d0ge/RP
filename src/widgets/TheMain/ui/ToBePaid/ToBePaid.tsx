import { observer } from "mobx-react-lite";
import { CoinIcon } from "@/shared/components/CoinIcon.tsx";
import { productStore } from "@/widgets/TheMain/model/ProductStore.ts";
import styles from "./ToBePaid.module.scss";
export const ToBePaid = observer(() => {
	const { countProduct, selectedProduct } = productStore;
	return (
		<div className={styles.paid}>
			<span className={styles["paid-text"]}>К ОПЛАТЕ:</span>
			<div className={styles["paid-text-container"]}>
				<span className={styles["paid-count"]}>
					{countProduct * (selectedProduct?.price || 0)}
				</span>
				<CoinIcon className={styles["paid-coin"]} />
			</div>
		</div>
	);
});
