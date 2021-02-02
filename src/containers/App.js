import React, { useState, useEffect } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import Header from '../components/Header';

const App =() => {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
        console.log(count);
    }, [count])

    const onSearchChange = (event) => {
        setSearchField( event.target.value );
    }

    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });
    return !robots.length ?
    <h2 className='f1 tc'>Now loading...</h2> :
    (
        <div className='tc'>
            <Header />
            <div>
                <button onClick = {()=>setCount(count+1)}>Click Me</button>
            </div>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>
        </div>
    );
};

export default App;