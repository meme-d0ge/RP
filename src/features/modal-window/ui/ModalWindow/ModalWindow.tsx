/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
import { observer } from "mobx-react-lite";
import { useRef } from "react";
import { modalWindowStore } from "@/features/modal-window";
import style from "./ModalWindow.module.scss";
export const ModalWindow = observer(() => {
	const { isOpen, messageModal, callBackReject, callBackResolve } =
		modalWindowStore;
	const dialogRef = useRef<HTMLDialogElement>(null);
	return (
		<dialog
			onCancel={callBackReject}
			open={isOpen}
			ref={dialogRef}
			className={`${style.modal}`}
		>
			<div className={`${style["modal-window"]}`}>
				<span className={`${style["modal-title"]}`}>Подтверждение</span>
				<span className={style["modal-message"]}>{messageModal}</span>
				<div className={style["modal-buttons"]}>
					<button
						onClick={callBackReject}
						className={`${style["modal-reject"]} ${style["modal-button"]}`}
					>
						Отменить
					</button>
					<button
						onClick={callBackResolve}
						className={`${style["modal-resolve"]} ${style["modal-button"]}`}
					>
						Подтвердить
					</button>
				</div>
			</div>
		</dialog>
	);
});
