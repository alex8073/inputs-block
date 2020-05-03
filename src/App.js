import React from 'react';
import './App.css';
import icon from './assets/images/icon-home.png'
import Buyers from './components/Buyers/Buyers';
import Users from './components/Users/Users';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1 className={"title"}>New page</h1>
                <img className={"logo"} src={icon} width={20} alt=""/>
                <form className={"form"}>
                    <Buyers/>
                    <Users/>
                    <input className={"another-field"} placeholder={"Text field"}/>
                    <input className={"another-field"} placeholder={"Text field"}/>
                    <input className={"another-field"} placeholder={"Text field"}/>
                    <button className={"reset-button"}>Reset</button>
                    <button className={"filter-button"}>Filter</button>
                </form>
            </div>
        );
    }
}

export default App;
