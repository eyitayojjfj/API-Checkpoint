import React from 'react'

const User = ({name, userName, email, id, phone, website}) => {
    const styles = {
        container: {
          width: "350px",
          border: "10px solid black",
          borderRadius: "5px",
          margin: "10px",
          padding: "10px",
        },
      };

  return (
    <div style={styles.container}>
        <h2>Name: {name} </h2>
        <h2>UserName: {userName}</h2>
        <h2>Email: {email}</h2>
        {/* <h3>Address: {address}</h3> */}
        <h3>ID: {id}</h3>
        <h3>phone: {phone}</h3>
        <h3>Website: {website}</h3>

    </div>
  )
}

export default User