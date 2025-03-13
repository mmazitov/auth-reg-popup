import * as yup from 'yup';

export const validationSchema = yup.object().shape({
	password: yup
		.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required'),
	email: yup.string().email('Invalid email').required('Email is required'),
	username: yup
		.string()
		.required('Username is required')
		.min(3, 'Username must be at least 3 characters'),
});
