import ProfileImage from "./img/profile.jpg";
import "./Profile.css";

export const Profile = () => {
    return (
        <div className="profile border-b-bg_day border-b-[121.5px]">
            <img src={ProfileImage} alt="Profile" />
            <div className="bio bg-bg">
                <h2 className="text-xl text-blue font-bold my-4">About Me</h2>
                <p className="mb-4 max-w-prose text-white">I am a software engineer currently working on simulation software for aerospace systems.<br /><br />I graduated cum laude from the University of Southern California with a B.S. in Computer Engineering and Computer Science in 2022.<br /><br /></p>
            </div>
        </div>
    );
}
