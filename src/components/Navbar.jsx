import Link from "next/link";
import { Button } from "./ui/button";
const Navbar = () =>{
    return(
        <nav className="bg-primary text-white shadow-md">
            <div className="container mx-auto py-4 px-4 justify-between flex items-center">
            <div className="text-xl">
            <h3 className="font-bold">QuickTrip</h3>
            </div>
            {/* buttons */}
            <div className="flex items-center pr-9 gap-10">
                <div>
                    <a href="">Login</a>
                </div>
                <div>
                    <Button className="bg-secondary rounded-lg px-4 text-background">Sign Up</Button>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;