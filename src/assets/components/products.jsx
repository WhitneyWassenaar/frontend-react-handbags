// eslint-disable-next-line react/prop-types
function ProductArticle({img, labelText, alternativeText, text, price}) {
    return (
        <article>
            <span>{labelText}</span>
              <img src={img} alt={alternativeText}/>
              <p>{text}</p>
              <h4>{price}</h4>
    </article>
    )
}

export default ProductArticle;