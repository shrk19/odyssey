export default function CardContent(props) {
  return (
    <>
        <img src={props.img} className='h-[74px] w-[74px]'></img>
        <h1 className='content text-base font-bold'>{props.head}</h1>
        <p className='content'>{props.body}</p>
    </>
  )
}
