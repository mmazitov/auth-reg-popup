import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils/cn';

const buttonVariants = cva(
	'px-[45px] py-[10px] border-2 border-transparent rounded-[8px] font-bold transition-colors duration-[250ms] ease-in-out cursor-pointer',
	{
		variants: {
			variant: {
				default:
					'w-full bg-[#7494ec] text-[#fff] shadow-[0_0_10px_rgba(0,0,0,.1)]  text-[16px] hover:bg-transparent hover:bg-[#52669b]',
				bordered:
					'bg-transparent border-[#fff] text-[#fff] hover:bg-[#52669b] hover:border-[#52669b]',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	children: React.ReactNode;
	className?: string;
	variant?: 'default' | 'bordered';
}
const Button = ({
	children,
	className,
	variant,
	type = 'button',
	onClick,
}: ButtonProps) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={cn(buttonVariants({ variant }), className)}
		>
			{children}
		</button>
	);
};

export default Button;
