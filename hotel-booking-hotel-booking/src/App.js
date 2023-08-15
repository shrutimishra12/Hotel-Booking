import "./App.css";
import ReservationForm from "./components/reservation-form";
import img1 from "./images/room1.avif";
import img2 from "./images/room2.avif";
import img3 from "./images/room3.avif";
import img4 from "./images/room4.avif";

function App() {
  return (
    <div className="App container ">
      <div className="header">
        <div className="header-content">
          <div style={{ marginLeft: "18px" }}>
            <span className="icon">&#127968;</span> <b>Hotel Mount Blue</b>
          </div>

          <div className="menu-content">
            <div href="#">Home</div>

            <div href="#">Rooms</div>

            <div href="#">Dining</div>

            <div href="#">Spa & Wellness</div>

            <div href="#">Contact</div>
          </div>
        </div>
      </div>
      <ReservationForm />
      <div className="card-container">
        <div className="card">
          <img src={img1} alt="Delux Room" />
          <h3>Delux Room</h3>
          <p>Rate: &#8377;2500 per night</p>
        </div>
        <div className="card">
          <img src={img2} alt="Suite Room" />
          <h3>Suite Room</h3>
          <p>Rate: &#8377;4000 per night</p>
        </div>
        <div className="card">
          <img src={img3} alt="Suite Room" />
          <h3>Suite Room</h3>
          <p>Rate: &#8377;4000 per night</p>
        </div>
        <div className="card">
          <img src={img4} alt="Suite Room" />
          <h3>Suite Room</h3>
          <p>Rate: &#8377;4000 per night</p>
        </div>
      </div>
      <div className="footer">
        <p>
          <span className="icon">&#128222;</span> Thank you for choosing us!{" "}
          <span className="icon">&#128222;</span>
        </p>
      </div>
    </div>
  );
}

export default App;
