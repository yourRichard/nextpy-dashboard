

import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import { Container, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { getEventURL } from "/utils/state.js"




export function Fragment_054be72e0ea98018059eac5951b3d7a7 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getEventURL().href}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Container_c2c13def0862629a7de8f0f924dae8f1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf3db2764e74ca232f8b7c9ca3c8344d = useCallback((_e) => addEvents([Event("state.state.emptyFunction", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_cf3db2764e74ca232f8b7c9ca3c8344d} sx={{"width": "5em", "height": "5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double red", "cursor": "pointer", "borderRadius": "10px", "spacing": "email", "childern": ["<BellIcon sx={{\"transform\": \"Scale(1.5)\", \"_light\": {\"color\": \"rgba(255,255,255,0.81)\"}}}/>"]}}/>
  )
}

export function Container_dc2d5aca502c9ac8608835b2ffc0d580 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf3db2764e74ca232f8b7c9ca3c8344d = useCallback((_e) => addEvents([Event("state.state.emptyFunction", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_cf3db2764e74ca232f8b7c9ca3c8344d} sx={{"width": "5em", "height": "5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double teal", "cursor": "pointer", "borderRadius": "10px", "spacing": "email", "childern": ["<BellIcon sx={{\"transform\": \"Scale(1.5)\", \"_light\": {\"color\": \"rgba(255,255,255,0.81)\"}}}/>"]}}/>
  )
}
