import styles from "./Status.module.css";

function Status(props) {
  const compState = props.state;
  const service = props.service;
  let output;
  switch (compState) {
    case "degraded":
      output = <span className={`${styles.degraded} ${styles.statusbox}`}>{service}</span>;
      break;
    case "outage":
      output = <span className={`${styles.outage} ${styles.statusbox}`}> {service}</span>;
      break;
    case "normal":
      output = <span className={`${styles.normal} ${styles.statusbox}`}> {service}</span>;
      break;
    default:
      output = <span className={`${styles.unknown} ${styles.statusbox}`}>{service}</span>;
  }
  return output
}

export default Status;
