import {Link, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import { DataProvider } from "./context/DataContext";

function App() {
  
  return (
    <div className="App">
      <DataProvider>
        <Header title = "Share Mate"/>
        <Nav/>
        <Routes>
          <Route path="/" element ={<Home/>}/>
        <Route path="post">
          <Route index element = {<NewPost/>}/>
        <Route path=":id" element ={<PostPage/>} />
        </Route>
        <Route path="/edit/:id" element = {<EditPost/>}/>
        <Route path="about" element ={<About/>} />
        <Route path="*" element ={<Missing/>}/>
        </Routes>
        <Footer/>
      </DataProvider>
    </div>
  );
}

export default App;
