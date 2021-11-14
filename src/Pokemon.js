import { useEffect, useState } from "react";

const pokeObj = {};

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [off, setOff] = useState(0);
  const [limit, setLimit] = useState(20);
  const [fUrl, setFurl] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${off}`
  );
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);

  useEffect(() => {
    setFurl(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${off}`);
  }, [off, limit]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then((res) => res.json())
      .then((data) => {
        data.results.forEach((pokemon, idx) => {
          pokeObj[pokemon.name] = off + idx;
        });
      });
  }, []);

  useEffect(() => {
    fetch(fUrl)
      .then((res) => res.json())
      .then((data) => {
        data.results.forEach((pokemon, idx) => {
          pokeObj[pokemon.name] = off + idx;
        });
        setPokemon(data.results);
        console.log(pokeObj);
      });
  }, [fUrl]);

  console.log(pokemon);

  return (
    <>
      {
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pokemon.map((item) => {
            return (
              <div
                className=" flex justify-center border-red-400 rounded-lg bg-white p-10 border "
                key={item.name}
              >
                <div className=" w-3/4 ">
                  <a href={"https://www.pokemon.com/us/pokedex/" + item.name}>
                    <div className="h-3/4 h-50px">
                      <img
                        className="object-contain "
                        src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
                        alt="Shiny pokemon"
                      />
                    </div>
                    <div className="mt-11 text-center">
                      <p className="font-press-start">{item.name}</p>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      }
      <div className="text-center">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            placeholder="Search Pokemons"
            className="search-input  mb-4 border-2 border-blue-400 fixed h-7 top-14 right-20 rounded-full mx-auto lg:h-10  md:top-14 md:right-80 lg:top-6 lg:right-8 p-2"
            value={q}
            onChange={(e) => {
              if (e.target.value === "") {
                setFurl(
                  `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${off}`
                );
              } else {
                setFurl(
                  `https://pokeapi.co/api/v2/pokemon?limit=1&offset=` +
                    pokeObj[e.target.value]
                );
              }
              setQ(e.target.value);
            }}
          ></input>
          <span className="sr-only text-white">Search Pokemons here</span>
        </label>
      </div>

      <div className="flex flex-wrap justify-between">
        {off === 0 ? null : (
          <button
            className="text-center bg-red-500 border-red-500 rounded-sm mb-4 h-14 flex items-center justify-around mx-11 my-11 p-5"
            onClick={() => {
              console.log("A");
              setOff(off - 20);
            }}
          >
            &larr;Previous Page{" "}
          </button>
        )}

        <button
          className="text-center bg-red-500 border-red-500 rounded-sm mx-100  ml-50 mb-4 h-14 flex items-center justify-around mx-11 my-11 p-5 self-end"
          onClick={() => {
            console.log("A");
            setOff(off + 20);
          }}
        >
          Next Page&rarr;
        </button>
      </div>
    </>
  );
};

export default Pokemon;
