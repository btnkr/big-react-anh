import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
	const [num, setNum] = useState(100);
	window.setNum = setNum;
	return (
		<div>
			<i>{num === 3 ? <Child /> : num}</i>
		</div>
	);
}

function Child() {
	return <div>child</div>;
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
