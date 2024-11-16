import GlobalStyle from './styles';
import Header from './components/Header';
import SectionSearch from './components/SectionSearch';
import ContactList from './components/ContactList';
import { Provider } from 'react-redux';
import { store } from './store';
import Modal from './components/Modal';

function App() { 
  return (
<Provider store={store}>
<GlobalStyle />
<Modal/>
<Header />
<SectionSearch/>
<ContactList/>
</Provider>
  )
}

export default App;
