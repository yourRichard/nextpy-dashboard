

import { Fragment, useCallback, useContext } from "react"
import { Container_c2c13def0862629a7de8f0f924dae8f1, Container_dc2d5aca502c9ac8608835b2ffc0d580, Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Button, Container, Divider, HStack, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event } from "/utils/state"
import NextHead from "next/head"



export function Container_06cb679a0ab654ff803c6716bfc60e35 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf3db2764e74ca232f8b7c9ca3c8344d = useCallback((_e) => addEvents([Event("state.state.emptyFunction", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_cf3db2764e74ca232f8b7c9ca3c8344d} sx={{"width": "10.5em", "height": "5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double purple", "cursor": "pointer", "borderRadius": "10px", "spacing": "time", "childern": ["<BellIcon sx={{\"transform\": \"Scale(1.75)\", \"_light\": {\"color\": \"rgba(255,255,255,0.81)\"}}}/>"]}}/>
  )
}

export function Container_0e8645aa9d5ad6a69c83ac96e60ff565 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf3db2764e74ca232f8b7c9ca3c8344d = useCallback((_e) => addEvents([Event("state.state.emptyFunction", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_cf3db2764e74ca232f8b7c9ca3c8344d} sx={{"width": "5em", "height": "10.5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double orange", "cursor": "pointer", "borderRadius": "10px", "spacing": "calendar", "childern": ["<BellIcon sx={{\"transform\": \"Scale(1.75)\", \"_light\": {\"color\": \"rgba(255,255,255,0.81)\"}}}/>"]}}/>
  )
}

export function Hstack_7614b434ca96b9d25772cbb7cf14b553 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <HStack spacing={state__state.spacing}>
  <Vstack_ee062c025ac9b0142ee4a639beab4adb/>
  <VStack sx={{"transition": "all 550ms ease"}}>
  <HStack>
  <VStack>
  <Container_dc2d5aca502c9ac8608835b2ffc0d580/>
  <Container_c2c13def0862629a7de8f0f924dae8f1/>
  <Container_dc2d5aca502c9ac8608835b2ffc0d580/>
</VStack>
  <VStack>
  <Container_c42146e97d83ae0e224f6097eeacdbf2/>
  <Container_8a21fc90ead509c6c0d094949c3e6853/>
</VStack>
</HStack>
  <Container_06cb679a0ab654ff803c6716bfc60e35/>
</VStack>
</HStack>
  )
}

export function Button_cbb2ea6934937391e2a6f6318c8d2b6c () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_fff55c8a8481ac2300f52733f0af6685 = useCallback((_e) => addEvents([Event("state.state.setHalf", {})], (_e), {}), [addEvents, Event])

  return (
    <Button colorScheme={`none`} onClick={on_click_fff55c8a8481ac2300f52733f0af6685} sx={{"color": "rgba(255,255,255,0.81)"}}>
  <Text sx={{"fontSize": "10px"}}>
  {`2x`}
</Text>
</Button>
  )
}

export function Container_8a21fc90ead509c6c0d094949c3e6853 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf3db2764e74ca232f8b7c9ca3c8344d = useCallback((_e) => addEvents([Event("state.state.emptyFunction", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_cf3db2764e74ca232f8b7c9ca3c8344d} sx={{"width": "5em", "height": "10.5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double orange", "cursor": "pointer", "borderRadius": "10px", "spacing": "email", "childern": ["<BellIcon sx={{\"transform\": \"Scale(1.75)\", \"_light\": {\"color\": \"rgba(255,255,255,0.81)\"}}}/>"]}}/>
  )
}

export function Container_a930d4736ef5df225b2650bd6baa5a55 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf3db2764e74ca232f8b7c9ca3c8344d = useCallback((_e) => addEvents([Event("state.state.emptyFunction", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_cf3db2764e74ca232f8b7c9ca3c8344d} sx={{"width": "5em", "height": "5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double teal", "cursor": "pointer", "borderRadius": "10px", "spacing": "link", "childern": ["<BellIcon sx={{\"transform\": \"Scale(1.5)\", \"_light\": {\"color\": \"rgba(255,255,255,0.81)\"}}}/>"]}}/>
  )
}

export function Button_fdbc1ec9455adcea88b642b1ffa00f0f () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_24f77ee6b09d19a1b966f5fb2f535473 = useCallback((_e) => addEvents([Event("state.state.setFull", {})], (_e), {}), [addEvents, Event])

  return (
    <Button colorScheme={`none`} onClick={on_click_24f77ee6b09d19a1b966f5fb2f535473} sx={{"color": "rgba(255,255,255,0.81)"}}>
  <Text sx={{"fontSize": "10px"}}>
  {`1x`}
</Text>
</Button>
  )
}

export function Container_f4007775b0c263d0265d51194b1868a9 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf3db2764e74ca232f8b7c9ca3c8344d = useCallback((_e) => addEvents([Event("state.state.emptyFunction", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_cf3db2764e74ca232f8b7c9ca3c8344d} sx={{"width": "10.5em", "height": "10.5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double gray", "cursor": "pointer", "borderRadius": "10px", "spacing": "time", "childern": ["<BellIcon sx={{\"transform\": \"Scale(4)\", \"_light\": {\"color\": \"rgba(255,255,255,0.81)\"}}}/>"]}}/>
  )
}

export function Vstack_ee062c025ac9b0142ee4a639beab4adb () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <VStack spacing={state__state.leftSpacing} sx={{"transition": "all 550ms ease"}}>
  <HStack>
  <VStack>
  <Container_c2c13def0862629a7de8f0f924dae8f1/>
  <Container_a930d4736ef5df225b2650bd6baa5a55/>
</VStack>
  <Container_0e8645aa9d5ad6a69c83ac96e60ff565/>
</HStack>
  <Container_f4007775b0c263d0265d51194b1868a9/>
</VStack>
  )
}

