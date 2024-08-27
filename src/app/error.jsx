"use client";

import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";

function ErrorPage({ statusCode }) {
	const router = useRouter();

	return (
		<div style={styles.container}>
			<h1 style={styles.title}>
				{statusCode === 404 ? "Page Not Found" : "Something Went Wrong"}
			</h1>
			<p style={styles.description}>
				{statusCode === 404
					? "The page you're looking for doesn't exist."
					: "An unexpected error has occurred."}
			</p>
			<Link href="/" style={styles.link}>
				Go back home
			</Link>
		</div>
	);
}

ErrorPage.propTypes = {
	statusCode: PropTypes.number,
};

ErrorPage.defaultProps = {
	statusCode: 404,
};

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		height: "100vh",
		textAlign: "center",
	},
	title: {
		fontSize: "3rem",
		marginBottom: "1rem",
	},
	description: {
		fontSize: "1.25rem",
		marginBottom: "2rem",
	},
	link: {
		fontSize: "1rem",
		color: "#0070f3",
		textDecoration: "underline",
	},
};

export default ErrorPage;
