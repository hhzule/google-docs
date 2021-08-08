import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon";

const Header = () => {
    return (
        <div className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
            <Button
            color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true} 
            ripple="dark"
            className="h-20 w-20 border-0"
            > <Icon name="menu" size="3xl" color="blue"/></Button>
            <Icon name="description" size="5xl" color="blue"/>
            <h1 className="md:inline-flex ml-2 text-gray-700 text-2xl">
                DOCS</h1>

                <div className="md:mx-20 mx-5 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
                    <Icon name="search" size="3xl" color="gray"/>
               <input 
               className="flex-grow px-5 text-base bg-transparent outline-none"
               type="text" placeholder="Search"/>
                </div>
                <Button
            color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true} 
            ripple="dark"
            className="md:ml-20 ml-5 h-20 w-20 border-0"
            >
<Icon name="apps" size="3xl" color="gray"/>

            </Button>
<img 
// onClick={} 
className="cursor-pointer h-12 w-12 rounded-full ml-2"
src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
/>


        </div>
    )
}

export default Header
