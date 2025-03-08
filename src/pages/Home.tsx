import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from "../sections/Banner";
import Contact from "../sections/Contact/Contact";
import Expertise from "../sections/Expertise";
import Features from "../sections/Features";
import Footer from "../sections/Footer";
import Testimonials from "../sections/Testimonials";
import ScrollToTopBtn from "./../components/ScrollToTopBtn/index";
import AOS from "aos";
import "aos/dist/aos.css";

import { getFeatures } from "../services/features";
import { getShowCases } from "../services/showCases";
import { getExpertises } from "../services/expertises";
import { getCustomers } from "../services/customers";

import IntroAnimation from "../components/IntroAnimation"; // Import the animation component

const Home = () => {
	const [showAnimation, setShowAnimation] = useState(true);

	useEffect(() => {
		AOS.init({ duration: 850 });

		// Hide intro animation after 1.5s
		const timer = setTimeout(() => setShowAnimation(false), 1500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{showAnimation && <IntroAnimation onAnimationComplete={() => setShowAnimation(false)} />}

			{!showAnimation && (
				<>
					<header>
						<Navbar />
						<Banner />
					</header>
					<main>
						<Features
							label="Services"
							heading="Get your apps built for any device"
							headingBody="You've got the idea, we've got the expertise."
							features={getFeatures()}
							useAOS={true}
							id="section-services"
						/>
						<Expertise
							heading="Common Technologies We Use"
							expertises={getExpertises()}
							id="section-expertise"
						/>
						<Features
							label="Showcase"
							heading="Why People Choose Us?"
							headingBody="Our clients love how we always strive to fulfill their core needs."
							features={getShowCases()}
							useAOS={true}
							id="section-showcase"
						/>
						<Testimonials
							heading="What our Customers are Saying"
							headingBody="We are delighted to have such happy and satisfied customers."
							customers={getCustomers()}
							useAOS={true}
							id="section-testimonials"
						/>
						<Contact />
					</main>
					<footer>
						<ScrollToTopBtn />
						<Footer />
					</footer>
				</>
			)}
		</>
	);
};

export default Home;
