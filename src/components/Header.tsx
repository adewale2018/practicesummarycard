import { getStatus } from "../getStatus";

function Header({
  name,
  location,
  conversionRate,
}: {
  name: string;
  conversionRate: number;
  location: {
    city: string;
    country: string;
  };
}) {
  return (
    <header className="">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold font-mono mb-1">{name}</h2>
          <p>
            <span className="text-gray-500">{location?.city}, </span>
            <span>{location?.country}</span>
          </p>
        </div>
        <div>
          <span className="text-gray-500">Status:</span>
          <br />
          <span
            className={
              getStatus(conversionRate)?.color === "green"
                ? "text-green-700 font-medium"
                : getStatus(conversionRate)?.color === "red font-medium"
                  ? "text-red-700 font-medium"
                  : "text-gray-700 font-medium"
            }
          >
            {getStatus(conversionRate)?.label}
          </span>
        </div>
      </div>
    </header>
  );
}
export default Header;
