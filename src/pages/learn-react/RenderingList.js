import React from "react";
import Card from "../../components/cards/Card";
import {Data} from "./Data"


function RenderingList() {

    function getImageUrl(person) {
        return (
          'https://i.imgur.com/' +
          person.imageId +
          's.jpg'
        );
      }

      const listItems = Data.people.map((person) => 
        <li key={person.id} className="li-custom-grid">
            <img 
            src={getImageUrl(person)}
            alt={person.name}
            className="profile-image"
            />
            <p>
                <b><em>{person.name}</em></b>
                {' ' + person.profession +  ' '}
                know for {person.accomplishment}
            </p>
        </li>
      )

    return (
        <div className='component-container'>
            <p>This page is a Rendering List</p>
            <div className="main-container">
                <Card>
                    <h4>Rendering Lists</h4>
                    <p>
                        You will often want to display multiple similar components from a collection of data.
                        You can use the JavaScript array methods to manipulate an array of data. On this page,
                      <em>you’ll use filter() and map() with React to filter and transform </em>  your array of data into an array of components.
                    </p>
                </Card>

                <Card>
                    <h4>You will learn</h4>
                    <ol>
                        <li>How to render components from an array using JavaScript’s map()</li>
                        <li>How to render only specific components using JavaScript’s filter()</li>
                        <li>When and why to use React keys</li>
                    </ol>
                </Card>

                <Card>
                    <h4>Scientists</h4>
                    <ul>{listItems}</ul>
                </Card>
            </div>
        </div>
    )
}

export default RenderingList;