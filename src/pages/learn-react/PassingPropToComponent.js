import React from "react";
import Card from "../../components/cards/Card";

function Avatar({ person, size }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    )

}

function getImageUrl(person, size = 's') {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    )
}

function PassingPropToComponent() {
    return (
        <div className="component-container">
            <p> This is Passing Prop To Component</p>
            <div className="main-container">

                <Card>
                    <h1> Props </h1>
                    {/* <strong>This is strong text</strong>
                <em>This is emphasized text</em>
                <u>This text is underlined</u>
                <s>Strikethrough text</s>
                <strike>Also strikethrough text</strike>
                X<sup>2</sup>
                H<sub>2</sub>O
                 <del>
                 {name + ' ✔'}
                 </del>
                <font size="4" color="red">This is red text with size 4</font>
                <p >Styled with CSS</p> */}

                    <p>
                        React components use props to communicate with each other.
                        Every parent component can pass some information to its child components by giving them <strong>props. </strong>
                        Props might remind you of HTML attributes, but you can pass any JavaScript value through them,
                        including <em>objects, arrays, and functions.</em>
                    </p>

                </Card>
                <Card>
                    <h4> You will learn</h4>
                    <ul style={{ marginTop: '40px' }}>
                        <li>How to pass props to a component</li>
                        <li>How to read props from a component</li>
                        <li>How to specify default values for props</li>
                        <li>How to pass some JSX to a component</li>
                        <li>How props change over time</li>
                    </ul>
                </Card>
                <Card>
                    <h4>Familiar props</h4>
                    <p style={{ marginTop: '40px' }}>
                        Props are the information that you pass to a JSX tag. For example,
                        <em>className, src, alt, width, and height</em> are some of the props you can pass to an <em>img:</em>
                    </p>
                </Card>
                <Card>
                    <h4>Example props</h4>
                    <div style={{ marginTop: '40px' }}>
                        <Avatar
                            size={100}
                            person={{
                                name: 'Katsuko Saruhashi',
                                imageId: 'YfeOqp2'
                            }}
                        />
                        <Avatar
                            size={80}
                            person={{
                                name: 'Aklilu Lemma',
                                imageId: 'OKS67lh'
                            }}
                        />
                        <Avatar
                            size={50}
                            person={{
                                name: 'Lin Lanying',
                                imageId: '1bX5QH6'
                            }}
                        />
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default PassingPropToComponent;