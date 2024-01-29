import React, { Component } from "react";
import Card from "../../components/cards/Card";

const cardStyle = {
    height: "395px",
    width: " 93%",
    backgroundColor: "#ffffff",
    boxShadow: "0px 1px 14px 0px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "auto",
    marginLeft: "21px",
    marginBottom: "20px",
    marginTop: "20px",
    padding: "24px",

};

const InnercardStyle = {
    height: "200px",
    width: " 40%",
    backgroundColor: "#ffffff",
    boxShadow: "0px 1px 14px 0px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "auto",
    marginBottom: "20px",
    marginTop: "20px",
    padding: "24px",
    marginLeft: "52px"

};

class State extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor',
            count: 0
        }
    }

    changeMessage() {
        this.setState({
            message: "Thankyou for subscribing"
        })
    }

    resetCountButton() {
        this.setState(
            {
                count: 0
            }
        )
    }

    incrementButtoon() {
        this.setState(
            {
                count: this.state.count + 1
            },
            () => {
                console.log('Callback value', this.state.count)
            }
        )
    }

    incrementButtoon1() {
        this.state.count = this.state.count + 1
    }

    incrementFiveTime() {
        this.incrementButtoon()
        this.incrementButtoon()
        this.incrementButtoon()
        this.incrementButtoon()
        this.incrementButtoon()

    }

    incrementFiveTimeWithPreviousState() {
      this.setState((previousState) => ({
        count : previousState.count +1
      }))
    }

    incrementFiveWithPreviousStateButton() {
        this.incrementFiveTimeWithPreviousState()
        this.incrementFiveTimeWithPreviousState()
        this.incrementFiveTimeWithPreviousState()
        this.incrementFiveTimeWithPreviousState()
        this.incrementFiveTimeWithPreviousState()

    }

    render() {
        return (
            <div className='component-container'>
                <p>This is a State Component </p>
                <div className="main-container">
                    <div style={cardStyle}>
                        <h4 style={{ textAlign: "center" }}> Props  Vs  State</h4>

                        <div className="main-container">
                            <div style={InnercardStyle}>
                                <h4>Props</h4>
                                <ul style={{ marginTop: "40px" }}>
                                    <li>Props get passed to the component</li>
                                    <li>Function Parameters</li>
                                    <li>Props are immutable</li>
                                    <li>Props - <em> Functional Components </em></li>
                                    <li>this.props - <em> class component </em> </li>
                                </ul>
                            </div>
                            <div style={InnercardStyle}>
                                <h4>State</h4>
                                <ul style={{ marginTop: "40px" }}>
                                    <li>State is managed with in the component</li>
                                    <li>Variables can be changed</li>
                                    <li>State can be changed</li>
                                    <li>Use State Hook - Functional Components</li>
                                    <li>this.state - class Components</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <Card>
                        <h4>Example</h4>
                        <p style={{ marginTop: "40px" }}> {this.state.message}</p>
                        <button onClick={() => this.changeMessage()}>Subscribe</button>
                    </Card>

                    <Card>
                        <h3> # setState</h3>
                        <ul>
                            <li>Always make use of setState and never modify the state directly.</li>
                            <li>Code has to be executed after the State has been updated ? Place that code in the call back function which is the second. argument to the setState method</li>
                            <li>When you have to update state based on the previous state value pass in afunction as an argument instead of the regular object</li>
                        </ul>
                    </Card>

                    <Card>
                        <p><strong>Example 1) :- </strong> <em>If we use setState</em></p>
                        <p>Count : {this.state.count}</p>
                        <button onClick={() => this.incrementButtoon()}>Increment</button>
                        <button onClick={() => this.resetCountButton()} style={{ marginLeft: "10px" }}>Reset Count</button>
                    </Card>

                    <Card>
                        <p><strong>Example 2):- </strong> <em>If we are not using setState, we set the vale of count directely</em> </p>
                        <p>Count : {this.state.count}</p>
                        <button onClick={() => this.incrementButtoon1()}>Increment</button>
                        <button onClick={() => this.resetCountButton()} style={{ marginLeft: "10px" }}>Reset Count</button>

                    </Card>

                    <Card>
                        <p><stron>Example 3):- </stron> <em>Increment Five time without previousState arguments</em></p>
                        <p>Count : {this.state.count}</p>
                        <button onClick={() => this.incrementFiveTime()}>Increment</button>
                        <button onClick={() => this.resetCountButton()} style={{ marginLeft: "10px" }}>Reset Count</button>


                        <p style={{ marginTop: "40px" }}>
                            <strong>Note :- </strong>
                            <em>This behaviour is because react may group multiple state set calls into a single update for better performance
                                <br />
                                So, what happens in our scenario all the five sets state calls are done in one single go nad the updated value does't carry.
                            </em>
                        </p>
                    </Card>

                    <Card>
                        <p><stron>Example 3):- </stron> <em>Increment Five time with using previousState arguments</em></p>
                        <p>Count : {this.state.count}</p>
                        <button onClick={() => this.incrementFiveWithPreviousStateButton()}>Increment</button>
                        <button onClick={() => this.resetCountButton()} style={{ marginLeft: "10px" }}>Reset Count</button>
                    </Card>

                </div>


            </div>
        )
    }



}

export default State;