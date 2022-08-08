import { createGlobalStyle } from "styled-components";
import { ITheme } from "./types/theme";
import lightBgImage from "./assets/bg-desktop-light.jpg";
import darkBgImage from "./assets/bg-desktop-dark.jpg";

export const CONSTANTS = {
	primary: {
		brightBlue: "hsl(220, 98%, 61%)",
		linearBlue: "hsl(192, 100%, 67%)",
		linearPurple: "hsl(280, 87%, 65%)",
	},
	lightTheme: {
		veryLightGray: "hsl(0, 0%, 98%)",
		veryLightGrayishBlue: "hsl(236, 33%, 92%)",
		lightGrayishBlue: "hsl(233, 11%, 84%)",
		darkGrayishBlue: "hsl(236, 9%, 61%)",
		veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
		boxShadow: "rgb(194 195 214 / 50%) 0px 35px 50px -15px",
	},
	darkTheme: {
		veryDarkBlue: "hsl(235, 21%, 11%)",
		veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
		lightGrayishBlue: "hsl(234, 39%, 85%)",
		lightGrayishBlueHover: "hsl(236, 33%, 92%)",
		darkGrayishBlue: "hsl(234, 11%, 52%)",
		veryDarkGrayishBlue: "hsl(237, 14%, 26%)",
		veryGrayishBlue: "hsl(233, 14%, 35%)",
		boxShadow: "rgb(0 0 0 / 50%) 0px 35px 50px -15px",
	},
};

export const darkTheme: ITheme = {
	body: CONSTANTS.darkTheme.veryDarkBlue,
	lightBody: CONSTANTS.darkTheme.veryDarkDesaturatedBlue,
	textColor: "#fff",
	headingColor: "lightblue",
	backgroundImage: lightBgImage,
	borderColor: CONSTANTS.darkTheme.veryDarkGrayishBlue,
	listTextColor: CONSTANTS.darkTheme.lightGrayishBlue,
	placeHolderColor: CONSTANTS.darkTheme.darkGrayishBlue,
	boxShadow: CONSTANTS.darkTheme.boxShadow,
	primary: CONSTANTS.primary.brightBlue,
	disabled: CONSTANTS.darkTheme.darkGrayishBlue,
};

export const lightTheme: ITheme = {
	body: CONSTANTS.lightTheme.veryLightGray,
	lightBody: "#fff",
	textColor: "hsl(0, 0%, 98%)",
	headingColor: "#d23669",
	backgroundImage: darkBgImage,
	borderColor: CONSTANTS.lightTheme.veryLightGrayishBlue,
	listTextColor: CONSTANTS.lightTheme.veryDarkGrayishBlue,
	placeHolderColor: CONSTANTS.lightTheme.darkGrayishBlue,
	boxShadow: CONSTANTS.lightTheme.boxShadow,
	primary: CONSTANTS.primary.brightBlue,
	disabled: CONSTANTS.lightTheme.lightGrayishBlue,
};

export const GlobalStyles = createGlobalStyle<{ theme: ITheme }>`
  body{
    color: ${(props) => props.theme.textColor};
	background-image: url(${(props) => props.theme.backgroundImage});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: top;
    background-color:  ${(props) => props.theme.body};
    font-family: 'Josefin Sans', sans-serif;
    /* transition: .3s ease; */
    transition: background-image .3s ease-in-out;
 }
 button{
	font-family: 'Josefin Sans', sans-serif;
 }

 /* h2{
   color: ${(props) => props.theme.headingColor};
 } */
`;
