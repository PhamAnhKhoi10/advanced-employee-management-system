import React from "react";
import { Link } from "react-router-dom";
import { TfiWallet } from "react-icons/tfi";
import { FaCalendarAlt } from "react-icons/fa";
import { IoTimerSharp } from "react-icons/io5";
import { TfiBell } from "react-icons/tfi";

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
    top: "calc(90px)", // Bắt đầu từ sau vị trí thanh ngang
    left: "17%", // Căn giữa hoặc chỉnh tùy vị trí mong muốn
    width: "0.5px", // Độ dày của thanh
    height: "calc(100% - 90px)", // Độ dài kéo từ trên xuống dưới (tùy chỉnh phù hợp)
    backgroundColor: "#444", // Màu thanh
  },
  hr: {
    border: "1px solid #444",
    width: "100%",
    borderWidth: "0.5px",
    marginBottom: "550px",
  },
  leftButtonContainer: {
    position: "absolute",
    top: "150px", // Đã thay đổi từ 100px thành 130px để dời xuống dưới 30px
    left: "10px", // Đặt vị trí bên trái so với thanh dọc
    display: "flex",
    flexDirection: "column", // Các nút bấm xếp theo chiều dọc
  },
  buttonContent: {
    display: "flex", // Sử dụng flexbox
    alignItems: "center", // Căn giữa icon và text theo chiều dọc
    marginLeft: "-30px",
  },
  leftButton: {
    backgroundColor: "transparent",
    color: "#fff",
    padding: "10px 45px", // Đảm bảo chiều rộng là 180px
    height: "50px",       // Đặt chiều cao cố định là 50px
    border: "none",
    borderRadius: "5px",
    fontSize: "1.5rem",   // Tăng kích thước chữ để phù hợp với nút lớn hơn
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  icon1: {
    marginRight: "40px", // Khoảng cách giữa icon và text
    fontSize: "3rem", // Kích thước của icon
  },
  icon: {
    marginRight: "20px", // Khoảng cách giữa icon và text
    fontSize: "3rem", // Kích thước của icon
  },
  salarySection: {
    display: "flex",
    flexDirection: "column", // Đặt các phần tử xếp dọc
    alignItems: "center",    // Căn giữa theo chiều ngang
    position: "absolute",
    top: "calc(50% + 60px)",              // Căn giữa theo chiều dọc
    left: "calc(50% + 120px)",
    transform: "translate(-50%, -50%)", // Giữ vị trí giữa màn hình
  },

  salaryText: {
    fontSize: "2.5rem",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold",
    marginBottom: "20px", // Tạo khoảng cách giữa chữ và card
  },

  card: {
    width: "500px",         // Chiều rộng card
    height: "450px",        // Chiều cao card
    backgroundColor: "#1A1A1A", // Màu nền của card
    borderRadius: "10px",   // Bo góc card
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Hiệu ứng bóng
  },

  cardContent: {
    textAlign: "center",    // Căn giữa nội dung trong card
    color: "#fff",
    fontFamily: "Inter, sans-serif",
  },
  innerCardsContainer: {
    display: "flex",
    flexDirection: "column", // Các card con xếp theo chiều dọc
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center", // Căn giữa theo chiều ngang
    width: "100%",
    height: "100%",
  },

  innerCard1: {
    width: "400px", // Width of the main card
    height: "140px", // Height of the main card
    backgroundColor: "#444", // Main card color
    borderRadius: "10px", // Rounded corners
    display: "flex", // Use flexbox to center the content
    flexDirection: "column", // Stack content vertically
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Shadow effect
    color: "#fff", // Text color
    fontFamily: "Inter, sans-serif",
    marginBottom: "20px", // Margin between cards
    textAlign: "center", // Center text inside the card
    position: "relative", // For positioning the smaller card inside it
  },

  innerCard1SummaryContainer: {
    position: "relative",
    width: "330px", // Độ rộng container
    height: "120px", // Chiếm toàn bộ chiều cao của parent card
    display: "flex", // Sử dụng flexbox
    flexDirection: "column", // Sắp xếp nội dung theo chiều dọc
    justifyContent: "flex-end", // Đẩy nội dung xuống sát lề dưới
    alignItems: "center", // Căn giữa nội dung theo chiều ngang
    padding: "10px", // Khoảng cách padding bên trong
    color: "#fff", // Màu chữ
    fontFamily: "Inter, sans-serif",
    position: "relative", // Giữ vị trí relative cho container
  },

  card1Text: {
    position: "absolute",  // Position the text absolutely
    top: "10px",           // 10px from the top
    left: "10px",          // 10px from the left
    fontSize: "1rem",      // Font size for the summary text
    color: "#fff",         // Color of the text
    fontWeight: "bold",    // Bold text
    fontFamily: "Inter, sans-serif",
  },

  summaryText: {
    position: "absolute",  // Position the text absolutely
    top: "0px",           // 10px from the top
    left: "0px",          // 10px from the left
    fontSize: "1.4rem",      // Font size for the summary text
    color: "#FFFFFF",         // Color of the text
    fontWeight: "bold",    // Bold text
    fontFamily: "Inter, sans-serif",
  },

  rightAlignedTextContainer: {
    position: "absolute", // Giữ vị trí tuyệt đối trong card
    right: "0px", // Căn sang phải
    bottom: "10px", // Khoảng cách từ phía trên
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column", // Các dòng chữ xếp theo chiều dọc
    alignItems: "flex-end", // Căn chỉnh các dòng chữ về phía bên phải
  },

  rightAlignedText: {
    fontSize: "0.8rem", // Kích thước chữ
    color: "#EAEAEA", // Màu chữ
    fontFamily: "Inter, sans-serif", // Font chữ
    textAlign: "right", // Căn chữ theo bên trái
    width: "100%", // Đảm bảo mỗi dòng chiếm đủ chiều rộng
  },

  innerCard2: {
    width: "400px", // Chiều rộng của card lớn
    height: "50px", // Chiều cao của card lớn (tăng lên để chứa 3 card nhỏ)
    backgroundColor: "#444", // Màu nền của card lớn
    borderRadius: "10px", // Bo góc cho card lớn
    display: "flex", // Sử dụng flexbox
    flexDirection: "row", // Xếp các card nhỏ theo chiều ngang
    justifyContent: "space-between", // Căn đều các card nhỏ theo chiều ngang
    alignItems: "center", // Căn giữa các card nhỏ theo chiều dọc
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Hiệu ứng bóng
    color: "#fff", // Màu chữ của card
    fontFamily: "Inter, sans-serif",
    marginBottom: "20px", // Khoảng cách giữa các card
    textAlign: "center", // Căn giữa nội dung trong mỗi card nhỏ
  },

  innerCard2Child: {
    width: "30%", // Mỗi card nhỏ chiếm 30% chiều rộng của card lớn
    height: "100%", // Chiều cao của mỗi card nhỏ bằng chiều cao của card lớn
    borderRadius: "5px", // Bo góc cho các card nhỏ
    display: "flex", // Sử dụng flexbox cho các card nhỏ
    justifyContent: "center", // Căn giữa nội dung
    alignItems: "center", // Căn giữa nội dung theo chiều dọc
    color: "#fff", // Màu chữ của các card nhỏ
    fontFamily: "Inter, sans-serif",
    fontSize: "1rem", // Kích thước chữ trong các card nhỏ
  },
  // Cập nhật lại innerCard3 và tạo phần chứa các tháng
  innerCard3: {
    width: "400px", // Chiều rộng của card 3
    height: "140px", // Chiều cao của card 3
    backgroundColor: "transparent", // Màu nền của card 3
    borderRadius: "10px", // Bo góc cho card 3
    display: "flex", // Sử dụng flexbox để căn giữa
    flexDirection: "column", // Căn các phần tử theo chiều dọc
    justifyContent: "center", // Căn giữa nội dung theo chiều dọc
    alignItems: "center", // Căn giữa nội dung theo chiều ngang
    color: "#fff", // Màu chữ của card 3
    fontFamily: "Inter, sans-serif",
    textAlign: "center", // Căn giữa nội dung
    padding: "10px", // Thêm padding cho card
  },

  // Cập nhật phần container chứa các tháng (Thêm container mới cho tháng)
  monthContainer: {
    display: "flex",
    flexDirection: "column", // Xếp theo chiều dọc
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "flex-start", // Căn giữa theo chiều ngang
    gap: "20px", // Khoảng cách giữa các phần tử
  },
  monthText: {
    fontSize: "0.8rem", // Kích thước chữ
    color: "#EAEAEA", // Màu chữ
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold", // Làm đậm chữ
  },
  statusContainer: {
    display: "flex",
    flexDirection: "column", // Xếp theo chiều dọc
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center", // Căn giữa theo chiều ngang
    gap: "20px", // Khoảng cách giữa các phần tử
  },
  statusText: {
    fontSize: "0.8rem", // Kích thước chữ
    color: "#EAEAEA", // Màu chữ
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold", // Làm đậm chữ
  },

  innerCard3Container: {
    display: "flex", // Sử dụng flexbox để căn chỉnh 3 card nhỏ theo chiều ngang
    justifyContent: "space-between", // Căn đều các card nhỏ theo chiều ngang
    alignItems: "center", // Căn giữa các card nhỏ theo chiều dọc
    width: "100%", // Đảm bảo container chiếm hết chiều rộng
    height: "100%", // Đảm bảo container chiếm hết chiều cao của card 3
  },

  innerCard3Child: {
    width: "30%", // Mỗi card nhỏ chiếm 30% chiều rộng của card lớn
    height: "100%", // Chiều cao của mỗi card nhỏ bằng chiều cao của card lớn
    display: "flex", // Sử dụng flexbox cho các card nhỏ
    justifyContent: "center", // Căn giữa nội dung
    alignItems: "center", // Căn giữa nội dung theo chiều dọc
    color: "#fff", // Màu chữ của các card nhỏ
    fontFamily: "Inter, sans-serif",
    fontSize: "1rem", // Kích thước chữ trong các card nhỏ
  },

  innerCard3ChildContent: {
    textAlign: "center", // Căn giữa nội dung trong card
  },

  additionalText: {
    fontSize: "0.8rem", // Kích thước chữ
    color: "#EAEAEA", // Màu chữ
    fontFamily: "Inter, sans-serif", // Font chữ
    textAlign: "left", // Căn chữ theo bên trái
    width: "100%", // Đảm bảo mỗi dòng chiếm đủ chiều rộng
    paddingLeft: "20px", // Khoảng cách từ lề trái (hoặc thay đổi theo ý muốn)
  },

  statusText: {
    fontSize: "0.9rem", // Kích thước chữ
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold", // Làm đậm chữ
  },

  pendingText: {
    color: "#b8860b", // Màu vàng cho Pending
  },

  paidText: {
    color: "#00ff7f", // Màu xanh lá cây cho Paid
  },


};

export default Dashboard;
