import { LucideIcon } from "lucide-react";

interface PricingRow {
  service: string;
  price: string;
  details: string;
}

interface PricingWidgetProps {
  title: string;
  icon: LucideIcon;
  rows: PricingRow[];
}

export default function PricingWidget({ title, icon: Icon, rows }: PricingWidgetProps) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <Icon className="w-8 h-8 mr-3 text-accent" />
        {title}
      </h3>
      <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Service</th>
                <th className="px-6 py-4 text-left font-semibold">Price</th>
                <th className="px-6 py-4 text-left font-semibold">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100 transition-colors duration-150">
                  <td className="px-6 py-4 font-medium">{row.service}</td>
                  <td className="px-6 py-4 font-semibold text-accent">{row.price}</td>
                  <td className="px-6 py-4 text-neutral">{row.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}