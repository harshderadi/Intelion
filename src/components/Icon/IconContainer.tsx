import { ReactNode } from "react";
import styles from "@/components/Icon/Icon.module.css";
import React from "react";

interface Props {
	color?: "accent" | "dark";
	children: ReactNode;
	className?: string;
}

const IconContainer = ({ color, children, className }: Props) => {
	let classNames = ["icon-container"];
	if (color) classNames.push(styles["icon-container--" + color]);
	if (className) classNames.push(className);

	return <span className={classNames.join(" ")}>{children}</span>;
};

export default IconContainer;

