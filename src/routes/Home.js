import { dbService } from "../firebase";
import { useEffect, useState } from "react";
import Nweet from "../components/Nweet";
import NweetFactory from "../components/NweetFactory";


const Home = ({userObj}) => {

  const [nweets, setNweets] = useState([]);

  //get을 이용해서 nweet 보여주기
  // const getNweets = async() => {
  //   const dbNweets = await dbService.collection("nweets").get();
  //   dbNweets.forEach((document) => {
  //     const nweetObject = { ...document.data(), id:document.id };
  //     setNweets((prev) => [nweetObject, ...prev])
  //   });
  // };

  //온스냅샷 함수
  useEffect(() => {
    dbService.collection("nweets")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
      const newArray = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      setNweets(newArray);
    });
  }, []);

  return (
    <div className="container" >
      <NweetFactory userObj={userObj} /> 
      <div style={{ marginTop: 30 }}>
      {nweets.map((nweet) => (
        <Nweet key={nweet.id} 
        nweetObj={nweet}
        isOwner={nweet.creatorId === userObj.uid} 
        />
      ))}
      </div> 
    </div>
  );
};

export default Home;