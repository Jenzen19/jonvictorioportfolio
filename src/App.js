import './App.css';
import { useRef } from 'react';
import { Navbar, Header, About} from './components';
import NavProvider from './context/navContext';

function App() {
	return (
		<div className="App" >
			<NavProvider>
				<Navbar />
				<Header />
				<About />
			</NavProvider>
		</div>
	);
}

export default App;
