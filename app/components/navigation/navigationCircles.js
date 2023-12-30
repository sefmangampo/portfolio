export default function NavigationCircles({ selected, dispatch, number }) {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        dispatch(number);
      }}
      className={`block w-3 h-3 rounded-xl
         transition-colors ease-in-out
           duration-500
       ${selected ? " bg-red-600" : "bg-slate-100"}`}
      href=""
    ></a>
  );
}
