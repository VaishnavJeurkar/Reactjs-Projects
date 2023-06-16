import { Palette, PenFill } from "react-bootstrap-icons";
import RenameProject from "./RenameProject";

export default function Project() {
    return (
      <div className="Project">
        <div className="header">
          <div className="title">
            <Palette size='18'></Palette>
            <p>Projects</p>
          </div>
          <div className="btns">
            {
            <span className="edit" onClick={<PenFill size='15'></PenFill>}></span>
            }
            </div>
        </div>
        <RenameProject></RenameProject>
      </div>
    )
    
  }