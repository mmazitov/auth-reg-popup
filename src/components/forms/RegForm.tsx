import Button from '../UI/Button';
import FormField from '../UI/FormField';
import { FormValues } from '../../types';
import SocialList from '../SocialList';
import { cn } from '../../lib/utils/cn';
import useAuthForm from '../../lib/hooks/useAuthForm';

const RegForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useAuthForm();

	const onSubmit = (data: FormValues) => {
		console.log('Registration form submitted:', data);
	};

	return (
		<div
			className={cn(
				'invisible lg:right-0 bottom-0 absolute form-container w-full lg:w-1/2 h-[70%] lg:h-full register',
			)}
		>
			<form className="p-[40px]" onSubmit={handleSubmit(onSubmit)}>
				<h2 className="mb-[15px] font-bold text-[#333] text-[36px] text-center">
					Registration
				</h2>
				<FormField
					name="username"
					control={control}
					errors={errors}
					placeholder="Username"
					type="text"
				/>
				<FormField
					name="email"
					control={control}
					errors={errors}
					placeholder="Email"
					type="text"
				/>
				<FormField
					name="password"
					control={control}
					errors={errors}
					placeholder="Password"
					type="password"
					showPassword
				/>
				<div className="form-group mb-[15px]">
					<Button type="submit">Register</Button>
				</div>
				<p className="mb-[15px] text-[#333] text-[14px] text-center">
					or register with social platforms
				</p>
				<SocialList />
			</form>
		</div>
	);
};

export default RegForm;
