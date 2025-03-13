import { FaFacebookF, FaGithub, FaGoogle, FaLinkedinIn } from 'react-icons/fa';

const SocialList = () => {
	const socialsClass =
		'flex justify-center items-center bg-transparent hover:bg-[#52669b] border-[#333] border-[2px] hover:border-[#52669b] rounded-[8px] w-[48px] aspect-[1] text-inherit hover:text-[#fff] transition-colors duration-[250ms]';
	return (
		<ul className="flex justify-center gap-[16px] text-[#333]">
			<li>
				<a href="#" className={socialsClass}>
					<FaGoogle size={24} />
				</a>
			</li>
			<li>
				<a href="#" className={socialsClass}>
					<FaFacebookF size={24} />
				</a>
			</li>
			<li>
				<a href="#" className={socialsClass}>
					<FaGithub size={24} />
				</a>
			</li>
			<li>
				<a href="#" className={socialsClass}>
					<FaLinkedinIn size={24} />
				</a>
			</li>
		</ul>
	);
};

export default SocialList;
