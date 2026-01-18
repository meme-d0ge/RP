import type { ComponentProps } from "react";
import { ArrowIcon } from "@/shared/components/ArrowIcon.tsx";
import { BasketIcon } from "@/shared/components/BasketIcon.tsx";
import { CoinIcon } from "@/shared/components/CoinIcon.tsx";
import { CrossIcon } from "@/shared/components/CrossIcon.tsx";
import { PlusIcon } from "@/shared/components/PlusIcon.tsx";

export const ICON_VARIANTS = {
	arrow: ArrowIcon,
	basket: BasketIcon,
	coin: CoinIcon,
	cross: CrossIcon,
	plus: PlusIcon,
};

export type IconType = keyof typeof ICON_VARIANTS;
export const IconByVariant = ({
	iconName,
	...props
}: { iconName: IconType } & ComponentProps<"svg">) => {
	const Icon = ICON_VARIANTS[iconName];
	return <Icon {...props} />;
};
