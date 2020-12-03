import unfetch from "isomorphic-unfetch"
import Link from "next/link"
import slug from "slug"

function HomePage({ characters}) {

    return <div>
        <h1> Welcome to Next.JS</h1>
        <ul>
            {characters.results.map(character => 
            <li>
                    <Link href="character/[id]" as={`/character/${slug(character.name)}-${character.id}`}>
                <a>
                 {character.name} 
                </a>
                </Link>
            </li>)
            }
        </ul>
    </div>
    

}
export async function getStaticProps() {
    const data = await unfetch("https://rickandmortyapi.com/api/character/")
    const characters = await data.json()
    return {
        props: {
            characters
        }
    }
}

export default HomePage
