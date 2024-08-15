import { RiCalendarTodoFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="h-28 flex p-3 items-center justify-between border-b border-blue-600 w-11/12 mx-auto">
      <h1 className="text-[50px] font-bold">Todo</h1>
      <div className="flex gap-3">
        <div>
          <h3 className="text-[22px] text-right font-semibold">Today</h3>
          <h6>17 Feb 2024</h6>
        </div>
        <RiCalendarTodoFill className="size-16 text-blue-700" />
      </div>
    </div>
  );
};

export default Header;
