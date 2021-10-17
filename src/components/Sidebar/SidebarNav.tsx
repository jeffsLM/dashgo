import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { Stack } from "@chakra-ui/react";

import { NavSection } from './NavSection'
import { NavLink } from './NavLink'
export function SidebarNav(){

    return (
        <Stack spacing="12" align="flex-start">
                <NavSection title="GERAL">
                    <NavLink icon={RiDashboardLine} href="/dashboard" fontSize="20" >
                        Dashboard
                    </NavLink>
                    <NavLink icon={RiContactsLine} href="/users" fontSize="20" >
                        Usuários
                    </NavLink>
                </NavSection>
                <NavSection title="AUTOMAÇÃO">
                    <NavLink icon={RiInputMethodLine} href="/forms" fontSize="20" >
                        Formulários
                    </NavLink>
                    <NavLink icon={RiGitMergeLine} href="/automation" fontSize="20" >
                        Automação
                    </NavLink>
                </NavSection>
            </Stack>
    )
}