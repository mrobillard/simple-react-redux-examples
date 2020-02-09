import React from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actionCreator';
import { bindActionCreators } from 'redux';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todotext: '',
        } 
        this.onChangeTodoText = this.onChangeTodoText.bind(this);
    }

    onChangeTodoText(e) {
        this.setState({
            todotext: e.target.value
        });
    }

    render() {
        return (
            <div className="form-group row">
                <div className="col-sm-10">
                    <input
                        onChange={this.onChangeTodoText}
                        value={this.state.todotext} type="text"
                        className="form-control"
                        id="inputEmail3"
                        placeholder="add tood here"
                    />
                </div>
            </div>
        );
    }

};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(CreateTodo);
