import React from "react";
import { Link } from "react-router-dom";
import WithFooter from "../components/WithFooter";

const Dashboard = () => {
  return (
    <div style={styles.container}>
      {/* Avatar and Sign Out button*/}
      <div style={styles.avatarContainer}>
        <div style={styles.avatar}>
          <img
            src="/User.png"
            alt="User Avatar"
            style={styles.avatarImage}
          />
        </div>
        <div style={styles.avatarTextContainer}>
          <div style={styles.avatarText}>John Doe</div>
          <div style={styles.avatarTextSecondLine}>@johndoe</div>
        </div>
        <div style={styles.buttonsContainer}>

          <Link to="https://example.com/dashboard" style={styles.linkButton}>
            <button style={styles.signOutButton}>Sign Out</button>
          </Link>

        </div>
      </div>

      {/* IU Management and Buttons */}
      <div style={styles.iUManagementContainer}>
        <div style={styles.iUManagementText}>IU Management</div>
        <div style={styles.buttonsContainer}>

          <Link to="https://example.com/dashboard" style={styles.linkButton}>
            <button style={styles.button}>Dashboard</button>
          </Link>
          <Link to="https://example.com/dashboard" style={styles.linkButton}>
            <button style={styles.button}>Request Leave</button>
          </Link>
          <Link to="https://example.com/profile" style={styles.linkButton}>
            <button style={styles.button}>Profile</button>
          </Link>

        </div>
      </div>

      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.headerText}>Welcome Back, John Doe</h1>
        <h2 style={styles.subHeaderText}>Here your summary</h2>
      </div>

      <div style={styles.cardContainer}>
        {/* Cards */}
        <WithFooter
          header="Notification"
          subHeader="View your latest notification"
          bodyContent={
            <>
              <p style={{ fontSize: "1rem" }}>From Jane-Manager:</p>
              <p style={{ fontSize: "1rem" }}>Get the fuck back to work</p>
            </>
          }
          buttonText="View"
          link="https://example.com"
        />
        <WithFooter
          header="Salary"
          subHeader="View your latest salary update"
          bodyContent={
            <>
              <p style={{ fontSize: "1rem" }}>1/10/2024</p>
              <p style={{ fontSize: "1rem" }}>+500$</p>
            </>
          }
          buttonText="View"
          link="https://example.com"
        />
        <WithFooter
          header="Performance"
          subHeader="View your performance"
          bodyContent={
            <>
              <p style={{ fontSize: "1rem" }}>Rating last month: 80/100</p>
            </>
          }
          buttonText="View"
          link="https://example.com"
        />
        <WithFooter
          header="Attendance"
          subHeader="View your attendance record and summary"
          bodyContent={
            <>
              <p style={{ fontSize: "1rem" }}>1/10/2024: Late 5 minutes</p>
              <p style={{ fontSize: "1rem" }}>2/10/2024: On time</p>
            </>
          }
          buttonText="View"
          link="https://example.com"
        />
      </div>
    </div>
  );
};

const styles = {
  signOutButton: {
    backgroundColor: "transparent",
    color: "#3399ff",
    padding: "8px 20px",
    border: "2px solid #3399ff",
    borderRadius: "8px",
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    marginLeft: "30px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#000",
    flexDirection: "column",
    position: "relative",
  },
  avatarContainer: {
    position: "absolute",
    top: "25px",
    right: "200px",
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    overflow: "hidden",
    marginRight: "10px",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  avatarTextContainer: {
    display: "flex",
    flexDirection: "column",
  },
  avatarText: {
    fontSize: "1rem",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
  },
  avatarTextSecondLine: {
    fontSize: "0.8rem",
    color: "#3399ff",
    fontFamily: "Inter, sans-serif",
  },
  iUManagementContainer: {
    position: "absolute",
    top: "10px",
    left: "20px",
    display: "flex",
    alignItems: "center",
    marginLeft: "60px",
    marginTop: "10px",
  },
  iUManagementText: {
    fontSize: "1.5rem",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold",
    marginRight: "40px",
  },
  buttonsContainer: {
    display: "flex",
    gap: "10px",
  },
  button: {
    backgroundColor: "black",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  linkButton: {
    textDecoration: "none",
  },
  header: {
    position: "relative",
    marginBottom: "0px",
    width: "100%",
  },
  headerText: {
    position: "absolute",
    top: "50px",
    left: "75px",
    color: "#fff",
    fontSize: "2.8rem",
    fontWeight: "bold",
    fontFamily: "Inter, sans-serif",
  },
  subHeaderText: {
    position: "absolute",
    top: "100px",
    left: "80px",
    color: "#fff",
    fontSize: "2.2rem",
    fontWeight: "normal",
    fontFamily: "Inter, sans-serif",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    width: "80%",
    maxWidth: "1200px",
    marginTop: "180px",
  },
};

export default Dashboard;
