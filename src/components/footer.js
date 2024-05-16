import Order from "./order";

// Footer App
function Footer() {
  const Hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = Hour >= openHour && Hour <= closeHour;
  console.log(isOpen);
  console.log(Hour);
  // if (Hour >= openHour && Hour <= closeHour) alert("We are currently open!");
  // else alert("Sorry we are closed");

  return (
    <footer className="footer">
      {/* {new Date().toLocaleDateString()}. We are currently Open! */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          {" "}
          We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "we are currently open");
}

export default Footer;
