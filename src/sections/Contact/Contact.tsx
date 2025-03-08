import React from "react";
import Block from "../../components/Block";
import Callout from "../../components/Callout";
import styles from "@/sections/Contact/Contact.module.css";

const Contact = () => {
	return (
		<Block className={styles["section-contact"]}>
			<Callout />
		</Block>
	);
};

export default Contact;

