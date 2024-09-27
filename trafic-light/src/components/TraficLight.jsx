import { useEffect, useState } from "react";

const LIGHTS = {
  red: "red",
  green: "green",
  yellow: "yellow",
};

const TraficLight = () => {
  const [active, setActive] = useState(LIGHTS.green);

  useEffect(() => {
    switch (active) {
      case LIGHTS.red:
        setTimeout(() => {
          setActive(LIGHTS.yellow);
        }, 4000);

        break;
      case LIGHTS.yellow:
        setTimeout(() => {
          setActive(LIGHTS.green);
        }, 5000);

        break;

      case LIGHTS.green:
        setTimeout(() => {
          setActive(LIGHTS.red);
        }, 3000);
        break;

      default:
        break;
    }
  }, [active]);

  return (
    <div className="wrapper">
      <div
        className=" light green"
        style={active !== LIGHTS.green ? { opacity: 0.5 } : null}
      >
        A
      </div>
      <div
        style={active !== LIGHTS.yellow ? { opacity: 0.5 } : null}
        className=" light yellow"
      >
        B
      </div>
      <div
        className=" light red"
        style={active !== LIGHTS.red ? { opacity: 0.5 } : null}
      >
        C
      </div>
    </div>
  );
};

export default TraficLight;
