import React, {Component} from 'react';
import NoteList from '../containers/NoteList.jsx';

class ContainerNote extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <NoteList/>
            </div>
        )
    }
}

export default ContainerNote;