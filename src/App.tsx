import './App.css';

import { useState } from 'react';
import LoginForm from './components/forms/LoginForm';
import AuthForm from './components/forms/RegForm';
import ToggleBox from './components/ToggleBox';
import { cn } from './lib/utils/cn';

function App() {
	const [popupClass, setPopupClass] = useState('');
	const [isLoginForm, setIsLoginForm] = useState(true);

	const togglePopupClass = () => {
		setPopupClass((prevClass) => (prevClass === '' ? 'active' : ''));
	};

	return (
		<div
			className={cn(
				'relative justify-self-center grid bg-[#fff] shadow-[0_0_30px_rgba(0,0,0,.2)] mt-10 rounded-[30px] lg:w-[850px] w-[calc(100vw-40px)] lg:h-[550px] h-[calc(100vh-80px)] overflow-hidden popup',
				popupClass,
			)}
		>
			<ToggleBox
				isLoginForm={isLoginForm}
				setIsLoginForm={setIsLoginForm}
				togglePopupClass={togglePopupClass}
			/>
			<LoginForm />
			<AuthForm />
		</div>
	);
}

export default App;
