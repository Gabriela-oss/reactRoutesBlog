//Libs
import React from "react";
//Styles
import styles from './Home.module.css'


const Home = () => {
  return(
    <div className={styles.home}>
      <span id="span">
        Welcome to my space
      </span>
      <img className={styles.img} src="https://media.istockphoto.com/id/1346381655/es/foto/perro-de-monta%C3%B1a-bern%C3%A9s-tricolor-sentado-mirando-a-la-c%C3%A1mara-y-jadeando-aislado-sobre-blanco.jpg?b=1&s=170667a&w=0&k=20&c=3gR3jlNF_ST6FsCvgAMgAE0m-pAlsoa-bWF5kWQKf-g=" />
    </div>  
  )
}

export default Home;