import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'L-Men Platinum',
    description: 'Menambah tinggi badan mu',
    price: 122.990,
  },
  {
    id: 'm2',
    name: 'Crevolene New ',
    description: 'Otot Nge PUMP MAKSIMAL',
    price: 160.500,
  },
  {
    id: 'm3',
    name: 'L-Men GAINMASS',
    description: 'Menambah massa otot mu seakrang juga',
    price: 120.990,
  },
  {
    id: 'm4',
    name: 'Pro Whey',
    description: 'menjaga masa otot',
    price: 180.990,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
