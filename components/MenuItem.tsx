interface MenuItemProps {
  title: string;
  description?: string;
  price: string;
  options?: string[];
  isVegan?: boolean;
  isVegetarian?: boolean;
}

export default function MenuItem({ title, description, price, options, isVegan, isVegetarian }: MenuItemProps) {
  return (
    <div className="flex flex-col group mb-8">
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-[15px] md:text-base font-bold tracking-widest uppercase text-current group-hover:text-accent transition-colors duration-300">
          {title}
          {(isVegetarian || isVegan) && (
             <span className="inline-block ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded-sm border border-current opacity-60 align-middle">
               {isVegetarian ? 'V' : 'VG'}
             </span>
          )}
        </h3>
        <div className="text-[15px] md:text-base font-bold tracking-wider text-current whitespace-nowrap">
          {price.includes('€') || price.toLowerCase().includes('prijs') || price.includes('-') ? price : `€ ${price}`}
        </div>
      </div>
      {description && <p className="opacity-80 text-sm leading-relaxed mt-1 max-w-[280px]">{description}</p>}
      {options && options.length > 0 && (
        <div className="mt-1 text-sm opacity-70 italic space-y-1">
          {options.map((opt, idx) => (
            <p key={idx}>{opt}</p>
          ))}
        </div>
      )}
    </div>
  );
}
