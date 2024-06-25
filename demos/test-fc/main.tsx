import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
	return (
		<div>
			<i>
				<Child />
			</i>
		</div>
	);
}

function Child() {
	return <div>child</div>;
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
