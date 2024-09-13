import React from 'react';
import Sidebar from '../../Components/AdminSection/Sidebar';
import Dashboard from '../../Components/AdminSection/Dashboard';

function Admindashboard() {
    return (
        <div className="flex">
            <Sidebar />
            <Dashboard />
        </div>
    );
}

export default Admindashboard;
