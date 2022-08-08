import React from "react";
import styled, { css } from "styled-components";
import IconCheck from "./../assets/icon-check.svg";
import { CONSTANTS } from "./../theme";

interface Props {
	value?: "true" | "false";
	onChange?: (value: Props["value"]) => void;
}

function Checkbox({ value, onChange }: Props) {
	return (
		<StyledCheckbox
			onClick={() => {
				onChange && onChange(value === "true" ? "false" : "true");
			}}
			value={value}
		>
			<StyledIcon src={IconCheck} alt="check" />
		</StyledCheckbox>
	);
}

const StyledIcon = styled.img`
	visibility: hidden;
`;

const StyledCheckbox = styled.span<{ value: Props["value"] }>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	border: 1px solid ${({ theme }) => theme.borderColor};
	border-radius: 50%;
	width: 24px;
	height: 24px;

	${({ value }) =>
		value === "true"
			? css`
					background: linear-gradient(
						135deg,
						${CONSTANTS.primary.linearBlue},
						${CONSTANTS.primary.linearPurple}
					);
					${StyledIcon} {
						visibility: visible;
					}
			  `
			: css`
					&:hover {
						background: linear-gradient(
									${(props) => props.theme.lightBody},
									${(props) => props.theme.lightBody}
								)
								padding-box,
							linear-gradient(
									135deg,
									${CONSTANTS.primary.linearBlue},
									${CONSTANTS.primary.linearPurple}
								)
								border-box;
						border-color: transparent;
					}
			  `}
`;

export default Checkbox;
