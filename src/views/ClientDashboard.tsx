import { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import AppSearch from '../components/AppSearch'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
// import UploadOffer from '../views/UploadOffer'

import edit from '../assets/img/edit.svg'
import download from '../assets/img/download.svg'

const Wrapper = styled.div`
  width: 100%;
  min-height: 500px;
  display: grid;
  grid-template-columns: 300px auto;
`

const DashboardWrapper = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
`
const Header = styled.h1`
  font-size: 30px;
  font-weight: 500;
  align-self: flex-start;
  margin-left: 50px;
`
const Offer = styled.div`
  width: 800px;
  min-height: 100px;
  border: 1px solid black;
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
const OfferHeader = styled.div`
  display: flex;
  flex-direction: column;
  & > h1 {
    font-size: 25px;
    font-weight: 500;
    margin: 10px;
  }
  & > p {
    font-size: 15px;
    margin: 10px;
    margin-top: 0;
    color: gray;
  }
`
const OfferActions = styled.div``
const OfferStats = styled.div``

interface ButtonType {
  color?: String
}
const Button = styled('button')<ButtonType>`
  width: 35px;
  height: 35px;
  transition: all 0.3s;
  border: none;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  margin: 10px;
  ${(props) => `background-color: ${props.color}`}
`

const ClientDashboard = () => {
  const history = useHistory()
  const [myOffers, setMyOffers] = useState<any[]>([
    {
      description:
        'Minions ipsum potatoooo hahaha ti aamoo! Poulet tikka masala. Butt para tú me want bananaaa! Belloo! Potatoooo. Hana dul sae jeje chasy bee do bee do bee do. Para tú poopayee baboiii chasy. Potatoooo chasy jeje po kass. Gelatooo me want bananaaa! Uuuhhh daa. Poulet tikka masala wiiiii ti aamoo! Jiji tulaliloo wiiiii hahaha baboiii underweaaar.',
      imgLink: ['1.jpg', '2.jpg'],
      title: 'Pierwsza oferta',
      _id: '1',
      filesReceived: 10,
      fileCount: 1000,
      filesAccepted: 3,
    },
    {
      description:
        'Minions ipsum potatoooo hahaha ti aamoo! Poulet tikka masala. Butt para tú me want bananaaa! Belloo! Potatoooo. Hana dul sae jeje chasy bee do bee do bee do. Para tú poopayee baboiii chasy. Potatoooo chasy jeje po kass. Gelatooo me want bananaaa! Uuuhhh daa. Poulet tikka masala wiiiii ti aamoo! Jiji tulaliloo wiiiii hahaha baboiii underweaaar.',
      imgLink: ['1.jpg', '2.jpg'],
      title: 'Pierwsza oferta',
      _id: '2',
      filesReceived: 204,
      fileCount: 1000,
      filesAccepted: 100,
    },
  ])
  useEffect(() => {
    axios
      .get('http://localhost:5000/client/getAllOffers')
      .then((offers: any) => {
        setMyOffers(offers)
      })
      .catch((err) => {
        // alert(err)
        // setMyOffers([])
      })
      .finally(() => {
        const x = myOffers
        x.forEach((e) => {
          e.shortDesc = e.description.slice(0, 50) + '...'
        })
        console.log(x)
        setMyOffers([...x])
      })
  }, [])

  const editOffer = (index: number) => {
    const offer = btoa(JSON.stringify(myOffers[index]))
    history.push('/app/editOffer/' + offer)
  }
  const downloadFiles = async (index: number) => {
    const result = await axios.get(
      'http://localhost:5000/client/downloadFiles/' +
        myOffers[index]._id,
    )
    if (result.status == 200 && result.data.durl) {
      axios
        .get(result.data.durl, {
          headers: { responseType: 'blob' },
        })
        .then(({ data }) => {
          const downloadUrl = window.URL.createObjectURL(
            new Blob([data]),
          )

          const link = document.createElement('a')

          link.href = downloadUrl

          link.setAttribute('download', 'files.zip') //any other extension

          document.body.appendChild(link)

          link.click()

          link.remove()
        })
        .catch((err) => alert(err))
    } else console.log(result.data)
  }

  return (
    <>
      <AppSearch />
      <Wrapper>
        <Sidebar
          items={[
            { label: 'Home', isFocus: true, link: '/' },
            { label: 'Jobs', link: '/jobs' },
            { label: 'Earnings', link: 'earnings' },
            { label: 'Settings', link: '' },
          ]}
        />
        <DashboardWrapper>
          <Header>My Offers:</Header>
          {myOffers.map((e, i) => {
            return (
              <Offer key={i}>
                <OfferHeader>
                  <h1>{e.title}</h1>
                  <p>{e.shortDesc}</p>
                </OfferHeader>
                <OfferStats>
                  <p>
                    Files received: {e.filesReceived}/
                    {e.fileCount}
                  </p>
                  <p>
                    Files accepted: {e.filesAccepted}/
                    {e.fileCount}
                  </p>
                </OfferStats>
                <OfferActions>
                  <Button
                    onClick={() => editOffer(i)}
                    color={'white'}
                  >
                    <img
                      src={edit}
                      alt={'edit offer'}
                    ></img>
                  </Button>
                  <Button
                    onClick={() => downloadFiles(i)}
                    color={'white'}
                  >
                    <img
                      src={download}
                      alt={'download files'}
                    ></img>
                  </Button>
                </OfferActions>
              </Offer>
            )
          })}
        </DashboardWrapper>
      </Wrapper>
      <Footer />
    </>
  )
}

export default ClientDashboard
