import React from "react";
import { Image, Text, Flex, Box } from "@chakra-ui/react";
import { Section } from "../components/Section";
import img1 from "../assets/home/1.jpg";
import img2 from "../assets/home/2.webp";
import img3 from "../assets/home/3.jpg";
import { ActionButton } from "../components/ActionButton";

export const HeroSection = () => {
  return (
    <Section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.7)), url(${img3})`,
        width: "100vw",
        height: "calc(100vh)",
        backgroundPositionX: "90%",
        backgroundSize: "cover",
      }}
    >
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={{base:"center", md:'start'}}
        paddingLeft={{base:"0", md:"10rem"}}
        alignItems={"center"}
      >
        <Flex width={{base:"87%", "md":'62%'}} flexDir={"column"} gap={5}>
          <Text
            as={"h1"}
            sx={{
              fontSize: {base:"2.2rem", md:'4rem'},
              color: "white",
              fontWeight: "800",
              lineHeight: {base:"30px", md:'60px'},
              textAlign:'left'
            }}
          >
            Seu refúgio na natureza.
          </Text>
          <Text
          sx={{
            fontSize: {base:"1.1rem",md:'1.6rem'},
            color:'white',
            textAlign:"start",
          }}>
            Relaxe e <b>renove</b> as energias na <b>Pousada Aconchego</b>. Conforto,
            tranquilidade e hospitalidade <b>esperam por você</b>.
          </Text>
          <ActionButton>RESERVE AGORA</ActionButton>
        </Flex>
      </Flex>
    </Section>
  );
};
