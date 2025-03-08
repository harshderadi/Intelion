import styles from "@/components/Navbar/Navbar.module.css";
import logo from "../../assets/logo-dark.png";
import Collapsible from "../Collapsible";
import Icon from "./../Icon";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
	const navItems = [
		{ label: "Services", link: "#section-services", target: "_self" },
		{ label: "Our Expertise", link: "#section-expertise", target: "_self" },
		{ label: "Projects", link: "https://github.com/harshderadi/Intelion", target: "_blank" },
		{ label: "About Us", link: "#section-showcase", target: "_self" },
	];

	return (
		<motion.nav
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
		>
			<Collapsible className={styles["navbar"]} isHidden={true}>
				<a aria-label="Harsh" className={styles["nav__header"]} href="/">
					<img className={styles["nav__logo"]} src={logo} alt="Intelion Logo" height={1000} width={1000} />
				</a>
				<span>
					<Icon name="toggler" color="white" className={styles["nav__toggler"]} />
				</span>
				<ul className={"list " + styles["nav__list"]}>
					{navItems.map((item, index) => (
						<motion.li
							key={"nav-item" + index}
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 1 + index * 0.2 }}
							className={styles["nav__item"]}
						>
							<a href={item.link} target={item.target}>
								{item.label}
							</a>
						</motion.li>
					))}
				</ul>
			</Collapsible>
		</motion.nav>
	);
};

export default Navbar;
