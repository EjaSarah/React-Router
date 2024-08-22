import { Outlet } from "react-router-dom";


const Services = () => {
    return(
        <div>
            <h1>Services</h1>
            {/* once we declare a route with nested componet we come to the parent route and plcae your outlet anywhere you want the route to show */}
            <Outlet />
        </div>
    )
}
export default Services;