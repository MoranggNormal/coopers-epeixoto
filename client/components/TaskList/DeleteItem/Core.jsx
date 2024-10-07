import { useUser } from "@/app/userContext";

const DeleteItem = ({ id, removeTask}) => {
  const { user } = useUser();

  const handleDelete = async (id) => {
    if (!user) {
      return;
    }

    const bodyContent = JSON.stringify({ id });

    try {
      const response = await fetch(`/api/task/deleteTask`, {
        method: "DELETE",
        body: bodyContent,
      });

      await response.json();

      removeTask(id);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <span
      onClick={() => handleDelete(id)}
      className="hidden group-hover:block absolute right-0 cursor-pointer font-bold text-[#999999] hover:text-red-400 transition-all"
    >
      delete
    </span>
  );
};

export default DeleteItem;
