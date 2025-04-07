interface TagProps {
  label: string;
}

export default function Tag({
  label
}: TagProps) {
  return (
    <p className='bg-dark-a20 px-2 py-1 rounded-md text-white/70'>{label}</p>
  );
}
