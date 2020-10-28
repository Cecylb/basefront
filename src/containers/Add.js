import React from "react";
import {connect} from "react-redux";
import {addNewEntity, fetchTableFields} from "../utils/actions";
import {withRouter} from "react-router-dom";
import ShowAlert from "../alert";

const {Component} = require("react");

class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            table: "",
            fields: this.props.fields
        }
        this.handleTableSubmit = this.handleTableSubmit.bind(this);
        this.handleFieldsSubmit = this.handleFieldsSubmit.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.fields !== prevProps.fields) {
            const fields = new Map();
            for (let i = 0; i < this.props.fields.length; i++) {
                fields.set(this.props.fields[i], "")
            }
            this.setState({fields: fields});
        }
    }

    handleTableSubmit(event) {
        event.preventDefault();
        this.props.fetchTableFields(this.state.table)
    }

    handleFieldsSubmit(event) {
        event.preventDefault();
        this.props.addNewEntity(this.state.table, this.state.fields)
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    }

    handleFieldChange(event) {
        event.preventDefault();
        this.state.fields.set(event.target.name, event.target.value);
    }

    renderForm(fields) {
        let data = [];
        for (let key of fields.keys()) {
            let row = (
                <div className='form-group'>
                    <input className='form-control' placeholder={key} type='text' name={key} onChange={this.handleFieldChange}/>
                </div>
               )
            data.push(row);
        }
        return (
            <form className='form-group' onSubmit={this.handleFieldsSubmit}>
                {data}
                <button className='btn btn-outline-secondary' type='submit'>Add</button>
            </form>
        );
    }

    render() {
        const {fields} = this.state;
        const form = fields.length !== 0
            ? this.renderForm(fields)
            : null;
        return (
            <div>
                {this.props.alert ? <ShowAlert/> : null}
                <div className='jumbotron'>
                    <div className='container'>
                        <h1 className="display-3"> Add to database </h1>
                    </div>
                </div>
                <div className='container'>
                    <form className='input-group mb-3' onSubmit={this.handleTableSubmit}>
                        <input className='form-control mr-sm-2' placeholder='Table' type='text' name='table' onChange={this.handleChange}/>
                        <button className='btn btn-secondary' type='submit'>Search</button>
                    </form>
                    <div>
                        {form}
                    </div>
                </div>
            </div>

        )
    }
}

function mapState(state) {
    return {
        fields: state.fetchReducer.fields,
        alert: state.app.alert
    }
}

const actions = {
    fetchTableFields: fetchTableFields,
    addNewEntity: addNewEntity
}

export default withRouter(connect(mapState, actions)(Add));