import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";

//Import Context API for Global State
import { useSocket } from "../context/SocketProvider";

function Home() {

  //Importing Socket from Context API
  const socket = useSocket();

  return (
    <>
      <div className="home">
        <Navbar />
        <div className="homeContent">
          <div className="homeLeft">
            <div className="upper">
              <h4>this is the website where you can do this or that</h4>
              <div className="upper-upper">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi consequatur nobis veritatis quod reiciendis dolor,
                  doloribus facilis obcaecati accusamus nostrum pariatur numquam
                  suscipit eligendi iure fugit! Reiciendis amet animi
                  praesentium ad corrupti aliquam saepe odio exercitationem a
                  soluta similique eius cum alias iste dolor, eos aperiam
                  maiores inventore ipsum commodi laborum ea. Sint, eos. Alias
                  saepe libero adipisci harum magnam aperiam id ipsum, rerum ut,
                  exercitationem earum veniam sed sint laboriosam quidem beatae.
                </p>
                <img
                  src="https://t3.ftcdn.net/jpg/00/42/09/98/240_F_42099891_6Sz9g70EoF2AQhogDZiFE9UQ2ncan1Pk.jpg"
                  alt=""
                />
              </div>
              <div className="upper-lower">
                <p>
                  Lorem ipsum dolor, sit amet Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. A architecto ducimus optio ut
                  deserunt expedita quae nesciunt hic, nulla itaque corporis
                  maiores ipsam in et facere. Repellendus voluptates laudantium
                  laboriosam ad sunt libero explicabo itaque consequatur ducimus
                  esse optio, voluptatum rem autem ea pariatur molestias sint
                  quod adipisci temporibus eligendi? Molestiae quaerat illo quis
                  magnam maiores autem maxime veritatis repellat molestias
                  voluptate deleniti optio unde consequuntur incidunt, ratione
                  deserunt! Sit ipsum, accusantium laudantium sunt ex voluptas
                  doloremque, itaque eos minus perferendis ducimus accusamus
                  eius, sint quae cupiditate perspiciatis nisi tempore ut! Eos
                  in eum libero incidunt impedit earum explicabo ut. officia,
                  quo commodi sed exercitationem vel voluptatum tenetur
                  assumenda eaque eos sit porro hic eligendi facilis qui
                  inventore perspiciatis molestiae, in unde autem dolore
                  similique inventore quod voluptate cum!
                </p>
                <i>
                  <a href="youtube.com">
                    {" "}
                    https://www.youtube.com/watch?v=11OWuPcElJw&list=RD11OWuPcElJw&start_radio=1
                  </a>
                </i>
              </div>
            </div>
            <div className="lower">
              <h2>Warning</h2>
              <h4>
                Your Screen and aurdio is Monitored so please keep it clean{" "}
              </h4>
              <p>
                Lorem iores hic ratione eligendi blanditiis magnam accusantium
                aspernatur voluptatum quaerat, debitis porro iusto, inventore
                consequatur, qui fugiat modi at deleniti! Ipsum, voluptates
                illum iure, illo soluta neque doloremque ducimus voluptas
                possimus minus iste in molestiae consequuntur! Eum amet
                consequatur ad.
              </p>
            </div>
          </div>

          <div className="homeRight">
            <div className="homeRight-upper">
              <h1>Add Your Problem</h1>
              <form action="">
                <label htmlFor="">Problem Statement :</label>
                <input type="text" placeholder="Enter Your Problem Statement" />
                <label htmlFor="">Problem Description :</label>
                <textarea
                  name=""
                  id=""
                  cols="20"
                  rows="3"
                  placeholder="Describe your problem"
                  maxLength={300}
                ></textarea>
                <label htmlFor="">Topic tag :</label>
                <input type="text" placeholder="Enter Your Problem Topic" />
                <label htmlFor="">Github Link :</label>
                <input type="text" placeholder="Enter Your Github Link" />
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="homeRight-lower">
              <h1>Contact Us</h1>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Youtube</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
