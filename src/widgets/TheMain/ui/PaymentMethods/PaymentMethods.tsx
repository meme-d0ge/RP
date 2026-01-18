/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
import type { ComponentProps } from "react";
import {
	MessageCardModalMock,
	MessageMoneyModalMock,
} from "@/app/mocks/data.tsx";
import { modalWindowStore } from "@/features/modal-window";
import style from "./PaymentMethods.module.scss";
export const PaymentMethods = ({ ...props }: ComponentProps<"div">) => {
	const { showWindow } = modalWindowStore;
	const { className, ...rest } = props;
	return (
		<div className={`${style["payment-methods"]} ${className}`} {...rest}>
			<span className={style["payment-methods-text"]}>
				ВЫБЕРИТЕ СПОСОБ ОПЛАТЫ
			</span>
			<div className={style["payment-methods-variants"]}>
				<button
					onClick={() => {
						showWindow(
							() => {},
							() => {},
							MessageMoneyModalMock,
						);
					}}
					className={`${style["payment-methods-variant"]} ${style["payment-methods-variant-money"]}`}
				>
					<span>Наличные</span>
				</button>
				<button
					onClick={() => {
						showWindow(
							() => {},
							() => {},
							MessageCardModalMock,
						);
					}}
					className={`${style["payment-methods-variant"]} ${style["payment-methods-variant-card"]}`}
				>
					<span>Картой</span>
				</button>
			</div>
		</div>
	);
};
