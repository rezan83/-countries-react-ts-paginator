import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  // Link as ChLink,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  // useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center
} from '@chakra-ui/react';
import { MoonIcon, StarIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <ChLink
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700')
//     }}
//     href={'#'}>
//     {children}
//   </ChLink>
// );

export default function Nav() {
  const favoriteCount = useAppSelector(state => state.countryR.favoriteCountries.length);
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className="navbar" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontSize={'2rem'}>Logo</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button>
                <Link to="/countries">Countries</Link>
              </Button>
              <Button>
                <Link to="/details">Details</Link>
              </Button>
              <Button>
                <Link to="/favorite">
                  <StarIcon color={favoriteCount ? 'yellow' : ''} />
                  {favoriteCount}
                </Link>
              </Button>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'ChLink'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar size={'sm'} src={'https://avatars.dicebear.com/api/male/username.svg'} />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

//

// import { ReactNode } from 'react';
// import {
//   Box,
//   Flex,
//   Avatar,
//   HStack,
//   Link,
//   IconButton,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// const Links = ['Dashboard', 'Projects', 'Team'];

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

// export default function Simple() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
//         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//           <IconButton
//             size={'md'}
//             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//             aria-label={'Open Menu'}
//             display={{ md: 'none' }}
//             onClick={isOpen ? onClose : onOpen}
//           />
//           <HStack spacing={8} alignItems={'center'}>
//             <Box>Logo</Box>
//             <HStack
//               as={'nav'}
//               spacing={4}
//               display={{ base: 'none', md: 'flex' }}>
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </HStack>
//           </HStack>
//           <Flex alignItems={'center'}>
//             <Menu>
//               <MenuButton
//                 as={Button}
//                 rounded={'full'}
//                 variant={'link'}
//                 cursor={'pointer'}
//                 minW={0}>
//                 <Avatar
//                   size={'sm'}
//                   src={
//                     'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
//                   }
//                 />
//               </MenuButton>
//               <MenuList>
//                 <MenuItem>Link 1</MenuItem>
//                 <MenuItem>Link 2</MenuItem>
//                 <MenuDivider />
//                 <MenuItem>Link 3</MenuItem>
//               </MenuList>
//             </Menu>
//           </Flex>
//         </Flex>

//         {isOpen ? (
//           <Box pb={4} display={{ md: 'none' }}>
//             <Stack as={'nav'} spacing={4}>
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </Stack>
//           </Box>
//         ) : null}
//       </Box>

//       <Box p={4}>Main Content Here</Box>
//     </>
//   );
// }
