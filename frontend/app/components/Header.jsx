'use client';

import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../lib/features/auth/authSlice';

export default function Header() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#914151]">
          CodeBlog
        </Link>

        <nav className="space-x-4">
          {user ? (
            <>
              <span className="text-[#914151] font-medium">Hello, {user.name}</span>
              <button
                onClick={() => dispatch(logout())}
                className="text-gray-700 hover:text-gray-500 font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/user/register" className="text-[#914151] hover:text-[#bd6677] font-medium">
                Register
              </Link>
              <Link href="/user/login" className="text-[#914151] hover:text-[#bd6677] font-medium">
                Login
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}