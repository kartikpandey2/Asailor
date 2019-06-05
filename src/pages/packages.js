import React from "react"
import trips from "../trips"
import TripTile from "../components/tripTile"
import Layout from "../components/layout"

const styles = {
  container: {
    display: "flex",
    margin: "3% 5%",
    flexWrap: "wrap",
  },
  items: {
    flexBasis: "27%",
    margin: "3% 3%",
  },
}

const packages = props => {
  const tripList = trips.map(trip => (
    <TripTile
      image={trip.image}
      title={trip.title}
      key={trip.id}
      price={trip.price}
      days={trip.days}
      style={styles.items}
    />
  ))
  return (
    <Layout>
      <div style={styles.container}>{tripList}</div>
    </Layout>
  )
}

export default packages
