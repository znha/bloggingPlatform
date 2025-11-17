'use client';

import { useRouter } from 'next/navigation';
import { FaPlus } from 'react-icons/fa';

export default function AddPostButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/posts/create');
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-4 py-2 bg-[#914151] hover:bg-[#bd6677] text-white font-semibold rounded-md shadow-md transition duration-200"
    >
      <FaPlus className="text-sm" />
      Add Post
    </button>
  );
}