import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { RiShareForward2Fill } from "react-icons/ri";

const WithFooter = ({ header, subHeader, bodyContent, buttonText, link }) => {
    return (
        <Card
            radius="lg"
            shadow="sm"
            isHoverable
            isPressable
            style={styles.card}
        >
            {/* Header */}
            <div style={styles.cardHeader}>
                <div style={styles.avatar}>UI</div>
                <div>
                    <h3>{header}</h3>
                    {subHeader && <p style={styles.subHeader}>{subHeader}</p>}
                </div>
            </div>

            {/* Body */}
            <CardBody style={styles.cardBody}>
                {bodyContent}
            </CardBody>

            {/* Footer */}
            <CardFooter style={styles.footer}>
                <a href={link} target="_blank" style={styles.link}>
                    {buttonText} <RiShareForward2Fill style={styles.icon} />
                </a>
            </CardFooter>
        </Card>
    );
};

const styles = {
    subHeader: {
        fontSize: "0.9rem",
        color: "gray",
        margin: "10",
    },
    card: {
        width: "500px",
        height: "200px",
        backgroundColor: "#222222",
        color: "#fff",
        position: "relative",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
    },
    cardHeader: {
        flex: 1,
        padding: "10px",
        textAlign: "left",
        marginLeft: "20px",
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
    },
    avatar: {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "black",
        color: "#fff",
        fontSize: "1.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "10px",
    },
    cardBody: {
        flex: 1,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "10px",
        alignItems: "flex-start",
        transform: "translateY(-10px)",
    },
    footer: {
        flex: 1,
        position: "relative",
        padding: "10px",
        textAlign: "right",
        marginLeft: "20px",
        transform: "translateY(-20px)",
    },
    link: {
        textDecoration: "none",
        color: "#3399ff",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
    },
    icon: {
        marginLeft: "8px",
    },
};

export default WithFooter;
