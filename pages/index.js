import Link from 'next/link'
import Image from 'next/image'
import Coffee from '../public/coffee.png'

// <Image src='/coffee.png' layout='fill' />

export default function Home() {
  return (
    <div>
      <Link href="/chanchito">Ir al chanchito</Link>
      <br></br><br></br><br></br><br></br>
      <Image src={Coffee} width={400} height={400}/>
      <p>usted está en el inicio</p>
    </div>
  )
}
