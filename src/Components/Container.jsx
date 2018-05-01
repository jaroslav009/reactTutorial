import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import update from '../actions/action';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {edit: false, data: this.props.data}
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.rendNorm()
    }

    edit() {
        this.setState({edit: true})
        console.log(this.state.data)
    }

    save() {
        this.setState({edit: false})
        var text = this.refs.textEdit.value
        console.log(this.props.data)
        this.props.updateText(this.props.title)
        console.log(this.props.data)
    }

    rendNorm() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.children}</p>
                    <div className="row">
                        <div className="col-md-2">
                            <button className="btn" onClick={this.edit}>Редактировать</button>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-warning">Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    rendEdit() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>{this.props.title}</h1>
                    <textarea ref="textEdit" defaultValue={this.props.children} cols="30" rows="5"></textarea>
                    <div className="row">
                        <div className="col-md-2">
                            <button className="btn btn-success" onClick={this.save}>Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
    
    render() {
        if(this.state.edit === false) return this.rendNorm()
        else if (this.state.edit === true) return this.rendEdit()
    }
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({updateText: update}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Container);
