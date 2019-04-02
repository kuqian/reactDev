import React from 'react'
import User from './User'
const userList = (props) => props.users.map((user, index) => {
        return (
          <User
            click={()=>props.deleteUser(index)}
            username={user.username}
            change={(event) => {props.changeUsername(user.id, event)}}
            key={user.id}
          />
        )
    })

export default userList;

//Long way of writting it
// const userList = (props) => {
//     return(
//     props.users.map((user, index) => {
//         return (
//           <User
//             click={()=>props.deleteUser(index)}
//             username={user.username}
//             change={(event) => {props.changeUsername (user.id, event)}}
//             key={user.id}
//           />
//         )
//     })
//     )
// }