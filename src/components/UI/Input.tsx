import { JSX, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

import { cn } from '../../lib/utils/cn';

interface InputProps {
	type: string;
	placeholder?: string;
	name: string;
	value?: string;
	showPassword?: boolean;
	showIcon?: boolean;
	icon?: JSX.Element;
	className?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
	type = 'text',
	placeholder,
	name,
	value,
	showPassword = false,
	showIcon = false,
	icon,
	className,
	onChange,
}: InputProps) => {
	const [showPwd, setShowPwd] = useState(false);

	return (
		<div className="relative text-[#333]">
			<input
				type={showPassword ? (showPwd ? 'text' : 'password') : type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className={cn(
					'w-full px-[20px] py-[13px] bg-[#eee] rounded-[8px] border-[1px] border-transparent outline-none text-[16px] text-inherit',
					className,
				)}
				name={name}
			/>

			{showPassword && (
				<button
					type="button"
					onClick={() => setShowPwd((prev) => !prev)}
					className="top-1/2 right-4 absolute text-inherit -translate-y-1/2 cursor-pointer transform"
				>
					{showPwd ? <FaRegEyeSlash /> : <FaRegEye />}
				</button>
			)}
			{showIcon && (
				<div className="top-1/2 right-4 absolute text-inherit -translate-y-1/2 transform">
					{icon}
				</div>
			)}
		</div>
	);
};

export default Input;
