import React from "react";
import Card from "../../components/cards/Card";
import CopyClipBoadCard from "../../components/cards/CopyClipBoadCard";
import './learnReact.css'


function Profile() {
    return (
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTffMl68AoLEFuDMoZ2X6frKR5_Po4kEqbUOQdLLnbFIoiELGLeYOvEaREz40oHpvK0pEU&usqp=CAU"
        alt="Anime"
      />
    )
}

function YourFirstComponent() {
    // const textToCopy = 'IS it Copy'
    return (
        <div className='component-container'>
            <p>Test YourFirstComponent</p>
            <div className="main-container">

                <Card>
                    <article>
                        <h3> You will learn </h3>
                        <ol>
                            <li>What a component is </li>
                            <li>What role components play in a React application </li>
                            <li>How to write your first React component</li>
                        </ol>
                    </article>
                </Card>
                <Card>
                    <CopyClipBoadCard>
                        <p>Testing what it is</p>
                        <strong>This is bold text</strong>
                    </CopyClipBoadCard>
                </Card>
                <Card>
                    <section>
                        <h1>Amazing scientists</h1>
                        <Profile />
                        <Profile />
                        <Profile />
                    </section>
                </Card>
            </div>
        </div>
    )
}


export default YourFirstComponent;