import { authService  } from "../firebase";
import { useState } from "react";
import { useHistory } from "react-router";

const Profile = ({ userObj, refreshUser }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] =useState(userObj.displayName);

  const onLogOutClick = () => { 
    authService.signOut();
    history.push("/");
  };

  const onChange = (event) => {
    const {target: {value},
  } = event;
  setNewDisplayName(value);
  }

  const onSubmit =async (event) => {
    event.preventDefault();
    // userObj.updateProfile()
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({ displayName: newDisplayName });
      refreshUser();
    }
    setNewDisplayName("");
  };

  // const getMyNweets = async() => {
  //   const nweets = await dbService
  //   .collection("nweets")
  //   .where("creatorId", "==", userObj.uid)
  //   .orderBy("createdAt", "asc")
  //   .get();

  //   console.log(nweets.docs.map((doc) => doc.data()));
  // };

  // useEffect(() => {
  //   getMyNweets()
  // }, []);


  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input onChange={onChange} type="text" placeholder="Display name" value={newDisplayName} autoFocus className="formInput"/>
        <input type="submit" value="Update profile" className="formBtn" style={{ marginTop: 10}} />
      </form>
      {/* <button onClick={onLogOutClick}>Log out</button> */}
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log out
      </span>
    </div>
  )
};

export default Profile;