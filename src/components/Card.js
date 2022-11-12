import React from "react";

const Card = ({ pokemon, loading, infoPokemon }) => {
    
    return (
        <>
            {
                loading ? <h1>Loading...</h1> :
                    pokemon.data.map((item) => {
                        return (
                            <>
                                <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
                                    <h2>{item.name}</h2>
                                    <img className="image" src={item.images.small} alt="image" />                             
                                </div>
                            </>
                        )
                    })
            }

        </>
    )
}


export default Card;