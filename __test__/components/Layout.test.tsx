import { shallow } from 'enzyme';

import Layout from '../../components/Layout';

describe('Render Layout component', () => {
  it('Render Layout component without error', () => {
    shallow(<Layout />);
  });
});
