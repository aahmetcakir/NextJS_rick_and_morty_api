import style from  "../components/card.module.css"

function Card({image,name,gender,species,status}) {
    return <div className={style.container}>
        <div className={style.imageContainer}>

            <h1 className={style.title}> {name} </h1>
            <figure className={style.image}>
                <img src={image}/>
            </figure>
        </div>
            <ul className={style.list}>
                <li className={style.item}><span className={style.detailTitle}> Gender  :</span> {gender}</li>
                <li className={style.item}><span className={style.detailTitle}> Species :</span> {species}</li>
                <li className={style.item}><span className={style.detailTitle}> Status  :</span> {status}</li>
            </ul>

        </div>

}
export default Card

