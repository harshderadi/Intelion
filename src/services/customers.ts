import { ICustomer } from "../interfaces";

let customers: ICustomer[] = [
	{
		name: "Harsh Deradi",
		photo: "/images/photo.jpg",
		company: "A Satisfied Customer",
		comment:
			"I am so happy to recommend Intelion. They delivered an excellent website, which is very beautiful, responsive and blazingly fast. The team is very professional, easy to work with and has good results...",
	},
];

export function getCustomers() {
	return customers;
}

