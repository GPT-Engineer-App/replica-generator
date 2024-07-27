import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-12 md:py-24 max-w-7xl mx-auto">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-5xl font-bold mb-6">NeetCode</h1>
        <p className="text-2xl mb-8">A better way to prepare for coding interviews.</p>
        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">Get Pro</Button>
      </div>
      <div className="md:w-1/2">
        <img src="/placeholder.svg" alt="Roadmap" className="w-full max-w-lg mx-auto" />
      </div>
    </div>
  );
};

export default Index;
