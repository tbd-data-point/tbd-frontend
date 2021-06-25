import AppSearch from '../components/AppSearch'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

import UploadBlock from '../components/UploadInlineBlock'
import TaggedInput from '../components/Tagged-input'

const Wrapper = styled.div`
  width: 100%;
  min-height: 500px;
  display: grid;
  grid-template-columns: 300px auto;
`

const Content = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  min-height: 900px;
  margin-bottom: 100px;
`
const KeywrodsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: absolute;
  top: 50%;
`
// const KeywordTile = styled.div`
//   margin: 2px;
// `

const ErrorMessage = styled.span`
  color: red;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;

  & > * {
    width: 100%;
    margin-top: 10px;
  }

  & > label {
    font-size: 22px;
    font-weight: 500;
    //transform: translateY(150%) translateX(2%);
    pointer-events: none;
    transition: all 0.05s ease-in;
  }

  & > :not(label) {
    padding: 10px;
    font-size: 16px;
    font-family: Sans-serif;
    letter-spacing: 1px;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
  }

  & > input,
  & > textarea,
  & > select {
    border: 1px solid black;
    border-radius: 0;
  }

  & > input:focus,
  & > textarea:focus {
    outline: none;
  }

  &.buttons {
    justify-content: flex-end;
    flex-direction: row;
  }
  &.fileType > *,
  &.keywords > * {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  &.keywords > div {
    position: relative;
    padding: 0;
  }
  &.pricing > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  &.pricing > div > * {
    margin-left: 20px;
    font-weight: 100;
  }
`

const Button = styled.button<ButtonStyled>`
  margin-left: 35px;
  font-size: 15px;
  width: 110px;
  height: 35px;
  border: 1px solid black;
  border-radius: 1px;
  box-shadow: 0px 1px 4px 0.1px gray;
  transition: 0.1s all;
  &:hover {
    transform: scale(1.005);
    cursor: pointer;
  }
  ${(props) =>
    props.upload &&
    `
            background-color: #04383b;
            color: whitesmoke;
        `};

  &:focus {
    outline: none;
  }
`
type Section = {
  name?: string
}

interface ButtonStyled {
  upload?: boolean
}

type FormData = {
  title: string
  description: string
  files: any
  fileType: string
  fileCount: number
  keywords: string[]
}

type CustomError = {
  files: number | null | string
  tags: number | null | string
}

