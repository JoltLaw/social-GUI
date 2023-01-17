// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import SignupForm from "./components/SignupForm/SignupForm";
import { useState } from "react";
import AccountPage from "./components/AccountPage/AccountPage";

function App() {
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);

  const setUserHandler = async (props) => {
    setUser({ ...props });
  };

  const userPostHandler = (props) => {
    setPosts((prevPosts) => [...prevPosts, props]);
  };

  return (
    <div>
      <Header />
      {!user && <SignupForm onCreate={setUserHandler} />}
      {user && (
        <AccountPage
          userName={user.name}
          userPosts={posts}
          onPost={userPostHandler}
        />
      )}
    </div>
  );
}

export default App;
