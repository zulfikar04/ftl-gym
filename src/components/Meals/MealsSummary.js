import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2><span style={{ color: 'green' }}>Proteins Food</span>, Delivered To You</h2>
      <h4>
        Raih Potensi Penampilan Terbaikmu
      </h4>
      <p>
        Dapatkan bentuk tubuh yang ideal dengan memesan suplemen dan minuman berenergy
      </p>
    </section>
  );
};

export default MealsSummary;
