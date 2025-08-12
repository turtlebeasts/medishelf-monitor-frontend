export default function ProfileCard({ user }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col sm:flex-row items-center gap-6">
      <img
        src={user?.avatar ? user.avatar : "https://placehold.co/100x100"}
        alt={user.name}
        className="w-24 h-24 rounded-full object-cover border border-gray-300 dark:border-gray-600"
      />

      <div className="flex-1 space-y-2 text-center sm:text-left">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {user.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">📧 {user.email}</p>
        <p className="text-gray-600 dark:text-gray-300">📍 {user.location}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Joined on {new Date(user.date_joined).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