const UploadOffer = () => {
  const [selectedFiles, setSelectedFiles] = useState<any>(
    [],
  )
  const [preview, setPreview] = useState<any>({
    index: null,
    src: null,
  })

  const { register, setValue, handleSubmit, errors } =
    useForm<FormData>()
  const [customError, setCustomError] =
    useState<CustomError>({ files: null, tags: null })
  const [tags, setTags] = useState<string[]>([])
  const [edit, setEdit] = useState<boolean>(false)

  interface Params {
    data: string
  }
  const data = JSON.parse(atob(useParams<Params>().data))
  const history = useHistory()

  useEffect(() => {
    if (data) {
      Object.keys(data).forEach((key, i) => {
        setValue(key, data[key])
      })
      setEdit(true)
      setTags(
        data.keywords || ['ERROR WHILE FETCHING THE OFFER'],
      )
      Promise.all(
        data.imgLink.map(async (url: string) => {
          return axios
            .get('http://localhost:5000/' + url, {
              responseType: 'blob',
            })
            .then((res) => res.data)
        }),
      )
        .then((files) => {
          setSelectedFiles(files)
        })
        .catch((err) => {
          setSelectedFiles([])
          setCustomError(
            Object.assign(customError, {
              files: 'Error while fetching the files',
            }),
          )
        })
    }
  }, [])

  const onSubmit = handleSubmit(
    ({ title, description, fileType, fileCount }) => {
      const dataToUpload = new FormData()
      dataToUpload.append('title', title)
      dataToUpload.append('description', description)
      dataToUpload.append('fileType', fileType)
      dataToUpload.append('fileCount', fileCount.toString())

      if (tags.length === 0)
        setCustomError(
          Object.assign(customError, {
            tags: 'Please select at least one keyword',
          }),
        )
      else {
        dataToUpload.append('keywords', tags.toString())
      }

      if (selectedFiles.length === 0)
        setCustomError(
          Object.assign(customError, {
            files:
              'Please select at least one file of a proper type',
          }),
        )
      else {
        selectedFiles.forEach((e: any) => {
          dataToUpload.append(e.name, e)
        })
      }

      axios
        .post(
          'http://localhost:5000/offers/add',
          dataToUpload,
        )
        .then((suc) => console.log(suc))
        .catch((err) => console.log(err))
    },
  ) // firstName and lastName will have correct type

  const animateLabel = (e: any) => {
    if (e.type == 'blur') {
      //e.target.previousElementSibling.style.transform = "translateX(2%) translateY(150%)"
    } else {
      //e.target.previousElementSibling.style.transform = "translateX(0) translateY(0)"
    }
  }

  return (
    <>
      <AppSearch></AppSearch>
      <Wrapper>
        <Sidebar
          items={[
            { label: 'Home', link: '/' },
            { label: 'Jobs', isFocus: true, link: '/jobs' },
            { label: 'Earnings', link: 'earnings' },
            { label: 'Settings', link: '' },
          ]}
        ></Sidebar>
        <Content>
          <Form onSubmit={onSubmit}>
            <Section>
              <label>1. Offer Title</label>
              <input
                name="title"
                ref={register({
                  required: {
                    value: true,
                    message: 'Title is required',
                  },
                  maxLength: {
                    value: 100,
                    message: 'Your title is too long!',
                  },
                  minLength: {
                    value: 5,
                    message: 'Your title is too short!',
                  },
                })}
                onBlur={animateLabel}
                onFocus={animateLabel}
                placeholder={"Set your offer's title..."}
                autoComplete={'off'}
              />
              <ErrorMessage>
                {errors.title?.message}
              </ErrorMessage>
            </Section>
            <Section className={'keywords'}>
              <label>2. Keywords</label>
              Specify keywords to help our search engine
              position your offer
              <TaggedInput
                tags={tags}
                setTags={setTags}
              ></TaggedInput>
              <ErrorMessage>
                {' '}
                {customError.tags &&
                  'Set at least one tag!'}
              </ErrorMessage>
            </Section>
            <Section className={'fileType'}>
              <label>3. What are you looking for?</label>
              Data type
              <select
                name={'fileType'}
                defaultValue={'photo'}
                ref={register({
                  required: {
                    value: true,
                    message: 'Choose a file type!',
                  },
                })}
              >
                <option value={'photo'}>Image</option>
                <option value={'audio'}>Audio</option>
                <option value={'csv'}>CSV</option>
                <option value={'txt'}>Text</option>
              </select>
              How many?
              <input
                name={'fileCount'}
                type={'number'}
                defaultValue={10}
                ref={register({
                  required: {
                    value: true,
                    message:
                      'Specify how many files you need!',
                  },
                })}
              ></input>
            </Section>
            <Section>
              <label>4. Detailed Description</label>
              <textarea
                rows={8}
                name="description"
                ref={register({
                  required: {
                    value: true,
                    message: 'Description is required',
                  },
                  maxLength: {
                    value: 500,
                    message:
                      'Please short a bit your description',
                  },
                  minLength: {
                    value: 100,
                    message:
                      'Please provide Data Miners with a long enough description',
                  },
                })}
                onBlur={animateLabel}
                onFocus={animateLabel}
                placeholder={
                  'Add a detailed description of your offer...'
                }
                autoComplete={'off'}
              ></textarea>
              <ErrorMessage>
                {errors.description?.message}
              </ErrorMessage>
            </Section>
            <Section>
              <label>5. Sample files for Data Miners</label>
              <UploadBlock
                selectedFiles={selectedFiles}
                setSelectedFiles={setSelectedFiles}
                preview={preview}
                setPreview={setPreview}
                data={{
                  width: '100%',
                  height: '200px',
                }}
              ></UploadBlock>
              <ErrorMessage>
                {customError.files}
              </ErrorMessage>
            </Section>
            {!edit ? (
              <Section className={'pricing'}>
                <label>6. Pricing</label>
                <div>
                  <input type={'checkbox'} />
                  <span>Regular</span>
                </div>
                <div>
                  <input type={'checkbox'} />
                  <span>PRO</span>
                </div>
                <div>
                  <input type={'checkbox'} />
                  <span>Money GOD</span>
                </div>
              </Section>
            ) : null}
            {!edit ? (
              <Section className={'buttons'}>
                <Button>Cancel</Button>
                <Button upload type={'submit'}>
                  Submit
                </Button>
              </Section>
            ) : (
              <Section className={'buttons'}>
                <Button
                  onClick={() => {
                    history.push('/app/clientdashboard')
                  }}
                >
                  Cancel
                </Button>
                <Button upload type={'submit'}>
                  Save
                </Button>
              </Section>
            )}
          </Form>
        </Content>
      </Wrapper>
      <Footer></Footer>
    </>
  )
}

export default UploadOffer
