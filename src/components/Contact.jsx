import Button from './Button'

export default function Contact() {
  return (
    <div className='md:px-10 py-4' id='contact'>
        <div className='md:h-[300px] h-[400px] w-full bg-[url("/assets/bg3.jpg")] bg-no-repeat bg-cover md:rounded-[40px]'>
            <div className='w-4/5 lg:w-3/5 px-10 pt-10'>
                <h1 className='heading py-5'>Join our community</h1>
                <p className='content text-white'>of stargazers, explorers, and cosmic enthusiasts as we embark on a journey through the cosmos like never before.</p>
            </div>
            <form id='form' className='p-2 px-10' >
                <input className='h-10 w-full px-4 md:w-2/5 rounded-[16px]' placeholder='Enter your email.' />
                <Button text="Submit" color="bg-primary"/>
            </form>
        </div>
    </div>
  )
}
