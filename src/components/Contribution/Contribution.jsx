import { Link } from 'react-router-dom';

export const Contribution = () => {
  return (
    <section>
      <div>
        <p>Збережи життя захисників</p>
        <h3>Зроби внесок на маскувальні сітки</h3>
      </div>
      <div>
        <Link>Задонатити</Link>
        <Link to="/order">Замовити сітку</Link>
      </div>
    </section>
  );
};
