import React, { Component } from 'react'
import Card from '../../components/cards/Card'

export default class FormHAndling extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: 'Ajay',
            comments: "Testing this is comment",
            topic: 'react'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`Topic : ${this.state.topic}`)
        event.preventDefault();
    }
    render() {
        return (
            <div className='component-container'>
                <p> This is a form handling component </p>
                <div className='main-container'>
                    <Card>
                        <h4> Example : Form Handling Input Field</h4>
                        <form>
                            <div>
                                <lable> Username </lable>
                                <input type='text' value={this.state.userName} onChange={this.handleUsernameChange} />
                            </div>
                        </form>
                    </Card>
                    <Card>
                        <h4> Example : Form Handling Textarea Field</h4>
                        <form>
                            <div>
                                <label>Comments</label>
                                <textarea value={this.state.comments} onChange={this.handleCommentsChange} style={{ marginLeft: '10px', marginTop: '15px' }} />
                            </div>
                        </form>
                    </Card>
                    <Card>
                        <h4> Example : Form Handling Selector </h4>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label> Topic </label>
                                <select value={this.state.topic} onChange={this.handleTopicChange}>
                                    <option value=''>Please Select The Topic</option>
                                    <option value='react'>React</option>
                                    <option value='angular'>Angular</option>
                                    <option value='vue'>Vue</option>
                                </select>
                                <button type='submit'>Submit</button>
                            </div>
                        </form>
                    </Card>

                </div>
            </div>
        )
    }
}
