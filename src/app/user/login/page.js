import { Input } from '@/components/ui/input';

export default function Page() {
  return (
    <div className="flex justify-center mt-32 min-h-screen">
      <div className="w-full max-w-sm ">
        <h1 className="text-text font-bold text-2xl text-center mb-6">
          Login to QuickTrip
        </h1>
        <form className="space-y-5">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <Input
              id="email"
              type="email"
              className="mt-1 bg-slate-200 p-3 w-full"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <Input
              id="password"
              type="password"
              className="mt-1 bg-slate-200 p-3 w-full"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
