import React from "react";
import styled, { css } from "styled-components";

function ListInfo({
	size,
	filter,
	onFilter,
	onClear,
}: {
	size: number;
	filter: "all" | "active" | "completed";
	onFilter?: (filter: "all" | "active" | "completed") => void;
	onClear?: () => void;
}) {
	const handleFilter = (filter: "all" | "active" | "completed") => {
		onFilter && onFilter(filter);
	};

	return (
		<StyledContainer>
			<StyledSpan>{size} items left</StyledSpan>
			<StyledButton onClick={onClear}>Clear Completed</StyledButton>
			<StyledList>
				<StyledListItem
					active={filter === "all"}
					onClick={() => handleFilter("all")}
				>
					All
				</StyledListItem>
				<StyledListItem
					active={filter === "active"}
					onClick={() => handleFilter("active")}
				>
					Active
				</StyledListItem>
				<StyledListItem
					active={filter === "completed"}
					onClick={() => handleFilter("completed")}
				>
					Completed
				</StyledListItem>
			</StyledList>
		</StyledContainer>
	);
}

const StyledContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem 1.5rem;
	background-color: ${({ theme }) => theme.lightBody};

	font-size: 0.9rem;

	@media (max-width: 768px) {
		flex-wrap: wrap;
		background-color: ${({ theme }) => theme.body};
		padding: 0;
	}
`;

const StyledSpan = styled.span`
	color: ${({ theme }) => theme.placeHolderColor};

	@media (max-width: 768px) {
		flex-basis: calc(50% - 3rem);
		background-color: ${({ theme }) => theme.lightBody};
		padding: 1rem 1.5rem;
	}
`;

const StyledList = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	gap: 1rem;
	color: ${({ theme }) => theme.placeHolderColor};

	@media (max-width: 768px) {
		flex-basis: 100%;
		justify-content: center;
		margin-top: 1rem;
		padding: 1rem;
		background-color: ${({ theme }) => theme.lightBody};
	}
`;

const StyledListItem = styled.li<{ active?: boolean }>`
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.listTextColor};
	}

	${({ active, theme }) =>
		active &&
		css`
			color: ${theme.primary};
		`}
`;

const StyledButton = styled.button`
	border: none;
	background-color: unset;
	color: ${({ theme }) => theme.placeHolderColor};
	cursor: pointer;
	font-size: 0.9rem;
	order: 1;

	&:hover {
		color: ${({ theme }) => theme.listTextColor};
	}

	@media (max-width: 768px) {
		order: 0;
		flex-basis: 50%;
		background-color: ${({ theme }) => theme.lightBody};
	}
`;

export default ListInfo;
