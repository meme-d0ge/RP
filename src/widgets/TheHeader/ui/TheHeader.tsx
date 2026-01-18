import { Wallet } from "@/widgets/TheHeader/ui/Wallet.tsx";
import { Logo } from "./Logo.tsx";
import style from "./style/TheHeader.module.scss";
export const TheHeader = () => {
	return (
		<header className={`${style.header} container`}>
			<Logo href={"/"} />
			<Wallet />
		</header>
	);
};
