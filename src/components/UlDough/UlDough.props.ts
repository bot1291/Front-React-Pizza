import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface UlDoughProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLUListElement>,
		HTMLUListElement
	> {
	setDough: (size: string) => void;
	allDoughs: string[];
	currentDough: string;
}
