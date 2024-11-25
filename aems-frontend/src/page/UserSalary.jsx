import React from "react";
import { Link } from "react-router-dom";
import { TfiWallet } from "react-icons/tfi";
import { FaCalendarAlt } from "react-icons/fa";
import { IoTimerSharp } from "react-icons/io5";
import { TfiBell } from "react-icons/tfi";

const UserSalary = () => {
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

      {/* "Your Salary" and Card container */}
      <div style={styles.salarySection}>
        <div style={styles.salaryText}>Your Salary</div>
        <div style={styles.card}>
          {/* 3 New Cards */}
          <div style={styles.innerCardsContainer}>
            <div style={styles.innerCard1}>
              <div style={styles.innerCard1SummaryContainer}>
                <div style={styles.summaryText}>Summary</div> <div style={styles.additionalText}>Basic Salary</div>
                <div style={styles.additionalText}>Allowances</div>
                <div style={styles.additionalText}>Deductions</div>
                <div style={{ ...styles.additionalText, color: "#FFFFFF", fontWeight: "bold" }}>Net Salary</div>

                <div style={styles.rightAlignedTextContainer}>
                  <div style={styles.rightAlignedText}>$2000</div>
                  <div style={styles.rightAlignedText}>$100</div>
                  <div style={styles.rightAlignedText}>-$300</div>
                  <div style={{ ...styles.rightAlignedText, color: "#FFFFFF", fontWeight: "bold" }}>$1800</div>
                </div>
              </div>
            </div>

            <div style={styles.innerCard2}>
              <div style={styles.innerCard2Child}>
                <h4>Month</h4>
              </div>
              <div style={styles.innerCard2Child}>
                <h4>Salary</h4>
              </div>
              <div style={styles.innerCard2Child}>
                <h4>Status</h4>
              </div>
            </div>

            <div style={styles.innerCard3}>
              <div style={styles.innerCard3Container}>
                <div style={styles.innerCard3Child}>
                  <div style={styles.innerCard3}>
                    <div style={styles.monthContainer}>
                      <div style={styles.monthText}>October</div>
                      <div style={styles.monthText}>September</div>
                      <div style={styles.monthText}>August</div>
                    </div>
                  </div>
                </div>
                <div style={styles.innerCard3Child}>
                  <div style={styles.innerCard3ChildContent}>
                    <div style={styles.innerCard3}>
                      <div style={styles.monthContainer}>
                        <div style={styles.monthText}>$1800</div>
                        <div style={styles.monthText}>$1800</div>
                        <div style={styles.monthText}>$1500</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={styles.innerCard3Child}>
                  <div style={styles.innerCard3ChildContent}>
                    <div style={styles.innerCard3}>
                      <div style={styles.statusContainer}>
                        <div style={{ ...styles.statusText, ...styles.pendingText }}>Pending</div>
                        <div style={{ ...styles.statusText, ...styles.paidText }}>Paid</div>
                        <div style={{ ...styles.statusText, ...styles.paidText }}>Paid</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
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

      <hr style={styles.hr} />
      <div style={styles.verticalLine}></div>

      <div style={styles.leftButtonContainer}>
        <Link to="http://example.com/page1" style={styles.linkButton}>
          <button style={styles.leftButton}>
            <span style={styles.buttonContent}>
              <TfiWallet style={styles.icon1} /> Salary
            </span>
          </button>
        </Link>
        <Link to="http://example.com/page2" style={styles.linkButton}>
          <button style={styles.leftButton}>
            <span style={styles.buttonContent}>
              <FaCalendarAlt style={styles.icon} /> Attendance
            </span>
          </button>
        </Link>
        <Link to="http://example.com/page3" style={styles.linkButton}>
          <button style={styles.leftButton}>
            <span style={styles.buttonContent}>
              <IoTimerSharp style={styles.icon} /> Performance
            </span>
          </button>
        </Link>
        <Link to="http://example.com/page4" style={styles.linkButton}>
          <button style={styles.leftButton}>
            <span style={styles.buttonContent}>
              <TfiBell style={styles.icon} /> Notifications
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
  linkButton: {
    textDecoration: "none",
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
    marginLeft: "-30px",
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
  icon1: {
    marginRight: "40px", 
    fontSize: "3rem", 
  },
  icon: {
    marginRight: "20px", 
    fontSize: "3rem", 
  },
  salarySection: {
    display: "flex",
    flexDirection: "column", 
    alignItems: "center",    /
    position: "absolute",
    top: "calc(50% + 60px)",              
    left: "calc(50% + 120px)",
    transform: "translate(-50%, -50%)", 
  },

  salaryText: {
    fontSize: "2.5rem",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold",
    marginBottom: "20px", 
  },

  card: {
    width: "500px",        
    height: "450px",        
    backgroundColor: "#1A1A1A", 
    borderRadius: "10px",   
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", 
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
    width: "400px", 
    height: "140px",
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
    textAlign: "center", 
    position: "relative", 
  },

  innerCard1SummaryContainer: {
    position: "relative",
    width: "330px", 
    height: "120px", 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "flex-end", 
    alignItems: "center", 
    padding: "10px", 
    color: "#fff", 
    fontFamily: "Inter, sans-serif",
    position: "relative", 
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

  summaryText: {
    position: "absolute", 
    top: "0px",           
    left: "0px",          
    fontSize: "1.4rem",      
    color: "#FFFFFF",        
    fontWeight: "bold",    
    fontFamily: "Inter, sans-serif",
  },

  rightAlignedTextContainer: {
    position: "absolute", 
    right: "0px", 
    bottom: "10px", 
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column", 
    alignItems: "flex-end", 
  },

  rightAlignedText: {
    fontSize: "0.8rem", 
    color: "#EAEAEA", 
    fontFamily: "Inter, sans-serif", 
    textAlign: "right", 
    width: "100%", 
  },

  innerCard2: {
    width: "400px", 
    height: "50px", 
    backgroundColor: "#444", 
    borderRadius: "10px", 
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", 
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    marginBottom: "20px", 
    textAlign: "center",
  },
  innerCard2Child: {
    width: "30%",
    height: "100%", 
    borderRadius: "5px", 
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    color: "#fff", 
    fontFamily: "Inter, sans-serif",
    fontSize: "1rem", 
  },
  innerCard3: {
    width: "400px", 
    height: "140px", 
    backgroundColor: "transparent", 
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

  monthContainer: {
    display: "flex",
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "flex-start", 
    gap: "20px", 
  },
  monthText: {
    fontSize: "0.8rem", 
    color: "#EAEAEA",
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold", 
  },
  statusContainer: {
    display: "flex",
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center", 
    gap: "20px", 
  },
  statusText: {
    fontSize: "0.8rem", 
    color: "#EAEAEA", 
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold", 
  },

  innerCard3Container: {
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center", 
    width: "100%", 
    height: "100%", 
  },

  innerCard3Child: {
    width: "30%", 
    height: "100%", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    color: "#fff", 
    fontFamily: "Inter, sans-serif",
    fontSize: "1rem", 
  },

  innerCard3ChildContent: {
    textAlign: "center", 
  },

  additionalText: {
    fontSize: "0.8rem",
    color: "#EAEAEA", 
    fontFamily: "Inter, sans-serif", 
    textAlign: "left", 
    width: "100%", 
    paddingLeft: "20px",
  },

  statusText: {
    fontSize: "0.9rem", 
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold",
  },

  pendingText: {
    color: "#b8860b", 
  },

  paidText: {
    color: "#00ff7f",
  },


};

export default UserSalary;
