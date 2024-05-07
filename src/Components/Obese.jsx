import image from "../assets/images/underweight.png";
const Obese = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-white text-center mt-5">Underweight Diet plan</h1>
        <img
          className="mt-5 rounded"
          src={image}
          style={{ width: "100%" }}
        ></img>
        <div className="mt-5">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Days</th>
                <th>Morning(8.00-8.30)</th>
                <th>Mid-Meal (11:00-11:30AM)</th>
                <th>Lunch (2:00-2:30PM)</th>
                <th>Evening (4:00-4:30PM)</th>
                <th>Dinner (8:00-8:30PM)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Sunday</th>
                <td>
                  2 egg brown bread sandwich + green chutney + 1 cup milk + 3
                  cashews + 4 almonds + 2 walnuts
                </td>
                <td>1 cup banana shake</td>
                <td>
                  1 cup arhar dal + 1 cup potato curry + 3 chapatti + 1/2 cup
                  rice + 1/2 cup low fat curd + salad
                </td>
                <td> 1 cup strawberry smoothie + 1 cup vegetable poha</td>
                <td>1.5 cup chicken curry + 3 chapatti + salad</td>
              </tr>
              <tr>
                <th>Monday</th>
                <td>
                  3 onion stuffed parantha + 1 cup curd + 3 cashews + 4 almonds
                  + 2 walnuts
                </td>
                <td>1 cup mango shake</td>
                <td>
                  1 cup moong dal/ chicken curry + 1 cup potato and caulifllower
                  vegetable + 3 chapatti + 1/2 cup rice + salad
                </td>
                <td>1 cup pomegranate juice + 2 butter toasted bread</td>
                <td>1 cup beans potato vegetable + 3 chapatti + salad</td>
              </tr>
              <tr>
                <th>Tuesday</th>
                <td>
                  3 paneer stuffed besan cheela + green chutney + 1 cup curd + 3
                  cashews + 4 almonds + 2 walnuts
                </td>
                <td>11 apple smoothie with maple syrup</td>
                <td>
                  1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice
                  + 1 cup low curd + salad
                </td>
                <td>1 cup tomato soup with bread crumbs + 1 cup aloo chaat</td>
                <td>1 cup carrot peas vegetable +3 chapatti + salad</td>
              </tr>
              <tr>
                <th>Wednesday</th>
                <td>
                  1.5 cup vegetable bread upma + 1 cup milk + 3 cashews + 4
                  almonds + 2 walnuts
                </td>
                <td>1 cup ripe banana with 2 tsp ghee</td>
                <td>
                  1 cup rajma curry + 1 cup spinach potato + 3 chapatti + 1/2
                  cup rice + salad
                </td>
                <td>1 cup vegetable juice + 1 cup upma</td>
                <td>1.5 cup parwal vegetable + 3 chapatti + salad</td>
              </tr>
              <tr>
                <th>Thursday</th>
                <td>
                  2 cucmber potato sandwich + 1 tsp green chutney + 1 orange
                  juice + 3 cshews + 2 walnuts + 4 almonds
                </td>
                <td>1 cup buttermilk + 1 cup sweet potato chaat</td>
                <td>
                  1 cup white chana/ fish curry + 3 chapatti + 1/2 cup rice +
                  salad
                </td>
                <td>1 cup almond milk + banana</td>
                <td>1 cup cauliflower potato vegetable + 3 chapatti + salad</td>
              </tr>
              <tr>
                <th>Friday</th>
                <td>
                  2 cup vegetable poha + 1 cup curd + 3 cashews + 4 almonds + 2
                  walnuts
                </td>
                <td>2 cups watermelon juice</td>
                <td>
                  1 cup chana dal + 1 cup bhindi vegetable + 3 chapatti + 1/2
                  cup rice + salad
                </td>
                <td>1 cup sprouts salad + 2 potato cheela + green chutney</td>
                <td> 1 cup peas mushroom vegetable + 3 chapatti + salad</td>
              </tr>
              <tr>
                <th>Saturday</th>
                <td>
                  3 vegetable suji cheela + 1 cup strawberry shake + 4 cashews +
                  4 almonds + 3 walnuts
                </td>
                <td>
                  1 cup mix dal + 1 cup soybean curry + 3 chapatti + 1/2 cup
                  curd + salad
                </td>
                <td>
                  1 cup fruit salad + 4 pc vegetable cutlets + green chutney
                </td>
                <td>1 cup sprouts salad + 2 potato cheela + green chutney</td>
                <td> 1 cup karela vegetable + 3 chaptti + salad</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container">
          <h1 className="text-white text-white mb-5 mt-5">
            Underweight Diet Restrictions: Food Items To Limit
          </h1>
          <ul className="text-white">
            <li>
              Whole Eggs. Once feared for being high in cholesterol, whole eggs
              have been making a comeback. ...
            </li>
            <li>Leafy Greens.</li>
            <li>Salmon.</li>
            <li>Cruciferous Vegetables.</li>
            <li>Lean Beef and Chicken Breast</li>
            <li>Boiled Potatoes.</li>
            <li>Tuna.</li>
            <li>Beans and Legumes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Obese;
