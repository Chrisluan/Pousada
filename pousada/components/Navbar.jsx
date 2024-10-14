import React from "react";
import {
  Box,
  Image,
  Flex,
  IconButton,
  useMediaQuery,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuIcon,
  MenuList,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { TiThMenu } from "react-icons/ti";
import { HiChevronDown, HiGlobeAmericas } from "react-icons/hi2";
import { RiCloseLine } from "react-icons/ri";
import { HiMiniHome } from "react-icons/hi2";
import { HiTicket } from "react-icons/hi2";
import { IoBed } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { TbPhotoFilled } from "react-icons/tb";
import logo from "../assets/logo.svg";
import { color } from "framer-motion";
import { ActionButton } from "../components/ActionButton.jsx";
export const Navbar = () => {
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <header
      style={{
        overflowX: "hidden",
      }}
    >
      <Flex
        sx={{
          zIndex: "1000",
          position: "absolute",
          width: "100vw",
          height: "5rem",
          backgroundColor: "#07115C",
        }}
      >
        <Flex alignItems={"center"} w={"100%"} justifyContent={"space-around"}>
          <Image h={"70%"} transform={"translateY(5px)"} src={logo} />
          <Flex>
            {isMobile ? (
              <>
                <IconButton
                  ref={btnRef}
                  onClick={onOpen}
                  sx={{
                    backgroundColor: "transparent",
                    _hover: {
                      backgroundColor: "transparent",
                    },
                    _active: {
                      backgroundColor: "transparent",
                    },
                  }}
                  icon={<TiThMenu size={"35px"} color="white"></TiThMenu>}
                  background={"white"}
                ></IconButton>
                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  gap={0}
                  finalFocusRef={btnRef}
                  preserveScrollBarGap={false}
                >
                  <DrawerOverlay zIndex="1299" />
                  <Box>
                    <DrawerContent maxW={"300px"} bg="#07115C" zIndex={"1300"}>
                      <DrawerHeader
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"space-between"}
                      >
                        <IconButton
                          onClick={onClose}
                          sx={{
                            bg: "transparent",
                            _active: {
                              bg: "transparent",
                            },
                            _hover: {
                              bg: "transparent",
                            },
                          }}
                          icon={<RiCloseLine color="white" size={"30px"} />}
                        />
                        <Image
                          src={logo}
                          width={"60%"}
                          transform={"translateY(6px)"}
                        ></Image>
                      </DrawerHeader>
                      <Flex justifyContent={"center"} width={"100%"}>
                        <Divider width={"90%"} colorScheme={"pink"}></Divider>
                      </Flex>
                      <DrawerBody>
                        <List
                          sx={{
                            pt: "50px",
                            width: "100%",
                            textAlign: "center",
                            height: "60%",
                            color: "white",
                            fontSize: "1.4rem",
                          }}
                          spacing={"20px"}
                        >
                          <ListItem>
                            <Flex
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              HOME
                              <HiMiniHome />
                            </Flex>
                          </ListItem>

                          <ListItem>
                            <Flex
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              QUARTOS
                              <IoBed />
                            </Flex>
                          </ListItem>

                          <ListItem>
                            <Flex
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              RESERVAS
                              <HiTicket />
                            </Flex>
                          </ListItem>

                          <ListItem>
                            <Flex
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              GALERIA
                              <TbPhotoFilled />
                            </Flex>
                          </ListItem>

                          <ListItem>
                            <Flex
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              LOCALIZAÇÃO
                              <FaLocationDot />
                            </Flex>
                          </ListItem>
                        </List>
                        <ActionButton>RESERVE AGORA</ActionButton>
                      </DrawerBody>
                    </DrawerContent>
                    <Box
                      sx={{
                        display: "block",
                        top: 0,
                        right: 0,
                        width: "320px",
                        position: "absolute",
                        height: "110%",
                        content: "''",
                        backgroundColor: "#FF6600",
                        transform: "rotate(5deg) translateX(30px)",
                        zIndex: "1300",
                      }}
                    ></Box>
                  </Box>
                </Drawer>
              </>
            ) : (
              <Flex gap={20}>
                <Box
                  lang="pt-br"
                  sx={{
                    listStyle: "none",
                    display: "flex",
                    color: "white",
                    gap: "2rem",
                    width: "100%",
                    "& > li": {
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      position: "relative", // Importante para que o after seja posicionado corretamente
                      _hover: {
                        "&::after": {
                          transform: "scaleX(1)", // Animação de escala na largura
                          opacity: 1, // Tornar visível no hover
                        },
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "100%",
                        height: "2px",
                        bg: "#FF6600",
                        left: "0",
                        bottom: "0",
                        transform: "scaleX(0)",
                        transformOrigin: "center",
                        transition: "transform 0.3s ease, opacity 0.3s ease",
                      },
                    },
                  }}
                >
                  <li>
                    <a href="#">HOME</a>
                  </li>
                  <li>
                    <a href="#">QUARTOS</a>
                  </li>
                  <li>
                    <a href="#">RESERVAS</a>
                  </li>
                  <li>
                    <a href="#">GALERIA</a>
                  </li>
                  <li>
                    <a href="#">LOCALIZAÇÃO</a>
                  </li>
                </Box>
                <Menu>
                  <MenuButton
                    width={"100%"}
                    paddingInline={"2"}
                    textAlign={"center"}
                    justifyItems={"center"}
                    height="100%"
                    as={Button}
                    rightIcon={<HiChevronDown />}
                    leftIcon={<HiGlobeAmericas size={"20px"} />}
                    border
                  >
                    PT-BR
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <a href="#">PT-BR</a>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        sx={{
          position: "absolute",
          zIndex: 999,
          width: "100%",
          height: "5rem",
          transform: { base: "rotate(-4deg)", md: "rotate(-1.5deg)" },
          transformOrigin: "80% 80%",
          backgroundColor: "#FF6600",
        }}
      ></Flex>
    </header>
  );
};
