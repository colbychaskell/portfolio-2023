import ProfileImage from "./img/profile.jpg";
import "./Profile.css";

export const Profile = () => {
    return (
        <div className="profile">
            <img src={ProfileImage} alt="Profile" />
            <div className="bio">
                <h2 className="text-lg font-bold my-5">Full Stack Software Engineer</h2>
                <p className="my-4">I am a software engineer and a senior studying CE/CS at USC. I have experience with full stack web development, embedded systems, and software for IoT devices. My favorite technologies at the moment are ReactJS and SwiftUI.  </p>
                <p className="my-4">Feel free to reach out by email or connect with me on Linkedin!</p>
            </div>
        </div>
    );
}
