
import {Component} from "react"

import {Link,Redirect} from "react-router-dom"


import Cookies from "js-cookie"





import "./index.css"


class Profile extends Component {

    logoutUser=async()=>{
        Cookies.remove("jwtToken")
        localStorage.removeItem("user")
        this.props.history.push("/login")
    }




    render(){
      
        const jwtToken = Cookies.get("jwtToken")
        const {username}=JSON.parse(localStorage.getItem("user"))
        if(jwtToken===undefined){
            return(
                <Redirect to="/login" />
            )
        }
        return(
            <div>

                <div className="profile-card">

                <div className="profile-container">
                <h1>Profile</h1>
                <h2 className="welcome-to-profile">Welcome, <span className="users-name">{username}! </span></h2>

                <h3>Go to Homepage   </h3>
                <Link to ="/">
                
                <button className="home-profile-button" type="button">Home</button>
                </Link>

                <h3>or</h3>
                <button className="user-logout-button" onClick={this.logoutUser} type="button">Logout</button>
                 </div>

                </div>


          



            </div>
        )
    }
}

export default Profile;