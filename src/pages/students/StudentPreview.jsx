import { useParams } from "react-router-dom";

const StudentPreview = () => {
    // whaterver you named your params in the rout is what you will call it here..StudentId is the param we are passing
    const { studentId } = useParams();
         console.log("params", studentId);
    return(
        <div>
            <h1>StudentPreview</h1>
        </div>
         
    )
}
export default StudentPreview;