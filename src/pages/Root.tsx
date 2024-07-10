import "../assets/plugins/fontawesome/js/all.min.js";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";

export function Root(): ReactNode {
	return <>
		<Header />
		<div className="app-wrapper">
			<div className="app-content pt-3 p-md-3 p-lg-4">
				<div className="container-xl">
					<Outlet />
				</div>
			</div>
		</div>
		<Footer />
	</>
}
