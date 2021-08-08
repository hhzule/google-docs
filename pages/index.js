import Head from 'next/head'
import Header from "../components/Header";
import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image"

export default function Home() {
  return (
    <div 
    //className="flex flex-col items-center justify-center min-h-screen py-2"
    >
      <Head>
        <title>Google Doc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header/>
<section  className="bg-[#F8F9FA] pb-10 -x-10">
  <div  className="max-w-3xl mx-auto" >
    <div  className="flex items-center justify-between py-6">
      <h2  className="text-gray-700 text-lg"> Start a new document</h2>
      <Button
            color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true} 
            ripple="dark"
            className="border-0"
            >
<Icon name="more_vert" size="3xl" color="gray"/>

            </Button>
  
    </div>
<div>
 <div className="relative h-52 w-40">

<Image 
src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"

layout="fill"/>
   
   </div>
</div>
  </div>


</section>
      <footer className="flex items-center justify-center w-full h-24 border-t">
  footer
      </footer>
    </div>
  )
}
