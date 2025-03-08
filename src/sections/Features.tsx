import React from "react";
import Block from "../components/Block";
import BlockHeader from "../components/Block/BlockHeader";
import Feature from "../components/Feature";
import { IFeature } from "../interfaces";

interface Props {
	heading: string;
	headingBody: string;
	features: IFeature[];
	useAOS: boolean;
	id?: string;
	label: string;
}

const Features = ({
	heading,
	headingBody,
	features,
	useAOS,
	id,
	label,
}: Props) => {
	return (
		<Block id={id}>
			<BlockHeader dataAos={useAOS ? "fade-up" : ""}>
				<h2>{heading}</h2>
				<p>{headingBody}</p>
			</BlockHeader>
			{features.map((feature, index) => (
				<Feature
					heading={feature.heading}
					iconName={feature.iconName}
					imageUrl={feature.imageUrl}
					link={feature.link}
					key={index}
					dataAos={
						useAOS ? (index % 2 === 0 ? "fade-up-right" : "fade-up-left") : ""
					}
					id={`${label.toLowerCase()}${index + 1}`}>
					{feature.content}
				</Feature>
			))}
		</Block>
	);
};

export default Features;

