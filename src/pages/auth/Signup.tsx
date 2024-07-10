import { ReactNode } from "react"
import './Auth.css'
import { Footer } from "../../components/Footer.tsx"

export function Signup(): ReactNode {
	return <div className="app-signup p-0">    	
		<div className="row g-0 app-auth-wrapper">
			<div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
				<div className="d-flex flex-column align-content-end">
					<div className="app-auth-body mx-auto">	
						<div className="app-auth-branding mb-4">
							<a className="app-logo" href="index.html">
								<img className="logo-icon me-2" src="assets/images/app-logo.svg" alt="logo" />
							</a>
						</div>
						<h2 className="auth-heading text-center mb-4">Sign up to Portal</h2>					
		
						<div className="auth-form-container text-start mx-auto">
							<form className="auth-form auth-signup-form">         
								<div className="email mb-3">
									<label className="sr-only" htmlFor="signup-email">Your Name</label>
									<input id="signup-name" name="signup-name" type="text" className="form-control signup-name" placeholder="Full name" />
								</div>
								<div className="email mb-3">
									<label className="sr-only" htmlFor="signup-email">Your Email</label>
									<input id="signup-email" name="signup-email" type="email" className="form-control signup-email" placeholder="Email" />
								</div>
								<div className="password mb-3">
									<label className="sr-only" htmlFor="signup-password">Password</label>
									<input id="signup-password" name="signup-password" type="password" className="form-control signup-password" placeholder="Create a password" />
								</div>
								<div className="extra mb-3">
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="RememberPassword" />
										<label className="form-check-label" htmlFor="RememberPassword">
										I agree to Portal's <a href="#" className="app-link">Terms of Service</a> and <a href="#" className="app-link">Privacy Policy</a>.
										</label>
									</div>
								</div>
								<div className="text-center">
									<button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto">Sign Up</button>
								</div>
							</form>
							<div className="auth-option text-center pt-5">Already have an account? <a className="text-link" href="login.html" >Log in</a></div>
						</div>
					</div>
					<Footer className="app-auth-footer" />
				</div>
			</div>
			<div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
				<div className="auth-background-holder">			    
				</div>
				<div className="auth-background-mask"></div>
				<div className="auth-background-overlay p-3 p-lg-5">
					<div className="d-flex flex-column align-content-end h-100">
						<div className="h-100"></div>
						<div className="overlay-content p-3 p-lg-4 rounded">
							<h5 className="mb-3 overlay-title">Explore Portal Admin Template</h5>
							<div>Portal is a free Bootstrap 5 admin dashboard template. You can download and view the template license <a href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/">here</a>.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
}