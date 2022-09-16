import React from "react"
export default function HTMLOutput(props: { htmlOutput: string[] }) {
    return <div
        dangerouslySetInnerHTML={{
            __html: props.htmlOutput.join("\n")
        }} />
}