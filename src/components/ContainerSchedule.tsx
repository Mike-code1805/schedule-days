import styles from '../styles/containerSchedule/styles.module.scss';

export interface Props {
  title?: string;
  backgroundColor?: string;
}

export const ContainerSchedule = ({
  title = 'Programación I',
  backgroundColor = 'red',
}: Props) => {
  return (
    <div className={styles.container} style={{ background: backgroundColor }}>
      <h1 className={styles.container_text}>{title}</h1>
    </div>
  );
};
