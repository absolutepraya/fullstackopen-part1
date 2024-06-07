import { useState } from 'react';

// Button component
const Button = (props) => {
	return (
		<button onClick={props.handleClick}>{props.text}</button>
	)
}

// StatisticLine component
const StatisticLine = (props) => {
	return (
		<p>{props.text} {props.value}</p>
	)
}

// Statistics component
const Statictics = (props) => {
	// destructure props
	let good = props.good;
	let neutral = props.neutral;
	let bad = props.bad;
	let all = good + neutral + bad;
	let average = (good - bad) / all;
	let positive = (good / all) * 100;

	// display statistics only if feedback is given
	if (all === 0) {
		return (
			<div>
				<h1>statistics</h1>
				<p>no feedback given</p>
			</div>
		)
	}

	return (
		<div>
			<h1>statistics</h1>
			<StatisticLine text="good" value={good} />
			<StatisticLine text="neutral" value={neutral} />
			<StatisticLine text="bad" value={bad} />
			<StatisticLine text="all" value={all} />
			<StatisticLine text="average" value={average.toFixed(3)} />
			<StatisticLine text="positive" value={positive.toFixed(3) + '%'} />
		</div>
	)
}

// App component
const App = () => {
	// state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>give feedback</h1>
			<Button handleClick={() => setGood(good + 1)} text="good" />
			<Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
			<Button handleClick={() => setBad(bad + 1)} text="bad" />
			<Statictics good={good} neutral={neutral} bad={bad} />
		</div>
	)
}

export default App;
