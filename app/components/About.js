import React, { useEffect } from "react"
import Page from "./Page"

const About = () => {
	useEffect(() => {
		document.title = "About Us | ComplexApp"
		window.scrollTo(0, 0)
	}, [])

	return (
		<Page title="About Us">
			<h2>About Us</h2>
			<p className="lead text-muted">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
				dolorum labore quisquam vel id dicta fuga! Ducimus, quo. Dolore commodi
				aliquid error veritatis consequuntur, excepturi cumque fuga eum incidunt
				doloremque?
			</p>
		</Page>
	)
}

export default About
