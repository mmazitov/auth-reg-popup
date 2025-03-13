import { Controller } from 'react-hook-form';
import { cn } from '../../lib/utils/cn';
import { FormValues } from '../../types';
import Input from './Input';

interface FormFieldProps {
	name: keyof FormValues;
	control: any;
	errors: any;
	placeholder: string;
	type: string;
	showPassword?: boolean;
}

const FormField = ({
	name,
	control,
	errors,
	placeholder,
	type,
	showPassword = false,
}: FormFieldProps) => (
	<div className="form-group mb-[30px]">
		<Controller
			name={name}
			control={control}
			defaultValue=""
			render={({ field }) => (
				<Input
					type={type}
					placeholder={placeholder}
					{...field}
					showPassword={showPassword}
					className={cn(
						errors[name] ? 'border-red-500 placeholder-red-500' : '',
					)}
				/>
			)}
		/>
	</div>
);

export default FormField;
