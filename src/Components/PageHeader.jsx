import { Link } from "react-router-dom";

const PageHeader = ({ title }) => {
  return (
    <div className="page-header bg-[url('https://tinyurl.com/y3bwu4n6')] bg-cover bg-center rounded-lg overflow-hidden">
      <div className="bg-overlay h-full py-28 text-white relative">
        <h1 className="text-white text-4xl text-center">{title}</h1>
        <div className="breadcrumbs absolute bottom-0 w-full">
          <div className="flex justify-center">
            <div
              className="bg-primary px-5 py-2 min-w-[150px] text-center relative tracking-wider
            before:absolute before:right-full before:top-0 before:w-0 before:h-0 before:border-primary before:border-[20px] before:border-l-transparent before:border-t-transparent
            after:absolute after:left-full after:top-0 after:w-0 after:h-0 after:border-primary after:border-[20px] after:border-r-transparent after:border-t-transparent"
            >
              <Link to="/">Home</Link> / {title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
