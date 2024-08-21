import Card from "@/components/Card";
import CreateForm from "@/components/Form";

export default function Home() {
  return (
    <main>
      <h1 className="text-center font-bold text-base mb-5 text-white py-2">
        Home Page
      </h1>

      <div className="px-16">
        <h1 className="mb-6 text-white font-bold">Add New Card</h1>
        <CreateForm />
      </div>
      <div className="p-16">
        <h1 className="text-white mb-6 font-bold">Card List</h1>
        <div className="grid grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1 md:p-8">
          {Array.from({ length: 8 }).map((_, index: number) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
