import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";
import { RiMenu4Line } from "react-icons/ri";

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from './Profile';
import { SearchBox } from "./SearchBox";

export function Header() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    const { onOpen } = useSidebarDrawer()


    return (
        <Flex
            as="header"
            w="100%"
            maxW={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >

            {
                !isWideVersion && (
                    <IconButton
                        variant="unstyled"
                        fontSize="24"
                        aria-label="Open Navigation"
                        onClick={onOpen}
                        icon={<Icon
                            as={RiMenu4Line} />
                        }
                        mr="2"
                    >

                    </IconButton>
                )
            }
            <Logo />
            {isWideVersion && <SearchBox />}
            <Flex align="center" ml="auto">
                <NotificationNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex >
    );
}