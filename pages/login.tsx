import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import styled from 'styled-components';

interface LoginProvider {
	provider: string;
	imageSrc: string;
	alt: string;
}

export default function Login() {
	const loginProviders: LoginProvider[] = [
		{
			provider: 'google',
			imageSrc: '/images/google.png',
			alt: 'Google Login Button',
		},
		{
			provider: 'kakao',
			imageSrc: '/images/kakao.png',
			alt: 'Kakao Login Button',
		},
		{
			provider: 'github',
			imageSrc: '/images/github.png',
			alt: 'Github Login Button',
		},
	];

	return (
		<>
			<Background>
				<Container>
					<ContainerImg>
						<Image
							src='/images/login.png'
							alt='Login Modal Image'
							width={250}
							height={300}
						/>
						<p>
							<a href='https://storyset.com/mobile'>
								Mobile illustrations by Storyset
							</a>
						</p>
					</ContainerImg>
					<ContainerContent>
						<h1>Sign in</h1>
						<OAuthLabel>소셜 계정으로 로그인</OAuthLabel>
						<OAuthBtnContainer>
							{loginProviders.map((provider) => (
								<OAuthBtn
									key={provider.provider}
									onClick={() =>
										signIn(provider.provider, { callbackUrl: '/' })
									}
								>
									<Image
										src={provider.imageSrc}
										alt={provider.alt}
										width={55}
										height={55}
									/>
								</OAuthBtn>
							))}
						</OAuthBtnContainer>
						<ContainerLink>
							<OAuthLabel>아직 회원이 아니신가요?</OAuthLabel>
							<Link href='/signup'>회원 가입</Link>
						</ContainerLink>
					</ContainerContent>
				</Container>
			</Background>
		</>
	);
}

export const Background = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	/* z-index: 999; */
	background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	position: fixed;
	border-radius: 8px;
	width: 600px;
	height: 400px;
	background-color: ${({ theme }) => theme.colors.white};
	z-index: 999;
	box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
`;

export const ContainerImg = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #e0e0e0;
	width: 280px;
	height: inherit;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	> p {
		color: ${({ theme }) => theme.colors.white};
		font-size: ${({ theme }) => theme.fontSize.text_small}px;
	}
`;

export const ContainerContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 320px;
	height: inherit;
	padding: 35px 30px;
	> h1 {
		font-size: ${({ theme }) => theme.fontSize.title}px;
		font-weight: 500;
		margin-bottom: 30px;
	}
`;

export const OAuthLabel = styled.div`
	color: ${({ theme }) => theme.colors.grey};
	font-weight: 500;
	font-size: ${({ theme }) => theme.fontSize.text}px;
	margin: 10px 0px;
`;

export const OAuthBtnContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 260px;
	height: 70px;
	border: none;
`;

export const OAuthBtn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 55px;
	height: 55px;
	border-radius: 50px;
	border: 1px solid ${({ theme }) => theme.colors.lightgrey};
	cursor: pointer;
`;

export const ContainerLink = styled.div`
	margin-top: 50px;
	font-weight: 500;
`;
