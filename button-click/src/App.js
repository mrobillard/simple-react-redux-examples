import React from 'react';
import { connect } from 'react-redux';

import { enterWorld, exitWorld } from './actions';

class App extends React.Component {
    render() {
        return (
            <div className="page-wrapper">
            <div className="flex-container">
                <h1>{ this.props.entry.title || 'Hello, World' }</h1>
                {this.props.entry.title ? (
                    <button
                        className="btn"
                        onClick={this.props.exitWorld}
                    >
                        Exit World
                    </button> ) : (
                        <button
                            className="btn"
                            onClick={() => this.props.enterWorld({ title: 'Welcome to World' })}
                        >
                            Enter World
                        </button>
                    )}
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    entry: state.entry,
});

export default connect(mapStateToProps, { enterWorld, exitWorld })(App);
