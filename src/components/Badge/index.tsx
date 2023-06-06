const index = ({ description, top }: { description: string; top: number }) => {
  return (
    <span
      style={{ top: `${top}%` }}
      className={`w-[9rem] flex text-white border items-center gap-2 absolute right-8 text-lg font-medium px-2.5 py-0.5 rounded bg-btn`}
    >
      {description}
    </span>
  );
};

export default index;
