import React from "react";
import { Button, Flex, Box, Text } from "@chakra-ui/react";
export const ActionButton = ({ children }) => {
  return (
    <Flex>
      <Flex justifyContent={"center"}>
        <Button
          variant={"ghost"}
          sx={{
            bg: "#07115C",
            height: "4rem",
            zIndex: "2",
            borderTopEndRadius: "6px",
            borderBottomStartRadius: "6px",
            borderTopStartRadius: "20px",
            borderBottomEndRadius: "20px",
            border: "3px solid #FF6600",
            color: "white",
            fontWeight: "800",
            fontSize: "25px",
            _active: {
              bg: "#07115C",
            },
            _hover: {
              bg: "#07115C",
            },
            
          }}
        >
          {children}
        </Button>

        <Box
          sx={{
            position: "absolute",
            content: "''",
            zIndex: "1",
            bg: "#FF6600",
            width:'15rem',
            height: "4rem",
            transform: "rotate(-5deg)",
            borderTopEndRadius: "20px",
            borderBottomStartRadius: "20px",
            borderTopStartRadius: "6px",
            borderBottomEndRadius: "6px",
          }}
        ></Box>
      </Flex>
    </Flex>
  );
};
