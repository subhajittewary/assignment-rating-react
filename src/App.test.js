import { render } from "@testing-library/react"
import App from "./App"

describe("App Component", ()=>{
    test("should cover rendering the application", () => {
        render(<App/>)
    })
})