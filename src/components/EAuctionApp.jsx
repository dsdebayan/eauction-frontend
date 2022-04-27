import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import withNavigation from './WithNavigation';
import withParams from './withParams'
import HeaderComponent from './HeaderComponent'
import LogoutComponent from './LogoutComponent';
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import ProductComponent from './ProductComponent';
import LoginComponent from './LoginComponent'
import ErrorComponent from './ErrorComponent';

const EAuctionApp = (props) => {
    const LoginComponentWithNavigation = withNavigation(LoginComponent);
    const ProductComponentWithParams = withParams(ProductComponent);
    const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
   
    return(
        <div className="DemoApp">
                <Router>
                    <HeaderComponentWithNavigation/>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/seller/:name" element={
                            <AuthenticatedRoute>
                            <ProductComponentWithParams />
                            </AuthenticatedRoute>
                            } />
                        
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                            <LogoutComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    
                </Router>
            </div>
    )
}

export default EAuctionApp