import type { ComponentProps } from "react";

export const PlusIcon = ({ ...props }: ComponentProps<"svg">) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			width="33"
			height="33"
			viewBox="0 0 33 33"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M16.5 1.5V31.5M31.5 16.5L1.5 16.5"
				stroke="white"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
