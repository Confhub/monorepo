import IndexPageContainer from '../containers/indexPage';
import FiltersProvider from '../src/home/Filters/FiltersContext';

const IndexPage = () => (
  <FiltersProvider>
    <IndexPageContainer />
  </FiltersProvider>
);

export default IndexPage;
