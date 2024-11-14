import type React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<aside>
				<h1>Dashboard</h1>
			</aside>
			<main>{children}</main>
		</div>
	);
};

export default DashboardLayout;
