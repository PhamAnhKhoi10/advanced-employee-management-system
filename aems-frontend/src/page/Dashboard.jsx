import { useEffect } from "react";
import Footer from "../components/Footer";
import { selectEmployees } from "../redux/slice/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import { requestPerformance } from "../services/employee.service";

const titleForEmployee = [
  {
    title: "Notification",
    subtile: "From Jane-Manager",
    link: "/notification",
  },
  { title: "Salary", subtile: "1/10/2024", link: "/salary" },
  {
    title: "Performance",
    subtile: "Rating last month: 80/100",
    link: "/performance",
  },
  {
    title: "Attendance",
    subtile: "1/10/2024: Late 5 minutes",
    link: "/attendance",
  },
];
const titleForHR = [
  {
    title: "Performance Record",
    subtile: "View employee employees performance record",
    link: "employee/performance",
  },
  {
    title: "Employee List",
    subtile: "View employee employees list",
    link: "/employee/employee-info",
  },
  {
    title: "Leave Request",
    subtile: "View employee employees leave request",
    link: "/employee/leave-request",
  },
  {
    title: "Notification",
    subtile: "View employee employees notification",
    link: "/notification",
  },
];
const titleForAdmin = [
  {
    title: "Notification",
    subtile: "Send your notifications",
    link: "employee/notifications",
  },
  {
    title: "Create Account",
    subtile: "Create a new account to the system",
    link: "/employee/create-account",
  },
  {
    title: "Salary",
    subtile: "Update your employee salary",
    link: "/employee/salary",
  },
];

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user, performance } = useSelector(selectEmployees);
  useEffect(() => {
    if (user && user.id) {
      dispatch(requestPerformance(user.id));
    }
  }, [user]);
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.headerText}>Welcome Back {user.name}</h1>
        <h2 style={styles.subHeaderText}>Here your summary</h2>
      </div>

      <div style={styles.cardContainer}>
        {user.role === "Employee" &&
          titleForEmployee.map((item, index) => (
            <Footer
              key={index}
              header={item.title}
              title={item.title}
              bodyContent={item.subtile}
              buttonText={"View Details"}
              link={item.link}
            />
          ))}
        {user.role === "HR" &&
          titleForHR.map((item, index) => (
            <Footer
              key={index}
              header={item.title}
              title={item.title}
              bodyContent={item.subtile}
              buttonText={"View Details"}
              link={item.link}
            />
          ))}
        {user.role === "Admin" &&
          titleForAdmin.map((item, index) => (
            <Footer
              key={index}
              header={item.title}
              title={item.title}
              bodyContent={item.subtile}
              buttonText={"View Details"}
              link={item.link}
            />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;

const styles = {
  container: {
    margin: "5vh",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#000",
    flexDirection: "column",
    position: "relative",
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
    position: "relative",

    color: "#fff",
    fontSize: "2.8rem",
    fontWeight: "bold",
    fontFamily: "Inter, sans-serif",
  },
  subHeaderText: {
    position: "relative",

    color: "#fff",
    fontSize: "2.2rem",
    fontWeight: "normal",
    fontFamily: "Inter, sans-serif",
  },
  cardContainer: {
    marginTop: 10,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2vh",
  },
};
