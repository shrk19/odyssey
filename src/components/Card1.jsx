import CardContent from './CardContent'

export default function Card1(props) {
  return (
    <div className='h-[280px] w-full min-[480px]:w-1/2 px-4 py-4  justify-center'>
        <CardContent head={props.head} body={props.body} img={props.img}/>
    </div>
  )
}
