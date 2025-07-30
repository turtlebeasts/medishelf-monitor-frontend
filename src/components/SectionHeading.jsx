export default function SectionHeading({ text }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white border-b-2 border-blue-600 pb-1 mb-6 w-fit">
      {text}
    </h2>
  );
}
