import styles from "./dashboard.module.css";

const PlaceholderIcon = () => (
  <svg
    className={styles.placeholderIcon}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 12h14m-7 7V5"
    />
  </svg>
);

const PlaceholderCard = ({ className = "" }: { className?: string }) => {
  const cardClassName = `${styles.card} ${className}`.trim();

  return (
    <div className={cardClassName}>
      <PlaceholderIcon />
    </div>
  );
};

export default function AdminDashboardPage() {
  return (
    <section className={styles.dashboard}>
      <header className={styles.header}>
        <h3 className={styles.title}>Analytics overview</h3>
        <p className={styles.subtitle}>Revenue, order volume, and user activity summary.</p>
      </header>

      <div className={styles.gridThree}>
        <PlaceholderCard />
        <PlaceholderCard />
        <PlaceholderCard />
      </div>

      <PlaceholderCard className={styles.cardLarge} />

      <div className={styles.gridTwo}>
        <PlaceholderCard />
        <PlaceholderCard />
        <PlaceholderCard />
        <PlaceholderCard />
      </div>

      <PlaceholderCard className={styles.cardLarge} />

      <div className={styles.gridTwo}>
        <PlaceholderCard />
        <PlaceholderCard />
        <PlaceholderCard />
        <PlaceholderCard />
      </div>
    </section>
  );
}
