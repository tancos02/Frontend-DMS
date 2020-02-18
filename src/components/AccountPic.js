import React from 'react';

const defaultPic= "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"

const AccountPic = ({ url=defaultPic}) => {
    return (
        <div className="account-pic rounded-circle">
            <img src= { url } alt="account-pic" width="25%" height="25%"/>
        </div>
    );
}

export default AccountPic;