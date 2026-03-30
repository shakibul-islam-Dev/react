import { use } from "react"

function Friends({friendAll}){
    const friends = use(friendAll)
return(
    <div className="students" >
        <h4 className="students">Total:{friends.length}</h4>
        {
           
            friends.map(friend =>(
                <div key={friend.id}  className="students">
               
            <h4 >Name:{friend.name}</h4>
            <h4 >Phone:{friend.phone}</h4>
            <h4 >email:{friend.email}</h4>
                </div>
            
        ) )
        }
    </div>
)
}
export default Friends