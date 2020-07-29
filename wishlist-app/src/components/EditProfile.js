import React from 'react';

class EditProfile extends React.Component{
    state = {
        name: this.props.currentUser.name,
        username: this.props.currentUser.username
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch(`http://localhost:3000/api/v1/users/${localStorage.user_id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({ name: this.state.name, username: this.state.username })
        })
        .then(res => res.json())
        .then(response => {
            if (response.errors){
              alert(response.errors)
            } else {
              this.props.setUser(response)
            }
        })
        
        

    }



    


    render(){
        console.log(this.state)
        return (
            <div className="center-form">
               <form className="edit-form" onSubmit={this.handleSubmit}>
                   <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="name"/>
                   <input name="username" value={this.state.username} onChange={this.handleChange}placeholder="username"/>
                   <button>Submit</button>
               </form>
           </div>
        )
    }
}

export default EditProfile;