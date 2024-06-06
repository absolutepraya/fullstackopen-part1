import PropTypes from 'prop-types';

// Header component
const Header = (props) => {
    return (
        <h1>{props.title}</h1>
    )
}

// Part component
const Part = (props) => {
    return (
        <p>{props.part}: {props.exercises} exercises</p>
    )
}

// Content component
const Content = (props) => {
    return (
        <div>
            <Part part={props.part1} exercises={props.exercises1} />
            <Part part={props.part2} exercises={props.exercises2} />
            <Part part={props.part3} exercises={props.exercises3} />
        </div>
    )
}

// Total component
const Total = (props) => {
    return (
        <p>📚 Total number of exercises: {props.total} exercises</p>
    )
}

// App component
const App = () => {
	// const definitions
	const course = 'Half Stack application development';
	const part1 = 'Fundamentals of React';
	const exercises1 = 10;
	const part2 = 'Using props to pass data';
	const exercises2 = 7;
	const part3 = 'State of a component';
	const exercises3 = 14;

	return (
        <div>
            <Header title={course} />
            <Content 
                part1={part1} exercises1={exercises1} 
                part2={part2} exercises2={exercises2} 
                part3={part3} exercises3={exercises3}
            />
            <Total total={exercises1 + exercises2 + exercises3} />
        </div>
	);
};

// PropType definitions
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
Part.propTypes = {
    part: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired,
}
Content.propTypes = {
    part1: PropTypes.string.isRequired,
    exercises1: PropTypes.number.isRequired,
    part2: PropTypes.string.isRequired,
    exercises2: PropTypes.number.isRequired,
    part3: PropTypes.string.isRequired,
    exercises3: PropTypes.number.isRequired,
}
Total.propTypes = {
    total: PropTypes.number.isRequired,
}

export default App;
