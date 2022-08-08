import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import useLocalStorage from "use-local-storage";
import { darkTheme, GlobalStyles, lightTheme, CONSTANTS } from "./theme";
import IconMoon from "./assets/icon-moon.svg";
import IconSun from "./assets/icon-sun.svg";
import { Checkbox, ListInfo, ListItem } from "./components";
import uuid from "react-uuid";

type TodoItem = {
	id: string;
	text: string;
	done: boolean;
};

function App() {
	const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

	const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");
	const switchTheme = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	//Initial value of the list
	const [list, setList] = useState<TodoItem[]>([
		{
			id: uuid(),
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			done: true,
		},
		{
			id: uuid(),
			text: "Lorem ipsum dolor sit amet consectetur.",
			done: false,
		},
	]);
	const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
	const [filteredList, setFilteredList] = useState<TodoItem[]>(list);

	// Triggers when filter and filteredList change
	useEffect(() => {
		if (filter === "active") {
			setFilteredList(list.filter((f) => f.done !== true));
		} else if (filter === "completed") {
			setFilteredList(list.filter((f) => f.done === true));
		} else {
			setFilteredList(list);
		}
	}, [filter, filteredList]);

	// Add new item
	const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (e) => {
		e.preventDefault();
		let value = e.currentTarget.todo.value;
		if (value) {
			let newID = uuid();
			setList((prev) => [...prev, { text: value, done: false, id: newID }]);
			setFilteredList((prev) => [...prev, { text: value, done: false, id: newID }]);
			e.currentTarget.todo.value = "";
		}
	};

	// On check event
	const handleChange = (value, id) => {
		setList((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, done: value === "true" ? true : false } : item
			)
		);
		setFilteredList((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, done: value === "true" ? true : false } : item
			)
		);
	};

	// Remove item
	const handleRemove = (id) => {
		setList((prev) => prev.filter((f) => f.id !== id));
		setFilteredList((prev) => prev.filter((f) => f.id !== id));
	};

	// Clears completed items
	const handleClear = () => {
		setList((prev) => prev.filter((f) => f.done !== true));
		setFilteredList((prev) => prev.filter((f) => f.done !== true));
	};

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyles />

			<div
				className="App"
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "3rem",
				}}
			>
				<StyledTodo>
					<StyledRow>
						<StyledTitle>TODO</StyledTitle>
						<StyledThemeSwitch
							onClick={switchTheme}
							src={theme === "light" ? IconMoon : IconSun}
							alt="theme-switch-button"
							aria-label="theme-switch-button"
						/>
					</StyledRow>
					<StyledInputContainer>
						<Checkbox />
						<form style={{ flex: 1 }} onSubmit={handleSubmit}>
							<StyledInput placeholder="Create a new todo..." name="todo" />
						</form>
					</StyledInputContainer>
					<StyledList>
						{filteredList.length > 0 ? (
							filteredList.map((m) => (
								<ListItem
									key={m.id}
									value={m.done ? "true" : "false"}
									onChange={(value) => {
										handleChange(value, m.id);
									}}
									onRemove={() => {
										handleRemove(m.id);
									}}
								>
									{m.text}
								</ListItem>
							))
						) : (
							<SyledEmptyPlaceHolder>
								There is no task todo.
							</SyledEmptyPlaceHolder>
						)}

						<ListInfo
							size={list.filter((f) => f.done !== true).length}
							filter={filter}
							onFilter={(filter) => setFilter(filter)}
							onClear={handleClear}
						/>
					</StyledList>
				</StyledTodo>
			</div>
		</ThemeProvider>
	);
}

const StyledTodo = styled.div`
	max-width: 580px;
	position: relative;
`;

const StyledRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledTitle = styled.h1`
	color: ${(props) => props.theme};
	letter-spacing: 1rem;
`;

const StyledInputContainer = styled.div`
	position: relative;
	display: flex;
	gap: 1rem;
	background-color: ${({ theme }) => theme.lightBody};
	padding: 1rem;
	border-radius: 0.5rem;
`;

const StyledInput = styled.input`
	border: none;
	caret-color: ${CONSTANTS.primary.brightBlue};
	font-size: 18px;
	color: ${({ theme }) => theme.listTextColor};
	background-color: ${({ theme }) => theme.lightBody};
	width: 95%;

	&::placeholder {
		color: ${({ theme }) => theme.placeHolderColor};
	}

	&:focus-visible {
		outline: none;
	}
`;

const StyledThemeSwitch = styled.img`
	cursor: pointer;
`;

const StyledList = styled.ul`
	border-radius: 0.5rem;
	overflow: hidden;
	padding: 0;
	box-shadow: ${({ theme }) => theme.boxShadow};
`;
const SyledEmptyPlaceHolder = styled.div`
	background-color: ${({ theme }) => theme.lightBody};
	color: ${({ theme }) => theme.listTextColor};
	display: flex;
	justify-content: center;
	padding: 2rem;
	border-bottom: 1px solid ${({ theme }) => theme.borderColor};

	@media (min-width: 768px) {
		min-width: 500px;
	}
`;

export default App;
