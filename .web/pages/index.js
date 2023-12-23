

import { Fragment, useCallback, useContext } from "react"
import { Container_38be8e7cb0ebb76eae4bf7efac203adc, Container_d01bd1ee758644838693c75dd790bb4b, Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Container, Divider, HStack, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event } from "/utils/state"
import NextHead from "next/head"



export function Text_cc9c0555b7fb0fc8a2e1a78b20573e2c () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"fontSize": "32px", "color": "rgba(255,255,255,0.81)"}}>
  {state__state.prompt}
</Text>
  )
}

export function Container_4ff23635d9b9b24c8ad4e86af15401b2 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf3db2764e74ca232f8b7c9ca3c8344d = useCallback((_e) => addEvents([Event("state.state.emptyFunction", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_cf3db2764e74ca232f8b7c9ca3c8344d} sx={{"width": "5em", "height": "5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double gray", "cursor": "pointer", "borderRadius": "10px", "childern": ["<EmailIcon sx={{\"transform\": \"Scale(1.5)\", \"_light\": {\"color\": \"rgba(255,255,255,0.81)\"}}}/>"]}}/>
  )
}

export function Container_9abdbdf3ded965e2af5cd525efde9540 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf3db2764e74ca232f8b7c9ca3c8344d = useCallback((_e) => addEvents([Event("state.state.emptyFunction", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_cf3db2764e74ca232f8b7c9ca3c8344d} sx={{"width": "5em", "height": "10.5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double orange", "cursor": "pointer", "borderRadius": "10px", "childern": ["<EmailIcon sx={{\"transform\": \"Scale(1.75)\", \"_light\": {\"color\": \"rgba(255,255,255,0.81)\"}}}/>"]}}/>
  )
}

export function Container_70009479ee7e57d268635c43bde97eb3 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf3db2764e74ca232f8b7c9ca3c8344d = useCallback((_e) => addEvents([Event("state.state.emptyFunction", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_cf3db2764e74ca232f8b7c9ca3c8344d} sx={{"width": "10.5em", "height": "5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double purple", "cursor": "pointer", "borderRadius": "10px", "childern": ["<TimeIcon sx={{\"transform\": \"Scale(1.75)\", \"_light\": {\"color\": \"rgba(255,255,255,0.81)\"}}}/>"]}}/>
  )
}

export function Container_c3b633bdadb29c0c3bc78e8f0316ddee () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf3db2764e74ca232f8b7c9ca3c8344d = useCallback((_e) => addEvents([Event("state.state.emptyFunction", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_cf3db2764e74ca232f8b7c9ca3c8344d} sx={{"width": "10.5em", "height": "10.5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double gray", "cursor": "pointer", "borderRadius": "10px", "childern": ["<TimeIcon sx={{\"transform\": \"Scale(4)\", \"_light\": {\"color\": \"rgba(255,255,255,0.81)\"}}}/>"]}}/>
  )
}

export function Vstack_03331cf0e62d2182011c86067e7ec19f () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <VStack spacing={state__state.leftSpacing} sx={{"transition": "all 550ms ease"}}>
  <HStack>
  <VStack>
  <Container_38be8e7cb0ebb76eae4bf7efac203adc/>
  <Container_c2a762ae0d485239a076c5f068d63573/>
</VStack>
  <Container_eb52a9116c53526c071c4a0b47f20608/>
</HStack>
  <Container_c3b633bdadb29c0c3bc78e8f0316ddee/>
</VStack>
  )
}

export function Container_eb52a9116c53526c071c4a0b47f20608 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf3db2764e74ca232f8b7c9ca3c8344d = useCallback((_e) => addEvents([Event("state.state.emptyFunction", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_cf3db2764e74ca232f8b7c9ca3c8344d} sx={{"width": "5em", "height": "10.5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double orange", "cursor": "pointer", "borderRadius": "10px", "childern": ["<CalendarIcon sx={{\"transform\": \"Scale(1.75)\", \"_light\": {\"color\": \"rgba(255,255,255,0.81)\"}}}/>"]}}/>
  )
}

export function Container_c2a762ae0d485239a076c5f068d63573 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf3db2764e74ca232f8b7c9ca3c8344d = useCallback((_e) => addEvents([Event("state.state.emptyFunction", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_cf3db2764e74ca232f8b7c9ca3c8344d} sx={{"width": "5em", "height": "5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double teal", "cursor": "pointer", "borderRadius": "10px", "childern": ["<LinkIcon sx={{\"transform\": \"Scale(1.5)\", \"_light\": {\"color\": \"rgba(255,255,255,0.81)\"}}}/>"]}}/>
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
  <HStack>
  <Vstack_03331cf0e62d2182011c86067e7ec19f/>
  <VStack sx={{"transition": "all 550ms ease"}}>
  <HStack>
  <VStack>
  <Container_d01bd1ee758644838693c75dd790bb4b/>
  <Container_38be8e7cb0ebb76eae4bf7efac203adc/>
  <Container_d01bd1ee758644838693c75dd790bb4b/>
</VStack>
  <VStack>
  <Container_4ff23635d9b9b24c8ad4e86af15401b2/>
  <Container_9abdbdf3ded965e2af5cd525efde9540/>
</VStack>
</HStack>
  <Container_70009479ee7e57d268635c43bde97eb3/>
</VStack>
</HStack>
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
