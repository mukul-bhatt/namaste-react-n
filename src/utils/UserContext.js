import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Mukul",
        email: "mukulgautam5200@gmail.com"
    }
});

export default UserContext;
