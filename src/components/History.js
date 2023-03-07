import { Button } from "antd";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function History() {
  return (
    <div color="black">
    <Link to="/"><Button>Home</Button></Link>
        My name
    </div>
  );
}

export default History