export default function Card({ children, header }) {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden">
      <div className="border-b bg-gray-50 p-5">
        <h4 className="font-semibold text-lg text-gray-800">{header}</h4>
      </div>

      <div className="p-5">{children}</div>
    </div>
  );
}
