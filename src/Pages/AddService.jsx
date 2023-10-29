import PageHeader from "../Components/PageHeader";

const AddService = () => {
  return (
    <div>
      <PageHeader title="Add Service" />
      <div className="my-20 p-8 bg-bgGray rounded-lg">
        <form className="grid sm:grid-cols-2 gap-5">
          <div className="form-group">
            <label htmlFor="name" className="sr-only">
              Service Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Service Name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price" className="sr-only">
              Service Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Service Price"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="text" className="sr-only">
              Text Here
            </label>
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Text Here"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="type" className="sr-only">
              Service Type
            </label>
            <input
              type="text"
              id="type"
              name="type"
              placeholder="Service Type"
              className="form-input"
            />
          </div>
          <div className="form-group col-span-2">
            <label htmlFor="description" className="sr-only">
              Service Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Service Description"
              className="form-input min-h-[200px]"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary col-span-2 block">
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
