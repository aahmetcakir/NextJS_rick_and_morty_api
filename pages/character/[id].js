import unfetch from "isomorphic-unfetch"
import slug from "slug"

function characterDetail({ character }) {

    return <div>
        <h1>Name : {character.name}</h1>
        <h3>status : {character.status}</h3>
        <h3>gender : {character.gender}</h3>
        <h3>species : {character.species}</h3>
        <h3>location : {character.location.name}</h3>
        <figure>
        <img src={character.image} alt={character.name}/>
        </figure>
        </div>
}

export async function getStaticPaths() {
    const data = await unfetch("https://rickandmortyapi.com/api/character/")
    const characters = await data.json()

    const paths = characters.results.map(character => {
        return { params: { id: `${slug(character.name)}-${character.id}`}}} )
    return {
        paths,
        fallback:false
  }
}

export async function getStaticProps( { params } ) {
    const ids = params.id.split('-').slice(-1)[0]
    const data = await unfetch(`https://rickandmortyapi.com/api/character/${ids}`)
    const character = await data.json()
    console.log(`\n\nname : ${character.name}\nstatus: ${character.status}\nspecies: ${character.species}\ngender: ${character.gender}\nlocation: ${character.location.name}`)
    return {
        props: {
            character
        }
    }
}


export default characterDetail


