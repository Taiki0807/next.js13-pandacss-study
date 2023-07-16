import { css } from "../styled-system/css";

const Home = ()=>{
  return (
    <div className={css({ fontSize: "2xl", fontWeight: 'bold',_hover:{bg:"red.400"} ,color:{_hover:"blue",base:"red.400"}})}>Hello 🐼!</div>
  )
}

export default Home;