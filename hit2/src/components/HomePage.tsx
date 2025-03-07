import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <p>Добро пожаловать на главную страницу!</p>
      <Link to="/login">Выйти</Link>
    </div>
  );
};

export default HomePage;
