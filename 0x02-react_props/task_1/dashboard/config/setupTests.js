import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-18';
import '@testing-library/jest-dom/extend-expect';

configure({ adapter: new Adapter() });

