import { UlDough } from './UlDough';
import userEvent from '@testing-library/user-event';
import setRender from '../../helpers/setRender';
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react';
import { screen } from '@testing-library/dom';

interface TestWrapperProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	allDoughs: string[];
}

const TestWrapper: FC<TestWrapperProps> = ({ allDoughs }) => {
	const [dough, setDough] = useState<string>('тонкое');

	const handleSetDough = (currentDough: string) => {
		setDough(currentDough);
	};

	return (
		<div>
			<UlDough
				currentDough={dough}
				setDough={handleSetDough}
				allDoughs={allDoughs}
			/>
		</div>
	);
};

describe('Table with all doughs for current pizza', () => {
	it('With filled doughs', async () => {
		setRender(
			<TestWrapper allDoughs={['тонкое', 'традиционное', 'сырное']} />
		);
		const buttonElems = screen.getAllByTestId('dough-button');
		expect(buttonElems).toHaveLength(3);
		expect(buttonElems[0]).toHaveClass('active');
		expect(buttonElems[0]).toHaveTextContent('тонкое');

		buttonElems[1] && (await userEvent.click(buttonElems[1]));
		expect(buttonElems[1]).toHaveClass('active');
		expect(buttonElems[0]).not.toHaveClass('active');
		expect(buttonElems[1]).toHaveTextContent('традиционное');

		buttonElems[2] && (await userEvent.click(buttonElems[2]));
		expect(buttonElems[2]).toHaveClass('active');
		expect(buttonElems[1]).not.toHaveClass('active');
		expect(buttonElems[2]).toHaveTextContent('сырное');
	});

	it('Without doughs', () => {
		setRender(<TestWrapper allDoughs={[]} />);
		const buttonElem = screen.queryByTestId('dough-button');
		expect(buttonElem).not.toBeInTheDocument();
	});
});
