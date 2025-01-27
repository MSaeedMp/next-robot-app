import { priceTableData } from "@/lib/constants";
const PriceTable = () => {
  return (
    <div className="text-foreground grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-gray-300 rounded-md overflow-hidden shadow-sm">
      {/* Column 1 */}
      <div className=" font-light bg-white p-6 hidden sm:block">
        <h3 className="font-semibold pb-4 opacity-0">Features</h3>
        {priceTableData.map((row, index) => (
          <div key={index} className="py-4 border-b border-gray-100">
            {row.feature}
          </div>
        ))}
      </div>

      {/* Column 2 */}
      <div className="  font-light bg-cyan-50 text-sky-700 p-6">
        <h3 className="font-semibold pb-4">Standard Bots RO1</h3>
        {priceTableData.map((row, index) => (
          <div key={index} className="py-4  border-b border-gray-100">
            {row.standardBots}
          </div>
        ))}
      </div>

      {/* Column 3 */}
      <div className=" font-light bg-white p-6 hidden md:block">
        <h3 className="font-semibold pb-4">Fanuc CRX-10iA/L</h3>
        {priceTableData.map((row, index) => (
          <div key={index} className="py-4 border-b border-gray-100">
            {row.fanuc}
          </div>
        ))}
      </div>

      {/* Column 4 */}
      <div className=" font-light bg-white p-6 hidden lg:block">
        <h3 className="font-semibold pb-4">Universal Robots UR10e</h3>
        {priceTableData.map((row, index) => (
          <div key={index} className="py-4 border-b border-gray-100">
            {row.universal}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceTable;
