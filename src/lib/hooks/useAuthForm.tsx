import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FormValues } from '../../types';
import { validationSchema } from '../utils/validationSchema';

const useAuthForm = () => {
	return useForm<FormValues>({
		resolver: yupResolver(validationSchema),
	});
};

export default useAuthForm;
