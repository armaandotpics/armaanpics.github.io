import { Plus } from "lucide-react";

interface AddOnRow {
  addon: string;
  price: string;
}

interface AddOnsWidgetProps {
  addons: AddOnRow[];
}

export default function AddOnsWidget({ addons }: AddOnsWidgetProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <Plus className="w-8 h-8 mr-3 text-accent" />
        Optional Add-Ons
      </h3>
      <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Add-On</th>
                <th className="px-6 py-4 text-left font-semibold">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {addons.map((addon, index) => (
                <tr key={index} className="hover:bg-gray-100 transition-colors duration-150">
                  <td className="px-6 py-4 font-medium">{addon.addon}</td>
                  <td className="px-6 py-4 font-semibold text-accent">{addon.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}