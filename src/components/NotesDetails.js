import { useNotesContext } from "../hooks/useNotesContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const NotesDetails = ({ note }) => {
  const { dispatch } = useNotesContext();

  //Delete request
  const handleClick = async () => {
    const response = await fetch("/api/notes/" + note._id, {
      method: "DELETE",
    });
    //response.json will be the the deleted note
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_NOTE", payload: json });
    }
  };
  return (
    <div className="notes-details">
      <h4>{note.title}</h4>
      <p className="noteBody">{note.text}</p>
      <p className="noteDate">
        {formatDistanceToNow(new Date(note.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default NotesDetails;
