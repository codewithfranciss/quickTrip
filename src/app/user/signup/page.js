import { Input } from '@/components/ui/input';

export default function Page() {
  return (
    <div className="flex justify-center mt-32 min-h-screen">
      <div className="w-full max-w-sm ">
        <h1 className="text-gray-800 font-bold text-2xl text-center mb-6">
          Sign Up to QuickTrip
        </h1>
        <form className="space-y-5">
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <Input
              id="username"
              type="text"
              className="mt-1 bg-slate-200 p-3  w-full"
              placeholder="Enter your username"
              required
            />
          </div>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <Input
              id="email"
              type="email"
              className="mt-1 bg-slate-200 p-3  w-full"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Phone Number Input */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              className="mt-1 bg-slate-200 p-3  w-full"
              placeholder="Enter your phone number"
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
              className="mt-1 bg-slate-200 p-3  w-full"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Checkbox for Terms and Conditions */}
          <div className="flex items-center space-x-2">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 text-blue-600 bg-slate-200 p-3  border-gray-300 rounded focus:ring-blue-500"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Create an Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
