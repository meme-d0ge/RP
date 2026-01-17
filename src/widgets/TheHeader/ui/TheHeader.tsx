import { Logo } from "./Logo.tsx";
import style from "./TheHeader.module.scss";
import {Wallet} from "@/widgets/TheHeader/ui/Wallet.tsx";
export const TheHeader = () => {
	return (
		<header className={`${style.header} container`}>
			<Logo href={'/'} />
			<Wallet/>
		</header>
	);
};
