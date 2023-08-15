import React, { useEffect, useState } from "react";
import "./reservation-form.css";
const ReservationForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [totalDays, setTotalDays] = useState(0);
  const [totalPersons, setTotalPersons] = useState(0);
  const [roomType, setRoomType] = useState("Delux Room");
  const [amenities, setAmenities] = useState([]);
  const [advanceAmount, setAdvanceAmount] = useState(0);
  const [fieldError, setFieldError] = useState(false);

  const roomRate = roomType === "Delux Room" ? 2500 : 4000;
  const amenitiesCost = amenities.includes("AC")
    ? 1000 + (amenities.includes("Locker") ? 300 : 0)
    : 0;
  const totalRoomCost = roomRate * totalDays;
  const totalAmenitiesCost = amenitiesCost * totalDays;
  const totalCost = totalRoomCost + totalAmenitiesCost;
  const extraPersonCost =
    totalPersons > 2 ? 1000 * (totalPersons - 2) * totalDays : 0;
  const balance = totalCost - advanceAmount;

  const generateSummary = () => {
    const summary = `
      Customer Name: ${customerName}
      Check-in Date: ${checkInDate}
      Total No of Days: ${totalDays}
      Total No of Persons: ${totalPersons}
      Room Type: ${roomType}
      Amenities: ${amenities.join(", ")}
      Advance Amount: ${advanceAmount}
      Total Room Cost: ${totalRoomCost}
      Total Amenities Cost: ${totalAmenitiesCost}
      Extra Person Cost: ${extraPersonCost}
      Total Cost: ${totalCost + extraPersonCost}
      Balance: ${balance}
    `;

    return summary;
  };

  const downloadSummary = () => {
    const summary = generateSummary();
    const element = document.createElement("a");
    const file = new Blob([summary], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "reservation-summary.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  console.log(
    "first1",
    customerName.length,
    checkInDate.length,
    totalDays,
    totalPersons
  );
  console.log(
    "first",
    customerName.length === 0 &&
      checkInDate.length === 0 &&
      totalDays === 0 &&
      totalPersons === 0
  );
  console.log("error", fieldError);
  useEffect(() => {
    if (
      customerName.length === 0 ||
      checkInDate.length === 0 ||
      totalDays <= 0 ||
      totalPersons <= 0
    ) {
      setFieldError(true);
    } else {
      setFieldError(false);
    }
  }, [checkInDate.length, customerName.length, totalDays, totalPersons]);

  return (
    <div>
      <h2>Reservation Form</h2>
      <div className="form-container">
        <div>
          <label>
            Customer Name:
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </label>
          <label>
            Check-in Date:
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
          </label>
          <label>
            Total No of Days:
            <input
              type="number"
              value={totalDays}
              onChange={(e) => setTotalDays(parseInt(e.target.value))}
              required
            />
          </label>
          <label>
            Total No of Persons:
            <input
              type="number"
              value={totalPersons}
              onChange={(e) => setTotalPersons(parseInt(e.target.value))}
              required
            />
          </label>
          <label>
            Room Type:
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="Delux Room">Delux Room</option>
              <option value="Suite Room">Suite Room</option>
            </select>
          </label>
          <label>
            Amenities:
            <select
              multiple
              value={amenities}
              onChange={(e) =>
                setAmenities(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
            >
              <option value="AC">AC</option>
              <option value="Locker">Locker</option>
            </select>
          </label>
          <div className="form-group">
            <label className="label" htmlFor="advanceAmount">
              Advance Amount:
            </label>
            <input
              className="input-field"
              type="number"
              id="advanceAmount"
              value={advanceAmount}
              onChange={(e) => setAdvanceAmount(parseInt(e.target.value))}
            />
          </div>
          {fieldError && (
            <p style={{ color: "red" }}>
              * Please fill Customer Name, No. Of Person, Date, Total No. of
              Days.{" "}
            </p>
          )}
        </div>
        <div>
          <h3>Summary</h3>
          <h3>Total Room Cost: {totalRoomCost}</h3>
          <h3>Total Amenities Cost: {totalAmenitiesCost}</h3>
          <h3>Extra Person Cost: {extraPersonCost}</h3>
          <h3>
            Total Cost:{" "}
            {totalCost > 0 && totalPersons > 0
              ? totalCost + extraPersonCost
              : ""}
          </h3>
          <h3>Balance: {totalDays > 0 && totalPersons > 0 ? balance : ""}</h3>
          <button
            onClick={() => {
              if (!fieldError) {
                downloadSummary();
              }
            }}
          >
            Download Invoice
          </button>
          <p style={{ color: "red" }}>
            * Please Fill the details to get invoice!.
          </p>
          <p style={{ color: "red" }}>
            * Total cost and Balance appear only when count of person and days
            is one or more!.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
