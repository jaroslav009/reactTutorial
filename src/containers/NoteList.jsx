import React, {Component} from 'react';
import {connect} from 'react-redux';
import Container from '../Components/Container.jsx';
import update from '../actions/action';
import {bindActionCreators} from 'redux';

class NoteList extends Component{
    constructor(props) {
        super(props)
        this.state = {data: this.props.data}
    }

    updateText(text, index) {
        var arr = this.state.data;
        arr[index] = text;
        this.setState({data: arr});
    }

    eachTask(item, i) {
        return <div key={i}>
            <Container index={i} title={item.title}>{item.text}</Container>
        </div>
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                {
                    this.state.data.map(this.eachTask)                      
                }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        data: state.data
    }
}
export default connect(mapStateToProps)(NoteList)
