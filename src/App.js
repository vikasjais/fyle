import React, {Component} from 'react';
import './App.css';
import {Layout} from 'antd';
import File from "./Components/file";


const {Content} = Layout;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
                <div style={{
                    backgroundColor: 'white',
                }}>
                    <File />
                </div>
        );
    }
}

export default App;