import { dbService, storageService } from "../firebase";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons"

const Nweet = ({nweetObj, isOwner}) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);


  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure to delete?");
    // console.log(ok);
    if (ok) {
      // console.log(nweetObj.id);
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
      // console.log(data); 위의 await문이 데이터였음
      if (nweetObj.attachmentUrl !== "")
        await storageService.refFromURL(nweetObj.attachmentUrl).delete();
    }
  }; 

  const toggleEditing = () => setEditing((prev) => !prev); 

  const onChange = (event) => {
    const {target: {value},
  } = event;
  setNewNweet(value);
  }; 

  const onSubmit = async (event) => {
    event.preventDefault();
    // console.log(nweetObj.id, newNweet);
    await dbService.doc(`nweets/${nweetObj.id}`).update({text: newNweet});
    setEditing(false);
  };

  return(
    <div className="nweet">
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="container nweetEdit">
            <input onChange={onChange} value={newNweet} required placeholder="Edit your nweet" autoFocus className="formBtn cancel Btn" />
            <input type="submit" value="Update Nweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ): (
        <>
         <h4>{nweetObj.text}</h4>
         {nweetObj.attachmentUrl && (
           <img src={nweetObj.attachmentUrl} alt="attachment" width="80px" height="80px" />
         )}
         {isOwner && (
            <div className="nweet__actions">
              <span onClick={onDeleteClick}><FontAwesomeIcon icon={faTrash} /></span>
              <span onClick={toggleEditing}><FontAwesomeIcon icon={faPencilAlt} /></span>
            </div> 
          // <button onClick={onDeleteClick}>Delete Nweet</button> 
          // <button onClick ={toggleEditing}>Edit Nweet</button>
          )}
        </>
      )}  
    </div>
  );
};

export default Nweet;