/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router';
import './index.css'

import App from './pages/App.tsx'
import TermsOfService from "./pages/TermsOfService.tsx"
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx"

const root = document.getElementById('root')

render(
    () => (
        <Router>
            <Route path="/" component={App} />
            <Route path="/terms-of-service" component={TermsOfService} />
            <Route path="privacy-policy" component={PrivacyPolicy} />
        </Router>
    ), root!)
