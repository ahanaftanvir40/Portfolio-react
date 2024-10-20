
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import img from '../assets/portfolio.jpg'
import { useState } from "react";

function NavBar() {
    const handleScroll = (id) => {
        // console.log('scroll: ' , id);
        const element = document.getElementById(id)
        // console.log(element);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const [activeItem, setActiveItem] = useState("home");


    return (

        <Navbar className='shadow-xl md:w-full lg:w-1/2 lg:rounded-full mx-auto' shouldHideOnScroll>
            <NavbarBrand>
                <Link onPress={() => { handleScroll("home"); setActiveItem('home') }} className="font-bold text-inherit text-4xl cursor-pointer">Ahanaf.</Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4 cursor-pointer" justify="center">
                <NavbarItem isActive={activeItem === 'about'}>
                    <Link color="foreground" className={`${activeItem === 'about' ? 'text-purple-600' : ''}`} onPress={() => { handleScroll("about"); setActiveItem('about') }}>
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeItem === 'projects'}>
                    <Link color="foreground" className={`${activeItem === 'projects' ? 'text-purple-600' : ''}`} onPress={() => { handleScroll("projects"); setActiveItem('projects') }} >
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeItem === 'skills'}>
                    <Link color="foreground" className={`${activeItem === 'skills' ? 'text-purple-600' : ''}`} onPress={() => { handleScroll('skills'); setActiveItem('skills') }}>
                        Skills
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeItem === 'education'}>
                    <Link color="foreground" className={`${activeItem === 'education' ? 'text-purple-600' : ''}`} onPress={() => { handleScroll('education'); setActiveItem('education') }}>
                        Education
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <Dropdown placement="bottom-end" className="bg-[#5e4d9b] text-white/70 font-semibold ">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src={img}
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">

                        <DropdownItem key="settings"><a href="/Ahanaf-Tanvir's-CV.pdf" download="Ahanaf-Tanvir's-CV.pdf">Get My CV</a></DropdownItem>
                        <DropdownItem key="team_settings">Contact</DropdownItem>

                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>

    )
}

export default NavBar