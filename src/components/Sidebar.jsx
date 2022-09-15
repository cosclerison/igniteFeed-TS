import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1635863138275-d9b33299680b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
                alt="Iron" 
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/cosclerison.png" />
                <strong>Clerison Oliveira</strong>
                <span>Developer Jr</span>
            </div>

            <footer>
                 <a href='#'>
                    <PencilLine size={20} />
                    Editar seu perfil
                 </a>
            </footer>
        </aside>
    )
}