import { useState } from 'react';

// Statistics component
const Statictics = (props) => {
	// destructure props
	let good = props.good;
	let neutral = props.neutral;
	let bad = props.bad;
	let all = good + neutral + bad;
	let average = (good - bad) / all;
	let positive = (good / all) * 100;

	return (
		<div>
			<h1>statistics</h1>
			<p>good {good}</p>
			<p>neutral {neutral}</p>
			<p>bad {bad}</p>
			<p>all {all}</p>
			<p>average {average.toFixed(3)}</p>
			<p>positive {positive.toFixed(3)}%</p>
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
			<button onClick={() => setGood(good + 1)}>good</button>
			<button onClick={() => setNeutral(neutral + 1)}>neutral</button>
			<button onClick={() => setBad(bad + 1)}>bad</button>
			<Statictics good={good} neutral={neutral} bad={bad} />
		</div>
	)
}

export default App;
