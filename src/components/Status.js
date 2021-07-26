import styles from "./Status.module.css";

function Status(props) {
  const compState = props.state;
  let output;
  switch (compState) {
    case "degraded":
      output = <div className={`${styles.degraded} ${styles.statusbox}`} />;
      break;
    case "outage":
      output = <div className={`${styles.outage} ${styles.statusbox}`} />;
      break;
    default:
      output = <div className={`${styles.normal} ${styles.statusbox}`} />;
  }
  return output
}

export default Status;
