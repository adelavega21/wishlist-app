import React from 'react';

const EditProfile = props => {
    return (
        <div className="center-form">
            <form className="auth-form" onSubmit={this.handleSubmit}>
                <input value="Name"/>
                <input value="Username"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EditProfile;