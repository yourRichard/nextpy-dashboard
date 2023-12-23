"""Welcome to Nextpy! This file outlines the steps to create a basic app."""

import nextpy as xt
from .style import css,blink,dimensions
from .state import State
from .components import Box

def index() -> xt.Component:
    return xt.vstack(
        xt.spacer(),
        xt.vstack(
            xt.hstack(xt.text(
                State.prompt,
                font_size = "32px",
                color = "rgba(255,255,255,0.81)",
            ),
            xt.divider(
                orientation="vertical",
                height = "4em",
                transform = "translateX(5px)",
                style=blink
            ),
        ),
            spacing="0",
            style = css["content"],
        ),
        xt.divider(height = "2em",opacity="0"),
        xt.hstack(
            xt.vstack(
                xt.hstack(
                    xt.vstack(
                        Box(dimensions["square"],"red","1.5","email"),
                        Box(dimensions["square"],"teal","1.5","link"),
                        ),
                    Box(
                        dimensions["rectangle"],
                        "orange",
                        "1.75",
                        "calendar",
                )
                    ),
                Box(
                    dimensions["custom_1"],
                    "gray",
                    "4",
                    "time",
                ),
                transition = "all 550ms ease",
                spacing = State.leftSpacing,
            ),
            xt.vstack(
                xt.hstack(
                    xt.vstack(
                        Box(dimensions["square"],"teal","1.5","email"),
                        Box(dimensions["square"],"red","1.5","email"),
                        Box(dimensions["square"],"teal","1.5","email"),
                    ),
                    xt.vstack(
                        Box(dimensions["square"],"gray","1.5","email"),
                        Box(dimensions["rectangle"],"orange","1.75","email"),
                        ),
                ),
                Box(
                    dimensions["custom_2"],
                    "purple",
                    "1.75",
                    "time",
                ),
                transition = "all 550ms ease",
                
            ),
            
        ),
        style = css["workSpace"],
        padding_bottom = "80px"
    )


# Add state and page to the app.
app = xt.App(style=css["app"])
app.add_page(index,on_load = State.emptyFunction)
app.compile()
