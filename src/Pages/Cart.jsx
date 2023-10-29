import PageHeader from "../Components/PageHeader";
import { IoReturnUpBackOutline, IoTrashOutline } from "react-icons/io5";

import service1 from "./../assets/images/services/1.jpg";

const Cart = () => {
  return (
    <div>
      <PageHeader title="Cart" />

      {/* cart items */}
      <div className="relative overflow-x-auto sm:rounded-lg py-20">
        <table className="w-full text-sm text-left">
          <tbody className="border-t">
            <tr className="border-b">
              <td className="px-6 py-4">
                <button className="h-10 w-10 border rounded-full bg-bgGray">
                  X
                </button>
              </td>
              <td className="px-6 py-4">
                <img
                  className="w-20 h-20 object-cover rounded-md"
                  src={service1}
                  alt=""
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-lg">
                Martha Knit Top
              </td>
              <td className="px-6 py-4">22-10-2022</td>
              <td className="px-6 py-4">
                <button className="btn btn-primary">Pending</button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4">
                <button className="h-10 w-10 border rounded-full bg-bgGray">
                  X
                </button>
              </td>
              <td className="px-6 py-4">
                <img
                  className="w-20 h-20 object-cover rounded-md"
                  src={service1}
                  alt=""
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-lg">
                Martha Knit Top
              </td>
              <td className="px-6 py-4">22-10-2022</td>
              <td className="px-6 py-4">
                <button className="btn btn-primary">Pending</button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4">
                <button className="h-10 w-10 border rounded-full bg-bgGray">
                  X
                </button>
              </td>
              <td className="px-6 py-4">
                <img
                  className="w-20 h-20 object-cover rounded-md"
                  src={service1}
                  alt=""
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-lg">
                Martha Knit Top
              </td>
              <td className="px-6 py-4">22-10-2022</td>
              <td className="px-6 py-4">
                <button className="btn btn-primary">Pending</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-between py-10">
          <button className="text-text flex gap-3 items-center hover:text-secondary">
            <IoReturnUpBackOutline className="text-xl" /> Continue Shopping
          </button>
          <button className="text-text flex gap-3 items-center hover:text-secondary">
            <IoTrashOutline className="text-xl" /> Clear Shopping Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
