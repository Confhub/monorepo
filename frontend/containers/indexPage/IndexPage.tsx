import Filters from '../../src/home/Filters/Filters';
import Content from './content';
import { Wrapper } from './styles';

const IndexPage = () => (
  <Wrapper>
    <Filters />
    <Content />
  </Wrapper>
);

export default IndexPage;
