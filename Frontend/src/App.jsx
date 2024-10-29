import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { RouterGeneral } from './routes/RouterGeneral.jsx';
import { Provider } from './context/Provider.jsx';

function App() {
	return (
		<>
			<Provider>
				<BrowserRouter>
					<RouterGeneral />
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
