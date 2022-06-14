import React from "react";
import "./HomeContent.css";
import pngegg from "../../img/pngegg.png";
export default function HomeContent() {
  return (
    <div className="container mt-5 homeContent">
      <div>
        <h5 className="mb-0">QR payment</h5>
        <img className="align-self-start mr-3 simg" src={pngegg} alt="" />
        <p className="lead text-dark indent ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          omnis id accusantium officia, laboriosam atque aliquam rem tempora
          corrupti, quam sed iste doloribus labore perspiciatis voluptatibus,
          numquam quas. Nulla odio pariatur quam. Sit dignissimos suscipit sint
          in eos placeat non!
        </p>
      </div>

      <hr />
      <br />
      <div>
        <img
          className="align-self-start mr-3 simgL"
          src="https://c0.wallpaperflare.com/preview/505/815/775/beverages-carbonated-carbonated-drink-carbonated-water.jpg"
          alt=""
        />
        <div>
          <h5>Top-aligned media</h5>
          <p className="lead text-dark indent">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <p className="lead text-dark indent">
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>
      </div>
    </div>
  );
}
