import { makeAutoObservable } from "mobx";

class ModalWindowStore {
	constructor() {
		makeAutoObservable(this);
	}
	isOpen: boolean = false;
	messageModal: string = "";
	callBackResolve = () => {};
	callBackReject = () => {};

	showWindow = (
		resolveCallBack: () => void,
		rejectCallBack: () => void,
		messageModal: string,
	) => {
		this.isOpen = true;
		this.messageModal = messageModal;
		this.callBackResolve = () => {
			this.isOpen = false;
			resolveCallBack();
		};
		this.callBackReject = () => {
			this.isOpen = false;
			rejectCallBack();
		};
	};
}
export const modalWindowStore = new ModalWindowStore();
