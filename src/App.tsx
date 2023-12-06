import {store} from './store'
import { Provider } from 'react-redux';
import RootNavigation from './navigation/RootNavigation';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigation/>
    </Provider>
  );
}

export default App;
