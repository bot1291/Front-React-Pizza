import { Cart } from './Cart';
import setRender from '../../helpers/setRender';

describe('Table with all sizes for current pizza', () => {
	it('With filled sizes', async () => {
		setRender(<Cart />);
	});
});