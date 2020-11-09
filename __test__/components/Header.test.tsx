import { shallow } from 'enzyme';

import Header from '../../components/Header';

describe('Render Header component', () => {
  it('Render Header component without error', () => {
    shallow(<Header />);
  });
});
