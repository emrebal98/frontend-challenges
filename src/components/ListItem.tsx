import React from "react";
import styled, { css } from "styled-components";
import { Checkbox } from ".";
import IconCross from "./../assets/icon-cross.svg";

function ListItem({
	children,
	value,
	onChange,
	onRemove,
}: {
	children: React.ReactNode;
	value: "true" | "false";
	onChange?: (value: "true" | "false" | undefined) => void;
	onRemove?: () => void;
}) {
	return (
		<StyledListItemContainer>
			<SyledLabel>
				<Checkbox value={value} onChange={onChange} />
				<StyledText done={value === "true"}>{children}</StyledText>
				<StyledRemoveButton aria-label="Remove Task">
					<img src={IconCross} alt="Cross Icon" onClick={onRemove} />
				</StyledRemoveButton>
			</SyledLabel>
		</StyledListItemContainer>
	);
}

const StyledListItemContainer = styled.li`
	list-style: none;
	background-color: ${({ theme }) => theme.lightBody};
	padding: 1rem;
	border-bottom: 1px solid ${({ theme }) => theme.borderColor};

	@media (min-width: 768px) {
		min-width: 500px;
	}
`;

const StyledRemoveButton = styled.button`
	border: 0;
	background: none;
	cursor: pointer;
	opacity: 0;
	transition: opacity 0.3s ease-out;

	@media (max-width: 768px) {
		opacity: 1;
	}
`;

const SyledLabel = styled.label`
	display: flex;
	align-items: center;
	justify-content: space-between;

	gap: 1rem;
	position: relative;
	padding-inline: 0.5rem;
	cursor: pointer;
	font-size: 22px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	&:hover ${StyledRemoveButton} {
		opacity: 1;
	}
`;

const StyledText = styled.span<{ done: boolean }>`
	color: ${({ theme }) => theme.listTextColor};
	flex: 1;
	font-size: 1.2rem;

	${({ done }) =>
		done &&
		css`
			text-decoration: line-through;
			color: ${({ theme }) => theme.disabled};
		`}
`;
export default ListItem;
