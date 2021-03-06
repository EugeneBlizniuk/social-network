import React from "react";

import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
        isOwner={props.isOwner} 
        saveProfileData={props.saveProfileData}
        />
      <MyPostsContainer />
    </div >
  );
};

export default Profile;
