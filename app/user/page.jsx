import Nav from "@/components/Nav";
import Table from "@/components/Table";

const page = async () => {
  return (
    // <!-- component -->
    <>
      {/* // <!-- component --> */}
      <Nav></Nav>
      <div className="w-full h-screen p-2">
        <div className="p-10 ml-10 text-3xl font-black">
          <h1>Data User</h1>
        </div>
        <Table></Table>
      </div>
    </>
  );
};

export default page;
