import React from "react";
import { Link } from "react-router-dom";
import { TfiWallet } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";


const Payslips = () => {
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

      {/* Paysclips */}
      <div style={styles.salarySection}>
        <div style={styles.salaryText}>Paysclips</div>
        <div style={styles.card}>
          {/* 3 New Cards */}
          <div style={styles.innerCardsContainer}>
            <div style={styles.innerCard1}>
              <div style={styles.innerCard1SummaryContainer}>
                <div style={styles.employeeText}>Employee Information</div>

                <div style={styles.cardsRow}>
                  <div style={styles.cardChild}>
                    <div style={styles.smallCard1}>
                      <div style={styles.smallCardContent}>
                        <div>ID</div>
                        <div>Name</div>
                      </div>
                    </div>
                    <div style={styles.smallCard2}>
                      <div style={styles.smallCardContent}>
                        <div>xxxxxxxxxxxx</div>
                        <div>John Doe</div>
                      </div>
                    </div>
                  </div>

                  <div style={styles.cardChild}>
                    <div style={styles.smallCard1}>
                      <div style={styles.smallCardContent}>
                        <div>Age</div>
                        <div>Position</div>
                      </div>
                    </div>
                    <div style={styles.smallCard2}>
                      <div style={styles.smallCardContent}>
                        <div>21</div>
                        <div>Employee</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            <div style={styles.innerCard3}>
              <div style={styles.splitCard}>
                <div style={styles.cardLeft}>
                  <div style={styles.sCard1Left}>Title</div>

                  <div style={styles.sCard2Right}>
                    <div style={styles.sCardContent2}>Basic Salary</div>
                    <div style={styles.sCardContent2}>Bonus</div>
                    <div style={styles.sCardContent2}>Subsidy</div>
                  </div>

                  <div style={styles.separatorLeft1}></div>

                  <div style={styles.sCard2Right}>
                    <div style={styles.sCardContent2}>Tax</div>
                    <div style={styles.sCardContent2}>Penalty</div>
                    <div style={styles.sCardContent2}>Advanced Salary</div>
                  </div>

                  <div style={styles.separatorLeft2}></div>

                  <div style={styles.sCard4Left}>Total</div>
                </div>
                <div style={styles.cardRight}>
                  <div style={styles.sCard1Right}>Amount</div>
                  <div style={styles.sCard2Right2}>
                    <div style={styles.sCardContent3}>3000$</div>
                    <div style={styles.sCardContent3}>2000$</div>
                    <div style={styles.sCardContent3}>4000$</div>
                  </div>
                  <div style={styles.separatorRight1}></div>
                  <div style={styles.sCard2Right2}>
                    <div style={styles.sCardContent3}>-300 $</div>
                    <div style={styles.sCardContent3}>-3000 $</div>
                    <div style={styles.sCardContent3}>-3000 $</div>
                  </div>
                  <div style={styles.separatorRight2}></div>
                  <div style={styles.sCard4Right}>2700 $</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.extraButtonContainer}>
          <button style={styles.button2}>Export PDF</button>
          <button style={styles.button2}>Payment</button>
        </div>
      </div>



      {/* IU Management and Buttons */}
      <div style={styles.iUManagementContainer}>
        <div style={styles.iUManagementText}>IU Management</div>
        <div style={styles.buttonsContainer}>

          <Link to="https://example.com/dashboard" style={styles.linkButton}>
            <button style={styles.button}>Dashboard</button>
          </Link>
          <Link to="https://example.com/profile" style={styles.linkButton}>
            <button style={styles.button}>Profile</button>
          </Link>

        </div>
      </div>

      <hr style={styles.hr} />
      <div style={styles.verticalLine}></div>

      <div style={styles.leftButtonContainer}>
        <Link to="http://example.com/page2" style={styles.linkButton}>
          <button style={styles.leftButton}>
            <span style={styles.buttonContent}>
              <VscAccount style={styles.icon} /> Create Account
            </span>
          </button>
        </Link>
        <Link to="http://example.com/page1" style={styles.linkButton}>
          <button style={styles.leftButton}>
            <span style={styles.buttonContent}>
              <TfiWallet style={styles.icon} /> Salary
            </span>
          </button>
        </Link>
      </div>
      <div style={styles.verticalLine}></div>


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
  verticalLine: {
    position: "absolute",
    top: "calc(90px)",
    left: "17%",
    width: "0.5px",
    height: "calc(100% - 90px)",
    backgroundColor: "#444",
  },
  hr: {
    border: "1px solid #444",
    width: "100%",
    borderWidth: "0.5px",
    marginBottom: "550px",
  },
  leftButtonContainer: {
    position: "absolute",
    top: "150px",
    left: "10px",
    display: "flex",
    flexDirection: "column",
  },
  buttonContent: {
    display: "flex",
    alignItems: "center",
    marginLeft: "-40px",
  },
  leftButton: {
    backgroundColor: "transparent",
    color: "#fff",
    padding: "10px 45px",
    height: "50px",
    border: "none",
    borderRadius: "5px",
    fontSize: "1.5rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  icon: {
    marginRight: "20px",
    fontSize: "3rem",
  },
  salarySection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "calc(50% + 10px)",
    left: "calc(50% + 120px)",
    transform: "translate(-50%, -50%)",
  },

  salaryText: {
    fontSize: "2.5rem",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold",
    marginBottom: "10px",
    marginRight: "120px",
  },

  card: {
    width: "1100px",
    height: "500px",
    backgroundColor: "#1A1A1A",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    marginLeft: "-80px",
  },

  cardContent: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
  },
  innerCardsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  innerCard1: {
    width: "1050px",
    height: "120px",
    backgroundColor: "#444",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    marginBottom: "20px",
    marginTop: "-10px",
    textAlign: "center",
    position: "relative",
    top: "10px",
    textAlign: "center",
  },

  card1Text: {
    position: "absolute",
    top: "10px",
    left: "10px",
    fontSize: "1rem",
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Inter, sans-serif",
  },

  employeeText: {
    position: "absolute",
    top: "10px",
    left: "20px",
    fontSize: "1.5rem",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontFamily: "Inter, sans-serif",
  },
  innerCard1SummaryContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: "10px",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
  },

  cardsRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    gap: "200px",
    width: "100%",
  },

  cardChild: {
    width: "300px",
    height: "60px",
    backgroundColor: "transparent",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    fontFamily: "Inter, sans-serif",

    fontSize: "0.7rem",
    padding: "10px 0px",
    justifyContent: "space-between",
  },

  smallCard1: {
    height: "100%",
    width: "50%",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    fontSize: "0.8rem",
    textAlign: "left",
    padding: "0 10px",
  },
  smallCardContent: {
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "0px",
  },

  smallCard2: {
    height: "100%",
    width: "50%",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    fontSize: "0.8rem",
    textAlign: "center",
    margin: "0 2%",
  },

  innerCard3: {
    width: "100%",
    maxWidth: "1050px",
    height: "350px",
    backgroundColor: "#444",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    textAlign: "center",
    padding: "10px",
  },

  splitCard: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    gap: "20px",
  },
  cardLeft: {
    width: "48%",
    height: "100%",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    padding: "20px",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
  },
  cardRight: {
    width: "48%",
    height: "100%",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    padding: "20px",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
  },
  sCard1Left: {
    fontSize: "2rem",
    borderRadius: "8px",
    height: "15%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: "0px",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    textAlign: "left",
    padding: "10px",
    position: "relative",
    top: "-30px",
    marginLeft: "20px",
  },

  sCard1Right: {
    fontSize: "2rem",
    borderRadius: "8px",
    height: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "0px",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    textAlign: "l",
    padding: "10px",
    position: "relative",
    top: "-20px",
  },

  sCard2Right2: {
    borderRadius: "8px",
    height: "200px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px",
    boxSizing: "border-box",
    overflow: "hidden",
    marginBottom: "5px",
    marginTop: "-20px",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    textAlign: "center",
    paddingTop: "20px",
  },

  sCardContent3: {
    fontSize: "1rem",
    marginBottom: "2px",
    width: "100%",
    textAlign: "center",
  },

  sCard2Right: {
    borderRadius: "8px",
    height: "200px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "10px",
    boxSizing: "border-box",
    overflow: "hidden",
    marginBottom: "5px",
    marginTop: "-20px",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    textAlign: "left",
    paddingTop: "20px",
  },
  sCardContent2: {
    fontSize: "1rem",
    marginBottom: "2px",
    width: "100%",
    textAlign: "left",
    marginLeft: "20px",
  },

  sCard4Left: {
    fontSize: "1.5rem",
    borderRadius: "8px",
    height: "15%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "10px",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    textAlign: "center",
    padding: "10px",
    position: "relative",
    bottom: "-20px",
    marginLeft: "20px",
  },
  sCard4Right: {
    fontSize: "1.5rem",
    borderRadius: "8px",
    height: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    textAlign: "center",
    padding: "10px",
    position: "relative",
    bottom: "-20px",
  },

  separatorLeft1: {
    width: 'calc(100% + 80px)',
    height: '1px',
    backgroundColor: '#fff',
    margin: '0 0 10px 0',
  },

  separatorRight1: {
    width: '100%',
    height: '1px',
    backgroundColor: '#fff',
    margin: '0 0 10px 0',
  },
  separatorLeft2: {
    width: 'calc(100% + 80px)',
    height: '1px',
    backgroundColor: '#fff',
    margin: '10px 0 0 0',
  },

  separatorRight2: {
    width: '100%',
    height: '1px',
    backgroundColor: '#fff',
    margin: '10px 0 0 0',
  },

  extraButtonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "80px",
    marginTop: "5px",
    marginBottom: "-45px",
    marginRight: "120px",
  },
  button2: {
    padding: "10px 20px",
    fontSize: "1.2rem",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "red",
    color: "#fff",
    transition: "background-color 0.3s",
    width: "150px",
    textAlign: "center",
  },

};
export default Payslips;
