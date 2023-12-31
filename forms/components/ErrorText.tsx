import styled from '@emotion/styled'
import { fadeInDown } from '@admixltd/admix-component-library'
import { PropsWithTheme } from '@admixltd/admix-component-library/styles/theme'

const ErrorText = styled.div`
	margin-top: 5px;
	margin-left: 0;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 0.03333em;
	margin-right: 14px;
	line-height: 1.3;
	text-align: left;

	${props => fadeInDown(props as unknown as PropsWithTheme)};
	color: ${({ theme }) => theme.colors.error};
`
export default ErrorText
