
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import img from '../assets/portfolio.jpg'
import { useState } from "react";

function NavBar() {
    const handleScroll = (id)=>{
        // console.log('scroll: ' , id);
        const element = document.getElementById(id)
        // console.log(element);

        if(element){
            element.scrollIntoView({behavior:"smooth"})
        }
    }

    const [activeItem, setActiveItem] = useState("home");

    
    return (
        <Navbar className='shadow-xl shadow-purple-950' shouldHideOnScroll>
            <NavbarBrand>
                
                <p className="font-bold text-inherit text-4xl">Ahanaf.</p>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4 cursor-pointer" justify="center">
                <NavbarItem isActive={activeItem === 'home'}>
                    <Link color="foreground" className={`${activeItem === 'home' ? 'text-purple-600' : ''}`}  onPress={()=>{handleScroll("home") ; setActiveItem('home')}}>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeItem === 'projects'}>
                    <Link color="foreground" className={`${activeItem === 'projects' ? 'text-purple-600' : ''}`}  onPress={()=>{handleScroll("projects") ; setActiveItem('projects')}} >
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeItem === 'skills'}>
                    <Link color="foreground" className={`${activeItem === 'skills' ? 'text-purple-600' : ''}`}  onPress={()=>{handleScroll('skills'); setActiveItem('skills')} }>
                        Skills
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeItem === 'education'}>
                    <Link color="foreground" className={`${activeItem === 'education' ? 'text-purple-600' : ''}`} onPress={()=>{handleScroll('education'); setActiveItem('education')} }>
                        Education
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <Dropdown placement="bottom-end">
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
                     
                        <DropdownItem key="settings">Get My CV</DropdownItem>
                        <DropdownItem key="team_settings">Team Settings</DropdownItem>
                        <DropdownItem key="analytics">Analytics</DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">Configurations</DropdownItem>
                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    )
}

export default NavBar