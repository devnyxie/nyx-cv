import "./App.css";
import pfp from "./content/pfp.jpg";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "50vh",
          width: "50vh",
          minWidth: "min-content",
          minHeight: "min-content",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={pfp}
          style={{
            aspectRatio: "1/1",
            height: "35%",
            borderRadius: "50%",
            border: "1px solid white",
          }}
        />
        <code style={{ paddingTop: "2.5%", paddingBottom: "1%" }}>
          Tim Afanasiev
        </code>
        <code style={{ opacity: 0.75, paddingBottom: "2.5%" }}>
          Full Stack Developer
        </code>
        <code style={{ textAlign: "center", paddingBottom: "2.5%" }}>
          “If you want to change the world, don’t ask for a permission.”
        </code>
        <div
          style={{
            width: "25%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <a href="https://github.com/talmkg" target="_blank" rel="noreferrer">
            <FaGithubSquare size={35} className="social" />
          </a>
          <a
            href="https://www.linkedin.com/in/talmkg"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={35} className="social" />
          </a>
          <a
            href="https://www.instagram.com/talmkg"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram size={35} className="social" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
