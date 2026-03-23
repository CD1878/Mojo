interface MenuItemProps {
  title: string;
  description?: string;
  price: string;
  options?: string[];
}

export default function MenuItem({ title, description, price, options }: MenuItemProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="text-xl font-heading tracking-wider uppercase text-white">{title}</h3>
        <div className="text-xl font-heading tracking-wider text-white whitespace-nowrap ml-4">
          {price.includes('€') || price.toLowerCase().includes('prijs') ? price : `€ ${price}`}
        </div>
      </div>
      {description && <p className="text-gray-400 text-base">{description}</p>}
      {options && options.length > 0 && (
        <div className="mt-2 space-y-1">
          {options.map((opt, idx) => (
            <p key={idx} className="text-gray-500 text-sm italic">{opt}</p>
          ))}
        </div>
      )}
    </div>
  );
}
