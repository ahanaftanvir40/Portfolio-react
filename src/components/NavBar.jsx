
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import img from '../assets/portfolio.jpg'
function NavBar() {
    const handleScroll = (id)=>{
        // console.log('scroll: ' , id);
        const element = document.getElementById(id)
        // console.log(element);

        if(element){
            element.scrollIntoView({behavior:"smooth"})
        }
    }
    return (
        <Navbar className='shadow-lg shadow-purple-900' shouldHideOnScroll>
            <NavbarBrand>
                
                <p className="font-bold text-inherit text-4xl">Ahanaf.</p>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" onPress={()=>handleScroll("projects")} >
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page" color="secondary">
                        Skills
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
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