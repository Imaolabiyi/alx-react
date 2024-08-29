import { shallow } from 'enzyme';
import Header from '../Header/Header'; // Adjust path as needed

describe('Header Component', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('contains img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBeGreaterThan(0);
    expect(wrapper.find('h1').length).toBeGreaterThan(0);
  });
});

