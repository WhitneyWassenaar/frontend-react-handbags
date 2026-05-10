// eslint-disable-next-line react/prop-types
function Tile({imgUrl, alternativeText, title, text}) {
    return (
        <section>
            {imgUrl && (
                <img src={imgUrl} alt={alternativeText}/>
            )}
            {title && <h2>{title}</h2>}
            {text && <p>{text}</p>}
        </section>
    );
}

export default Tile;