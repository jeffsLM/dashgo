import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavSection } from './NavSection'
import { NavLink } from './NavLink'
export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <NavSection title="GERAL">
                    <NavLink icon={RiDashboardLine} fontSize="20" >
                        Dashboard
                    </NavLink>
                    <NavLink icon={RiContactsLine} fontSize="20" >
                        Usuários
                    </NavLink>
                </NavSection>
                <NavSection title="AUTOMAÇÃO">
                    <NavLink icon={RiInputMethodLine} fontSize="20" >
                        Formulários
                    </NavLink>
                    <NavLink icon={RiGitMergeLine} fontSize="20" >
                        Automação
                    </NavLink>
                </NavSection>
            </Stack>
        </Box>
    )
}