import React from 'react'

export default function Listitems(props) {
    const { list } = props
    return (
        <div>
            {list.map((character, item) => {
                return (
                    <div className="container" key={item}>
                        <p> {character.name}</p>
                        <p>Born: {character.birth_year}</p>
                        <p>Gender: {character.gender}</p>
                        <p>Homeworld: {character.homeworld.name}</p>
                        <p>Mass: {character.mass}</p>
                        <p>Skin Color: {character.skin_color}</p>
                    </div>
                )
            })}
        </div>
    )
}