import React from "react";

const Pokeinfo = ({ data }) => {
  return (
    <>
      {data && (
        <>
          <h1 className="heading">{data.name}</h1>
          <div className="info">
            <div className="left-subinfo">
              <img
                className="info-image"
                key={data.images.large}
                src={data.images.large}
                alt=""
              />
            </div>
            <div className="right-subinfo">
              {data.level && (
                <h2 className="abilities">
                  Level <span className="group">{data.level}</span>
                </h2>
              )}
              {data.hp && (
                <h2 className="abilities">
                  HP <span className="group">{data.hp}</span>
                </h2>
              )}
              {data.abilities && (
                <h2 className="abilities">
                  Abilities{" "}
                  <span className="group">{data.abilities[0].text}</span>{" "}
                </h2>
              )}
              {data.attacks && (
                <h2 className="abilities">
                  Attacks{" "}
                  <span className="abilities">
                    {data.attacks.map((poke, index) => {
                      return (
                        <>
                          <span key={index} className="group">
                            {poke.name}
                          </span>
                        </>
                      );
                    })}
                  </span>{" "}
                </h2>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Pokeinfo;