// Header component
const Header = (props) => {
	return <h1>{props.course}</h1>;
};

// Part component
const Part = (part) => {
	return (
		<p>
			{part.name}: {part.exercises} exercises
		</p>
	);
};

// Content component
const Content = ({ parts }) => {
	return (
		<div>
			<Part name={parts[0].name} exercises={parts[0].exercises} />
			<Part name={parts[1].name} exercises={parts[1].exercises} />
			<Part name={parts[2].name} exercises={parts[2].exercises} />
		</div>
	);
};

// Total component
const Total = ({ parts }) => {
	let total = parts[0].exercises + parts[1].exercises + parts[2].exercises;
	return <p>📚 Total number of exercises: {total} exercises</p>;
};

// App component
const App = () => {
	// const definitions
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
			},
			{
				name: 'State of a component',
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course['name']} />
			<Content parts={course['parts']} />
			<Total parts={course['parts']} />
		</div>
	);
};

export default App;
