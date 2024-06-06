// Header component
const Header = (props) => {
	return <h1>{props.title}</h1>;
};

// Part component
const Part = (props) => {
	return (
		<p>
			{props.name}: {props.exercises} exercises
		</p>
	);
};

// Content component
const Content = (props) => {
    return (
        <div>
            <Part name={props.part1.name} exercises={props.part1.exercises} />
            <Part name={props.part2.name} exercises={props.part2.exercises} />
            <Part name={props.part3.name} exercises={props.part3.exercises} />
        </div>
    );
};

// Total component
const Total = (props) => {
	return <p>📚 Total number of exercises: {props.total} exercises</p>;
};

// App component
const App = () => {
	// const definitions
	const course = 'Half Stack application development';
	const part1 = {
		name: 'Fundamentals of React',
		exercises: 10,
	};
	const part2 = {
		name: 'Using props to pass data',
		exercises: 7,
	};
	const part3 = {
		name: 'State of a component',
		exercises: 14,
	};
    const total = part1.exercises + part2.exercises + part3.exercises;

    return (
        <div>
            <Header title={course} />
            <Content 
                part1={part1} 
                part2={part2} 
                part3={part3} 
            />
            <Total total={total} />
        </div>
    );
};

export default App;
