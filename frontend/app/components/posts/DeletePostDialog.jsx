"use client";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
export default function DeletePostDialog({ postId }) {
  const router = useRouter();
  const onConfirmDelete = async (postId) => {
    try {
      const res = await fetch(`http://localhost:4000/posts/remove/${postId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      } else {
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button
          className="text-[#914151] hover:text-[#bd6677]"
          aria-label="Delete post"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <AlertDialog.Content className="bg-white p-6 rounded-lg shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-sm">
          <AlertDialog.Title className="text-lg w-full rounded p-2 font-semibold bg-[#914151]  text-white">
            Confirm Deletion
          </AlertDialog.Title>
          <AlertDialog.Description className="text-gray-700 mt-2 mb-6">
            Are you sure you want to delete this post? This action cannot be
            undone.
          </AlertDialog.Description>
          <div className="flex justify-end space-x-4">
            <AlertDialog.Cancel asChild>
              <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-300">
                Cancel
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                onClick={() => onConfirmDelete(postId)}
                className="text-[#914151] hover:text-[#bd6677]"
                aria-label="Delete post"
              >
                Delete
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
