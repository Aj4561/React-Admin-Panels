import React, {useState} from "react";
import Card from "../../components/cards/Card";


const Props1 = (prop) => {


    return (
        <div>
            <h5> Example :- <b>WithOut using Destructuring </b></h5>

            <p>
                Name : <em> {prop.name} </em>
                <br />

                <br />
                Desingnation :  <em> {prop.jobTitle} </em>
            </p>
        </div>
    )
}

const Props2 = ({ name, jobTitle }) => {
    return (
        <div>
            <h5> Example :- <b>With using Destructuring </b></h5>

            <p>
                Name : <em> {name} </em>
                <br />

                <br />
                Desingnation :  <em> {jobTitle} </em>
            </p>
        </div>

    )
}

export default function Props() {

    function clickHandler() {
        console.log("Btton Clicked");
    }

    function clickFunctionCall() {
        console.log("Btton Clicked");
    }
 
    const [message , setMessage] = useState('Already set it out .')

   const EventBinding = (event)=> {
     // You can access the event object if needed
     console.log('Event:', event);
        setMessage('Message change')
    }

    return (
        <div className='component-container'>
            <p>This page is Props component</p>

            <p> Destructuring Props </p>

            <div className="main-container">


                <Card>
                    <Props1 name='Ajay' jobTitle='Devloper' />
                </Card>

                <Card>
                    <Props2 name='Ajay' jobTitle='Devloper' />
                </Card>

            </div>

            <p> Event Handler </p>

            <div className="main-container">


                <Card>
                    <p> <strong> Example :- <em> Exent Handler Function implement</em></strong></p>
                    <button onClick={clickHandler}>Click To Event</button>
                </Card>

                <Card>
                    <p> <strong> Example 2 :- <em> Exent Handler Function call implement</em></strong></p>
                    <button onClick={clickFunctionCall()}>Click To Event</button>
                </Card>
            </div>

            <p> Binding Event Handler </p>

            <div className="main-container">
                <Card>
                    <p>{message}</p>
                    <button onClick={()=>EventBinding(message)}> Event Binding Click </button>
                </Card>

            </div>

        </div>
    )
};