import "./watch.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIcon />
        Home
      </div>
      <video
        className="video"
        autoPlay={true}
        progress={true}
        controls={true}
        src="https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/The_Wolverine_Trailer_Exclusive_%282013%29.webm/The_Wolverine_Trailer_Exclusive_%282013%29.webm.720p.vp9.webm"
      />
    </div>
  );
};

export default Watch;
