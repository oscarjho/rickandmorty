import Home from './pages/Home';
import { ApolloProvider } from '@apollo/client';
import client from './client';


function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>);
};

export default App;
