import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { RouterGeneral } from './routes/RouterGeneral.jsx';

function App() {
	return (
		<>
			<BrowserRouter>
				<RouterGeneral />
			</BrowserRouter>
		</>
	);
}

export default App;
