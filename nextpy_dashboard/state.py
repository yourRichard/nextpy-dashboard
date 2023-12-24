import nextpy as xt
import asyncio

class State(xt.State):
    prompt:str = ""
    leftSpacing: str = "0.5rem",
    spacing: str = "0.5rem"

    def setFull(self):
        self.spacing = "0.5rem",
        self.leftSpacing = "0.5rem"

    def setHalf(self):
        self.spacing = "5rem",
        self.leftSpacing = "0.5rem"

    def setThree(self):
        self.spacing = "5rem",
        self.leftSpacing = "4rem"


    def emptyFunction(self):
        pass
    

    async def greetOnLoad(self):
        self.prompt = ""
        sent: str = "Get started by clicking a box..."
        async for _ in self.typeWriterEffect(sent,True,3):
            yield

    async def typeWriterEffect(self,string,erase,pause=2):
        for char in list(string):
            await asyncio.sleep(0.05),
            self.prompt += char
            yield

        if erase:
            await asyncio.sleep(pause)
            for char in list(string):
                await asyncio.sleep(0.05)
                self.prompt = self.prompt[:-1]
                yield