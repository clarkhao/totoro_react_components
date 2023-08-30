import Image from 'next/image'
import Input from '@/component/input/Input'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Input labelText='Name' name='name' needVerified type='text'/>
    </main>
  )
}
