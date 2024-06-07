import { useState } from 'react';

// Button component
const Button = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>;
};

// App component
const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.',
	];

	const [selected, setSelected] = useState(0);
    
    // function to select a random anecdote
    const randomSelect = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length));
    }

    // zero-filled array to store votes for each anecdote
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

    // function to vote for the selected anecdote
    const vote = () => {
        const votesCopy = [...votes];
        votesCopy[selected] += 1;
        setVotes(votesCopy);
    }

    // function to return the index of the anecdote with the most votes
    const mostVotes = () => {
        return votes.indexOf(Math.max(...votes));
    }

	return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <Button onClick={vote} text="vote" />
            <Button onClick={randomSelect} text="next anecdote" />

            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[mostVotes()]}</p>
        </div>
    )
};

export default App;
