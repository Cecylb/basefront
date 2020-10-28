import React from "react";
import {connect} from "react-redux";
import {deleteEntity, fetchSearchResult} from "../utils/actions";
import {withRouter} from "react-router-dom";
import ShowAlert from "../alert";

const {Component} = require("react");

class Remove extends Component {

    constructor(props) {
        super(props);
        this.state = {
            table: "",
            id: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.deleteEntity(this.state.table, this.state.id);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                {this.props.alert ? <ShowAlert/> : null}
                <div className='jumbotron'>
                    <div className='container'>
                        <h1 className="display-3"> Remove from database </h1>
                    </div>
                </div>
                <div className='container'>
                    <form className='input-group mb-3' onSubmit={this.handleSubmit}>
                        <input className='form-control mr-sm-2' placeholder='Table' type='text' name='table' onChange={this.handleChange}/>
                        <input className='form-control mr-sm-2' placeholder='id' type='text' name='id' onChange={this.handleChange}/>
                        <button className='btn btn-secondary' type='submit'>Delete</button>
                    </form>
                </div>
            </div>

        )
    }
}

function mapState(state) {
    return {
        alert: state.app.alert
    }
}

const actions = {
    deleteEntity: deleteEntity
}

export default withRouter(connect(mapState, actions)(Remove));