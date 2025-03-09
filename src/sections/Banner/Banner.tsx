import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import BlockHeader from "../../components/Block/BlockHeader";
import Block from "../../components/Block";
import Button from "../../components/Button/Button";
import styles from "@/sections/Banner/Banner.module.css";

const Banner = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}   // Initial state: faded out, slightly smaller
			animate={{ opacity: 1, scale: 1 }}      // Final state: full opacity, normal size
			transition={{
				duration: 1.5, // Animation speed
				ease: "easeOut",
			}}
		>
			<Block color="dark" direction="left"  className={styles["banner"]}>
				<article className="grid grid--1x2">
					<motion.div
						initial={{ opacity: 0, y: 50 }}  // Text slides up
						animate={{ opacity: 1, y: 0 }}    
						transition={{ delay: 0.3, duration: 1 }}
					>
						<BlockHeader>
							<div
								className={styles["banner__content"]}
								
							>
								<h1 style={{ marginTop: "5" }}>INTELION</h1>
								<h2
									style={{
										marginTop: "0",
										fontSize: "30px",
									}}
								>
									One Stop For All Your Tech Needs
								</h2>
								<p
									className={styles["banner__tagline"]}
									
								>
									Go from idea to fully-functional
									applications incredibly fast.
								</p>
								<Button
									type="link"
									href="#section-services"
									color="accent"
									style="stretched"
								>
									Get Started
								</Button>
							</div>
						</BlockHeader>
					</motion.div>

					{/* Image Animation */}
					<motion.img
						className={styles["banner__image"]}
						src="/images/banner.svg"
						alt="Banner Image"
						initial={{ opacity: 0, x: 100 }} // Image slides in from right
						animate={{ opacity: 1, x: 0 }} 
						transition={{ delay: 0.5, duration: 1 }}
					/>
				</article>
			</Block>
		</motion.div>
	);
};

export default Banner;
