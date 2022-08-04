import sedan from "./images/icon-sedans.svg";
import suv from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";
import "./App.css";

function App() {
	return (
		<div className="app">
			<div className="card">
				<img src={sedan} alt="sedan" />
				<h1>Sedans</h1>
				<p>
					Choose a sedan for its affordability and excellent fuel economy. Ideal
					for cruising in the city or on your next road trip.
				</p>
				<button>Learn More</button>
			</div>
			<div className="card">
				<img src={suv} alt="suv" />
				<h1>SUVs</h1>
				<p>
					Take an SUV for its spacious interior, power, and versatility. Perfect
					for your next family vacation and off-road adventures.
				</p>
				<button>Learn More</button>
			</div>
			<div className="card">
				<img src={luxury} alt="luxury" />
				<h1>Luxury</h1>
				<p>
					Cruise in the best car brands without the bloated prices. Enjoy the
					enhanced comfort of a luxury rental and arrive in style.
				</p>
				<button>Learn More</button>
			</div>
		</div>
	);
}

export default App;
