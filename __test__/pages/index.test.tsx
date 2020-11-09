import { shallow } from 'enzyme';

import Index from '../../pages/index';

describe('Render Index component', () => {
  it('Render Index component without error', () => {
    shallow(<Index />);
  });
});
