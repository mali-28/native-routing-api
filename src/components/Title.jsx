import React from "react";
import { Heading, HStack } from "native-base"

const Title = (props) =>{
    return <>
    <HStack mx="auto">
        <Heading size="lg" fontWeight="600"  color="indigo.700">
          Welcome
        </Heading>
        <Heading mt="2" mx="2" color="coolGray.600" fontWeight="medium" size="xs">
          {props.text} to continue!
        </Heading>
        </HStack>
        </>
}

export default Title;