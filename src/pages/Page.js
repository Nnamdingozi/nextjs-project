import React from "react";
import { useState } from "react";

function Header({ title }) {
    return (<h1>{title ? title : "default title"}</h1>)
}


export default function HomePage() {
    const [professionals, setProfessionals] = useState(
        [
            { id: 1, name: "Ada Lovelace", profession: "mathematician" },
            { id: 2, name: "Grace Hopper", profession: "computer Scientist" },
            { id: 3, name: "Margaret Hamilton", profession: "actress" }]);
    const [likes, setLikes] = useState(0);
const [userInput, setUserInput]= useState({})
    let nextId = 3;
    function handleClick() {
        setLikes(likes + 1)
    }

    function handleChange({ target }) {
        const { name, value } = target;
        setUserInput(prev =>
        ({
            ...prev,
            [name]: value
        })

        )
    }



    function handleOnAdd(e) {
        if (userInput !== "") {
            setProfessionals([
                ...professionals,
                {
                    name: userInput.name,
                    profession: userInput.profession,
                    id: nextId
                }

            ]);
         
            nextId++
        }
        setUserInput("")
    }

    function handleOnRemove(currentId) {
        const newComers = professionals.filter(member => member.id !== currentId)
        setProfessionals(newComers)
    }

    const prefix = (name) => {

        const regex = /^[aeiou]/i;
        if (regex.test(name)) {
            return ' is an '
        } else { return ' is a ' }
    }


    return (
        <div>
            <Header title="Develop. Preview. Ship. 🚀" />
            <ul>
                {professionals.map(name => <li key={name.id}>{name.name} {prefix(name.profession)} {name.profession} <button onClick={() => handleOnRemove(name.id)}>remove</button></li>)}
            </ul>
            <label for='name'>
                New Name:
                <input
                    name='name'

                    onChange={handleChange}
                    value={userInput.name}
                    type='text'
                />

            </label><br />
            <label for='profession'>
                New Profession:
                <input
                    name='profession'
                    onChange={handleChange}
                    value={userInput.profession}
                    type='text'
                />
                <button onClick={handleOnAdd}>Add</button>

            </label> <br />

            <button onClick={handleClick}>Like({likes})</button>
        </div>
    )

}