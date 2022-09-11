import React from 'react';
import { AuthContext } from "../../Context/Auth"
import { useContext } from 'react';

export function Usuario() {

    const { logout } = useContext(AuthContext)

    const handleLogout = () => {
      logout();
    }

    return (
        <div>
            <button onClick={handleLogout}>Sair</button>
            <p>Testando</p>
        </div>

    );
}