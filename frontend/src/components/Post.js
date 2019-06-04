import React, {Component} from 'react';

class Post extends Component{
    constructor(){
        super();
        this.state = {
            title: null,
            company: null,
            description: null,
            location: null,
            category: null
        }
    }
    componentDidMount() {
        fetch('https://localhost:5000/api/jobs/post')
            .then(res => res.text())
            .then(res=> this.setState({message: res}))
    }


    render() {
        return(
            <div>
                <h1>Post job add</h1>
                <p>{this.state.message}</p>
                <input
                type="text"
                onChange={e => this.setState({ title: e.target.value })}
                placeholder="How do I hack NASA"
                style={{ width: "200px" }}
                />
                <input
                    type="text"
                    onChange={e => this.setState({ company: e.target.value })}
                    placeholder="How do I hack NASA"
                    style={{ width: "200px" }}
                />
                <input
                type="text"
                onChange={e => this.setState({ description: e.target.value })}
                placeholder="I just learn html and want to hack NASA, can you help me?"
                style={{ width: "200px" }}
                />
                <input
                    type="text"
                    onChange={e => this.setState({ location: e.target.value })}
                    placeholder="I just learn html and want to hack NASA, can you help me?"
                    style={{ width: "200px" }}
                />
                <input
                    type="text"
                    onChange={e => this.setState({ category: e.target.value })}
                    placeholder="I just learn html and want to hack NASA, can you help me?"
                    style={{ width: "200px" }}
                />
                <button onClick={() => this.props.postDataToDB(this.state.title,this.state.company, this.state.description, this.state.location, this.state.category )}>
                    Submit
                </button>
            </div>
        )
    }
}
export default Post;