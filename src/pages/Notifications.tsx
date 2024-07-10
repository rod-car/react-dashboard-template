import { ReactNode } from "react"

export function Notifications(): ReactNode {
	return <>
		<div className="position-relative mb-3">
			<div className="row g-3 justify-content-between">
				<div className="col-auto">
					<h1 className="app-page-title mb-0">Notifications</h1>
				</div>
				<div className="col-auto">
					<div className="page-utilities">
						<select className="form-select form-select-sm w-auto" >
							<option selected value="option-1">All</option>
							<option value="option-2">News</option>
							<option value="option-3">Product</option>
							<option value="option-4">Project</option>
							<option value="option-4">Billing</option>
						</select>
					</div>
				</div>
			</div>
		</div>

		<NotificationCard />
		<NotificationCard />

		<div className="text-center mt-4"><a className="btn app-btn-secondary" href="#">Load more notifications</a></div>
	</>
}

function NotificationCard(): ReactNode {
	return <div className="app-card app-card-notification shadow-sm mb-4">
	<div className="app-card-header px-4 py-3">
		<div className="row g-3 align-items-center">
			<div className="col-12 col-lg-auto text-center text-lg-start">
				<img className="profile-image" src="assets/images/profiles/profile-1.png" alt="" />
			</div>
			<div className="col-12 col-lg-auto text-center text-lg-start">
				<div className="notification-type mb-2"><span className="badge bg-info">Project</span></div>
				<h4 className="notification-title mb-1">Notification Heading Lorem Ipsum</h4>
				<ul className="notification-meta list-inline mb-0">
					<li className="list-inline-item">2 hrs ago</li>
					<li className="list-inline-item">|</li>
					<li className="list-inline-item">Amy Doe</li>
				</ul>
			</div>
		</div>
	</div>
	<div className="app-card-body p-4">
		<div className="notification-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ultrices dolor, ac maximus ligula. Donec ex orci, mollis ac purus vel, tempor pulvinar justo. Praesent nibh massa, posuere non mollis vel, molestie non mauris. Aenean consequat facilisis orci, sed sagittis mauris interdum at.</div>
	</div>
	<div className="app-card-footer px-4 py-3">
		<a className="action-link" href="#">View all<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right ms-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
		</svg></a>
	</div>
</div>
}