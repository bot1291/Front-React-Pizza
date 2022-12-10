import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CartButtonProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	link: string;
}
