import unfetch from "isomorphic-unfetch"
import slug from "slug"
import Card from "../../components/card"

function characterDetail({ character }) {

    return <div>
        <Card
            name={character.name}
            gender={character.gender}
            species={character.species}
            image={character.image}
            status={character.status} />

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


