import Header from "./Header";
import {Outlet} from "react-router-dom";
import sample from "./media/test.mp4"
export default function Layout() {
  return (
    <main>
    <div id = "background-video">
    <video id="background-video" autoPlay loop muted>
    <source src={sample} type='video/mp4'/>
    </video>
      </div>
      <Header />
      <Outlet />
    </main>
  );
}