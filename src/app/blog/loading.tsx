export default function LoadingBlog() {
  const printLoadingContent = () => {
    const fakeArray = [...Array(4)];

    return fakeArray.map((value, index) => {
      return (
        <div
          key={index}
          className="shadow rounded-lg animate-pulse overflow-hidden"
        >
          {/* fake image */}
          <div className="bg-slate-200 h-48 w-full mb-3"></div>
          {/* fake title */}
          <div className="h-4 bg-slate-300 rounded w-3/4"></div>
        </div>
      );
    });
  };
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-black">Loading news...</h1>
      <div className="grid grid-cols-2 gap-6">{printLoadingContent()}</div>
    </div>
  );
}
