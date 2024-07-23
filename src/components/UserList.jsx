
import { useState, useEffect } from "react";
import User from "./User";


const UserList = () => {
    const [users, setUsers] = useState([false])

    // List Of Users
    const fetchUser = async () => {
    const url = 'https://jsonplaceholder30.p.rapidapi.com/users';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '64ce9f5feemsh4cedcb4c820dcc3p1f7ee3jsne4419dfc8871',
		'x-rapidapi-host': 'jsonplaceholder30.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  setUsers(result)
	console.log(result);
} catch (error) {
	console.error(error);
}
    }

    useEffect(() => {
        fetchUser();
      }, []);
      
      console.log("All user", users);

  return (
    <div className="mobile">
         {users.map((user) => {
        return (
           <User 
            name={user.name}
            userName={user.username}
            email={user.email}
            // address={user.address}
            id={user.id}
            phone={user.phone}
            website={user.website}
            />
        );
      })}
    </div>
  )
}

export default UserList