import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Main = ({ infoPokemon }) => {
    
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  let navigate = useNavigate();
  
  useEffect(() => {
    const pokeFun = async () => {
        setLoading(true);
        const res = await axios.get(
          `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=100`
        );
        setPokeData(res.data);
        setLoading(false);
      };
      pokeFun();
  }, [page]);

  return (
    <>
      <h1 className="heading">Pokemon</h1>
      <div className="container">
        <div className="left-content">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            pokeData.data.map((item, index) => {
              return (
                <div
                  className="card"
                  key={index}
                  onClick={() => {
                    infoPokemon(item);
                    navigate(`/${item.id}`);
                  }}
                >
                  <h2 key={item.name}>{item.name}</h2>
                  <img
                    key={item.images.small}
                    className="image"
                    src={item.images.small}
                    alt=""
                  />
                </div>
              );
            })
          )}
        </div>

        <div className="btn-group">
          {page > 1 && (
            <button
              onClick={() => {
                setPage((prev) => prev - 1);
              }}
            >
              Previous
            </button>
          )}

          {page <= 100 && (
            <button
              onClick={() => {
                setPage((prev) => prev + 1);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;