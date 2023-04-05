import { ReactNode } from 'react';
import styles from 'mdsreact/styles/layout.module.css';

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export default function Layout({ children }: Props) {
    return <div className={styles.container}>{children}</div>
}