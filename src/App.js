import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  return (
    <>
      <section className="container">
        <h3>Color Picker</h3>
        <form>
          <input type="text" className="" placeholder="#f15025" />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        <SingleColor />
      </section>
    </>
  );
}

export default App;
