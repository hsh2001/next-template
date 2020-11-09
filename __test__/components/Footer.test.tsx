import { shallow } from 'enzyme';

import Footer from '../../components/Footer';

describe('Render Footer component', () => {
  it('Render Footer component without error', () => {
    shallow(<Footer />);
  });
});
