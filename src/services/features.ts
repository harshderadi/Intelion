import { IFeature } from "../interfaces";

const features: IFeature[] = [
	{
		heading: "WEB Development",
		iconName: "web",
		imageUrl: "/images/web.svg",
		link: "#services2",
		content:
			"We create beautiful, responsive and incredibly fast websites and web apps.",
	},
	{
		heading: "BACK-END Development",
		iconName: "server",
		imageUrl: "/images/server.svg",
		link: "#services3",
		content:
			"Back-End is important because web browsers, or clients, interact with web servers to retrieve information.",
	},
	{
		heading: "Mobile App Development",
		iconName: "mobile",
		imageUrl: "/images/mobile.svg",
		link: "#services4",
		content:
			"Growing with the times is a must for every company that wishes to stay up-to-date with the public, and mobile apps have taken the world by storm.",
	},
	{
		heading: "Cross-Platform Development",
		iconName: "devices",
		imageUrl: "/images/devices.png",
		link: "#section-expertise",
		content:
			"Get a multi-device app faster with a single strike.",
	},
];

export function getFeatures() {
	return features;
}

