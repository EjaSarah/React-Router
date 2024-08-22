import { Outlet } from "react-router-dom";
const Students = () => {
    return(
        <div>
            <h1>Students</h1>
            <Outlet />
        </div>
    )
}
export default Students;