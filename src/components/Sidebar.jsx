import React from 'react';

const Sidebar = () => {
    return (
        <aside className="bg-light p-4 border rounded">
            <h4 className="fw-bold text-center mb-3 text-dark">Kategorie</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Historie</li>
                <li className="list-group-item">Modely</li>
                <li className="list-group-item">Tuning</li>
                <li className="list-group-item">Zajímavosti</li>
                <li className="list-group-item">Srovnání</li>
                <li className="list-group-item">Údržba</li>
            </ul>
            <hr />
            <h5 className="fw-bold text-secondary">O autorovi</h5>
            <p className="text-muted">Jsem nadšenec do rotačních motorů s 10 lety zkušeností. Motto: 'Rotační revoluce nikdy nekončí.'</p>
        </aside>
    );
};

export default Sidebar;