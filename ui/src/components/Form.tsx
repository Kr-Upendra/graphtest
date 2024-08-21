import { create } from "@/action/addCard";

export default function CreateForm() {
  return (
    <form action={create}>
      <div>
        <label className="block text-gray-500 text-sm mb-2" htmlFor="title">
          Enter Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter Title here.."
          className="bg-inherit border border-gray-700 rounded-lg py-2 px-4 outline-none font-medium text-white text-base w-full"
        />
      </div>
      <div>
        <button
          className="py-2 px-4 rounded-full text-white bg-indigo-600 mt-4"
          type="submit"
        >
          Add Card
        </button>
      </div>
    </form>
  );
}
