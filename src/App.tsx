import SummaryCard from "./SummaryCard";
import { dentistsData } from "./mockData";
function App() {
  return (
    <section className="flex justify-center gap-4 flex-wrap mt-10 p-4">
      {dentistsData.map((dentist) => (
        <SummaryCard key={dentist.id} {...dentist} />
      ))}
    </section>
  );
}

export default App;
