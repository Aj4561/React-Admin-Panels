import React from "react";
import Card from "../../components/cards/Card";

// Conditional (ternary) operator (? :)
function Item1({ name, isPacked }) {
    return (
        <li>
            {isPacked ? (
                <del>
                    {name + ' ✔'}
                </del>
            ) : (
                name
            )}
        </li>
    )
}

// Logical AND operator (&&)

function Item2({ name, isPacked }) {
    return (
        <li>
            {name} {isPacked && '✔'}
        </li>
    )
}

// Conditionally assigning JSX to a variable

function Item3({ name, isPacked }) {
    let itemContent = name
    if (isPacked) {
        itemContent = name + '✔'
    }
    return (
        <li>
            {itemContent}
        </li>
    )
}

function ConditionRendering() {
    return (
        <div className='component-container'>
            <p>This is a Conditional Rendering Page</p>
            <div className="main-container">
                <Card>
                    <h3>Conditional Rendering</h3>
                    <p style={{ marginTop: "40px" }}>
                        <em>
                            Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.
                        </em>
                    </p>
                </Card>
                <Card>
                    <h4>You will learn</h4>
                    <ul style={{ marginTop: "40px" }}>
                        <li>How to return different JSX depending on a condition</li>
                        <li>How to conditionally include or exclude a piece of JSX</li>
                        <li>Common conditional syntax shortcuts you’ll encounter in React codebases</li>
                    </ul>
                </Card>
                <Card>
                    <section>
                        <h1>Sally Ride's Packing List</h1>
                        <p>
                            <em>
                                <strong>First Example :- </strong>
                                Conditional (ternary) operator (? :)
                            </em>
                        </p>
                        <ul>
                            <Item1
                                isPacked={true}
                                name="Space suit"
                            />
                            <Item1
                                isPacked={true}
                                name="Helmet with a golden leaf"
                            />
                            <Item1
                                isPacked={false}
                                name="Photo of Tam"
                            />
                        </ul>
                    </section>
                </Card>
                <Card>
                    <section>
                        <h1>Sally Ride's Packing List</h1>
                        <p>
                            <em>
                                <strong>Second Example :- </strong>
                                Logical AND operator (&&)
                            </em>
                        </p>
                        <ul>
                            <Item2
                                isPacked={true}
                                name="Space suit"
                            />
                            <Item2
                                isPacked={true}
                                name="Helmet with a golden leaf"
                            />
                            <Item2
                                isPacked={false}
                                name="Photo of Tam"
                            />
                        </ul>
                    </section>
                </Card>
                <Card>
                    <section>
                        <h1>Sally Ride's Packing List</h1>
                        <p>
                            <em>
                                <strong>Third Example :- </strong>
                                Conditionally assigning JSX to a variable
                            </em>
                        </p>
                        <ul>
                            <Item3
                                isPacked={true}
                                name="Space suit"
                            />
                            <Item3
                                isPacked={true}
                                name="Helmet with a golden leaf"
                            />
                            <Item3
                                isPacked={false}
                                name="Photo of Tam"
                            />
                        </ul>
                    </section>
                </Card>
            </div>
        </div>
    )
}

export default ConditionRendering;