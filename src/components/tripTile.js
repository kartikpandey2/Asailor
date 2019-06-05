import React from "react"

const styles = {
  innerContainer: {
    width: "100%",
    height: "100%",
    paddingBottom: "5%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
}

const TripTile = ({ image, title, style, days, price }) => {
  return (
    <article style={style}>
      <div style={styles.innerContainer}>
        <img src={image} alt="" style={styles.image} />
      </div>
      <div>
        <h4>{days}</h4>
        <h4>{title}</h4>
        <h4>{price}</h4>
      </div>
    </article>
  )
}

export default TripTile
