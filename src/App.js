import React, { useState } from "react";
import star from "./images/icon-star.svg";
import thanks from "./images/illustration-thank-you.svg";
import "./App.scss";

function App() {
	const [submit, setSubmit] = useState(false);
	const [number, setNumber] = useState(0);

	function handleSubmit(e) {
		if (number && number > 0) setSubmit(true);
	}

	function handleSelect(num) {
		if (num && num > 0 && num < 6) {
			setNumber(num);
		}
	}

	return (
		<div className="App">
			{!submit && (
				<section className="rating">
					<img className="icon" src={star} alt="star" />
					<h1 className="title">How did we do?</h1>
					<p className="description">
						Please let us know how we did with your support request. All
						feedback is appreciated to help us improve our offering!
					</p>
					<div className="rating-buttons">
						<button onClick={() => handleSelect(1)}>1</button>
						<button onClick={() => handleSelect(2)}>2</button>
						<button onClick={() => handleSelect(3)}>3</button>
						<button onClick={() => handleSelect(4)}>4</button>
						<button onClick={() => handleSelect(5)}>5</button>
					</div>
					<button className="submit-button" onClick={handleSubmit}>
						Submit
					</button>
				</section>
			)}

			{submit && (
				<section className="rating after">
					<img className="logo" src={thanks} alt="thank-you" />
					<p className="rating-result">You selected {number} out of 5</p>
					<h1 className="title">Thank you!</h1>
					<p className="description">
						We appreciate you taking the time to give a rating. If you ever
						need more support, don't hesitate to get in touch!
					</p>
				</section>
			)}
		</div>
	);
}

export default App;
