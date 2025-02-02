import { ReactNode } from "react";

export function Settings(): ReactNode {
	return <>
		<h1 className="app-page-title">Settings</h1>
		<hr className="mb-4" />
		<div className="row g-4 settings-section">
			<div className="col-12 col-md-4">
				<h3 className="section-title">General</h3>
				<div className="section-intro">Settings section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="help.html">Learn more</a></div>
			</div>
			<div className="col-12 col-md-8">
				<div className="app-card app-card-settings shadow-sm p-4">
					<div className="app-card-body">
						<form className="settings-form">
							<div className="mb-3">
								<label htmlFor="setting-input-1" className="form-label">Business Name<span className="ms-2" data-bs-container="body" data-bs-toggle="popover" data-bs-trigger="hover focus"  data-bs-placement="top" data-bs-content="This is a Bootstrap popover example. You can use popover to provide extra info."><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-info-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
									<path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
									<circle cx="8" cy="4.5" r="1"/>
									</svg></span>
								</label>
								<input type="text" className="form-control" id="setting-input-1" value="Lorem Ipsum Ltd." />
							</div>
							<div className="mb-3">
								<label htmlFor="setting-input-2" className="form-label">Contact Name</label>
								<input type="text" className="form-control" id="setting-input-2" value="Steve Doe" />
							</div>
							<div className="mb-3">
								<label htmlFor="setting-input-3" className="form-label">Business Email Address</label>
								<input type="email" className="form-control" id="setting-input-3" value="hello@companywebsite.com" />
							</div>
							<button type="submit" className="btn app-btn-primary" >Save Changes</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		<hr className="my-4" />

		<SettingSection />
		<SettingSection />
		<SettingSection />
	</>
}

function SettingSection(): ReactNode {
	return <div className="row g-4 settings-section">
		<div className="col-12 col-md-4">
			<h3 className="section-title">Plan</h3>
			<div className="section-intro">Settings section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="help.html">Learn more</a></div>
		</div>
		<div className="col-12 col-md-8">
			<div className="app-card app-card-settings shadow-sm p-4">
				<div className="app-card-body">
					<div className="mb-2"><strong>Current Plan:</strong> Pro</div>
					<div className="mb-2"><strong>Status:</strong> <span className="badge bg-success">Active</span></div>
					<div className="mb-2"><strong>Expires:</strong> 2030-09-24</div>
					<div className="mb-4"><strong>Invoices:</strong> <a href="#">view</a></div>
					<div className="row justify-content-between">
						<div className="col-auto">
							<a className="btn app-btn-primary" href="#">Upgrade Plan</a>
						</div>
						<div className="col-auto">
							<a className="btn app-btn-secondary" href="#">Cancel Plan</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
}