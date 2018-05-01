import React, {Component} from 'react';

const itemNote = {
    dataNote: [
        {
            title: 'Hello World1',
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
            key: 1
        },
        {
            title: 'Hello World2',
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
            key: 1
        },
        {
            title: 'Hello World3',
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
            key: 2
        }
    ]
}

class RendNorm extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>{this.props.title}</h1>
                        <textarea onChange={this.handleChange} defaultValue={this.state.text} />
                        <div className="row">
                            <div className="col-md-2">
                                <button onClick={this.save}>Сохранить</button>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        )
    }
}

export default RendNorm;