import style from  "../components/index.module.css"

function Input() {
    return <div className={style.title}>
        <ul>
            {characters.results.map(character =>
                <li>
                    <Link href="/">
                        <a>
                            {character.name}
                        </a>
                    </Link>
                </li>)
            }
        </ul>
        </div>

}
export default Input

