import useAuthForm from '../../lib/hooks/useAuthForm';
import { cn } from '../../lib/utils/cn';
import { FormValues } from '../../types';
import SocialList from '../SocialList';
import Button from '../UI/Button';
import FormField from '../UI/FormField';

const LoginForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useAuthForm();

	const onSubmit = (data: FormValues) => {
		console.log('Login form submitted:', data);
	};

	return (
		<div
			className={cn(
				'lg:right-0 bottom-0 absolute form-container w-full lg:w-1/2 h-[70%] lg:h-full login',
			)}
		>
			<form className="p-[40px]" onSubmit={handleSubmit(onSubmit)}>
				<h2 className="mb-[15px] font-bold text-[#333] text-[36px] text-center">
					Login
				</h2>
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
				<div className="form-group m-[-15px_0_15px] text-center">
					<a
						href="#"
						className="text-[#333] text-[14px] decoration-none hover:decoration-1 capitalize"
					>
						Forgot password?
					</a>
				</div>
				<div className="form-group mb-[15px]">
					<Button type="submit">Login</Button>
				</div>
				<p className="mb-[15px] text-[#333] text-[14px] text-center">
					or login with social platforms
				</p>
				<SocialList />
			</form>
		</div>
	);
};

export default LoginForm;
