export default function Card(props) {
  return (
      <div className='h-[300px] w-full md:w-1/3 my-2 md:mx-2 rounded-[24px] bg-white grid grid-row-6 p-8 shadow-lg shadow-gray-500/50'>
        <div><h1 className='text-primary text-4xl font-bold'>{props.num}</h1></div>
        <div><h1 className='text-black-bold text-sm font-bold'>{props.heading}</h1></div>
        <div className='row-span-4'><p className='text-black-bold content font-semibold'>{props.content}</p></div>
      </div>
  )
}