export function Container_c42146e97d83ae0e224f6097eeacdbf2 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf3db2764e74ca232f8b7c9ca3c8344d = useCallback((_e) => addEvents([Event("state.state.emptyFunction", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_cf3db2764e74ca232f8b7c9ca3c8344d} sx={{"width": "5em", "height": "5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double gray", "cursor": "pointer", "borderRadius": "10px", "spacing": "email", "childern": ["<BellIcon sx={{\"transform\": \"Scale(1.5)\", \"_light\": {\"color\": \"rgba(255,255,255,0.81)\"}}}/>"]}}/>
  )
}

export function Text_cc9c0555b7fb0fc8a2e1a78b20573e2c () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"fontSize": "32px", "color": "rgba(255,255,255,0.81)"}}>
  {state__state.prompt}
</Text>
  )
}

export function Button_4e7b75e940087b75a0b01571e2a0c13c () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_3daa01a546a3dd0d0fcfe7b035a9e0bf = useCallback((_e) => addEvents([Event("state.state.setThree", {})], (_e), {}), [addEvents, Event])

  return (
    <Button colorScheme={`none`} onClick={on_click_3daa01a546a3dd0d0fcfe7b035a9e0bf} sx={{"color": "rgba(255,255,255,0.81)"}}>
  <Text sx={{"fontSize": "10px"}}>
  {`3x`}
</Text>
</Button>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_054be72e0ea98018059eac5951b3d7a7/>
  <VStack sx={{"width": "100%", "display": "flex", "justifyContent": "center", "alignItems": "center", "height": "100vh", "paddingBottom": "80px"}}>
  <Spacer/>
  <VStack spacing={`0`} sx={{"width": "100%", "display": "flex", "justifyContent": "center", "alignItems": "center"}}>
  <HStack>
  <Text_cc9c0555b7fb0fc8a2e1a78b20573e2c/>
  <Divider orientation={`vertical`} sx={{"@keyframes blink": {"0%": {"opacity": "0"}, "50%": {"opacity": "1"}, "100%": {"opacity": "0"}}, "animation": "blink 0.9s infinite", "height": "4em", "transform": "translateX(5px)"}}/>
</HStack>
</VStack>
  <Divider sx={{"height": "2em", "opacity": "0"}}/>
  <Hstack_7614b434ca96b9d25772cbb7cf14b553/>
  <VStack spacing={`0`}>
  <Text sx={{"_light": {"color": "rgba(255,255,255,0.81)"}, "fontSize": "14px"}}>
  {`Change your layout here`}
</Text>
  <HStack spacing={`0`}>
  <Button_fdbc1ec9455adcea88b642b1ffa00f0f/>
  <Button_cbb2ea6934937391e2a6f6318c8d2b6c/>
  <Button_4e7b75e940087b75a0b01571e2a0c13c/>
</HStack>
</VStack>
</VStack>
  <NextHead>
  <title>
  {`Nextpy App`}
</title>
  <meta content={`A Nextpy app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
