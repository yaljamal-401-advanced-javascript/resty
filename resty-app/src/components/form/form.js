import React from 'react';
import './form.scss';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            URL: '',
            method: '',
            full: '',
        };
    }

    handleChange = (e) => {
        const URL = e.target.value;
        this.setState({ URL: URL });
    };

    handleClickGo = (e) => {
        this.setState({ full: `${this.state.method} ${this.state.URL}` });
        console.log('fullllllllll', { full: `${this.state.method} ${this.state.URL}` });

    };
    handleClickGet = (e) => {
        this.setState({ method: 'GET' });
    };
    handleClickPost = (e) => {
        this.setState({ method: 'POST' });
    };
    handleClickPut = (e) => {
        this.setState({ method: 'PUT' });

    };
    handleClickDelete = (e) => {
        this.setState({ method: 'DELETE' });

    };
    render() {
        return (
            <body>
                  <main>
                <div className='first'>
                    <label>URL</label>
                    <input onChange={this.handleChange}></input>
                    <button id='goButton' onClick={this.handleClickGo}>GO</button>
                    <br></br>
                    <button className='buttonMethod' onClick={this.handleClickGet} value='GET'>GET</button>
                    <button className='buttonMethod' onClick={this.handleClickPost} value='POST'>POST</button>
                    <button className='buttonMethod' onClick={this.handleClickPut} value='PUT'>PUT</button>
                    <button className='buttonMethod' onClick={this.handleClickDelete} value='DELETE'>DELETE</button>
                </div>
                <textarea value={this.state.full}></textarea>
            </main>
            <footer>
            <h4>&copy; 2018 Code Fellows </h4>
            </footer>

            </body>
          
        );
    }
}



export default Main;