import "./chatOnline.css";

export default function ChatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://tutoring-app.s3.us-east-2.amazonaws.com/GithubBanner.jpg"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">First Last</span>
      </div>
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://tutoring-app.s3.us-east-2.amazonaws.com/GithubBanner.jpg"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">First Last</span>
      </div>
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://tutoring-app.s3.us-east-2.amazonaws.com/GithubBanner.jpg"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">First Last</span>
      </div>
    </div>
  );
}
