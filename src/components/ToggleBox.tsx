import { cn } from '../lib/utils/cn';
import Button from './UI/Button';

interface ToggleBoxProps {
	isLoginForm: boolean;
	setIsLoginForm: (value: boolean) => void;
	togglePopupClass: () => void;
}

const ToggleBox = ({
	isLoginForm,
	setIsLoginForm,
	togglePopupClass,
}: ToggleBoxProps) => {
	const toggleForm = () => {
		setIsLoginForm(!isLoginForm);
		togglePopupClass();
	};
	return (
		<div
			className={cn(
				'absolute w-full h-full toggle-box',
				'before:content-[""] before:absolute lg:before:left-[-250%] before:top-[-270%] lg:before:top-0 lg:before:w-[300%] before:w-full before:h-[300%] lg:before:h-full before:bg-[#7494ec] before:rounded-[20vw] lg:before:rounded-[150px] before:z-2 before:transition-all before:duration-[1.8s] before:ease-in-out',
			)}
		>
			<div
				className={cn(
					'left-0 top-0  z-3 absolute flex flex-col justify-center items-center w-full lg:w-1/2 h-[30%] lg:h-full text-[#fff] transition-all duration-[1.8s] ease-in-out toggle-text',
				)}
			>
				<h2 className="mb-[5px] font-bold text-[36px] capitalize">
					{isLoginForm ? 'Hello, welcome!' : 'Welcome back!'}
				</h2>
				<p className="mb-[20px] text-[14px] text-center">
					{isLoginForm ? "Don't have an account?" : 'Already have an account?'}
				</p>
				<Button variant="bordered" onClick={toggleForm}>
					{isLoginForm ? 'Register' : 'Login'}
				</Button>
			</div>
		</div>
	);
};

export default ToggleBox;
