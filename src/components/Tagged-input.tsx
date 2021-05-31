import styled from "styled-components"
import { useState, useRef } from "react"
import { string } from "yup/lib/locale"

const TaggedInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    jutify-content: flex-start;
    align-items: flex-start;
    width: 100%;
`

const InputWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
`

const InputBcg = styled.input`
    padding: 13px;
    font-size: 16px;
    font-family: Sans-serif;
    letter-spacing: 1px;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
    border: 1px solid black;
    border-radius: 0;
    width: 100%;
    &:focus {
        outline: none;
    }

    pointer-events: none;
`

const InputForeground = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
`

const Input = styled(InputBcg)`
    pointer-events: auto;
    background: none;
    border: none;
    width: 100%;
`

const TagWrapper = styled.div`
    display: flex;
`

const Tag = styled.div`
    background-color: rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 7px;
    padding: 12px;
    border-radius: 3px;
    box-shadow: 0 0 4px 0 gray;
    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.1);
    }
    font-size: 15px;
    letter-spacing: auto;
`

const SuggestWrapper = styled.div`
    width: 60%;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.6);
    position: absolute;
    z-index: 0;
    top: 45px;
    background-color: white;
`

const Suggestion = styled.div`
    padding: 7px;
    margin: 3px;
    background-color: white;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
        text-decoration: underline;
        font-weight: 500;
    }
`

type PropsType = {
    tags: any
    setTags: any
    style?: {
        fontSize?: string
        height?: string
        width?: string
    }
}

const TaggedInput = ({ tags, setTags, style = { height: "100%", width: "100%", fontSize: "15px" } }: PropsType) => {
    const [suggestTags, setSuggestTags] = useState<string[]>([])
    const inputDOM = useRef<HTMLInputElement>(null)

    let keywords = [
        "artificial inteligence",
        "ai",
        "photo",
        "text",
        "animals",
        "urban",
        "datascience",
        "people",
        "activity",
        "thing",
    ]

    const handleKeywords = (e: any) => {
        if (e.type == "blur") e.target.value = ""
        if (e.target.value.length > 0) {
            let matches = keywords.filter((element) => {
                return !tags.includes(element)
            })
            if (matches.length == 0) {
                matches = matches.filter((element) => {
                    return element.match(e.target.value)
                })
            } else {
                matches = matches.filter((element) => {
                    return element.startsWith(e.target.value)
                })
            }
            setSuggestTags(matches)
        } else {
            setSuggestTags([])
        }
    }
    const addTag = (e: any) => {
        setTags((tagList: any) => [...tagList, e.target.innerHTML])
        setSuggestTags([])
        if (inputDOM.current) {
            inputDOM.current.value = ""
            inputDOM.current.focus()
        }
    }

    return (
        <>
            <TaggedInputWrapper>
                <InputWrapper>
                    <InputBcg style={{ width: style.width, height: style.height, fontSize: style.fontSize }} />
                    <InputForeground>
                        <TagWrapper>
                            {tags.map((e: string, index: number) => {
                                return (
                                    <Tag
                                        key={index}
                                        onClick={() =>
                                            setTags((tagList: string[]) =>
                                                tagList.filter((e: string, i: number) => {
                                                    return i != index
                                                })
                                            )
                                        }>
                                        {e}
                                    </Tag>
                                )
                            })}
                        </TagWrapper>
                        <Input
                            onBlur={handleKeywords}
                            onChange={handleKeywords}
                            ref={inputDOM}
                            placeholder={tags.length == 0 ? "Start typing your keywords..." : ""}
                            style={{ fontSize: style.fontSize }}
                        />
                    </InputForeground>
                </InputWrapper>

                <SuggestWrapper>
                    {suggestTags.slice(0, 8).map((e) => {
                        return <Suggestion onMouseDown={addTag}>{e}</Suggestion>
                    })}
                </SuggestWrapper>
            </TaggedInputWrapper>
        </>
    )
}

export default TaggedInput
